import { styled } from "styled-components";
import PhotoCard from "./PhotoCard";

const Layout = styled.div`
  width: 350px;
  margin: 8px auto 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const PhotoList = ({ photos }) => {
  const LenderPhotos = ({ photos }) => {
    let renderComponent = [];

    photos.forEach(photo => {
      renderComponent.push(photo.info.map(photo => {
      return (
        <PhotoCard 
        key ={photo.id}
        imgSrc = {photo.imgSrc}
        univercity = {photo.univercity}
        date = {photo.date}
        likeCount = {photo.likeCount}
        snsViewCount = {photo.snsViewCount}
        />
      )
      }))
    });
    return renderComponent;
  }


  return (
  <Layout>
    <LenderPhotos photos={photos}/>
  </Layout>
  );


}

export default PhotoList;