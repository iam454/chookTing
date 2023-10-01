import { styled } from "styled-components";

// const Container = styled.div`
//   width: 100%;
//   height: 741px;
//   display: flex;
//   align-items: center;
// `;

const Icon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: rgba(165, 165, 165, 0.2);
  animation: skeleton-gradient 2s infinite ease-in-out;
  @keyframes skeleton-gradient {
    0% {
      background-color: rgba(165, 165, 165, 0.2);
    }
    50% {
      background-color: rgba(165, 165, 165, 0.4);
    }
    100% {
      background-color: rgba(165, 165, 165, 0.2);
    }
  }
`;

const SkeletonIcon = () => {
  return <Icon />;
};

export default SkeletonIcon;
