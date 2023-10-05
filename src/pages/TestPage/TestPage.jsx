import React, { useState } from "react";
import Layout from "../../components/Layout";
import { Post } from "../../components/Post";
import PostInfos from "../../components/PostInfos";
import SkeletonInfos from "../SkeletonPage/components/SkeletonInfos";

const photo = {
  id: 17,
  image: "/sample.png",
  name: "대박사건",
  hashtags: ["#안녕", "#좋아"],
  likes: 49,
  isLiked: false,
  instas: 7,
};

const TestPage = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Layout>
      <Post.My
        id={photo.id}
        isLikedPost={photo.isLiked}
        image={photo.image}
        info={
          isLoading ? (
            <SkeletonInfos />
          ) : (
            <PostInfos name={photo.name} hashtags={photo.hashtags} />
          )
        }
        numberLikes={photo.likes}
        numberInstas={photo.instas}
        isLoading={isLoading}
      />
    </Layout>
  );
};

export default TestPage;
