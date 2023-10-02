import React from "react";
import { styled } from "styled-components";

const Layout = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
`;

const Image = styled.img`
  background-color: black;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 390px;
  max-height: calc(100vh - 57px);
  max-height: calc(100dvh - 57px); /* Mobile */
  object-fit: contain;
`;

const InfoContainer = styled.div`
  position: absolute;
  left: 16px;
  bottom: 16px;
  z-index: 9;
`;

const ButtonContainer = styled.div`
  position: absolute;
  right: 16px;
  bottom: 16px;
  width: 48px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  z-index: 9;
`;

const Post = ({ id, image, info, children }) => {
  return (
    <Layout id={id}>
      {image && <Image src={image} alt="네컷 사진" />}
      <InfoContainer>{info}</InfoContainer>
      <ButtonContainer>{children}</ButtonContainer>
    </Layout>
  );
};

export default Post;
