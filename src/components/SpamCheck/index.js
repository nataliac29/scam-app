import React, { useState } from "react";
import Divider from '@mui/material/Divider';
import CircularProgress from '@mui/material/CircularProgress';


import {
  Grid, Paper, TextArea, Header, Container, Button, InputGrid, Response, ResponseHeader, ResponseText, ResponseWhy, ResponseReasons, ResponseReason, ResponsePercentage, ButtonContainer
 } from './styles'


// const ftModel = 'ada:ft-personal-2023-04-27-01-43-07';
const ftModel = 'ada:ft-personal-2023-04-30-18-08-39'


const SpamCheck = ({text, setText, result, setResult}) => {

  const [loading, setLoading] = useState(false);
  


  const handleTextChange = (e) => {
    setText(e.target.value);
  };

  const handleSubmit = async (e) => {
    setLoading(true)
    e.preventDefault();

    // Define the API endpoint URL for the GPT-3 model
    // const endpoint = 'https://api.openai.com/v1/engines/davinci-codex/completions';
    const endpoint = 'https://api.openai.com/v1/completions';
    const reasonEndpoint = 'https://api.openai.com/v1/chat/completions';


    

    // Define the API request headers
    const headers = {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${process.env.REACT_APP_OPENAI_API_KEY}`,
    };

    // Define the API request payload with the input text
    const payload = {
      prompt: `${text}\n\n###\n\n`,
      model: ftModel,
      max_tokens: 1,
      temperature: 0,
      logprobs: 2
    };

    // const reasonPayload = {
    //   prompt: `Give multiple short reasons why you think the following text could be a scam or not a scam, with each reason seperated with a ";": ${text}. I'd like the response formatted like this: "<Reason1>; <Reason2>; <Reason3>, etc". \n\n###\n\n`,
    //   model: 'text-davinci-002',
    //   max_tokens: 200,
    // };

    // const reasonPayload = {
    //   messages: [
    //     { "role": "user", "content": `Give multiple short reasons why you think the following text could be a scam or not a scam, with each reason seperated with a ';': ${text}. I'd like the response formatted like this: <Reason1>; <Reason2>; <Reason3>, etc. \n\n###\n\n`}],
    //   model: 'gpt-3.5-turbo',
    //   max_tokens: 200,
    // };

    const reasonPayload = {
      prompt: `Give multiple short reasons why you think the following SMS text message could be a scam or not a scam, with each reason seperated with a ";": ${text}. I'd like the response formatted like this: "<Reason1>; <Reason2>; <Reason3>, etc". \n\n###\n\n`,
      model: 'text-davinci-003',
      max_tokens: 200,
    };
    // Send the API request and get the response
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(payload),
    })

    const reasonResponse = await fetch(endpoint, {
      method: 'POST',
      headers: headers,
      body: JSON.stringify(reasonPayload),
    })

    // Parse the response to get the model's output
    // const outputText = (await response.json()).choices[0].text;
    const outputText = (await response.json());
    const reasonText = (await reasonResponse.json());

    console.log("Reason: " + reasonText)
    const reason = reasonText.choices[0].text.slice(0, -1).split(";")
    const classified = outputText.choices[0].text.trim() === "ham" ? false : true
    const choice = classified ? "a scam" : "not a scam"
    const prob = (Math.exp(outputText.choices[0].logprobs.top_logprobs[0][`${classified ? " spam" : " ham"}`]) * 100).toFixed(3)
    setResult([choice, prob, reason])
    setLoading(false)

  }
  return (
    <Container>
    <Paper elevation={3}>
      <Grid container>
          <InputGrid item xs>
          <TextArea
            onChange={handleTextChange}
            placeholder="Enter your text here."
            value={text}/>
            <ButtonContainer>
              {!result ?
              <Button variant="contained" onClick={handleSubmit}>Submit</Button> :
              <Button variant="outlined" onClick={() => {
                setResult("");
                setText("");
              }}>Clear</Button>}
            </ButtonContainer>
          </InputGrid>
        <Divider orientation="horizontal" flexItem sx={{ borderRightWidth: 3 }} />
        <Grid item xs> 
          {loading ? 
              <CircularProgress style={{alignSelf: 'center'}}/>
 :
              (!result ? "You'll see the result here!" : <Response>
              <ResponseHeader>
                Results
              </ResponseHeader>
              <ResponseText>
                  We predict that this text is <ResponsePercentage>{result[0]}</ResponsePercentage>, with a likelihood of <ResponsePercentage>{result[1]}%</ResponsePercentage>
              </ResponseText>
              <ResponseWhy>Why?</ResponseWhy>
                <ResponseReasons>
                  {result[2].map((e) => (
                    <ResponseReason>
                      {e}
                    </ResponseReason>
                  ))}
                </ResponseReasons>
             </Response>
            )
        
        }
        </Grid>
      </Grid>
    </Paper>
    </Container>
  );
}

export default SpamCheck;