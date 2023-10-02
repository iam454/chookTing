import React, { useState } from "react";
import Layout from "../../components/Layout";
import { SkeletonPage } from "../SkeletonPage/SkeletonPage";
import Post from "../../components/Post";
import PostInfos from "../../components/PostInfos";
import IconButton from "../../components/IconButton";
import { ReactComponent as Like } from "../../assets/Favorite.svg";

const posts = [
  {
    id: 1,
    image: "sample.png",
    name: "안녕하세요",
    hashtags: ["#대박", "#굿", "#하이"],
  },
  {
    id: 5,
    image: "sample2.png",
    name: "예시2",
    hashtags: ["#대박", "#굿", "#하이"],
  },
  {
    id: 13,
    image: "sample5.png",
    name: "예시3",
    hashtags: ["#대박", "#굿", "#하이"],
  },
  {
    id: 51,
    image: "sample3.png",
    name: "예시4",
    hashtags: ["#대박", "#굿", "#하이"],
  },
  {
    id: 33,
    image: "sample4.png",
    name: "예시5",
    hashtags: ["#대박", "#굿", "#하이"],
  },
];

const TestPage = () => {
  const [isLoading, setIsLoading] = useState(true);

  return (
    <Layout>
      {isLoading ? (
        <SkeletonPage.Home />
      ) : (
        posts.map((post) => {
          return (
            <Post
              key={post.id}
              image={post.image}
              info={<PostInfos name={post.name} hashtags={post.hashtags} />}
            >
              <IconButton
                onClick={() => {
                  console.log("좋아요 누를 아이디: ", post.id);
                }}
              >
                <Like width={24} height={24} />
              </IconButton>
              <IconButton
                onClick={() => {
                  console.log("폭죽 보낼 아이디: ", post.id);
                }}
              >
                <img
                  src="icons/instagram.png"
                  width={20}
                  height={20}
                  alt="인스타그램"
                />
              </IconButton>
            </Post>
          );
        })
      )}
    </Layout>
  );
};

export default TestPage;
