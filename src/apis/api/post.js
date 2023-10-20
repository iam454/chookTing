import { instance } from "..";

export const createPost = (payload) => {
  return instance.post("/post", payload);
};

export const fetchHomePosts = () => {
  return instance.get("/post");
};

export const fetchPopPosts = () => {
  return instance.get("/popular-post?level3=4&level2=3&level1=3");
};

export const fetchPopPost = ({ id }) => {
  return instance.get(`/popular-post/${id}`);
};

export const updateLike = ({ id }) => {
  return instance.post(`/post/${id}/like`);
};

export const fetchMyPosts = () => {
  return instance.get("/post/user");
};
