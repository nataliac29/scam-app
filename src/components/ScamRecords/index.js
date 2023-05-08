import React, { useState, useMemo } from "react";
import {collection, getDocs} from 'firebase/firestore'
import { db } from '../../utils/firebase'
import MaterialReactTable from 'material-react-table';
import { Typography, Box } from '@mui/material';
import Button from '@mui/material/Button';
import AddToPhotosIcon from '@mui/icons-material/AddToPhotos';
import Collapse from '@mui/material/Collapse';
import List from '@mui/material/List';
import { TransitionGroup } from 'react-transition-group';
import AddScam from './AddScam.js'



const Records = () => {

  //data and fetching state
  const [messages, setMessages] = useState([]);
  const [checked, setChecked] = useState(false);
  const containerRef = React.useRef(null);

  const [showForm, setShowForm] = useState(["base"]);

  // Concept: scam text
  const columns = useMemo(
    () => [
      {
        accessorKey: 'data.scam_type',
        header: 'Scam Type',
      }, 
      {
        accessorKey: 'data.message', //normal accessorKey
        header: 'Scam Message',
        enableClickToCopy: true,

      },
      {
        accessorKey: 'data.sender',
        header: 'Sender',
      },
      {
        accessorKey: 'data.uploaded_at',
        header: 'Date Sent',
      },
    ],
    [],
  );

  const handleAddForm = () => {
    if (showForm.length === 1) {
      setShowForm((prev) => ['form', ...prev]);
    }
  };

  const handleRemoveForm = () => {
    setShowForm(["base"]);
  };



  // for animation
  function renderItem({item}) {
    if (item === 'base') {
      return (
        <MaterialReactTable
          columns={columns}
          data={messages}
          initialState={{ showColumnFilters: true, density: 'spacious' }}

          renderTopToolbarCustomActions={() => (
            <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', width: '100%' }}>
              <Typography variant="h4" sx={{ margin: '20px', fontSize: '2rem', color: '#4b86f2', weight: 'bold' }}>Scam Messages</Typography>
              <Button variant="contained" sx={{ height: '50%' }} endIcon={<AddToPhotosIcon fontSize="small" />} onClick={handleAddForm} disabled={showForm.length === 2}>
                Add scam
              </Button>
            </Box>
          )} />
      )
    }
      return (
        <>
        <AddScam />
          <Button onClick={handleRemoveForm} variant="outlined" style={{margin: '10px'}}>CLOSE</Button>
        </>
    )
  } 

  const messageCollectionRef = collection(db, 'texts');

  getDocs(messageCollectionRef).then(response => {
    const data = response.docs.map(doc => ({
      data: doc.data(),
      id: doc.id,
    }))
    setMessages(data);
  }).catch((e) => console.log(e))
  


  return (
    <Box sx={{ mt: 1 }}>
      <List>
        <TransitionGroup>
          {showForm.map((item) => (
              <Collapse key={item}>
                {renderItem({item})}
              </Collapse>
              ))}
        </TransitionGroup>
      </List>
    </Box>
  )
}


export default Records;




// Version using React useQuery

// const SpamRecords = () => {

//   console.log("here");
//   //data and fetching state
//   const [messages, setMessages] = useState([]);

//   const [columnFilters, setColumnFilters] = useState([]);
//   const [globalFilter, setGlobalFilter] = useState('');
//   const [sorting, setSorting] = useState([]);
//   const [pagination, setPagination] = useState({
//     pageIndex: 0,
//     pageSize: 10,
//   });
//   const messageCollectionRef = collection(db, 'texts');

//   // console.log("data:" + messages)

//   const { data, isError, isFetching, isLoading, refetch } = useQuery({
//     queryKey: [
//       'table-data',
//       columnFilters, //refetch when columnFilters changes
//       globalFilter, //refetch when globalFilter changes
//       pagination.pageIndex, //refetch when pagination.pageIndex changes
//       pagination.pageSize, //refetch when pagination.pageSize changes
//       sorting, //refetch when sorting changes
//     ],
//     queryFn: async () => {
//       const response = await getDocs(messageCollectionRef);
//       const data = response.docs.map(doc => ({
//         data: doc.data(),
//         id: doc.id,
//       }))
//       return data;
//     },
//     keepPreviousData: true,
//   });


//   const columns = useMemo(
//     () => [
//       {
//         accessorKey: 'data.message', //normal accessorKey
//         header: 'Date Message Sent',
//       },
//       {
//         accessorKey: 'data.sender',
//         header: 'Sender',
//       },
//     ],
//     [],
//   );

//   return (
//     <>
//       <h1>Spam Records</h1>
//       <MaterialReactTable columns={columns} data={data?.data ?? []} />
//     </>

//   )
// }

// const queryClient = new QueryClient();

// const ExampleWithReactQueryProvider = () => (
//   <QueryClientProvider client={queryClient}>
//     <SpamRecords />
//   </QueryClientProvider>
// );

// export default ExampleWithReactQueryProvider;













// {/* <MaterialReactTable
//   columns={columns}
//   data={data?.data ?? []} //data is undefined on first render
//   initialState={{ showColumnFilters: true }}
//   manualFiltering
//   manualPagination
//   manualSorting
//   muiToolbarAlertBannerProps={
//     isError
//       ? {
//         color: 'error',
//         children: 'Error loading data',
//       }
//       : undefined
//   }
//   onColumnFiltersChange={setColumnFilters}
//   onGlobalFilterChange={setGlobalFilter}
//   onPaginationChange={setPagination}
//   onSortingChange={setSorting}
//   renderTopToolbarCustomActions={() => (
//     <Tooltip arrow title="Refresh Data">
//       <IconButton onClick={() => refetch()}>
//         <RefreshIcon />
//       </IconButton>
//     </Tooltip>
//   )}
//   rowCount={data?.meta?.totalRowCount ?? 0}
//   state={{
//     columnFilters,
//     globalFilter,
//     isLoading,
//     pagination,
//     showAlertBanner: isError,
//     showProgressBars: isFetching,
//     sorting,
//   }}
// />
//     </> */}


// // //if you want to avoid useEffect, look at the React Query example instead
// // useEffect(() => {
// //   console.log("here pt 2");
// //   const fetchData = async () => {
// //     if (!messages.length) {
// //       setIsLoading(true);
// //     } else {
// //       setIsRefetching(true);
// //     }
// //     console.log("here pt1");
// //     try {
// //       const response = await getDocs(messageCollectionRef);
// //       const json = await response.json();
// //       console.log("here");
// //       console.log(json)
// //       const messages = json.docs.map(doc => ({
// //         data: doc.data(),
// //         id: doc.id,
// //       }))
// //       setMessages(messages);
// //       setRowCount(messages.length());
// //     } catch (error) {
// //       setIsError(true);
// //       console.error(error);
// //       return;
// //     }
// //     setIsError(false);
// //     setIsLoading(false);
// //     setIsRefetching(false);
// //   };
// //   fetchData();
// //   // eslint-disable-next-line react-hooks/exhaustive-deps
// // }, [
// //   columnFilters,
// //   globalFilter,
// //   pagination.pageIndex,
// //   pagination.pageSize,
// //   sorting,
// // ]);


// columns

// const columns = useMemo(
//   () => [
//     {
//       accessorKey: 'message_date', //normal accessorKey
//       header: 'Date Message Sent',
//     },
//     {
//       accessorKey: 'sender',
//       header: 'Sender',
//     },
//     {
//       accessorKey: 'message',
//       header: 'Message',
//     },
//     {
//       accessorKey: 'scam_type',
//       header: 'Scam Type',
//     },
//     {
//       accessorKey: 'associated_company', //access nested data with dot notation
//       header: 'Associated Company',
//     },
//     {
//       accessorKey: 'description',
//       header: 'Description',
//     },

//     {
//       accessorKey: 'money_lost',
//       header: 'Money Lost',
//     },
//     {
//       accessorKey: 'recipient',
//       header: 'Recipient',
//     },
//     {
//       accessorKey: 'recipient_location',
//       header: 'Recipient Location',
//     },
//     {
//       accessorKey: 'reported_bb',
//       header: 'BBB Link',
//     },
//     {
//       accessorKey: 'scam_likely',
//       header: 'Scam Likely',
//     },
//   ],
//   [],
// );