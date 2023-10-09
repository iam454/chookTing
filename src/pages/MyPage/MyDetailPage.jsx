import { useLocation } from "react-router-dom";
import Post from "../../components/Post";
import Layout from "../../components/Layout";

const MyDetailPage = (  ) => {
  const location = useLocation();
  const photoInfo = { ...location.state }

  return (
    <Layout>
      <Post.My
        id={photoInfo.phtoId}
        image={photoInfo.imgSrc}
        info="뭐지"
        isLikedPost={false}
        numberLikes={photoInfo.likeCount}
        numberInstas={photoInfo.snsViewCount}
        isLoading={false}
      />
    </Layout>
  )
};

export default MyDetailPage;