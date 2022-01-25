import styled from "styled-components";
import Link from "next/link";
import {WalletMultiButton} from "@solana/wallet-adapter-react-ui";
import {useEffect, useState} from "react";
import {Red, YellowCream} from "../consts";

const CustomHeader = styled.header<{ scrolled: Boolean }>`
  position: fixed;
  padding: 1rem;
  width: 100vw;
  z-index: 999;
  background-color: ${props => !props.scrolled ? 'transparent' : Red};
  box-shadow: ${props => props.scrolled ? '0 10px 10px ' + '#911924' : 'unset'};
  transition: background-color 300ms ease-in-out, box-shadow 300ms ease-in-out;

  nav {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;

    .menu-button {
      position: absolute;
      z-index: 2;
      right: 1rem;
      top: 1rem;
      @media (min-width: 778px) {
        display: none;
      }
    }

    .logo {
      max-width: 60%;
      max-height: 70px;
      @media (min-width: 778px) {
        display: inline-block;
      }
    }
  }

  .nav {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    gap: 2rem;
    margin: 0;
    background: ${Red};
    list-style-type: none;
    max-width: 1300px;
    max-height: 100vh;
    padding: 1rem;
    position: absolute;
    top: -101vh;
    right: 0;
    transition: transform 500ms ease-in-out;
    width: 100vw;

    @media (min-width: 778px) {
      background: unset;
      flex-direction: row;
      top: unset;
      right: unset;
      width: unset;
      position: unset;
      transform: unset;
      padding: unset;
      
      &.open {
        transform: translateY(0);
      }
    }

    &.open {
      transform: translateY(101vh);
    }

    .logo {
      &.mobile {
        display: inline-block;
        max-height: 75px;

        @media (min-width: 778px) {
          display: none;
        }
      }
    }

    a {
      color: ${YellowCream};
      transition: color 300ms ease-in-out;

      font-weight: bold;
      letter-spacing: 2px;
      text-transform: uppercase;
    }
  }

  .balance {

    display: flex;
    flex-direction: column;
    align-items: center;
    color: #ff9900;

    @media (min-width: 778px) {
      max-width: 300px;
    }

    .wallet-adapter-button-trigger {
      background: ${YellowCream};
      color: ${Red};
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
  const [open, setOpen] = useState(false);
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
      <Link href={'/'}><img  className={'logo desktop'} src="/waffle-icon-black.png" alt="logo"/></Link>
      <ul className={`nav ${open ? 'open' : ''}`}>
        <Link href={'/'}><img className={'logo mobile'}  src="/waffle-icon-black.png.png" alt="logo"/></Link>
        <li><Link href={'/niet/publiek/mint#roadmap'}>Roadmap</Link></li>
        <li><Link href={'/niet/publiek/mint'}>Mint</Link></li>
        <li><Link href={'/niet/publiek/roadmap.deck'}>About</Link></li>
        <li><Link href={'/niet/publiek/mint#team'}>Waffle Team</Link></li>
        <li><Link href={'/niet/publiek/mint#collection'}>Collection</Link></li>
        <li><Link href={'/niet/publiek/mint#faq'}>FAQ</Link></li>
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
      <button className={'menu-button'} onClick={() => setOpen(!open)}>menu</button>
    </nav>
  </CustomHeader>
}
