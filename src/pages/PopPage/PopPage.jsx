import React, { useEffect, useRef } from "react";
import Layout from "../../components/Layout";
import Container from "./components/Container";
import Card from "./components/Card";
import { MasonryInfiniteGrid } from "@egjs/react-infinitegrid";
import { useMatch, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { styled } from "styled-components";
import PopDetailPage from "../PopDetailPage/PopDetailPage";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchPopPosts } from "../../apis/api/post";
import HeartLoader from "../../components/HeartLoader";

const LoaderContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
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

const PopPage = () => {
  const navigate = useNavigate();
  const detailMatch = useMatch("/pop/post/:postId");
  const {
    isLoading,
    data: pop,
    fetchNextPage,
    refetch,
  } = useInfiniteQuery(["pop"], fetchPopPosts, {
    getNextPageParam: (lastPage, allPages) => {
      return allPages.length;
    },
    onError: (e) => {
      alert("네트워크 연결이 불안정합니다.");
      refetch();
    },
  });

  const bottomObserverRef = useRef(null);

  const handleCardClick = (postId) => {
    navigate(`post/${postId}`);
  };

  const handleOverlayClick = () => {
    navigate("/pop");
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
  }, [bottomObserverRef, fetchNextPage, pop]);

  if (isLoading) {
    return (
      <Layout>
        <LoaderContainer>
          <HeartLoader />
        </LoaderContainer>
      </Layout>
    );
  }

  return (
    <Layout>
      <Container>
        <MasonryInfiniteGrid gap={8} isConstantSize={true} column={2}>
          {pop.pages.map((page) =>
            page.data.response.popularPosts.map((post) => {
              return (
                <Card
                  layoutId={"pop" + post.postId}
                  key={post.postId}
                  level={post.postLevel}
                  image={post.imageUrl}
                  onClick={() => handleCardClick(post.postId)}
                />
              );
            })
          )}
        </MasonryInfiniteGrid>
        <div ref={bottomObserverRef}></div>
      </Container>
      <AnimatePresence>
        {detailMatch && (
          <>
            <Overlay
              onClick={handleOverlayClick}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <Detail layoutId={"pop" + detailMatch.params.postId}>
              <PopDetailPage />
            </Detail>
          </>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default PopPage;
