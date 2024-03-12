import { Avatar, AvatarGroup, Box, Typography } from '@mui/material'
import React from 'react'

const Connect = () => {
  return (
    <Box sx={{ paddingRight:8,}} >
        
        <Typography variant="h7"  >
          Connect
        </Typography>
        <AvatarGroup max={4} sx={{marginTop:2 }}  >
          <Avatar alt="Remy Sharp" src="https://material-ui.com/static/images/avatar/1.jpg" />
          <Avatar alt="Travis Howard" src="https://material-ui.com/static/images/avatar/2.jpg" />
          <Avatar alt="Cindy Baker" src="https://material-ui.com/static/images/avatar/3.jpg" />
          <Avatar alt="Agnes Walker" src="https://material-ui.com/static/images/avatar/4.jpg" />
          <Avatar alt="Trevor Henderson" src="https://material-ui.com/static/images/avatar/5.jpg" />
        </AvatarGroup>

        
    </Box>

  )
}

export default Connect