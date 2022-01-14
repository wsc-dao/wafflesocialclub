import styled from "styled-components";
import {useEffect, useRef, useState} from "react";

const Figure = styled.figure`
  position: relative;
  width: 450px;
  height: 450px;
  max-width: 100%;
  // background: url("/frame.png") center center no-repeat;
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
    //border-radius: 7px;
    &.frame {
      width: 450px;
      max-width: 100%;
      height: 450px;
    }
  }
`;
type ImagesProps = {
  sources: string[];
};

export const Images = ({sources}: ImagesProps) => {
  const [counter, setCounter] = useState(0);
// @ts-ignore
  const interval = useRef<Timer>();

  useEffect(() => {
    interval.current = setInterval(() => {
      setCounter(counter + 1);
    }, 200);

    return () => {
      clearInterval(interval.current);
    };
  });
  return <Figure>
    <img src={sources[counter % sources.length]} alt="" width={300} height={300}/>
    <img src="/frame.png" alt="" className={'frame'}/>
  </Figure>
}
