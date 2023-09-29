import { useEffect, useRef } from 'react';
import styled from 'styled-components'

const ModalContainer = styled.div`
  position: fixed;
  background-color: ${(props) => props.theme.modal.dim};
  width: 100%;
  height: 100%;
  display: ${props => props.$isVisibleModal ? 'flex' : 'none'};
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 999;
  justify-content: center;
  align-items: center;
  font-family: "Pretendard Variable", Pretendard, -apple-system,
    BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI",
    "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
`;

const ModalBox = styled.div`
  @keyframes fadeInUp {
    0% {
        opacity: 0;
        transform: translate3d(0, 20%, 0);
    }
    to {
        opacity: 1;
        transform: translateZ(0);
    }
  }
  position: relative;
  z-index: 9999;
  background-color: ${(props) => props.theme.modal.black};
  border-radius: 10px;
  width: 342px;
  height: 170px;
  animation: fadeInUp 0.3s ease-in-out;
  text-align: center;
  font-size: 16px;
  `;

const ModalText = styled.span`
  font-size: 16px;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100px;
  max-width: 300px;
  margin: auto;
`;

const ModalTemplate = ( {handleShowModal, $isVisibleModal, children} ) => {
  // ModalType에 따라 다른 모달창 띄우기
  // 버튼 1개
  // . 인스타 연동 모달
  // . 로그인 안내 모달
  // . 폭죽 보내기 모달
  // . 신고 접수 완료 모달
  // ---------------------
  // 버튼 2개
  // . 폭죽 부족 안내 모달
  // . 신고하기 모달
  // . 계정 탈퇴 모달
  // . 로그아웃 모달
  // ---------------------
  // 버튼 없음
  // . 폭죽 획득 방법 안내 모달

  const ref = useRef();

  useEffect(() => {
    const modalListener = (e) => {
      // 모달이 열려있을 때만 이벤트 핸들러 동작
      if (!$isVisibleModal) {
        return;
      }
      // 모달 안을 클릭 시 무시
      if (ref.current && ref.current.contains(e.target)) {
        return;
      }
      // 모달 밖을 클릭 시 모달 닫기
      handleShowModal();
    };
    document.addEventListener("mousedown", modalListener);
    return () => {
      document.removeEventListener("mousedown", modalListener);
    };
  }, [$isVisibleModal, handleShowModal]);

  return (
    <ModalContainer $isVisibleModal={$isVisibleModal} >
        <ModalBox ref={ref} className="modal">
          <ModalText>
            {children}
          </ModalText>
        </ModalBox>
    </ModalContainer>
  )
};

export default ModalTemplate;