import React, { useState } from "react";
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, Typography, Grid } from '@mui/material';
import { Favorite } from '@mui/icons-material';
import dayjs from "dayjs";
import 'dayjs/locale/ru';
import { useNavigate } from "react-router-dom";

 import s from './styles.module.css';

export const OnePost = ({currentUser, onPostLike, _id, likes, image, title, author, text, created_at }) => {

      const isLiked = likes && likes.some((id) => id === currentUser._id);
      const navigate = useNavigate();
  
      const dataFormated = dayjs(created_at).format('dddd, MMMM DD YYYY');

    const handleLikeClick = () => {
      onPostLike({_id, likes})
    };

  return (

<div className={s.title}>
<div className={s.card}>
<a href="#" className={s.btn} onClick={() => navigate(-1)}>Назад</a>
              <CardHeader
                    avatar={
                    <Avatar src={author?.avatar && author?.avatar} aria-label="recipe">
                        {!author?.avatar && name.slice(0,1)}
                    </Avatar>
                    }
                    title={author?.email}
                    subheader={dataFormated}                    
                />
                <CardMedia
                    component="img"
                    height="374"
                    image={image}
                    alt="Paella dish"
                />
                <CardContent>
                    <Typography variant="h6" color="text.secondary">
                        {title}
                    </Typography>
                    <Typography variant="body2" noWrap color="text.secondary">
                        {text}
                    </Typography>
                </CardContent>
                <CardContent>
                        <Typography paragraph>
                            {text}
                        </Typography>
                    </CardContent>
             <div>
             <IconButton aria-label="add to favorites" onClick={handleLikeClick} >
                        {isLiked ? <Favorite sx={{ fill: "red"}} /> : <Favorite/>}
                        <p>{likes?.length}</p>
                    </IconButton>
             </div>
 </div>
</div>
  );
};