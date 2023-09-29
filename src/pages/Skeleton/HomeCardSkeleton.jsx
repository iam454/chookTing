import { styled } from "styled-components";

import CardInfoContainer from "../../components/CardInfoContainer";
import SkeletonTitle from "./SkeletonTitle";
import SkeletonHashTag from "./SkeletonHashTag";
import HomeCardButtonContainer from "../../components/HomeCardButtonContainer";
import SkeletonIcon from "./SkeletonIcon";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const HomeCardSkeleton = () => {
  return (
    <Container>
      <CardInfoContainer
        title={<SkeletonTitle />}
        hashtag={<SkeletonHashTag />}
      />
      <HomeCardButtonContainer
        icon1={<SkeletonIcon />}
        icon2={<SkeletonIcon />}
        icon3={<SkeletonIcon />}
      />
    </Container>
  );
};

export default HomeCardSkeleton;
