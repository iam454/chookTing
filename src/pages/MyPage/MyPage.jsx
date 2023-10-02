import React from "react";
import Layout from "../../components/Layout";
import Container from "./components/Container";
import AccountInfoTemplate from "./components/AccountInfoTemplate";
import MyAlbumTemplate from "./components/MyAlbumTemplate";


const MyPage = () => {



  return (
    <Layout>
      <Container>
      <AccountInfoTemplate />
      <MyAlbumTemplate />
      </Container>
    </Layout>
  )
};

export default MyPage;
