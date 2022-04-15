const errorResponse = (res) => {
  return res.ok ? res.json() : Promise.reject(`Ошибка: ${res.status}`);
};

class ServerApi {
  constructor({ baseUrl, token }) {
    this._baseUrl = baseUrl;
    this._token = `Bearer ${token}`;
  }

  //Получения всех постов
  getPosts() {
    return fetch(`${this._baseUrl}posts`, {
      headers: {
        authorization: this._token,
      },
    }).then(errorResponse);
  }

  //Получения информации о пользователе
  getUserInfo() {
    return fetch(`${this._baseUrl}users/me`, {
      headers: {
        authorization: this._token,
      },
    }).then(errorResponse);
  }

  //Запрос на изменение состояния лайка к посту
  changeLikeStatus(productId, isLike) {
    return fetch(`${this._baseUrl}posts/likes/${productId}`, {
      method: isLike ? "DELETE" : "PUT",
      headers: {
        authorization: this._token,
      },
    }).then(errorResponse);
  }

  //Добавить пост
  addPost(post) {
    return fetch(`${this._baseUrl}posts`, {
      method: "POST",
      headers: {
        authorization: this._token,
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(post)
    }).then(errorResponse);
  }

  //Удалить пост
  deletePost(productId) {
    return fetch(`${this._baseUrl}posts/${productId}`, {
      method: "DELETE",
      headers: {
        authorization: this._token,
      },
    }).then(errorResponse);
  }
  getPostById(postID){
		return fetch(`${this._baseUrl}/posts/${postID}`, {
			 headers: {
				   authorization: this._token,
			 },
		}).then(onResponce)
   }	
}

const myToken = {
  baseUrl: "https://api.react-learning.ru/",
  token:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MjJiNmZmYzA5YjEyZjgwZjRjMTBiYmEiLCJpYXQiOjE2NDcwMTM4ODYsImV4cCI6MTY3ODU0OTg4Nn0.1D6B2OhPNOFhPcW8IcYC6hRfRiNTvmtU_srMnPbvWdo",
};

const serverApi = new ServerApi(myToken);

export default serverApi;
