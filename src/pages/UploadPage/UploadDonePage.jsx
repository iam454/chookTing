import React, { useState } from "react";
import Layout from "../../components/Layout";
import styled from "styled-components";
import Button from "./components/Button";
import theme from "../../theme";

import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 342px;
  height: 607px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  background-color: ${(props) => props.theme.gray};
  border-radius: 10px;
`;

const Text = styled.p`
  font-size: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 28px;
`;

const ImageBox = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
  border-radius: 8px;
`;

const ButtonBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  margin-bottom: 20px;
`;

const UploadDonePage = () => {
  const navigate = useNavigate();

  return (
    <Layout>
      <Container>
        <Text>업로드 완료!</Text>
        <ImageBox></ImageBox>
        <ButtonBox>
          <Button
            text="스토리 공유하기"
            width="214px"
            iconSrc="/icons/instagram.png"
          />
          <Button
            text="확인"
            width="80px"
            onClick={() => {
              navigate("/");
            }}
          />
        </ButtonBox>
      </Container>
    </Layout>
  );
};

export default UploadDonePage;
