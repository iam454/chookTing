import { useLocation } from "react-router-dom";
import Post from "../../components/Post";
import Layout from "../../components/Layout";

const MyDetailPage = ({ image }) => {
  const location = useLocation();
  const photoInfo = { ...location.state };

  //닫을 때 이미지가 커지는 현상... 해결 필요

  return (
    <Layout>
      <Post.My
        id={photoInfo.phtoId}
        image={image}
        info="뭐지"
        isLikedPost={false}
        numberLikes={photoInfo.likeCount}
        numberInstas={photoInfo.snsViewCount}
        isLoading={false}
      />
    </Layout>
  );
};

export default MyDetailPage;
