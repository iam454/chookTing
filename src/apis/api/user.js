import { instance } from "..";

export const kakaoLogin = (code) => {
  return instance.post("/login", code);
};

export const instagramConnect = (code) => {
  return instance.post("/user/instagram", code);
};
