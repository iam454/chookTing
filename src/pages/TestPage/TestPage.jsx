import React, { useState } from "react";
import Layout from "../../components/Layout";
import ModalButton from "../../components/ModalButton";
import { Modal } from "../../components/Modal";
import theme from "../../theme";

const TestPage = () => {
  const [isShortModalOpen, setIsShortModalOpen] = useState(false);
  const [isLongModalOpen, setIsLongModalOpen] = useState(false);

  const handleShortModalClick = () => {
    setIsShortModalOpen((prev) => !prev);
  };
  const handleLongModalClick = () => {
    setIsLongModalOpen((prev) => !prev);
  };

  return (
    <Layout>
      <ModalButton
        isLong
        isTextBlack
        onClick={handleShortModalClick}
        text="텍스트 한개 short 모달 열기"
      />
      <br />
      <br />
      <ModalButton
        isLong
        isTextBlack
        onClick={handleLongModalClick}
        text="텍스트 두개 long 모달 열기"
      />

      <Modal.Short
        isOpen={isShortModalOpen}
        onRequestClose={() => setIsShortModalOpen(false)}
        text="보유 폭죽이 부족해요."
      >
        <ModalButton
          onClick={() => {
            console.log("폭죽 내역 보러가기");
          }}
          text="폭죽 내역"
          bgColor={theme.modal.gray}
        />
        <ModalButton
          onClick={() => {
            console.log("확인");
            setIsShortModalOpen(false);
          }}
          text="확인"
          bgColor={theme.orange}
        />
      </Modal.Short>

      <Modal.Long
        isOpen={isLongModalOpen}
        onRequestClose={() => setIsLongModalOpen(false)}
        text1="폭죽을 사용하여"
        text2="인스타그램 계정에 방문할 수 있어요!"
      >
        <ModalButton
          isLong
          onClick={() => {
            console.log("인스타그램 방문!");
          }}
          iconSrc="icons/instagram.png"
          bgColor={theme.pink}
          text="인스타그램 방문하기"
        />
      </Modal.Long>
    </Layout>
  );
};

export default TestPage;
