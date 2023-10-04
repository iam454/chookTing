import React from "react";
import Layout from "../../components/Layout";
import Container from "./components/Container";
import AccountInfoTemplate from "./components/AccountInfoTemplate";
import MyAlbumTemplate from "./components/MyAlbumTemplate";
import PhotoList from "./components/PhotoList";


const MyPage = () => {

  const profileImg = "./icons/accountIcon.png";
  const userName = "카카오";
  const userEmail = "kakao@email.com";

  const totalLikes = 60;
  const totalFirework = 30;
  const myFireworks = 200;

  const isInstaConnected = true;

  const photos = [
    { 
      id: 1,
      info:[
        {
          id: 1,
          imgSrc: "./sample.png",
          univercity: "전남대학교" ,
          date: "2023.08.23",
          likeCount: "60",
          snsViewCount: "17"
        }
      ]
    },
    { 
      id:2,
      info:[
        {
          id: 2,
          imgSrc: "./sample5.png",
          univercity: "전남대학교" ,
          date: "2023.08.22",
          likeCount: "452",
          snsViewCount: "124"
        }
      ]
    }
]

  return (
    <Layout>
      <Container>
      <AccountInfoTemplate 
        profileImg={profileImg}
        userName={userName}
        userEmail={userEmail}

        totalLikes={totalLikes} 
        totalFirework={totalFirework}
        myFireworks={myFireworks}

        isInstaConnected={isInstaConnected}
      />
      <MyAlbumTemplate />
      <PhotoList
      photos={photos}
        />
      </Container>
    </Layout>
  )
};

export default MyPage;
