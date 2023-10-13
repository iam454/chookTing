import { styled } from "styled-components";

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

const KakaoAccount = ({profileImg, userName, userEmail}) => {

  return(
    <KakaoAccountBox>
      <ProfileImg src={profileImg} alt="accountIcon"/>
      <UserName>{userName}</UserName>
      <UserEmail>{userEmail}</UserEmail>
    </KakaoAccountBox>
  )
};

export default KakaoAccount;