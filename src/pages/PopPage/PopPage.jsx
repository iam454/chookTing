import React from "react";
import Layout from "../../components/Layout";
import Container from "./components/Container";
import Card from "./components/Card";
import { MasonryInfiniteGrid } from "@egjs/react-infinitegrid";

const photos = [
  {
    id: 1,
    image: "/sample.png",
    level: 1,
  },
  {
    id: 6,
    image: "/sample2.png",
    level: 2,
  },
  {
    id: 4,
    image: "/sample4.png",
    level: 2,
  },
  {
    id: 17,
    image: "/sample3.png",
    level: 3,
  },
  {
    id: 22,
    image: "/sample5.png",
    level: 1,
  },
  {
    id: 31,
    image: "/sample.png",
    level: 1,
  },
  {
    id: 171,
    image: "/sample3.png",
    level: 3,
  },
  {
    id: 34,
    image: "/sample4.png",
    level: 1,
  },
  {
    id: 92,
    image: "/sample.png",
    level: 3,
  },
  {
    id: 54,
    image: "/sample2.png",
    level: 2,
  },
];

const PopPage = () => {
  return (
    <Layout>
      <Container>
        <MasonryInfiniteGrid gap={8} isConstantSize={true} threshold={1000}>
          {photos.map((photo) => {
            return (
              <Card key={photo.id} level={photo.level} image={photo.image} />
            );
          })}
        </MasonryInfiniteGrid>
      </Container>
    </Layout>
  );
};

export default PopPage;
