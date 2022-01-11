import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import UserConnected from './UserConnected';

export default function PersonlStatus() {
  const [status, setStatus] = React.useState('Single');

  const handleChange = (event) => {
    setStatus(event.target.value);
    UserConnected.status = event.target.value;
  };

  return (
    <Box sx={{ width: "100%" }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Status</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={status}
          label="status"
          onChange={handleChange}
        >
          <MenuItem value={"Single"} >Single</MenuItem>
          <MenuItem value={"In a relationship"}>In a relationship</MenuItem>
          <MenuItem value={"Married"}>Married</MenuItem>
          <MenuItem value={"None of your business, moron!"}>None of your business, moron!</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}
