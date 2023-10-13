import { styled } from "styled-components";
import PhotoList from "./PhotoList";

const Layout = styled.div`
  width: 350px;
  margin: 0 auto;
`;

const UploadBox = styled.div`
  width: 100%;
  height: 110px;
  border-radius: 10px;
  border: 1px solid #5f6368;
  margin-top: 8px;
`;

const UploadButton = styled.button`
  background: none;
  border: none;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
  cursor: pointer;
`;

const UploadIcon = styled.img`
  width: 36px;
  height: 36px;
`;

const UploadText = styled.p`
  font-size: 20px;
  color: #5f6368;
`;

const MyAlbumTemplate = ({ photos }) => {
  return (
    <Layout>
      <UploadBox>
        <UploadButton
          onClick={() => {
            console.log("upload");
          }}
        >
          <UploadIcon src="./icons/upload.png" alt="UploadIcon" />
          <UploadText>사진을 업로드해 보세요!</UploadText>
        </UploadButton>
      </UploadBox>
      <PhotoList photos={photos} />
    </Layout>
  );
};

export default MyAlbumTemplate;
