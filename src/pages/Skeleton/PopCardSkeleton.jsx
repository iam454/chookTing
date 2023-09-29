import { styled } from "styled-components";

import CardInfoContainer from "../../components/CardInfoContainer";
import SkeletonTitle from "./SkeletonTitle";
import SkeletonHashTag from "./SkeletonHashTag";

import PopCardButtonContainer from "../../components/PopCardButtonContainer";
import SkeletonIcon from "./SkeletonIcon";
import SkeletonCount from "./SkeletonCount";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const PopCardSkeleton = ({ icon1, icon2, likeCount, icon3 }) => {
  return (
    <Container>
      <CardInfoContainer
        title={<SkeletonTitle />}
        hashtag={<SkeletonHashTag />}
      />
      <PopCardButtonContainer
        icon1={<SkeletonIcon />}
        icon2={<SkeletonIcon />}
        likeCount={<SkeletonCount />}
        icon3={<SkeletonIcon />}
      />
    </Container>
  );
};

export default PopCardSkeleton;
