import { Card, Divider, IconButton, InputBase, Paper } from '@mui/material'
import SendSharpIcon from '@mui/icons-material/SendSharp';

import React from 'react'

const SearchInput = () => {
  return (
    <Card sx={{marginTop:-1}}>
    <Paper
      component="form"
      sx={{ p: '2px 4px', display: 'flex', alignItems: 'center'  }}
    >
      
      
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="Write something here.."
        inputProps={{ 'aria-label': 'search google maps' }}
      />
      <Divider sx={{ height: 28, m: 0.5 }} orientation="vertical" />
      <IconButton type="button" sx={{ p: '10px' }} aria-label="search">
        
      <SendSharpIcon fontSize="inherit" />
    </IconButton>
      
    </Paper>
    </Card>
  )
}

export default SearchInput