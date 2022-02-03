import styled from "styled-components";
import {useMemo} from "react";
import {Socials} from "./Socials";

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem 0;
  gap: 2rem;

  img {
    width: 200px;
  }

  p {
    width: 100%;
    text-align: center;
  }

  .socials {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    max-width: 900px;
    width: 50vw;
    a {
      width: 25px;
      svg {
        
      }
    }
  }
`;

export const Footer = () => {
  const year = useMemo(() => new Date().getFullYear(), []);

  return <StyledFooter>
    <img src="/logo-black.png" alt=""/>
    <Socials/>
    <p>©WaffleSocialClub {year}. All Rights Reserved.</p>
  </StyledFooter>;
}
