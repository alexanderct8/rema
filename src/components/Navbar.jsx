import { AppBar, Toolbar, styled, Typography, InputBase, Badge, Avatar} from '@mui/material';
import CodeIcon from '@mui/icons-material/Code';
import Mail from '@mui/icons-material/Mail';
import Notifications from '@mui/icons-material/Notifications';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import React, { useState } from 'react';
import { Box } from '@mui/system';

const Navbar = () => {

    const [open, setOpen]= useState(false);

    const StyleToolbar = styled(Toolbar) ({
        display: 'flex',
        justifyContent: 'space-between'
    });
    const  Search = styled('div')(({theme}) =>({
        width:'40%',
        backgroundColor: '#fff',
        padding:'4px 8px',
        color:'#000',
        borderRadius: theme.shape.borderRadius,
    }));
    const  Icons = styled(Box)(({theme}) =>({
        display: 'none',
        gap:'20px',
        alignItems: 'center',
        [theme.breakpoints.up('sm')]:{
            display:'flex',
        }
    }));
    const UserBox =styled(Box)(({theme}) =>({
        display: 'flex',
        alignItems:'center',
        gap:'8px',
        padding:'0 2px',
        [theme.breakpoints.up('sm')]:{
            display:'none',
        }
    }))

  return (
    <AppBar position='sticky'>
        <StyleToolbar>
            <Typography variant='h6' display={{xs:'none', sm:'block'}}>CODAC</Typography>
            <CodeIcon sx={{ display:{ xs:'block', sm:'none'}}}/>
            <Search> <InputBase placeholder='Buscar...'sx={{width:'100%'}}/> </Search>
            <Icons>
            <Badge badgeContent={4} color="error">
               <Mail />
            </Badge>
            <Badge badgeContent={4} color="error">
               <Notifications />
            </Badge>
            <Avatar sx={{width:30, height:30}} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeZfo0k1PTRHWgBm4WohhJD6yxFZ6ZZ9rMzpb6iOT4RE7288s7NOGXbaKuNYmw1k2b9yM&usqp=CAU' 
              onClick={e => setOpen(true)}
            />
            </Icons>
            <UserBox onClick={e => setOpen(true)}>
               <Avatar sx={{width:30, height:30}} src='http://img.kapook.com/u/2015/surauch/movie3/gdrtu2.jpg' />
               <Typography variant='span'>Gadot</Typography>
            </UserBox>
        </StyleToolbar>
        <Menu
           id="demo-positioned-menu"
           aria-labelledby="demo-positioned-button"
           open={open}
           onClose={(e) => setOpen(false)}
           anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'right',
          }}
        >
           <MenuItem >Perfil</MenuItem>
           <MenuItem >Mi Cuenta</MenuItem>
           <MenuItem >Cerrar sesión</MenuItem>
        </Menu>
    </AppBar>
  )
}

export default Navbar;