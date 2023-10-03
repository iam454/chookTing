import React from "react";
import { styled } from "styled-components";

const Name = styled.div`
  height: 32px;
  margin-bottom: 4px;
  font-size: 22px;
  line-height: 1.4;
  text-shadow: 2px 2px 10px black;
`;

const Description = styled.ul`
  height: 24px;
  font-size: 16px;
  display: flex;
  gap: 8px;
`;

const Hashtag = styled.li`
  height: 100%;
  text-shadow: 2px 2px 10px black;
`;

const PostInfos = ({ name, hashtags }) => {
  return (
    <>
      <Name>{name}</Name>
      <Description>
        {hashtags.map((hashtag, index) => {
          return <Hashtag key={hashtag + index}>{hashtag}</Hashtag>;
        })}
      </Description>
    </>
  );
};

export default PostInfos;
