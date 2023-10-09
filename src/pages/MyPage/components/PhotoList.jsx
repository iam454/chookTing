import { styled } from "styled-components";
import PhotoCard from "./PhotoCard";

const Layout = styled.div`
  width: 350px;
  margin: 8px auto;
  display: flex;
  flex-direction: column;
  gap: 8px;
`;

const PhotoList = ({ photos}) => {
  // const [selectedId, setSelectedId] = useState(null)

  return (
    <Layout>
      {photos.map(photo => (
        <PhotoCard
          // layoutId={photo.id}
          // onClick={() => setSelectedId(photo.id)}
          key={photo.id}
          photoId={photo.id}
          imgSrc={photo.imgSrc}
          univercity={photo.univercity}
          date={photo.date}
          likeCount={photo.likeCount}
          snsViewCount={photo.snsViewCount}
        />
      ))}
    </Layout>
  );
}

export default PhotoList;