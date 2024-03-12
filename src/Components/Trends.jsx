import styled from '@emotion/styled';
import {  Paper, Stack } from '@mui/material'
import React from 'react'

const DemoPaper = styled(Paper)(({ theme }) => ({
    width: 130,
    height: 60,
    padding: theme.spacing(2),
    ...theme.typography.body2,
    textAlign: 'center',
  }));

const Trends = () => {
  return (
    <Stack direction="row"   sx={{ marginTop:1 }}  >
      <Stack direction="row"spacing={2} >
      <DemoPaper square={false}>rounded corners</DemoPaper>
      
      </Stack>
    </Stack>
  )
}

export default Trends