import { Avatar, Card, CardHeader, IconButton } from '@mui/material'
import React from 'react'
import SendSharpIcon from '@mui/icons-material/SendSharp';

const Add = () => {
  return (
    <Card sx={{margin:2}}>
        <CardHeader
        avatar={
          <Avatar aria-label="recipe">
            P
          </Avatar>
        }
        action={
          
      <IconButton aria-label="arrow" size="large">
        
      <SendSharpIcon fontSize="inherit" />
    </IconButton>
        }
        
      />
      
    </Card>
  )
}

export default Add