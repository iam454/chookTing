import React, { useState } from "react";
import Layout from "../../components/Layout";
import { SkeletonPage } from "../SkeletonPage/SkeletonPage";
import Post from "../../components/Post";
import PostInfos from "../../components/PostInfos";

const posts = [
  {
    id: 1,
    image: "sample.png",
    name: "안녕하세요",
    hashtags: ["#대박", "#굿", "#하이"],
    isLiked: false,
    points: 100,
  },
  {
    id: 5,
    image: "sample2.png",
    name: "예시2",
    hashtags: ["#대박", "#굿", "#하이"],
    isLiked: true,
    points: 100,
  },
  {
    id: 13,
    image: "sample5.png",
    name: "예시3",
    hashtags: ["#대박", "#굿", "#하이"],
    isLiked: true,
    points: 100,
  },
  {
    id: 51,
    image: "sample3.png",
    name: "예시4",
    hashtags: ["#대박", "#굿", "#하이"],
    isLiked: false,
    points: 100,
  },
  {
    id: 33,
    image: "sample4.png",
    name: "예시5",
    hashtags: ["#대박", "#굿", "#하이"],
    isLiked: true,
    points: 100,
  },
];

const HomePage = () => {
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Layout>
      {isLoading ? (
        <SkeletonPage.Home />
      ) : (
        posts.map((post) => {
          return (
            <Post.Home
              key={post.id}
              image={post.image}
              info={<PostInfos name={post.name} hashtags={post.hashtags} />}
              id={post.id}
              isLikedPost={post.isLiked}
              points={post.points}
            />
          );
        })
      )}
    </Layout>
  );
};

export default HomePage;
