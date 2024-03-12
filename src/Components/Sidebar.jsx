import React from 'react'
import Home from '@mui/icons-material/Home';
import ArticleSharpIcon from '@mui/icons-material/ArticleSharp';
import GroupsSharpIcon from '@mui/icons-material/GroupsSharp';
import StoreSharpIcon from '@mui/icons-material/StoreSharp';
import GroupAddSharpIcon from '@mui/icons-material/GroupAddSharp';
import SettingsSharpIcon from '@mui/icons-material/SettingsSharp';
import HomeRepairServiceSharpIcon from '@mui/icons-material/HomeRepairServiceSharp';
import NightlightRoundSharpIcon from '@mui/icons-material/NightlightRoundSharp';
import { Box, Card, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material'

const Sidebar = ({mode,setMode}) => {
  return (
    <Box flex={1} p={2} 
      sx={{ display: { xs: "none", sm: "block" } }}>
      <Box position="fixed" >
        
        <List>
          <ListItem disablePadding>
            <ListItemButton component="a" href="#home">
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Homepage" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#pages">
              <ListItemIcon>
                <ArticleSharpIcon />
              </ListItemIcon>
              <ListItemText primary="Pages" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#groups">
              <ListItemIcon>
                <GroupsSharpIcon />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#marketplace">
              <ListItemIcon>
                <StoreSharpIcon />
              </ListItemIcon>
              <ListItemText primary="Market" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#friends">
              <ListItemIcon>
                <GroupAddSharpIcon />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#setting">
              <ListItemIcon>
                <SettingsSharpIcon />
              </ListItemIcon>
              <ListItemText primary="Setting" />
            </ListItemButton>
          </ListItem>

          <ListItem disablePadding>
            <ListItemButton component="a" href="#hire">
              <ListItemIcon>
                <HomeRepairServiceSharpIcon />
              </ListItemIcon>
              <ListItemText primary="Hire me" />
            </ListItemButton>
          </ListItem>

          
        </List>
        
      </Box>
    </Box>
  )
}

export default Sidebar