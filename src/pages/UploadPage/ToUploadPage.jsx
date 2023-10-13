import Layout from "../../components/Layout";
import styled from "styled-components";
import Post from "../../components/Post";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  width: 342px;
  height: 90%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  gap: 24px;
  background-color: rgba;
`;

const Text = styled.span`
  font-family: "Pretendard Variable", Pretendard, -apple-system,
    BlinkMacSystemFont, system-ui, Roboto, "Helvetica Neue", "Segoe UI",
    "Apple SD Gothic Neo", "Noto Sans KR", "Malgun Gothic", "Apple Color Emoji",
    "Segoe UI Emoji", "Segoe UI Symbol", sans-serif;
  font-size: ${(props) => props.size};
  font-weight: ${(props) => props.weight};
`;

const Icon = styled.img`
  width: ${(props) => props.width};
  height: auto;
`;

const ImgBox = styled.div`
  width: 304px;
  height: 457px;
  overflow: hidden;
  margin: 50px auto 0;
  box-shadow: 0px 0px 20px 5px rgba(0, 0, 0, 0.4);
`;

const ButtonBox = styled.div`
  margin-top: 25px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const Button = styled.button`
  border: none;
  background: none;
  cursor: pointer;
`;

const DownloadButton = styled(Button)`
  width: 44px;
  height: 44px;
  background-color: white;
  border-radius: 8px;
`;

const UploadButton = styled(Button)`
  cursor: pointer;
  width: 284px;
  height: 44px;
  background-color: white;
  border-radius: 8px;
  outline: none;
  color: black;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;

const RejectText = styled.span`
  color: #bebebe;
  font-size: 12px;
`;

const ToUploadPage = () => {
  const navigate = useNavigate();

  // 이미지 불러오기
  const imageSrc = "/sample.png";

  //불러온 이미지를 recoil에 저장

  return (
    <Layout>
      <Container>
        <ImgBox>
          <Post image={imageSrc} />
        </ImgBox>
        <ButtonBox>
          <DownloadButton
            onClick={() => {
              console.log("다운로드");
            }}
          >
            <Icon src="/icons/download.png" alt="download" width="24px" />
          </DownloadButton>
          <UploadButton
            onClick={() => {
              // 페이지 이동하기
              console.log("업로드");
            }}
          >
            <Icon src="/icons/fireworks.png" alt="폭죽 이미지" width="16px" />
            <Text size="16px" weight="500">
              축팅 업로드
            </Text>
          </UploadButton>
        </ButtonBox>
        <Button
          onClick={() => {
            navigate("/profile");
          }}
        >
          <RejectText>아니요, 안 할래요!</RejectText>
        </Button>
      </Container>
    </Layout>
  );
};

export default ToUploadPage;
