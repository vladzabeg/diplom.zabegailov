import React from "react";
import { PostList } from "/src/components/PostList/postList.jsx";
import { Pagination } from "antd";


export const PageAllPosts = ({currentUser, title, content, onProductLike, createPost, deletePost}) => { 

  return (
    <>
         <PostList 
          title={title}
          content={content} 
          onProductLike={onProductLike} 
          currentUser={currentUser}
          createPost={createPost}
          deletePost = {deletePost}
          />
        <Pagination/>
        
    </>
  );  
};