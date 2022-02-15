import Image from "next/image";
import Chantilly from "../public/chantilly.png";
import Eggs from "../public/ingredients/Eggs.svg";
import Butter from "../public/ingredients/Butter.svg";
import Milk from "../public/ingredients/Milk.svg";
import Water from "../public/ingredients/Water.svg";
import Flour from "../public/ingredients/Flour.svg";
import styled from "styled-components";
import {useMemo} from "react";

const StyledDataCard = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  justify-content: center;
  gap: 10px;

  div {
    grid-column: 1 / span 2;
    width: 110px;
    margin: auto;
  }
`;
export const DataCard = ({label, value}: { label: string; value: string; }) => {
  const icon = useMemo(() => {
    switch (label) {
      case 'Eggs':
        return Eggs;
      case 'Water':
        return Water;
      case 'Milk':
        return Milk;
      case 'Butter':
        return Butter;
        case 'Flour':
        return Flour;
      default:
        return Chantilly;
    }
  }, [label])
  return <StyledDataCard>
    <div>
      <Image src={icon} alt=""/>

    </div>
    <b>{value}</b>
    <span>{label}</span>
  </StyledDataCard>;
}
