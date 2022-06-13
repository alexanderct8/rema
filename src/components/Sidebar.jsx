import { Box } from '@mui/material';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListItemButton from '@mui/material/ListItemButton';
import Home from '@mui/icons-material/Home';
import Article from '@mui/icons-material/Article';
import Group from '@mui/icons-material/Group';
import Storefront from '@mui/icons-material/Storefront';
import Person from '@mui/icons-material/Person';
import AccountBox from '@mui/icons-material/AccountBox';
import Settings from '@mui/icons-material/Settings';
import ModeNight from '@mui/icons-material/ModeNight';
import Switch from '@mui/material/Switch';
import React from 'react';

function Sidebar({mode, setMode}) {
  return (
    <Box
    flex={1}
    p={2}
    display= {{ xs:'none', sm:'block' }}>
      <Box position='fixed'>
        <List>
          <ListItem disablePadding>
            <ListItemButton LinkComponent='a' href='#home'>
              <ListItemIcon>
                <Home />
              </ListItemIcon>
              <ListItemText primary="Home" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton LinkComponent='a' href='#simple-list'>
              <ListItemIcon>
                <Article />
              </ListItemIcon>
              <ListItemText primary="Page" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton LinkComponent='a' href='#simple-list'>
              <ListItemIcon>
                <Group />
              </ListItemIcon>
              <ListItemText primary="Groups" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton LinkComponent='a' href='#simple-list'>
              <ListItemIcon>
                <Storefront />
              </ListItemIcon>
              <ListItemText primary="Markeplace" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton LinkComponent='a' href='#simple-list'>
              <ListItemIcon>
                <Person />
              </ListItemIcon>
              <ListItemText primary="Friends" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton LinkComponent='a' href='#simple-list'>
              <ListItemIcon>
                <Settings />
              </ListItemIcon>
              <ListItemText primary="Settings" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#simple-list'>
              <ListItemIcon>
                <AccountBox />
              </ListItemIcon>
              <ListItemText primary="profile" />
            </ListItemButton>
          </ListItem>
          <ListItem disablePadding>
            <ListItemButton component='a' href='#simple-list'>
              <ListItemIcon>
                <ModeNight />
              </ListItemIcon>
              <Switch onChange={e => setMode(mode === 'light' ? 'dark' : 'light')}/>
            </ListItemButton>
          </ListItem>
        </List>
     </Box>
    </Box>
  );
}

export default Sidebar;