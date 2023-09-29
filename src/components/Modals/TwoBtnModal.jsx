import { styled } from "styled-components";
import ModalTemplate from "./ModalTemplate";
import { useEffect, useState } from "react";

const ModalBtn = styled.button`
  width: 151px;
  height: 44px;
  border-radius: 10px;
  font-size: 16px;
  position: absolute;
  top: 102px;
  border: none;
  font-family: "Pretendard Variable", Pretendard, -apple-system,
    BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI",
    "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
`;

const FirstModalBtn = styled(ModalBtn)`
  left: 16px;
  color: white;
  background-color: ${props => props.theme.modal.gray};
`;

const SecondModalBtn = styled(ModalBtn)`
  left: 175px;
  color: white;
  background-color: ${(props) => {
    switch (props.$modalType) {
      case "logout":
        return props.theme.red;
        case "report":
          return props.theme.red;
      case "firework":
        return props.theme.orange;
      case "widthdrawal":
        return props.theme.red;
      default:
        return ;
    }
  }};
`;

const TwoBtnModal = ( { handleShowModal, $isVisibleModal, $modalType, execution, children} ) => {
  // 모달 타입 4개
  // 1. 로그아웃
  // 2. 신고하기
  // 3. 폭죽 부족
  // 4. 계정 탈퇴
  // ---------------------
  // 사용할 페이지에서 다음과 같은 함수를 선언해야 함
  // const [isVisibleModal, setIsVisibleModal] = useState(false);
  // const handleShowModal = () => {
  //   setIsVisibleModal(prev => !prev);
  // };
  // <button onClick={handleShowModal}>Open Modal</button>
  // ---------------------

  const [firstButtonText, setFirstButtonText] = useState("");
  const [secondButtonText, setSecondButtonText] = useState("");

  useEffect(() => {
    switch ($modalType.toString()) {
      case "logout":
        setFirstButtonText("취소");
        setSecondButtonText("로그아웃");
        return ;
      case "report":
        setFirstButtonText("취소");
        setSecondButtonText("신고하기");
        return ;
      case "firework":
        setFirstButtonText("내 폭죽 보러가기");
        setSecondButtonText("네, 사용할래요!");
      return ;
      case "widthdrawal":
        setFirstButtonText("취소");
        setSecondButtonText("탈퇴하기");
        return ;
        default:
        setFirstButtonText("취소");
        return ;
    }
  }, [$modalType]);

  return (
    <ModalTemplate handleShowModal={handleShowModal} $isVisibleModal={$isVisibleModal}>
      {children}
      <FirstModalBtn onClick={handleShowModal}>
        {firstButtonText}
      </FirstModalBtn>
      <SecondModalBtn onClick={execution} $modalType={$modalType}>
        {secondButtonText}
      </SecondModalBtn>
    </ModalTemplate>
  )
}

export default TwoBtnModal;