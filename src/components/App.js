import React from 'react';
import { Box, Button, Grid, TextField } from '@mui/material';

function App() {
  const [name, setName] = React.useState('');
  const [age, setAge] = React.useState();
  const [more, setMore] = React.useState([1]);

  function handle(index) {
    const newarr = [...more];
    newarr.splice(index, 1);
    setMore(newarr);
  }

  function addMore() {
    setMore([...more, 1]);
  }

  function handleName(e) {
    setName(e.target.value);
  }

  function HandleNum(e) {
    setAge(e.target.value);
  }

  function handleSubmit() {
    const obj = {
      Name: name,
      Age: age
    };

    console.log(obj);
  }

  return (
    <Grid container justifyContent="center">
      <Grid item xs={12} lg={6}>
        <Box p={4} bgcolor="pink" borderRadius={10}>
          {more.map((item, index) => (
            <Box key={index}>
              <TextField
                sx={{ marginBottom: '10px' }}
                label="Name"
                variant="outlined"
                size="small"
                onChange={handleName}
                value={name}
                name="name"
              />
              <TextField
                sx={{ marginBottom: '5px' }}
                label="Age"
                variant="outlined"
                size="small"
                type="number"
                onChange={HandleNum}
                value={age}
                name="age"
              />
              <Button
                sx={{ marginBottom: '5px' }}
                variant="contained"
                size="small"
                onClick={() => handle(index)}
              >
                Remove
              </Button>
            </Box>
          ))}
          <Box>
            <Button variant="contained" size="small" onClick={addMore}>
              Add More...
            </Button>
            <Button
              sx={{ marginLeft: '5px' }}
              variant="contained"
              size="small"
              onClick={handleSubmit}
            >
              Submit
            </Button>
          </Box>
        </Box>
      </Grid>
    </Grid>
  );
}

export default App;
