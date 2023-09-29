import React from "react";
import Layout from "../../components/Layout";
import ModalButton from "../../components/ModalButton";
import theme from "../../theme";

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
    </Layout>
  );
};

export default HomePage;
