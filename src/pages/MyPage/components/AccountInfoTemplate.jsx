import { styled } from "styled-components";
import ImgButton from "./ImgButton";

const Container = styled.div`
  height:300px;
  /* background-color: white; */
`;

const Box = styled.div`
  width: 350px;
  height: 100%;
  /* background-color: orange; */
  margin: 20px auto 0;
  text-align: center;
`;

const KakaoAccountBox = styled.div`
  border-bottom: 1px solid white;
  padding-bottom: 16px;
`;

const ProfileImg = styled.img`
  width: 64px;
  height: 64px;
  display: block;
  margin: 0 auto;
  border-radius: 50%;
`;

const UserName = styled.p`
  margin: 8px 0 0;
  `;

const UserEmail = styled.p`
  `;

const Text = styled.p`
  font-size: ${props => props.fontSize};
  margin: ${props => props.$margin};
`;

const InstaConnectionBox = styled.div`
  margin-top: 8px;
`;

const Icon = styled.img`
  width: ${props => props.width};
  height: ${props => props.height};
  display: block; 
  filter: ${(props) => {
    if (!props.$isInstaConnected) {
      return "grayScale(100%)";
    } else {
      return "none";
    }
  }};
`;

const AmountInfoContainer = styled.div`
  margin-top: 16px;
  border-bottom: 1px solid white;
`;

const AmountBox = styled.div`
  display: flex;
  justify-content: space-between;
`;

const RecievedBox = styled.div`
  width: 33%;
`;


const AccountInfoTemplate = () => {
  const profileImg = "./icons/accountIcon.png";
  const userName = "카카오";
  const userEmail = "kakao@email.com";

  const recievedLikes = 60;
  const recievedFirework = 30;
  const myFireworks = 200;

  const isInstaConnected = true;

  return (
    <>
    <Container>
      <Box>
        <KakaoAccountBox>
          <ProfileImg src={profileImg} alt="accountIcon"/>
          <UserName>{userName}</UserName>
          <UserEmail>{userEmail}</UserEmail>
        </KakaoAccountBox>

        <InstaConnectionBox>
          <Text fontSize="12px" $margin="10px 0 16px 0">포토카드에 SNS 계정을 연결해서 공유해 보세요.</Text>
          <ImgButton 
            onClick={() => {
              //연결 해제
              console.log("instagramConnection")
            }}
          >
            <Icon 
              src="./icons/instagram.png" 
              alt="instaIcon" 
              $isInstaConnected={isInstaConnected}
              width="24px"
              height="24px"
            />
          </ImgButton>
          <Text fontSize="12px" $margin="6px 0 0 0">{isInstaConnected ? "연결해제" : "연결하기"}</Text>
        </InstaConnectionBox>

        <AmountInfoContainer>
          <AmountBox>
            <RecievedBox>
              <Text fontSize="24px">{recievedLikes}</Text>
              <Text fontSize="12px" $margin="8px">내가 받은 좋아요</Text>
            </RecievedBox>
            <RecievedBox>
              <Text fontSize="24px">{recievedFirework}</Text>
              <Text fontSize="12px" $margin="8px">내가 받은 폭죽</Text>
            </RecievedBox>
            <RecievedBox>
              <Text fontSize="24px">{myFireworks}</Text>
              <Text fontSize="12px" $margin="8px">내 폭죽
                <ImgButton width="12px" height="12px"
                  onClick={() => {
                    console.log("getFireworkInfo")
                  }}
                >
                  <Icon src="./icons/info.png" alt="getFireworkInfo" width="12px" height="12px"/>
                </ImgButton>
              </Text>
            </RecievedBox>
          </AmountBox>
        </AmountInfoContainer>

      </Box>
    </Container>
    </>
  );
};

export default AccountInfoTemplate;