import React, { useEffect } from "react";
import Layout from "./Layout";
import { instance } from "../apis";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import HeartLoader from "./HeartLoader";
import { kakaoLogin } from "../apis/api/user";

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

const KakaoHandler = () => {
  const location = useLocation();
  const code = new URLSearchParams(location.search).get("code");

  useEffect(() => {
    kakaoLogin({ code })
      .then((res) => console.log(res))
      .catch((e) => console.log(e));
  }, []);

  return (
    <Layout>
      <Container>
        <HeartLoader />
      </Container>
    </Layout>
  );
};

export default KakaoHandler;
