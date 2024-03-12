import React from 'react'
import { Box, Avatar, AvatarGroup, Typography} from '@mui/material'
import Conversations from './Conversations'
import Connect from './Connect'

const Rightbar = () => {
  return (
    <Box flex={2} p={2}
      sx={{ display: { xs: "none", sm: "block" } }}  >
      <Box position="fixed" sx={{marginTop:2}}>
        <Connect />
        <Conversations />
      </Box>
    </Box>
  )
}

export default Rightbar