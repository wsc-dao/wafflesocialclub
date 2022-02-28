import Head from "next/head";
import MintContainer from "../../../components/MintContainer";
import * as anchor from "@project-serum/anchor";
import {WalletAdapterNetwork} from "@solana/wallet-adapter-base";
import {useWallet} from "@solana/wallet-adapter-react";
import {Header} from "../../../components/Header";
import {Section} from "../../../components/Section";
import {WalletMultiButton} from "@solana/wallet-adapter-react-ui";
import {Footer} from "../../../components/Footer";

export default function Home() {
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
      </Head>
      <Header/>
      <Section title={'Waffle Social Club NFTs'}/>
      <Section title="Exclusive Limited Edition" id="mint">
          <MintContainer
            candyMachineId={candyMachineId}
            connection={connection}
            startDate={startDateSeed}
            txTimeout={txTimeout}
            rpcHost={rpcHost}
          />
      </Section>

      <Section title={'Your Collection'} id="collection">
        {connected ? <div className="flex mt-3 gap-x-2">
          {/*{(nfts as any).map((nft: any, i: number) => {*/}
          {/*  return <AnNFT key={i} nft={nft}/>;*/}
          {/*})}*/}
        </div> : <WalletMultiButton/>
        }
      </Section>
      <Footer/>
    </>
  );
}

