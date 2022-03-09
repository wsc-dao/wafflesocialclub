import Image from "next/image";
import Link from "next/link";
import {useMemo} from "react";
import styled from "styled-components";
import {YellowCream} from "../consts";
import logoBlack from "../public/logo-black.png";
import {Socials} from "./Socials";

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  @media (min-width: 778px) {
    flex-direction: row;
  }
  justify-content: space-between;
  align-items: center;
  padding: 6rem 0;
  gap: 2rem;
  color: ${YellowCream};
  max-width: 90vw;
  margin: auto;

  a {
    color: ${YellowCream};
  }

  img {
    width: 200px;
  }

  p {
    width: 100%;
    text-align: center;
  }

  .socials {
    display: flex;
    align-items: center;
    width: 200px;
    gap: 25px;

    a {
      width: 35px;

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
    <p>
      ©WaffleSocialClub {year}. All Rights Reserved.<br/>
      <Link href="/niet/publiek/terms">Terms and conditions</Link>
    </p>
    <Socials/>
  </StyledFooter>;
}
