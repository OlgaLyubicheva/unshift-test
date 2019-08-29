const loadData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

const sendData = async (url, method, value) => {
  const response = await fetch(
    url,
    {
      method: method,
      headers: {
        'Content-Type': 'application/json'
      },
      body: value ? JSON.stringify(value) : null
    });

  const data = await response.json();
  return data;
};

const url = 'https://bloggy-api.herokuapp.com/';

export const loadPosts = async () => {
  const posts = await loadData(`${url}posts`);

  return posts;
};

export const loadPostWhithComments = async (postId) => {
  const post = await loadData(`${url}posts/${postId}?_embed=comments`);

  return post;
};


export const addPosts = async (value) => {
  const post = await sendData(`${url}posts`, 'POST', value);

  return post;
};

export const delPost = async (postId) => {
  const post = await sendData(`${url}posts/${postId}`, 'DELETE');

  return post;
};

export const updatePost = async (postId, value) => {
  const post = await sendData(`${url}posts/${postId}`, 'PUT', value);

  return post;
};

export const addComment = async (value) => {
  const comment = await sendData(`${url}comments`, 'POST', value);

  return comment;
};