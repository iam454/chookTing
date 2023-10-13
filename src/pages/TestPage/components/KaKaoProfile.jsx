import React from "react";
import styled from "styled-components";
import SettingButton from "./SettingButton";

const Profile = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 8px 0;
`;

const Image = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  background-color: ${(props) => props.theme.white};
  margin-bottom: 8px;
  object-fit: cover;
`;

const Name = styled.div`
  font-weight: 500;
  height: 20px;
  font-size: 16px;
`;

const Email = styled.div`
  height: 18px;
`;

const KaKaoProfile = ({ username, email, profileImage }) => {
  return (
    <Profile>
      <SettingButton
        onClick={() => {
          console.log("setting button clicked");
        }}
      />
      <Image src={profileImage} />
      <Name>{username}</Name>
      <Email>{email}</Email>
    </Profile>
  );
};

export default KaKaoProfile;
