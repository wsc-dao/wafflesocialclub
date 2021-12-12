import styled from "styled-components";
import {HtmlHTMLAttributes, useEffect, useState} from "react";

const Figure = styled.figure`
  position: relative;
  width: 330px;
  height: 330px;
  background: url("https://esquilo.io/png/thumb/ulrkkcGQ6bihENU-Square-Frame-PNG-Transparent-Picture.png") center center no-repeat;
  background-size: contain;
  img {
    position: absolute;
    top: 50%;
    bottom: 50%;
    right: 50%;
    left: 50%;
    transform: translate3d(-50%, -50%, 0);
    width: 300px;
    height: 300px;
    border-radius: 7px;
  }
`;
type ImagesProps = {
  sources: string[];
};

export const Images = ({sources}:ImagesProps) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter(counter + 1);
    }, 200);

    return () => {
      clearInterval(interval);
    };
  });
  return <Figure>
    <img src={sources[counter % sources.length]} alt="" width={300} height={300}/>
  </Figure>
}
