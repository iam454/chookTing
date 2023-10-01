import { styled } from "styled-components";

const Count = styled.div`
  width: 48px;
  height: 24px;
  margin-left: 16px 0;
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

const SkeletonCount = () => {
  return <Count />;
};

export default SkeletonCount;
