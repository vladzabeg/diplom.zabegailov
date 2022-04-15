import React, { useState, useEffect } from "react";

import { Row, Pagination } from "antd";
import s from "./postList.module.css";

import { BreadcrumbContent } from "../Bread/bread";
import { ButtonContent } from "../Button/button";
import { Post } from "../Post/post";

export const PostList = ({ title, content, onProductLike, createPost, deletePost}) => {
  //Стейт номера страницы
  const [page, setPage] = useState(8);
  const [itemPage, setItemPage] = useState(6);
  //Стейт начальной позиции
  const [startPosition, setStartPosition] = useState(0);
  //Стейт конечной позиции
  const [endPosition, setEndPosition] = useState(itemPage);

  //Функция изменения данных об отображении страницы
  const handleGetPage = (page) => {
    setStartPosition(page*itemPage-itemPage);
    setEndPosition(page*itemPage);
    // setPage(page);
  }

  return (
    <>
      <div className="container">
        <BreadcrumbContent />
        <div className={s.items}>
          <div>
            <h1>
              {!title ? "Заголовок" : title}
            </h1>
          </div>
          <ButtonContent text="Create Post" createPost={createPost} />
        </div>
        <Row gutter={20} wrap>
          {content.map((item, index) => (
            index>=startPosition &&
            index<endPosition &&
            <Post key={item._id} {...item} onProductLike={onProductLike} deletePost={deletePost}/>  
          ))}
        </Row>
        <Pagination
          defaultCurrent={page}
          defaultPageSize={itemPage}
          total={content.length}
          onChange={handleGetPage}
        />
      </div>
    </>
  );
};
