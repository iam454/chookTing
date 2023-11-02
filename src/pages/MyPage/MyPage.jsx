import React, { useEffect, useRef, useState } from "react";
import Layout from "../../components/Layout";
import styled from "styled-components";
import UploadButton from "./components/UploadButton";
import KaKaoProfile from "./components/KaKaoProfile";
import InstaProfile from "./components/InstaProfile";
import Card from "./components/Card";
import { AnimatePresence, motion } from "framer-motion";
import { useMatch, useNavigate } from "react-router-dom";
import MyDetailPage from "../MyDetailpage/MyDetailPage";
import { useQuery, useInfiniteQuery, useQueries } from "@tanstack/react-query";
import { fetchUserInfos } from "../../apis/api/user";
import HeartLoader from "../../components/HeartLoader";
import { fetchMyPosts } from "../../apis/api/post";
import { SkeletonPage } from "../SkeletonPage/SkeletonPage";

const response2 = {
  id: 14,
  username: "춘식이",
  email: "chooonsik@naver.com",
  profileImage: "/icons/accountIcon.png",
  instagram: {
    isLinked: false,
    infos: {},
  },
};

const response3 = {
  id: 14,
  username: "춘식이",
  email: "chooonsik@naver.com",
  profileImage: "/icons/accountIcon.png",
  instagram: {
    isLinked: true,
    infos: {
      totalLikes: 0,
      totalViews: 0,
      fireworks: 300,
    },
  },
};

const Container = styled.div`
  width: 358px;
  position: absolute;
  top: 16px;
  left: 50%;
  transform: translateX(-50%);
`;

const Album = styled.div`
  margin-top: 8px;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const Overlay = styled(motion.div)`
  position: fixed;
  width: 390px;
  height: 100%;
  background-color: ${(props) => props.theme.modal.dim};
  opacity: 0;
`;

const Detail = styled(motion.div)`
  position: fixed;
  top: 0;
  bottom: 57px;
  left: 0;
  right: 0;
  margin: auto;
  width: 374px;
  height: 80vh;
  height: 80dvh;
  border-radius: 8px;
  background-color: rgb(15, 15, 15);
  overflow: hidden;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

const MyPage = () => {
  const {
    username,
    email,
    profileImage,
    instagram: { isLinked, infos },
  } = response3;
  const navigate = useNavigate();
  const detailMatch = useMatch("/profile/post/:postId");

  const { data: userInfos, refetch: refetchUserInfos } = useQuery(
    ["userInfos"],
    fetchUserInfos
  );
  const {
    isLoading,
    data: my,
    fetchNextPage,
    refetch: refetchMy,
  } = useInfiniteQuery(["my"], fetchMyPosts, {
    getNextPageParam: (lastPage, allPages) => {
      return lastPage.data.response.hasNext ? allPages.length : undefined;
    },
  });
  const bottomObserverRef = useRef(null);

  console.log("my", my);

  console.log(userInfos);

  const handleCardClick = (postId) => {
    navigate(`post/${postId}`);
  };

  const handleOverlayClick = async () => {
    await refetchMy();
    await refetchUserInfos();
    navigate("/profile");
  };

  useEffect(() => {
    const handleObserver = (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          fetchNextPage();
        }
      });
    };

    const io = new IntersectionObserver(handleObserver, {
      threshold: 0.3,
    });

    if (bottomObserverRef.current) {
      io.observe(bottomObserverRef.current);
    }

    return () => {
      io.disconnect();
    };
  }, [bottomObserverRef, fetchNextPage]);

  const aaa = false;
  if (aaa) {
    return <SkeletonPage.My />;
  }

  return (
    <Layout>
      <Container>
        <KaKaoProfile
          username={userInfos?.data.response.userName}
          profileImage={userInfos?.data.response.profileImageUrl}
        />
        <InstaProfile isLinked={isLinked} infos={infos} />
        <UploadButton isLinked={isLinked} />
        <Album>
          {my?.pages.map((page) =>
            page.data.response.postList.map((post) => {
              return (
                <Card
                  layoutId={"my" + post.postId}
                  key={post.postId}
                  photo={post}
                  onClick={() => handleCardClick(post.postId)}
                />
              );
            })
          )}
        </Album>
        <div ref={bottomObserverRef}></div>
      </Container>
      <AnimatePresence>
        {detailMatch && (
          <>
            <Overlay
              onClick={handleOverlayClick}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <Detail layoutId={"my" + detailMatch.params.postId}>
              <MyDetailPage />
            </Detail>
          </>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default MyPage;
