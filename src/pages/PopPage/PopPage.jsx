import React, { useEffect, useRef } from "react";
import Layout from "../../components/Layout";
import Container from "./components/Container";
import Card from "./components/Card";
import { MasonryInfiniteGrid } from "@egjs/react-infinitegrid";
import { useMatch, useNavigate } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { styled } from "styled-components";
import { SkeletonPage } from "../SkeletonPage/SkeletonPage";
import PopDetailPage from "../PopDetailPage/PopDetailPage";
import { useQuery, useInfiniteQuery } from "@tanstack/react-query";
import { fetchPopPosts } from "../../apis/api/post";
import HeartLoader from "../../components/HeartLoader";

const photos = [
  {
    id: 1,
    image: "/sample.png",
    level: 1,
  },
  {
    id: 6,
    image: "/sample2.png",
    level: 2,
  },
  {
    id: 4,
    image: "/sample4.png",
    level: 2,
  },
  {
    id: 17,
    image: "/sample3.png",
    level: 3,
  },
  {
    id: 22,
    image: "/sample5.png",
    level: 1,
  },
  {
    id: 31,
    image: "/sample.png",
    level: 1,
  },
  {
    id: 171,
    image: "/sample3.png",
    level: 3,
  },
  {
    id: 34,
    image: "/sample4.png",
    level: 1,
  },
  {
    id: 92,
    image: "/sample.png",
    level: 3,
  },
  {
    id: 54,
    image: "/sample2.png",
    level: 2,
  },
];

// {
//   "postId": 54,
//   "imageUri": "/image/test.jpg",
//   "hashTags": [
//     "hashtag6"
//   ],
//   "likeCount": 0,
//   "postPoint": 200,
//   "nickname": "nickname16",
//   "postLevel": 1
// },

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
  const { data: pop, fetchNextPage } = useInfiniteQuery(
    ["pop"],
    fetchPopPosts,
    {
      getNextPageParam: (lastPage, allPages) => {
        return allPages.length;
      },
    }
  );
  const bottomObserverRef = useRef(null);

  const handleCardClick = (postId) => {
    navigate(`post/${postId}`);
  };

  const handleOverlayClick = () => {
    navigate("/pop");
  };

  const clickedId =
    detailMatch?.params.postId &&
    pop?.pages.map((page) =>
      page.data.response.popularPosts.find(
        (post) => post.postId === +detailMatch?.params.postId
      )
    );

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

  return (
    <Layout>
      <Container>
        <MasonryInfiniteGrid gap={8} isConstantSize={true}>
          {pop?.pages.map((page) =>
            page.data.response.popularPosts.map((post) => {
              return (
                <Card
                  layoutId={"pop" + post.postId}
                  key={post.postId}
                  level={post.postLevel}
                  image={post.imageUri}
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
              <PopDetailPage
                image={clickedId && clickedId.imageUri}
                id={clickedId}
              />
            </Detail>
          </>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default PopPage;
