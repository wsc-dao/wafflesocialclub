import styled from "styled-components";
import {useEffect, useRef, useState} from "react";
import Image from "next/image";
import frame from "../public/frame.png";

const Figure = styled.figure`
  position: relative;
  width: 450px;
  height: 450px;
  max-width: 100%;
  // background: url("/frame.png") center center no-repeat;
  background-size: contain;

  span {
    position: absolute !important;
    top: 50% !important;
    bottom: 50% !important;
    right: 50% !important;
    left: 50% !important;
    margin: 0 !important;
    transform: translate3d(-50%, -50%, 0);
  }

  img {
    position: absolute;
    width: 300px;
    height: 300px;

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
    <Image src={sources[counter % sources.length]} alt="" layout={"fixed"} width={300} height={300}/>
    <Image src={frame} alt="" className={'frame'} layout={"fixed"} width={450} height={450}/>
  </Figure>
}
