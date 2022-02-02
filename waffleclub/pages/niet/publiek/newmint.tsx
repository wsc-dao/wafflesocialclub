// import { useMemo } from "react";
import Head from "next/head";
import MintContainer from "../../../components/MintContainer";
import * as anchor from "@project-serum/anchor";
// import { clusterApiUrl } from "@solana/web3.js";
import { WalletAdapterNetwork } from "@solana/wallet-adapter-base";
import {useWallet} from "@solana/wallet-adapter-react";
import useWalletBalance from "../../../hooks/useWalletBalance";
import {Header} from "../../../components/Header";
import {Hero} from "../../../components/Hero";
import {Section} from "../../../components/Section";
import AnNFT from "../../../components/AnNFT";
import useWalletNfts from "../../../hooks/useWalletNFTs";
import {WalletMultiButton} from "@solana/wallet-adapter-react-ui";

// import {
//   getPhantomWallet,
//   getSolflareWallet,
//   getSolletWallet,
// } from "@solana/wallet-adapter-wallets";

// import {
//   ConnectionProvider,
//   WalletProvider,
// } from "@solana/wallet-adapter-react";

// import { WalletDialogProvider } from "@solana/wallet-adapter-material-ui";


export default function Home() {
  const [balance] = useWalletBalance();
  //const [nfts] = useWalletNfts();

  const {connected} = useWallet();


  const network = process.env.NEXT_PUBLIC_SOLANA_NETWORK as WalletAdapterNetwork;

  const rpcHost = process.env.NEXT_PUBLIC_SOLANA_RPC_HOST!;
  const candyMachineId = process.env.NEXT_PUBLIC_CANDY_MACHINE_ID
  ? new anchor.web3.PublicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID)
  : undefined;
  const connection = new anchor.web3.Connection(rpcHost);
  
  console.log(network, rpcHost);
  const startDateSeed = parseInt(process.env.NEXT_PUBLIC_CANDY_START_DATE!, 10);
  const txTimeout = 30000; // milliseconds (confirm this works for your project)

  
  

  return (
    <>
    <Head>
      <title>Waffle Social Club Collection</title>
      <meta
        name="description"
        content="Simplified NextJs with typescript example app integrated with Metaplex's Candy Machine"
      />
    </Head>
    <Header balance={balance} connected={connected}/>
    <Section title={'Waffle Club limited NFTs drop'}/>
    <Section title="Mint Date : dd/mm/YYYY" id="mint">
        <div className="flex items-start justify-center">
        <MintContainer
        candyMachineId={candyMachineId}
        connection={connection}
        startDate={startDateSeed}
        txTimeout={txTimeout}
        rpcHost={rpcHost}
      />
        </div>
    </Section>

    <Section title={'Your Collection'} id="collection">
      {connected ? <div className="flex mt-3 gap-x-2">
        {(nfts as any).map((nft: any, i: number) => {
          return <AnNFT key={i} nft={nft}/>;
        })}
        </div> : <WalletMultiButton/>
        }  
      </Section>
    </>
);
}

