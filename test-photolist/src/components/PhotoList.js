import React from "react";
import styled from "styled-components";
import Photo from "./Photo";

const PhotoListContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 30px;
`;

const Wrapper = styled.div`
    display: flex;
    gap: 30px;
`;

const Title = styled.p`
  font-size: 25px;
  line-height: 30px;
  font-weight: bold;
`;

const PhotoList = ({ title, photos }) => {
  return (
    <PhotoListContainer>
      <Title>{title}</Title>
      <Wrapper>
        {photos.map((photo) => {
          return (
            <Photo
              key={photo.id}
              id={photo.id}
              image={photo.img}
              title={photo.title}
              buttonLabel={title === "Recommendation" ? "Add" : "Remove"}
            />
          );
        })}
      </Wrapper>
    </PhotoListContainer>
  );
};

export default PhotoList;
