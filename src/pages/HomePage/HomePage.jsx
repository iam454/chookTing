import React from "react";
import Layout from "../../components/Layout";
import { SkeletonPage } from "../SkeletonPage/SkeletonPage";

const HomePage = () => {
  return (
    <>
      <Layout>
        <SkeletonPage.Home />
      </Layout>
    </>
  );
};

export default HomePage;
