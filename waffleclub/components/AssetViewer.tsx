import {FC, useState} from "react";
import styled from "styled-components";
import {Carousel} from "./Carousel";

export const AssetViewer: FC<{ assets: any }> = ({assets}) => {
  const labels = Object.keys(assets);
  const [selectedZone, setSelectedZone] = useState(labels[0])

  return <StyledAssetViewer>
    <ul>
      {Object.keys(assets).map((label) => <li key={label} className={label === selectedZone ? 'active' : ''}
                                              onClick={() => setSelectedZone(label)}>{label}</li>)}
    </ul>
    <Carousel images={assets[selectedZone]}/>
  </StyledAssetViewer>
}

const StyledAssetViewer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 4rem;
  padding-top: 1rem;

  ul {
    list-style: none;

    li {
      cursor: pointer;
      text-transform: uppercase;

      &:hover {
        transform: scale(1.1);
      }
    }

    .active {
      font-weight: bold;
    }
  }

  img {
    border-radius: 30px;
  }
`
