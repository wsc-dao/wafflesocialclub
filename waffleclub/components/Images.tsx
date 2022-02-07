import styled from "styled-components";
import {useEffect, useRef, useState} from "react";
import Image from "next/image";
import frame from "../public/frame.png";

const Figure = styled.figure`
  position: relative;
  aspect-ratio: 1/1;
  width: 100%;
  height: 100%;
  max-width: 450px;
  max-height: 450px;
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

    &:first-of-type {
      height: unset !important;
      width: 66% !important;
      max-width: 300px !important;
      max-height: 300px !important;
      aspect-ratio: 1 / 1;
    }

    &:nth-of-type(2) {
      height: unset !important;
      width: 100% !important;
      max-width: 450px !important;
      max-height: 450px !important;
      aspect-ratio: 1 / 1;
    }
  }

  img {
    position: absolute;
    aspect-ratio: 1/1;
    width: 100%;
    //height: 100%;
    max-width: 300px;
    //max-height: 300px;

    &.frame {
      aspect-ratio: 1/1;
      width: 100%;
      //height: 100%;
      max-width: 450px;
      //max-height: 450px;
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
