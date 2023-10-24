import React, { useEffect, useState } from "react";
import Post from "../../components/Post";
import PostInfos from "../../components/PostInfos";
import SkeletonInfos from "../SkeletonPage/components/SkeletonInfos";
import { useQuery } from "@tanstack/react-query";
import { useNavigate, useParams } from "react-router-dom";
import { fetchPopPost } from "../../apis/api/post";

const PopDetailPage = ({ image, id }) => {
  const navigate = useNavigate();
  const postId = useParams();
  const {
    isLoading,
    data: popDetail,
    refetch,
  } = useQuery(["pop", postId], () => fetchPopPost(postId), {
    onError: (e) => {
      alert("게시물을 찾을 수 없습니다.");
      refetch();
      navigate("/");
    },
  });

  return (
    <Post.Pop
      isLoading={isLoading}
      image={image || popDetail?.data.response.imageUri}
      info={
        isLoading ? (
          <SkeletonInfos />
        ) : (
          <PostInfos
            name={popDetail?.data.response.nickname}
            hashtags={popDetail?.data.response.hashTags}
          />
        )
      }
      id={popDetail?.data.response.postId}
      // isLikedPost={photo.isLiked}
      numberLikes={popDetail?.data.response.likeCount}
      points={popDetail?.data.response.postPoint}
    />
  );
};

export default PopDetailPage;
