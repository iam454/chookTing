import React, { useState } from "react";
import Post from "../../components/Post";
import IconButton from "../../components/IconButton";
import PostInfos from "../../components/PostInfos";
import { styled } from "styled-components";
import { motion, useAnimate } from "framer-motion";
import { Modal } from "../../components/Modal";
import theme from "../../theme";
import ModalButton from "../../components/ModalButton";

const photo = {
  id: 1,
  image: "/sample.png",
  name: "대박사건",
  hashtags: ["#안녕", "#좋아"],
  likes: 49,
  points: 200,
};

const Svg = styled(motion.svg)`
  width: 24px;
  height: 24px;
`;

const likeVariants = {
  normal: {
    fill: "none",
    fillOpacity: 0,
  },
  active: {
    fill: "red",
    fillOpacity: 1,
  },
};

const PopDetailPage = ({ image, id }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <>
      <Post
        image={image}
        info={<PostInfos name={photo.name} hashtags={photo.hashtags} />}
      >
        <IconButton
          text={photo.likes}
          onClick={() => {
            console.log("좋아요 누를 아이디: ", photo.id);
          }}
        >
          <Svg
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            variants={likeVariants}
            initial="normal"
            whileHover="active"
          >
            <motion.path
              d="M4.45067 13.9082L11.4033 20.4395C11.6428 20.6644 11.7625 20.7769 11.9037 20.8046C11.9673 20.8171 12.0327 20.8171 12.0963 20.8046C12.2375 20.7769 12.3572 20.6644 12.5967 20.4395L19.5493 13.9082C21.5055 12.0706 21.743 9.0466 20.0978 6.92607L19.7885 6.52734C17.8203 3.99058 13.8696 4.41601 12.4867 7.31365C12.2913 7.72296 11.7087 7.72296 11.5133 7.31365C10.1304 4.41601 6.17972 3.99058 4.21154 6.52735L3.90219 6.92607C2.25695 9.0466 2.4945 12.0706 4.45067 13.9082Z"
              stroke="currentColor"
              strokeWidth="2"
            />
          </Svg>
        </IconButton>
        <IconButton
          onClick={() => {
            console.log("폭죽 보낼 아이디: ", photo.id);
            setIsModalOpen(true);
          }}
        >
          <img
            src="/icons/instagram.png"
            width={20}
            height={20}
            alt="인스타그램"
          />
        </IconButton>
      </Post>
      <Modal.Long
        isOpen={isModalOpen}
        onRequestClose={() => setIsModalOpen(false)}
        text1="폭죽을 사용하여"
        text2="인스타그램 계정에 방문할 수 있어요!"
      >
        <ModalButton
          isLong
          onClick={() => {
            console.log("인스타그램 방문!");
          }}
          iconSrc="/icons/instagram.png"
          bgColor={theme.pink}
          text="인스타그램 방문하기"
        />
      </Modal.Long>
    </>
  );
};

export default PopDetailPage;
