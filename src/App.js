import React, { useState } from "react";
import "./App.css";
import NavBar from "./components/NavBar/navbar"
import TextCheck from './components/SpamCheck'
import ExampleWithReactQueryProvider from './components/ScamRecords'
import PropTypes from 'prop-types';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    'aria-controls': `simple-tabpanel-${index}`,
  };
}

export default function App() {
  const [value, setValue] = React.useState(0);
  const [text, setText] = useState("");
  const [result, setResult] = useState("");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="App">
      <NavBar />
      <div className="header2">
        <h2> Got a suspicious text? Paste it into the tool below to dectect spam. Or, look up the number or message in our records!</h2>
      </div>
    <Box sx={{ width: '80%', alignSelf: 'center' }}>
      <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
        <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
          <Tab label="Classifier" {...a11yProps(0)} />
          <Tab label="Records" {...a11yProps(1)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0} style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
          <TextCheck text={text} setText={setText} result={result} setResult={setResult} />
      </TabPanel>
      <TabPanel value={value} index={1}>
          <ExampleWithReactQueryProvider />
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
    </Box>
    </div>
  );
}
