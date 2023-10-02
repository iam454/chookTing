import { styled } from "styled-components";
import ModalTemplate from "./ModalTemplate";
import { useEffect, useState } from "react";

const ModalBtn = styled.button`
  width: 310px;
  height: 44px;
  border-radius: 10px;
  font-size: 16px;
  position: absolute;
  top: 102px;
  left: 16px;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
  font-family: "Pretendard Variable", Pretendard, -apple-system,
    BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI",
    "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  color: ${(props) => {
    switch (props.$modalType) {
      case "login":
        return "black";
      default:
        return "white";
    }}};
  background-color: ${(props) => {
    switch (props.$modalType) {
      case "insta":
        return props.theme.pink;
      case "login":
        return props.theme.yellow;
      case "firework":
        return props.theme.orange;
      case "completeReport":
          return props.theme.modal.gray;
      default:
        return props.theme.modal.gray;
    }
  }};
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

const OneBtnModal = ( { handleShowModal, $isVisibleModal, $modalType, children, execution} ) => {
  // 모달 타입 4개
  // 1. 인스타그램 연동
  // 2. 로그인 안내
  // 3. 폭죽 보내기
  // 4. 신고 접수 완료
  // ---------------------
  // 사용할 페이지에서 다음과 같은 함수를 선언해야 함
  // const [isVisibleModal, setIsVisibleModal] = useState(false);
  // const handleShowModal = () => {
  //   setIsVisibleModal(prev => !prev);
  // };
  // <button onClick={handleShowModal}>Open Modal</button>
  // ---------------------

  const [buttonText, setButtonText] = useState("");
  const [logoImg, setLogoImg] = useState("");

  useEffect(() => {
    switch ($modalType.toString()) {
      case "insta":
        setButtonText("인스타그램 연결하기");
        setLogoImg("./icons/instagram.png");
        return ;
      case "login":
        setButtonText("카카오톡으로 시작하기");
        setLogoImg("./icons/kakao.png");
        return ;
      case "firework":
        setButtonText("네, 사용할래요!");
        setLogoImg("./icons/firework.png");
      return ;
      case "completeReport":
        setButtonText("닫기");
        setLogoImg("");
        return ;
      default:
        return ;
    }
  }, [$modalType])

  return (
    <ModalTemplate handleShowModal={handleShowModal} $isVisibleModal={$isVisibleModal}>
        {children}
      <ModalBtn onClick={execution} $modalType={$modalType}>
        <Icon src={logoImg} alt={logoImg}/>
        {buttonText}
      </ModalBtn>
    </ModalTemplate>
  )
}

export default OneBtnModal;