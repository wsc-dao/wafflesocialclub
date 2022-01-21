import styled from "styled-components";
import {useMemo} from "react";

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding-bottom: 6rem;
  gap: 2rem;

  img {
    width: 200px;
  }

  caption {
    width: 100%;
  }
`;

export const Footer = () => {
  const year = useMemo(() => new Date().getFullYear(), []);

  return <StyledFooter>
    <img src="/logo-black.png" alt=""/>
    <caption>©WaffleSocialClub {year}. All Rights Reserved.</caption>
  </StyledFooter>;
}
