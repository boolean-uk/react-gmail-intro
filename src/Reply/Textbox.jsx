import React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import SendButton from './SendButton';

export default function Textbox() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '35ch' },
        display: 'flex',
        flexDirection: 'column', // Arrange children in a column
        padding: '10px', // Padding to provide space around the children
        boxSizing: 'border-box', // Ensure padding and border are included in the width
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-basic"
        label="Reply"
        variant="outlined"
        multiline
        rows={4}
      />
      <SendButton />
    </Box>
  );
}
