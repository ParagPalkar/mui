import React from 'react'
import {Box} from '@mui/material'
import Posts from './Posts'
import SearchInput from './SearchInput'
import Trends from './Trends'

const Feed = () => {
  return (
    <Box  flex={4} p={2} sx={{paddingLeft:0}} >
      <SearchInput />
        {/* <Trends /> */}
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
        <Posts />
    </Box>
  )
}

export default Feed