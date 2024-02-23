import '../styles/Reply.css'
// eslint-disable-next-line no-unused-vars
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Textbox() {
    return (
        <Box
          component="form"
          sx={{
            '& > :not(style)': { m: 1, width: '35ch' },
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
        </Box>
      );
}