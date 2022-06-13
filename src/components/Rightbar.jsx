import { Avatar, AvatarGroup, Box,Divider,ImageListItem, List, ListItem, ListItemAvatar, ListItemText, Typography } from '@mui/material';
import ImagesList from '@mui/material/ImageList';
import React from 'react'

function Rightbar() {
  return (
    <Box
    flex={2}
    p={2}
    display= {{ xs:'none', sm:'block' }}>
      <Box position='fixed' width={300}>
        <Typography variant='h6' fontWeight={100}>Amigos en linea</Typography>
        <AvatarGroup max={6}>
          <Avatar alt="Gal Gadot" src="https://d1lofqbqbj927c.cloudfront.net/sonoraGT/2021/03/11buen.jpg" />
          <Avatar alt="Jason Statan" src="https://thumbs.dreamstime.com/b/jason-statham-30570239.jpg" />
          <Avatar alt="Scarlett Johansson" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqbvMca32Dnl31EXweVu2-164hKlqpEUNPDzue-qyJYcJ4-FP0XbCHdk7CqUh0G2i0xIc&usqp=CAU" />
          <Avatar alt="Vin Diesel" src="https://www.origoska.cz/fotky26764/fotos/_vyrp11_1627rychle.jpg" />
          <Avatar alt="Paul Walker" src="https://ichef.bbci.co.uk/news/640/amz/worldservice/live/assets/images/2015/03/21/150321024531_paul_walker_624x351_reuters.jpg" />
          <Avatar alt="" src="" />
          <Avatar alt="" src="" />
          <Avatar alt="" src="" />
        </AvatarGroup>
        <Typography variant='h6' fontWeight={100} mt={2} mb={2}>
          Fotos
        </Typography>
        <ImagesList cols={3} rowHeight={100} gap={4}>
          <ImageListItem >
            <img
            src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRmD2TvvA6oF7g5BAWlH7OI7s3Tj6AFG_9zbA&usqp=CAU'
            alt='imagen del paisaje'
            />
          </ImageListItem>
          <ImageListItem >
            <img
            src='https://elcomercio.pe/resizer/qrk3hnurCXJZnaJhelEg-IsrPo8=/980x0/smart/filters:format(jpeg):quality(75)/arc-anglerfish-arc2-prod-elcomercio.s3.amazonaws.com/public/NB65EVB3JNDHFLBXPWYE44XFXU.jpg'
            alt='imagen del paisaje'
            />
          </ImageListItem>
          <ImageListItem >
            <img
            src='https://www.estaentumundo.com/wp-content/imagenes/2019/07/parque-grandteton-777x486.jpg'
            alt='imagen del paisaje'
            />
          </ImageListItem>
          <ImageListItem >
            <img
            src='https://i.pinimg.com/originals/4b/cb/aa/4bcbaaf31c07ad027c9229a23698f40a.jpg'
            alt='imagen del paisaje'
            />
          </ImageListItem>
          <ImageListItem >
            <img
            src='https://viajarlh.com/wp-content/uploads/2018/02/2-1.png'
            alt='imagen del paisaje'
            />
          </ImageListItem>
          <ImageListItem >
            <img
            src='https://www.royalkerkushotel.com/images/home/galeria2.jpg'
            alt='imagen del paisaje'
            />
          </ImageListItem>
        </ImagesList>
        <Typography variant='h6' fontWeight={100} mt={2}>
          Conversaciones
        </Typography>
        <List sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Remy Sharp" src="https://ichef.bbci.co.uk/news/640/amz/worldservice/live/assets/images/2015/03/21/150321024531_paul_walker_624x351_reuters.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Paul Walker"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Gal Gadot
              </Typography>
              {"— Estaré en tu vecindario haciendo mandados este…"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="Travis Howard" src="https://d1lofqbqbj927c.cloudfront.net/sonoraGT/2021/03/11buen.jpg" />
        </ListItemAvatar>
        <ListItemText
          primary="Gal Gadot"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Paul Walker
              </Typography>
              {" — Ojalá puedas cumplir con todos los madados"}
            </React.Fragment>
          }
        />
      </ListItem>
      <Divider variant="inset" component="li" />
      <ListItem alignItems="flex-start">
        <ListItemAvatar>
          <Avatar alt="" src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqbvMca32Dnl31EXweVu2-164hKlqpEUNPDzue-qyJYcJ4-FP0XbCHdk7CqUh0G2i0xIc&usqp=CAU'/>
        </ListItemAvatar>
        <ListItemText
          primary="Scarlett Johansson"
          secondary={
            <React.Fragment>
              <Typography
                sx={{ display: 'inline' }}
                component="span"
                variant="body2"
                color="text.primary"
              >
                Paul Walker
              </Typography>
              {' — ¿Tienes recomendaciones de París? Alguna vez has…'}
            </React.Fragment>
          }
        />
      </ListItem>
    </List>
      </Box>
    </Box>
  );
};

export default Rightbar;