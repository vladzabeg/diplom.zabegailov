import React, { useState, useEffect } from "react";

import { Layout } from "antd";
import { HeaderContent } from "./components/Header/header";
import { FooterContent } from "./components/Footer/footer";
import { PostList } from "./components/PostList/postList";
import serverApi from "./utils/serverApi";
import { CurrentUserContext } from "./context/currentUserContext";
import { PagePost } from "./pages/ProductPage/ProductPage";
import { PageAllPosts } from "./pages/CatalogPage/CatalogPage";
import { NotFound } from "./pages/NotFound/NotFound";
import { Route, Routes } from "react-router-dom";

const { Header, Footer, Content } = Layout;

export const App = () => {
  //Стейты
  const [posts, setPosts] = useState({})
  const [content, setContent] = useState([]);
  const [userInformation, setUserInformation] = useState({});
  const [postFlag, setPostFlag] = useState(false)

  //Эффекты
  useEffect(()=> {
    serverApi.getPosts()
    .then(
      (newPostData) => {
        setContent(newPostData);
      }
    )
    setPostFlag(false);
  },[postFlag])

  useEffect(() => {
    Promise.all([serverApi.getPosts(), serverApi.getUserInfo()]).then(
      ([postsData, userData]) => {
        setPosts(postsData);
        setUserInformation(userData);
        console.log(postsData)
      }
    );
  }, []);

  //Функции
  function createPost() {
    const post = {
        "title": "Catapult", 
        "text": "A catapult is a ballistic device used to launch a projectile a great distance without the aid of gunpowder or other propellants – particularly various types of ancient and medieval siege engines", 
        "image": "https://avatars.mds.yandex.net/get-zen_doc/1077599/pub_5b0c32489d5cb34163790c73_5b0c32947ddde8576ef10409/scale_1200",
        "tags": ["legendary", "peace", "kaif"]
    }
    serverApi.addPost(post)
    .then(
      newPost=> {
        console.log("Добавлено")
      }
    )
    setPostFlag(true)
  }

  function deletePost(productId) {
    serverApi.deletePost(productId)
      .then(
        console.log("Удалено")
      )
      setPostFlag(true)
  }

  function handleProductLike({ _id, likes }) {
    const isLiked = likes.some((id) => id === userInformation._id);
    serverApi.changeLikeStatus(_id, isLiked).then((newCard) => {
      const newCardsState = content.map((c) => {
        return c._id === newCard._id ? newCard : c;
      });

      setContent(newCardsState);
    });
  }

  return (
    <CurrentUserContext.Provider value={userInformation}>
      <Layout className="wrapper">
        <Header className="header">
          <HeaderContent user={userInformation} />
        </Header>
        <Content className="contentWrapper">
          <Routes>
            <Route path="/" element={
              <PageAllPosts 
                title="Домашняя страница" 
                content={content} 
                onProductLike={handleProductLike} 
                createPost={createPost} 
                deletePost={deletePost}
                />
            }/>
            <Route path="posts/:productId" element={
              <PagePost 
                userInformation = {userInformation} 
                posts = {posts}
                handleProductLike = {handleProductLike}
               />
            }/>
            <Route path="*" element={
              <NotFound
               />
            }/>
          </Routes>
        </Content>
        <Footer>
          <FooterContent />
        </Footer>
      </Layout>
    </CurrentUserContext.Provider>
  );
};
