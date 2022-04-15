import React, { useState } from "react";
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Collapse, IconButton, Typography, Grid } from '@mui/material';
import { Favorite } from '@mui/icons-material';
import dayjs from "dayjs";
import 'dayjs/locale/ru';
import { useNavigate } from "react-router-dom";

 import s from './styles.module.css';

export const OnePost = ({userInformation, onProductLike, _id, likes, image, title, author, text, created_at }) => {
       const isLiked = likes && likes.some((id) => id === userInformation._id);
       const navigate = useNavigate();
       const dataFormated = dayjs(created_at).format('dddd, MMMM DD YYYY');
       const handleLikeClick = () => {
             onProductLike({_id, likes})
       };

  return (

<div className={s.title}>
<div className={s.card}>
<a href="#" className={s.btn} onClick={() => navigate(-1)}>Назад</a>
              <CardHeader className={s.Header}
                    avatar={
                    <Avatar src={author?.avatar && author?.avatar} aria-label="recipe">
                        {!author?.avatar && name.slice(0,1)}
                    </Avatar>
                    }
                    title={author?.email}
                    subheader={dataFormated}                    
                />
                <CardMedia
                    padding="0px 20px"
                    component="img"
                    max-height="400px"
                    height="auto"
                    image={image}
                    alt="Изображение"
                />
                <CardContent>
                    <Typography variant="h3" color="text.secondary">
                        {title}
                    </Typography>
                    <Typography paragraph variant="body2">
                        {text}
                    </Typography>
                </CardContent>
             <div>
             <IconButton className={s.button} aria-label="add to favorites" onClick={handleLikeClick} >
                        {isLiked ? <Favorite sx={{ fill: "red"}} /> : <Favorite/>}
                        <p>{likes?.length}</p>
                    </IconButton>
             </div>
 </div>
</div>
  );
};