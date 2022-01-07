import styled from "styled-components";
import Link from "next/link";
import {WalletMultiButton} from "@solana/wallet-adapter-react-ui";
import {useEffect, useState} from "react";

const CustomHeader = styled.header<{ scrolled: Boolean }>`
  position: fixed;
  width: 100vw;
  z-index: 999;
  background-color: ${props => !props.scrolled ? 'transparent' : '#b81f2e'};
  transition: background-color 300ms ease-in-out;

  ul {
    max-width: 1300px;
    padding: 1rem;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style-type: none;

    a {
      color: ${props => props.scrolled ? '#f5d8ad' : '#b81f2e'};
      transition: color 300ms ease-in-out;

      font-weight: bold;
      letter-spacing: 2px;
      text-transform: uppercase;
    }
  }

  .balance {
    max-width: 300px;
    display: flex;
    flex-direction: column;
    align-items: center;
    color: #ff9900;

    .wallet-adapter-button-trigger {
      background: #f5d8ad;
      color: #B8202E;
    }

    p {
      margin-top: 15px;
      margin-bottom: 0;
      //noinspection CssInvalidPropertyValue
      .currency {
        -webkit-background-clip: text;
        background-clip: text;
        background-image: linear-gradient(to right bottom, rgb(0, 255, 163), rgb(3, 225, 255), rgb(220, 31, 255));
        color: transparent;
      }
    }
  }
`
type HeaderProps = {
  connected: Boolean;
  balance: number;
};

export const Header = ({connected, balance}: HeaderProps) => {
  const [navbar, setNavbar] = useState(false)

  const changeBackground = () => {
    if (window.scrollY >= 250) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  }
  useEffect(() => {
    changeBackground();
    // adding the event when scroll change background
    window.addEventListener("scroll", changeBackground)
  })
  return <CustomHeader scrolled={navbar}>
    <nav>
      <ul>
        <li><Link href={'/'}><img src="/waffledao_rebrand_logo.png" alt="logo"/></Link></li>
        <li><Link href={'/roadmap'}>Roadmap</Link></li>
        <li><Link href={'/mint'}>Mint</Link></li>
        <li><Link href={'#about'}>About</Link></li>
        <li><Link href={'#team'}>Waffle Team</Link></li>
        <li><Link href={'#mynft'}>Collection</Link></li>
        <li><Link href={'#faq'}>FAQ</Link></li>
        <li>
          <div className="balance">
            <WalletMultiButton/>
            {connected && (<p className="">Balance:
                <span className="value">{' '}{balance.toFixed(2)}</span>
                <span className="currency">{' '}SOL</span>
              </p>
            )}
          </div>
        </li>
      </ul>
    </nav>
  </CustomHeader>
}
