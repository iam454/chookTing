import React from "react";
import Layout from "../../components/Layout";
import { Link } from "react-router-dom";

const MyPage = () => {
  return (
    <Layout>
      <Link to="setting">설정버튼</Link>
    </Layout>
  );
};

export default MyPage;
