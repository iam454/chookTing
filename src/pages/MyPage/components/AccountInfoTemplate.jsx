import { styled } from "styled-components";
import Button from "./Button";
import Text from "./Text";
import { useNavigate } from "react-router-dom";

const Container = styled.div``;

const Box = styled.div`
  width: 350px;
  height: 100%;
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

const InstaConnectionBox = styled.div`
  margin-top: 8px;
`;

const ImgButton = styled(Button)`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
`;

const SettingsImgButton = styled.button`
  border: none;
  background: none;
  position: absolute;
  top: 10px;
  right: 20px;
  cursor: pointer;
`;

const Icon = styled.img`
  width: ${(props) => props.width};
  height: ${(props) => props.height};
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
  text-align: center;
`;

const MyfireworkText = styled.p`
  margin: 8px 0 0 0;
  display: flex;
  font-size: ${(props) => props.fontSize};
  justify-content: center;
  align-items: center;
  gap: 2px;
`;

const AccountInfoTemplate = ({ userInfo, totalCount, isInstaConnected }) => {
  const navigate = useNavigate();

  return (
    <Container>
      <Box>
        <KakaoAccountBox>
          <ProfileImg src={userInfo.profileImg} alt="accountIcon" />
          <SettingsImgButton
            onClick={() => {
              navigate("/profile/setting");
            }}
          >
            <Icon
              src="./icons/setting.png"
              alt="instaIcon"
              $isInstaConnected={isInstaConnected}
              width="24px"
              height="24px"
            />
          </SettingsImgButton>
          <Text $margin="8px 0 0 0">{userInfo.userName}</Text>
          <Text>{userInfo.userEmail}</Text>
        </KakaoAccountBox>

        <InstaConnectionBox>
          <Text fontSize="12px" $margin="10px 0 16px 0">
            포토카드에 SNS 계정을 연결해서 공유해 보세요.
          </Text>
          <ImgButton
            onClick={() => {
              //연결 해제
              console.log("instagramConnection");
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
          <Text fontSize="12px" $margin="6px 0 0 0">
            {isInstaConnected ? "연결완료" : "연결하기"}
          </Text>
        </InstaConnectionBox>

        <AmountInfoContainer>
          <AmountBox>
            <RecievedBox>
              <Text fontSize="24px">{totalCount.totalLikes}</Text>
              <Text fontSize="12px" $margin="8px">
                내가 받은 좋아요
              </Text>
            </RecievedBox>
            <RecievedBox>
              <Text fontSize="24px">{totalCount.totalFirework}</Text>
              <Text fontSize="12px" $margin="8px">
                내가 받은 폭죽
              </Text>
            </RecievedBox>
            <RecievedBox>
              <Text fontSize="24px">{totalCount.myFireworks}</Text>
              <MyfireworkText fontSize="12px">
                내 폭죽
                <ImgButton
                  width="12px"
                  height="12px"
                  onClick={() => {
                    console.log("getFireworkInfo");
                  }}
                >
                  <Icon
                    src="./icons/info.png"
                    alt="getFireworkInfo"
                    width="12px"
                    height="12px"
                  />
                </ImgButton>
              </MyfireworkText>
            </RecievedBox>
          </AmountBox>
        </AmountInfoContainer>
      </Box>
    </Container>
  );
};

export default AccountInfoTemplate;
