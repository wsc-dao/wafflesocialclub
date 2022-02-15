import Image from "next/image";
import icon from "../public/chantilly.png"
import styled from "styled-components";

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
export const DataCard = ({label, value}: { label: string; value: string; }) => <StyledDataCard>
  <div>
    <Image src={icon} alt=""/>

  </div>
  <b>{value}</b>
  <span>{label}</span>
</StyledDataCard>;
