import React from "react";
import Layout from "../../components/Layout";
import Container from "./components/Container";
import Card from "./components/Card";

const photos = {
  first: {
    id: 1,
    image: "/sample.png",
    level: 3,
  },
  second: {
    id: 6,
    image: "/sample.png",
    level: 2,
  },
  third: {
    id: 4,
    image: "/sample.png",
    level: 1,
  },
};

const PopPage = () => {
  return (
    <Layout>
      <Container>
        <Card
          id={photos.first.id}
          level={photos.first.level}
          image={photos.first.image}
        />
        <Card
          id={photos.second.id}
          level={photos.second.level}
          image={photos.second.image}
        />
        <Card
          id={photos.third.id}
          level={photos.third.level}
          image={photos.third.image}
        />
      </Container>
    </Layout>
  );
};

export default PopPage;
