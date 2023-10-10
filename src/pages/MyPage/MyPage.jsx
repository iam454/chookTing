import React from "react";
import Layout from "../../components/Layout";
import Container from "./components/Container";
import AccountInfoTemplate from "./components/AccountInfoTemplate";
import MyAlbumTemplate from "./components/MyAlbumTemplate";
import { AnimatePresence, motion } from "framer-motion";
import { styled } from "styled-components";
import MyDetailPage from "../MyDetailpage/MyDetailPage";
import { useMatch, useNavigate } from "react-router-dom";

const userInfo = {
  profileImg: "./icons/accountIcon.png",
  userName: "카카오",
  userEmail: "kakao@email.com",
};

const totalCount = {
  totalLikes: 60,
  totalFirework: 30,
  myFireworks: 200,
};

const isInstaConnected = true;

const photos = [
  {
    id: 1,
    imgSrc: "/sample.png",
    univercity: "전남대학교",
    date: "2023.08.23",
    likeCount: "60",
    snsViewCount: "17",
  },
  {
    id: 2,
    imgSrc: "/sample5.png",
    univercity: "전남대학교",
    date: "2023.08.22",
    likeCount: "452",
    snsViewCount: "124",
  },
];

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
`;

const MyPage = () => {
  const navigate = useNavigate();
  const detailMatch = useMatch("/profile/post/:postId");

  const clickedPhoto =
    detailMatch?.params.postId &&
    photos.find((photo) => photo.id === +detailMatch?.params.postId);

  const handleOverlayClick = () => {
    navigate("/profile");
  };

  return (
    <Layout>
      <Container>
        <AccountInfoTemplate
          userInfo={userInfo}
          totalCount={totalCount}
          isInstaConnected={isInstaConnected}
        />
        <MyAlbumTemplate photos={photos} />
      </Container>
      <AnimatePresence>
        {detailMatch && (
          <>
            <Overlay
              onClick={handleOverlayClick}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />
            <Detail layoutId={"my" + detailMatch?.params.postId}>
              <MyDetailPage image={clickedPhoto.imgSrc} />
            </Detail>
          </>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default MyPage;
