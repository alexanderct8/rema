import React from 'react';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Favorite from '@mui/icons-material/Favorite';
import FavoriteBorder from '@mui/icons-material/FavoriteBorder';
import ShareIcon from '@mui/icons-material/Share';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import { Checkbox } from '@mui/material';

function Post() {
  return (
    <Card sx={{margin:4}}>
        <CardHeader
          avatar={
          <Avatar sx={{ bgcolor:'#ef1616' }} aria-label="recipe">
            J
          </Avatar>
          }
          action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
          }
          title="Jessica Alva"
          subheader="September 14, 2024"
        />
        <CardMedia
          component="img"
          height="10%"
          image="https://avatarfiles.alphacoders.com/198/198339.jpg"
          alt="Paella dish"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          A menudo subestimamos el poder de una caricia, una sonrisa, una palabra amable, un oído atento, un cumplido honesto o el acto más pequeño de cariño, todos los cuales tienen el potencial de cambiar una vida.
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <IconButton aria-label="add to favorites">
          <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color:'red'}} />} />
          </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
      </CardActions>
    </Card>
  );
};

export default Post;