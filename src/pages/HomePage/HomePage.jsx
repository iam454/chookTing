import React from "react";
import Layout from "../../components/Layout";
import HomeCardSkeleton from "../Skeleton/HomeCardSkeleton";
import PopCardSkeleton from "../Skeleton/PopCardSkeleton";
import MyCardSkeleton from "../Skeleton/MyCardSkeleton";

const HomePage = () => {
  return (
    <>
      <Layout>
        {/* <HomeCardSkeleton /> */}
        {/* <PopCardSkeleton /> */}
        <MyCardSkeleton />
      </Layout>
    </>
  );
};

export default HomePage;
