import React from 'react'
import {Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography} from '@mui/material'
import MoreVertSharpIcon from '@mui/icons-material/MoreVertSharp';
import FavoriteBorderSharpIcon from '@mui/icons-material/FavoriteBorderSharp';
import FavoriteSharpIcon from '@mui/icons-material/FavoriteSharp';
import ShareSharpIcon from '@mui/icons-material/ShareSharp';


const Posts = () => {
  return (
    <Card sx={{marginTop:1}}>
        <CardHeader
        avatar={
          <Avatar aria-label="recipe">
            P
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertSharpIcon />
          </IconButton>
        }
        title="Parag Palkar"
        subheader="February 14, 2024"
      />
      <CardMedia
          component="img"
          height="300"
          image="https://images.pexels.com/photos/2187605/pexels-photo-2187605.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt="Japan"
        />

<CardContent>
        <Typography variant="body2" color="text.secondary">
          This impressive paella is a perfect party dish and a fun meal to cook
          together with your guests. Add 1 cup of frozen peas along with the mussels,
          if you like.
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
      <IconButton aria-label="add to favorites">
      <Checkbox icon={<FavoriteBorderSharpIcon />} checkedIcon={<FavoriteSharpIcon sx={{color:"red"}} />}  />
        </IconButton>
        <IconButton aria-label="share">
        <Checkbox icon={<ShareSharpIcon />} checkedIcon={<ShareSharpIcon sx={{color:"blue"}} />}  />
          
        </IconButton>
      
      </CardActions>
      
      
    </Card>
  )
}

export default Posts