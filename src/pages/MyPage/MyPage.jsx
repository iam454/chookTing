import React from "react";
import Layout from "../../components/Layout";
import Container from "./components/Container";
import AccountInfoTemplate from "./components/AccountInfoTemplate";
import MyAlbumTemplate from "./components/MyAlbumTemplate";

const MyPage = () => {

  const userInfo = {
    profileImg : "./icons/accountIcon.png",
    userName : "카카오",
    userEmail : "kakao@email.com"
  }

  const totalCount = {
    totalLikes : 60,
    totalFirework : 30,
    myFireworks : 200
  }

  const isInstaConnected = true;
  
  // const photoData ={
  //     success: true,
  //     response : [{
  //       id: 1,
  //       imgSrc: "./sample5.png",
  //       univercity: "전남대학교" ,
  //       date: "2023.08.23",
  //       likeCount: "652",
  //       snsViewCount: "134"
  //     },{
  //       id: 2,
  //       imgSrc: "./sample.png",
  //       univercity: "전남대학교" ,
  //       date: "2023.08.23",
  //       likeCount: "60",
  //       snsViewCount: "17"
  //     }
  //   ],
  //    error: null
  // }


  const photos = [
    { 
      id: 1,
      imgSrc: "./sample.png",
      univercity: "전남대학교" ,
      date: "2023.08.23",
      likeCount: "60",
      snsViewCount: "17"
    },
    { 
      id: 2,
      imgSrc: "./sample5.png",
      univercity: "전남대학교" ,
      date: "2023.08.22",
      likeCount: "452",
      snsViewCount: "124"
    }
  ]

  return (
    <Layout>
      <Container>
        <AccountInfoTemplate 
          userInfo={userInfo}
          totalCount={totalCount}
          isInstaConnected={isInstaConnected}
        />
        <MyAlbumTemplate photos={photos}/>
      </Container>
    </Layout>
  )
};

export default MyPage;
