import * as React from 'react';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

export default function BasicAlerts(props) {
  return (
    <Stack sx={{ width: '90%', m:6, display:"flex", justifyContent:"center", alignItems:"center" }} >
      <Alert severity="error">Oh no... {props.error}</Alert>
    </Stack>
  );
}
