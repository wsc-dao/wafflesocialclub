/* eslint-disable react-hooks/exhaustive-deps */
import Head from "next/head";
import {useEffect, useState} from "react";
import useCandyMachine from "../../../hooks/useCandyMachine";
import useWalletBalance from "../../../hooks/useWalletBalance";
import {useWallet} from "@solana/wallet-adapter-react";
import Countdown from "react-countdown";
import {Toaster} from "react-hot-toast";
import AnNFT from "../../../components/AnNFT";
import useWalletNfts from "../../../hooks/useWalletNFTs";
import {Header} from "../../../components/Header";
import {Hero} from "../../../components/Hero";
import {DataCard} from "../../../components/DataCard";
import {Section} from "../../../components/Section";
import {Timeline} from "../../../components/Timeline";
import {Button} from "../../../components/Buttons";
import {MemberCard} from "../../../components/MemberCard";
import {OffWhite} from "../../../consts";
import {WalletMultiButton} from "@solana/wallet-adapter-react-ui";
import MintContainer from "../../../components/MintContainer";
import * as anchor from "@project-serum/anchor";

const rpcHost = process.env.NEXT_PUBLIC_SOLANA_RPC_HOST!;
const candyMachineId = process.env.NEXT_PUBLIC_CANDY_MACHINE_ID
  ? new anchor.web3.PublicKey(process.env.NEXT_PUBLIC_CANDY_MACHINE_ID)
  : undefined;
const connection = new anchor.web3.Connection(rpcHost);
const startDateSeed = parseInt(process.env.NEXT_PUBLIC_CANDY_START_DATE!, 10);
const txTimeout = 30000; // milliseconds (confirm this works for your project)

export default function Home() {
  const [balance] = useWalletBalance();
  const {
    isSoldOut,
    mintStartDate,
    isMinting,
    startMint,
    startMintMultiple,
    nftsData,
  } = useCandyMachine();

  // const [isLoading, nfts] = useWalletNfts();

  const {connected} = useWallet();

  const [isMintLive, setIsMintLive] = useState(false);

  useEffect(() => {
    if (new Date(mintStartDate).getTime() < Date.now()) {
      setIsMintLive(true);
    }
  }, []);

  const MintMany = () => {
    const [mintCount, setMintCount] = useState(5);

    return (
      <>
        <input
          disabled={isMinting}
          type="number"
          min={1}
          max={5}
          value={mintCount}
          onChange={(e) => setMintCount((e.target as any).value)}
        />
        <Button
          style={{marginLeft: '1rem'}}
          primary={false}
          onClick={() => startMintMultiple(mintCount)}
          disabled={isMinting}
          label={isMinting ? "loading" : `mint`}
        />
      </>
    );
  };

  return (
    <>
      <Head>
        <title>Waffle Club Collection</title>
        <meta
          name="description"
          content="Simplified NextJs with typescript example app integrated with Metaplex's Candy Machine"
        />
      </Head>
      <Header balance={balance} connected={connected}/>
      <Hero/>
      <Section title={'WELCOME TO THE WAFFLE CLUB'} flex>
        <div
          style={{
            gap: '2rem',
            display: "flex",
            flexDirection: 'column',
            justifyContent: "space-between",
            alignItems: "center"
          }}>
          <p>Waffle Club is a collection of 4343 delicious Waffle NFTs - unique and delicious crypto-art, freshly
            baked
            on the Solana blockchain. Made with hand-picked ingredients to offer high quality products. It’s best to
            eat
            them now when it’s still warm. Go treat yourself!
          </p>
          <p>
            Lekker!
          </p>
          <a
            style={{
              color: '#B8202E',
              background: '#f5d8ad',
              padding: '12px 16px',
              borderRadius: '20px',
              fontWeight: 'bold'
            }}
            href="#collection">View Collection</a>
        </div>
        <img
          style={{
            boxShadow: `0 0 20px ${OffWhite}`,
          }}
          src="https://upload.travelawaits.com/ta/uploads/2021/04/99c0f5627140db6db1e78cc6594c099c0f5.jpg"
          alt=""
        />
      </Section>

      <Section title={'Statistics & Data'}>
        <div style={{
          display: "grid",
          gridTemplateColumns: 'repeat( auto-fit, minmax(100px, 1fr) )',
          gap: '2rem',
          alignItems: 'center',
          maxWidth: '100%',
          fontSize: '1.3rem'
        }}>
          <DataCard value={'3'} label={'Eggs'}/>
          <DataCard value={'375g'} label={'Milk'}/>
          <DataCard value={'375g'} label={'Water'}/>
          <DataCard value={'20g'} label={'Fresh Yeast'}/>
          <DataCard value={'450g'} label={'Flour'}/>
          <DataCard value={'150g'} label={'Butter'}/>
        </div>
      </Section>
      <Section title={'Roadmap'} id={"roadmap"}>
        <p>Inspired by BAYC, the Waffle grants you an exclusive membership to the private Waffle Club, giving you
          decisional power in the WaffleDAO* and access to increasing benefits and projects.
        </p>
        <p>
          The plan is to draw together the roadmap path.
        </p>
        <Timeline/>
      </Section>
      <Section title={'THE PRIVATE UNDERGROUND CLUB'} flex>
        <div>
          <p>
            Owning your waffle, it’s not only an avatar and a provably-rare piece of art, it’s also an exclusive
            membership to a 4000+ members private club.
          </p>
          <p>
            Events will be cooked to bring the community closer. Ideas and plans are already boiling in our heads: a
            permanent gallery to showcase and deal our NFTs, an underground and secret (not so secret anymore heh)
            fight
            club for members to meet-up, the privatization of the Atomium for member-exclusive parties, and much more
            …
            What we do is what you want as the WaffleDAO.
          </p>

        </div>
        <img
          style={{
            boxShadow: `0 0 20px ${OffWhite}`,
          }}
          src="/table_1.png"
          alt=""
        />
      </Section>
      <Section title={'NFT TRAIT RARITY'}>
        <p>
          Although all waffles will be delightful. Some say that a waffle is definitely more savory with some whipped
          cream or chopped fruits. Others will say that we eat with our eyes. That’s why a rarity system
          distinguishing the dulcet taste from the more extravagant one was elaborated.
        </p>
        <p>
          Each waffle will be unique and programmatically generated from over 1xx singular and possible traits. All
          waffles are yummy but some will be rarer and tastier than others.
        </p>
        <div style={{overflow: 'auto'}}>
          <table style={{
            margin: 'auto',
            width: '650px',
            maxWidth: '100%',
          }}>
            <thead>
            <tr>
              <th>COMMON</th>
              <th>UNCOMMON</th>
              <th>RARE</th>
              <th>EPIC</th>
              <th>LEGENDARY</th>
            </tr>
            </thead>
            <tbody>
            <tr>
              <td>Agreeable</td>
              <td>Flavorful</td>
              <td>Tasty</td>
              <td>Delightful</td>
              <td>Heavenly</td>
            </tr>
            <tr>
              <td>Pleasant</td>
              <td>Appetizing</td>
              <td>Yummy</td>
              <td>Mouthwatering</td>
              <td>Luscious</td>
            </tr>
            <tr>
              <td/>
              <td/>
              <td>Savory</td>
              <td>Delicious</td>
              <td>Ambrosial</td>
            </tr>
            <tr>
              <td/>
              <td/>
              <td/>
              <td>Delish</td>
              <td/>
            </tr>
            </tbody>
          </table>
        </div>
      </Section>

      <Section title={'Waffle Club limited NFTs drop'}/>
      <MintContainer
        candyMachineId={candyMachineId}
        connection={connection}
        startDate={startDateSeed}
        txTimeout={txTimeout}
        rpcHost={rpcHost}
      />
      <Section title="Mint Date : dd/mm/YYYY" id="mint">
        <Toaster/>
        <div className="flex items-start justify-center">
          {connected ? (
            <>
              {new Date(mintStartDate).getTime() < Date.now() ? (
                <>
                  {isSoldOut ? (
                    <p>SOLD OUT</p>
                  ) : (
                    <>
                      {connected &&
                        <div style={{display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start'}}>
                          <div>
                            <h1 style={{marginTop: 0, paddingTop: 0}}>Mint One</h1>
                            <Button
                              onClick={startMint}
                              disabled={isMinting}
                              label={isMinting ? "loading" : "Mint 1"}
                            />
                          </div>
                          <div><p>Total Supply: {nftsData.itemsAvailable}</p>
                            <p>Available: {nftsData.itemsRemaining}</p>
                            <p>Minted: {nftsData.itemsRedeemed}</p>
                          </div>
                          <div>
                            <h1 style={{marginTop: 0, paddingTop: 0}}>Mint Many</h1>
                            <MintMany/>
                          </div>
                        </div>}

                    </>
                  )}
                </>
              ) : (
                <Countdown
                  date={mintStartDate}
                  onMount={({completed}) => completed && setIsMintLive(true)}
                  onComplete={() => setIsMintLive(true)}
                />
              )}
            </>
          ) : (
            <p className="text items-center">Connect wallet to mint</p>
          )}
        </div>
      </Section>

      <Section title={'Your Collection'} id="collection">
        {connected ? <div className="flex mt-3 gap-x-2">
          {/*{(nfts as any).map((nft: any, i: number) => {*/}
          {/*  return <AnNFT key={i} nft={nft}/>;*/}
          {/*})}*/}
        </div> : <WalletMultiButton/>
        }
      </Section>
      <Section title={'Waffle Team'}
               contentStyle={{
                 display: 'grid',
                 maxWidth: '1500px',
                 gridTemplateColumns: 'repeat( auto-fit, minmax(150px, 1fr) )',
                 gap: '2rem',
                 alignItems: 'baseline',
               }} id={'team'}
      >
        <MemberCard url={"https://twitter.com/Devob3ast"} avatar={"/avatar.png"} title={'Guru'} name={'D3v0'}/>
        <MemberCard middle url={"https://twitter.com/yoloshiden"} avatar={"/avatar_2.png"} title={'Sensei'}
                    name={'Yolo'}/>
        <MemberCard url={"https://twitter.com/morfessa"} avatar={"/avatar_3.png"} title={'Grand-sage'}
                    name={'Semias'}/>
        <MemberCard name={'Anas'}/>
        <MemberCard middle/>
      </Section>

      <Section title={'FAQ'} id="faq">
        <details>
          <summary><h3 style={{display: 'inline'}}>How many Waffle will be minted ?</h3></summary>
          The answer to your question should be here somewhere, keep looking...
        </details>
        <details>
          <summary><h3 style={{display: 'inline'}}>What can i dot with my waffle Club ?</h3></summary>
          The answer to your question should be here somewhere, keep looking...
        </details>
        <details>
          <summary><h3 style={{display: 'inline'}}> When will it be revealed?</h3></summary>
          The answer to your question should be here somewhere, keep looking...
        </details>
        <details>
          <summary><h3 style={{display: 'inline'}}> After minting?</h3></summary>
          The answer to your question should be here somewhere, keep looking...
        </details>
        <details>
          <summary><h3 style={{display: 'inline'}}> When on the secondary market?</h3></summary>
          The answer to your question should be here somewhere, keep looking...
        </details>
        <details>
          <summary><h3 style={{display: 'inline'}}> Can I see the contract adress ?</h3></summary>
          The answer to your question should be here somewhere, keep looking...
        </details>
        <details>
          <summary><h3 style={{display: 'inline'}}>I got a DM with a link from someone claiming to be a team member, can
            I
            trust it?</h3></summary>
          The answer to your question should be here somewhere, keep looking...
        </details>
      </Section>
    </>
  );
}
