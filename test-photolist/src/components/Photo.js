import React, { useContext, useState } from "react";
import { Context } from "../Context";
import styled from "styled-components";

const PhotoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  text-align: center;
`;

const Button = styled.button`
  margin: 10px auto 0;
  max-width: 80px;
  visibility: ${(props) => (props.buttonHidden ? "hidden" : "visable")};
`;

const PhotoTitle = styled.p`
  font-size: 16px;
  line-height: 16px;
  margin: 10px auto 0;
`;

const Img = styled.img``;

const Photo = ({ id, title, image, buttonLabel }) => {
  const [context, setContext] = useContext(Context);
  const [buttonHidden, setButtonHidden] = useState(true);

  const handleMouseOver = () => {
    setButtonHidden(false);
  };

  const handleMouseLeave = () => {
    setButtonHidden(true);
  };

  const arrayRemove = (arr, photoId) => {
    return arr.filter(function (ele) {
      return ele.id !== photoId;
    });
  };

  const handleClick = () => {
    let myList;
    let recommendation;
    if (buttonLabel === "Remove") {
      myList = arrayRemove(context.mylist, id);
      recommendation = [...context.recommendations, context.mylist.filter((photo) => photo.id === id )[0]];
    } else {
      recommendation = arrayRemove(context.recommendations, id);
      myList = [...context.mylist, context.recommendations.filter((photo) => photo.id === id )[0]]
    }
    setContext({mylist: myList, recommendations: recommendation});
  };

  return (
    <PhotoWrapper onMouseOver={handleMouseOver} onMouseLeave={handleMouseLeave}>
      <Img src={image} />
      <Button onClick={handleClick} buttonHidden={buttonHidden}>
        {buttonLabel}
      </Button>
      <PhotoTitle>{title}</PhotoTitle>
    </PhotoWrapper>
  );
};

export default Photo;
