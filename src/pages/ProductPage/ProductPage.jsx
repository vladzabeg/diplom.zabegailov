import React, { useCallback } from "react";
import serverApi from '../../utils/serverApi';
import { OnePost } from "../../components/OnePost";
import { useParams } from "react-router-dom";
import { useApi } from "../../hooks/useApi";

export const PagePost = ({currentUser, onProductLike, content}) => { 
  const { postID } = useParams();
  const handlerData = useCallback(() => {
    return serverApi.getPostById(postID);
}, [postID, content]);

const { data: post } = useApi(handlerData);

return (
    <>
        {post && <OnePost {...post} />}
    </>
);
}; 