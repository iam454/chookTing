import { styled } from "styled-components";

const Container = styled.div`
  width: 80%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;
const TitleContainer = styled.div`
  width: 100%;
  height: 32px;
  margin-left: 16px;
  margin-bottom: 12px;
`;
const HashTagContainer = styled.div`
  height: 24px;
  margin-left: 16px;
  margin-bottom: 16px;
`;

const CardInfoContainer = ({ title, hashtag }) => {
  return (
    <Container>
      <TitleContainer>{title}</TitleContainer>
      <HashTagContainer>{hashtag}</HashTagContainer>
    </Container>
  );
};

export default CardInfoContainer;
