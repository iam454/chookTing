import React from "react";
import Layout from "../../components/Layout";
import ModalButton from "../../components/ModalButton";
import theme from "../../theme";
import IconButton from "../../components/IconButton";
import { ReactComponent as Like } from "../../assets/Favorite.svg";
import { ReactComponent as Download } from "../../assets/Import.svg";
import { styled } from "styled-components";

const Test = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  position: absolute;
  right: 16px;
  bottom: 16px;
`;

const HomePage = () => {
  return (
    <Layout>
      현재위치에 따라 내비게이션 바 색상 변경
      <ModalButton
        isLong
        bgColor={theme.orange}
        iconSrc="icons/fireworks.png"
        text="네, 사용할래요!"
        onClick={() => console.log("modal button clicked")}
      />
      <br />
      <br />
      <ModalButton
        bgColor={theme.orange}
        text="확인"
        onClick={() => console.log("modal button clicked")}
      />
      <br />
      <br />
      <ModalButton
        bgColor={theme.red}
        text="탈퇴하기"
        onClick={() => console.log("modal button clicked")}
      />
      <br />
      <br />
      <ModalButton
        isLong
        isTextBlack
        bgColor={theme.yellow}
        iconSrc="icons/kakao.png"
        text="카카오톡으로 시작하기"
        onClick={() => console.log("modal button clicked")}
      />
      <br />
      <br />
      <ModalButton
        isLong
        bgColor={theme.pink}
        iconSrc="icons/instagram.png"
        text="인스타그램 연결하기"
        onClick={() => console.log("modal button clicked")}
      />
      <br />
      <br />
      <ModalButton
        isLong
        bgColor={theme.modal.gray}
        text="닫기"
        onClick={() => console.log("modal button clicked")}
      />
      <br />
      <br />
      <ModalButton
        bgColor={theme.modal.gray}
        text="폭죽 내역"
        onClick={() => console.log("modal button clicked")}
      />
      <Test>
        <IconButton
          onClick={() => {
            console.log("icon button clicked!");
          }}
          text={51}
        >
          <Like width={24} height={24} />
        </IconButton>

        <IconButton
          onClick={() => {
            console.log("icon button clicked!");
          }}
          text={33}
        >
          <img
            src="icons/instagram.png"
            width={20}
            height={20}
            alt="인스타그램"
          />
        </IconButton>
        <IconButton
          onClick={() => {
            console.log("icon button clicked!");
          }}
        >
          <Download width={24} height={24} />
        </IconButton>
      </Test>
    </Layout>
  );
};

export default HomePage;
