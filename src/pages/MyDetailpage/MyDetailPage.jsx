import React from "react";
import Post from "../../components/Post";
import PostInfos from "../../components/PostInfos";

const sample = {
  id: 4,
  image: "/sample.png",
  createdAt: "2023-09-02",
  name: "안녕하세요",
  hashtags: ["해쉬태그", "안녕"],
  likes: 50,
  instaViews: 39,
  isLiked: true,
};

const MyDetailPage = ({ photo }) => {
  // 상세 조회 api 호출 예정
  const { imageUri, createdAt, nickname, likeCount, viewCount } = photo;

  return (
    <Post.My
      // id={}
      image={imageUri}
      info={<PostInfos name={sample.name} hashtags={sample.hashtags} />}
      isLikedPost={sample.isLiked}
      numberLikes={sample.likes}
      numberInstas={sample.instaViews}
    />
  );
};

export default MyDetailPage;
