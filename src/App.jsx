import React, { useState } from 'react'
import {Box, Stack, ThemeProvider, createTheme} from '@mui/material'
import Sidebar from './Components/Sidebar'
import Feed from './Components/Feed'
import Rightbar from './Components/Rightbar'
import Navbar from './Components/Navbar'

const App = () => {

  const [mode,setMode]= useState("dark")
  const darkTheme = createTheme({
    palette:{
      mode:mode
    }
  })

  return (
    <ThemeProvider theme={darkTheme} >
    <Box bgcolor={"background.default"} color={"text.primary"} >
      <Navbar setMode={setMode} mode={mode}/>
      <Stack direction="row" spacing={2} justifyContent="space-between" >
      <Sidebar  />
      <Feed />
      <Rightbar />
      </Stack>
    </Box>
    </ThemeProvider>
  )
}

export default App