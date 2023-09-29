import { styled } from "styled-components";

const Container = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const UpperContainer = styled.div`
  width: 100%;
  margin-top: 63px;
  display: flex;
  justify-content: center;
`;
const LowerContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-bottom: 16px;
`;

const IconContainer = styled.div`
  width: 48px;
  height: 48px;
  display: flex;
`;

const CountContainer = styled.div`
  margin-bottom: 16px;
`;

const PopCardButtonContainer = ({ icon1, icon2, likeCount, icon3 }) => {
  return (
    <Container>
      <UpperContainer>
        <IconContainer>{icon1}</IconContainer>
      </UpperContainer>
      <LowerContainer>
        <IconContainer>{icon2}</IconContainer>
        <CountContainer>{likeCount}</CountContainer>
        <IconContainer>{icon3}</IconContainer>
      </LowerContainer>
    </Container>
  );
};

export default PopCardButtonContainer;
