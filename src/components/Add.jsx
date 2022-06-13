import { Box, Fab, Modal, Tooltip, styled, Typography, Avatar, TextField, Stack, ButtonGroup, Button} from '@mui/material';
import {Add as AddIcon, EmojiEmotions, Image, VideoCameraBack, PersonAdd, DateRange} from '@mui/icons-material';
import { useState } from 'react';

const StyledModal = styled(Modal)({
  display:'flex',
  alignItems:'center',
  justifyContent:'center',
});
const UserBox = styled(Box)({
  display:'flex',
  alignItems:'center',
  gap:'6px',
  marginBottom:'16px'
});

function Add() {

  const [open, setOpen] = useState(false);
  return (
    <>
      <Tooltip onClick={e => setOpen(true)}
      title="Delete"
      sx={{
        position:'fixed',
        bottom:20,
        left:{xs:'calc(50% - 25px)', md:30},
        }}>
        <Fab color='primary' arial-label='add'>
          <AddIcon/>
        </Fab>
      </Tooltip>
      <StyledModal
        open={open}
        onClose={e => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description">
        <Box width={400} height={280} bgcolor={'background.default'} color={'text.primary'} p={3} borderRadius={3} >
          <Typography variant='h6' color='gray' textAlign='center'>Crear Publicación</Typography>
          <UserBox>
            <Avatar
            src='https://d1lofqbqbj927c.cloudfront.net/sonoraGT/2021/03/11buen.jpg'
            sx={{width:30, height:30}}
            />
            <Typography fontWeight={500} variant='span' >Gal Gadot</Typography>
          </UserBox>
          <TextField
          sx={{width:'100%'}}
          id="standard-multiline-static"
          multiline
          rows={2}
          placeholder="Qué tienes en mente"
          variant="standard"
        />
        <Stack direction='row' gap={1} mt={2} m={3}>
          <EmojiEmotions color='primary' />
          <Image color='secondary' />
          <VideoCameraBack color='success'/>
          <PersonAdd color='error'/>
        </Stack>
        <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
          <Button>Post</Button>
          <Button sx={{width:'100px'}}>
            <DateRange/>
          </Button>
        </ButtonGroup>
        </Box>
      </StyledModal>
    </>
  );
};

export default Add;
