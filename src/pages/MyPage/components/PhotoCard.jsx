import { styled } from "styled-components";
import Text from "./Text";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Layout = styled(motion.div)`
  border: none;
  text-align: start;
  width: 350px;
  height: 220px;
  border-radius: 10px;
  background-color: ${props => props.theme.album.white};
  color: ${props => props.theme.album.black};
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

const Box = styled.div`
  width: 314px;
  height: 188px;
  display: flex;
  position: relative;
`;

const Photo = styled.img`
  width: 130px;
  height: 188px;
`;

const InfoBox = styled.div`
  margin-left: 20px;
  width: 164px;
  height: 188px;
  `;

const NumericBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
  position: absolute;
  right: 0;
  bottom: 0;
`;

const Icon = styled.img`
  width: 20px;
  height: 20px;
`;

const LikeBox = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;
`;

const InstaBox = styled(LikeBox)`
  margin-left: 10px;
`;

const PhotoCard = ({ photoId, imgSrc, univercity, date, likeCount, snsViewCount}) => {
  const navigate = useNavigate();

  return (
    <Layout 
      layoutId={"my" + photoId}
      onClick={() => {
      navigate(`/profile/post/${photoId}`, {
      state: {
        photoId: photoId,
        imgSrc: imgSrc,
        univercity: univercity,
        date: date,
        likeCount: likeCount,
        snsViewCount: snsViewCount
      }
      })
    }}>
      <Box>
        <Photo src={imgSrc} alt="photo"/>
        <InfoBox>
          <Text fontSize="20px" >{univercity}</Text>
          <Text fontSize="18px" $margin="12px 0 0 0" >{date}</Text>
          <NumericBox> 
            <LikeBox>
              <Icon src="./icons/like.png" alt="likeIcon"/>
              <Text fontSize="20px" >{likeCount}</Text>
            </LikeBox>
            <InstaBox>  
              <Icon src="./icons/instagram.png" alt="likeIcon"/>
              <Text fontSize="20px" >{snsViewCount}</Text>
            </InstaBox>
          </NumericBox>
        </InfoBox>
      </Box>
    </Layout>
  )
  
}

export default PhotoCard;