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

const TwoBtnModal = ( { handleShowModal, $isVisibleModal, $modalType, execution} ) => {
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
  const [modalText, setModalText] = useState("");

  useEffect(() => {
    switch ($modalType.toString()) {
      case "logout":
        setModalText("로그아웃 하시겠어요? 서비스 이용이 제한될 수 있습니다.");
        setFirstButtonText("취소");
        setSecondButtonText("로그아웃");
        return ;
      case "report":
        setModalText("허위 신고 시 서비스 이용제한 등의 불이익을 받을 수 있으니 주의해 주세요.");
        setFirstButtonText("취소");
        setSecondButtonText("신고하기");
        return ;
      case "firework":
        setModalText("보유 폭죽이 부족해요.");
        setFirstButtonText("내 폭죽 보러가기");
        setSecondButtonText("네, 사용할래요!");
      return ;
      case "widthdrawal":
        setModalText("신정말 탈퇴하시겠어요? 계정은 삭제되며 복구되지 않습니다.");
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
      {modalText}
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