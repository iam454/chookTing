import { styled } from "styled-components";

import CardInfoContainer from "../../components/CardInfoContainer";
import SkeletonTitle from "./SkeletonTitle";
import SkeletonHashTag from "./SkeletonHashTag";

import MyCardButtonContainer from "../../components/MyCardButtonContainer";
import SkeletonIcon from "./SkeletonIcon";
import SkeletonCount from "./SkeletonCount";

const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
`;

const MyCardSkeleton = ({ icon1, likeCount, icon2, instagramCount, icon3 }) => {
  return (
    <Container>
      <CardInfoContainer
        title={<SkeletonTitle />}
        hashtag={<SkeletonHashTag />}
      />
      <MyCardButtonContainer
        icon1={<SkeletonIcon />}
        likeCount={<SkeletonCount />}
        icon2={<SkeletonIcon />}
        instagramCount={<SkeletonCount />}
        icon3={<SkeletonIcon />}
      />
    </Container>
  );
};

export default MyCardSkeleton;
