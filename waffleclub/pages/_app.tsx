import "../styles/globals.css";
import type {AppProps} from "next/app";
import dynamic from "next/dynamic";
import Head from 'next/head'
import {WalletBalanceProvider} from "../hooks/useWalletBalance";

require("@solana/wallet-adapter-react-ui/styles.css");

const WalletConnectionProvider = dynamic(
  () => import("../components/WalletConnection/WalletConnectionProvider"),
  {
    ssr: false,
  }
);

function MyApp({Component, pageProps}: AppProps) {
  return (<>
      <Head>
        <link rel="icon" href="/favicon.png"/>
      </Head>
      <WalletConnectionProvider>
        <WalletBalanceProvider>
          <Component {...pageProps} />
        </WalletBalanceProvider>
      </WalletConnectionProvider>
    </>
  );
}

export default MyApp;
