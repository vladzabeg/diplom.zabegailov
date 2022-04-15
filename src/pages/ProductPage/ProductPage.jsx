import React, { useState, useEffect } from "react";
import serverApi from '../../utils/serverApi';
import { OnePost } from "../../components/OnePost";
import { useParams } from "react-router-dom";

export const PagePost = ({userInformation, handlePostLike, posts}) => { 
  const [post, setPost] = useState([]);
  const { productId } = useParams();


  useEffect(() => {
    serverApi.getPostById(productId)
      .then((postData) => {
        setPost(postData);
      })
  },[posts])

  return (
    <>
        <OnePost {...post} userInformation={userInformation} onPostLike={handlePostLike}/>
    </>
  );  
};