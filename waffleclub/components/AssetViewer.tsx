import {FC, useState} from "react";
import styled from "styled-components";
import {Carousel} from "./Carousel";

export const AssetViewer: FC<{ assets: any }> = ({assets}) => {
  const labels = Object.keys(assets);
  const [selectedZone, setSelectedZone] = useState(labels[0])

  return <StyledAssetViewer>
    <ul>
      {Object.keys(assets).map((label) => <li key={label} className={label === selectedZone ? 'active' : ''}
      ><Button
        onClick={() => setSelectedZone(label)}
        primary={label !== selectedZone} label={label}/></li>)}
    </ul>
    <Carousel images={assets[selectedZone]}/>
  </StyledAssetViewer>
}
const Button: FC<any> = ({label, primary, onClick}) => (<a
  style={{
    background: primary ? '#B8202E' : '#f5d8ad',
    color: primary ? '#f5d8ad' : '#B8202E',
    padding: '12px 16px',
    borderRadius: '20px',
    fontWeight: 'bold',
    marginBottom:'0.2rem',
    display:'inline-block',
  }}
  onClick={onClick}>{label}</a>);

const StyledAssetViewer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  padding-top: 1rem;
  flex-direction: column;
  max-width: 100vw;

  .swiper {
    width: 100%;
  }

  @media (min-width: 778px) {
    flex-direction: row;
  }

  ul {
    list-style: none;

    li {
      cursor: pointer;
      text-transform: uppercase;
      margin-bottom: 1rem;

      &:hover {
        transform: scale(1.1);
      }
    }

    .active {
      font-weight: bold;
      position: relative;

      &:before {
       // content: '*';
        position: absolute;
        left: 0;
        top: 50%;
        transform: translate3d(-200%, -50%, 0);
      }
    }
  }

  img {
    border-radius: 30px;
  }
`
