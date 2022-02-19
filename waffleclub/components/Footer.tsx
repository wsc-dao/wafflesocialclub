import styled from "styled-components";
import {useMemo} from "react";
import {Socials} from "./Socials";
import Image from "next/image";
import logoBlack from "../public/logo-black.png";
import {YellowCream} from "../consts";

const StyledFooter = styled.footer`
  display: flex;
 // flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 6rem 2rem;
  gap: 2rem;
  color: ${YellowCream};

  img {
    width: 200px;
  }

  p {
    width: 100%;
    text-align: center;
  }

  .socials {
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 900px;
    width: 50vw;

    a {
      width: 25px;

      svg {
        fill: ${YellowCream};
      }
    }
  }
`;

export const Footer = () => {
  const year = useMemo(() => new Date().getFullYear(), []);

  return <StyledFooter>
    <Image
      src={logoBlack}
      alt=""
      width={200}
      height={200}
    />
    <p>©WaffleSocialClub {year}. All Rights Reserved.</p>
    <Socials/>
  </StyledFooter>;
}
