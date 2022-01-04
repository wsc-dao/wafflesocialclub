/* eslint-disable react-hooks/exhaustive-deps */
import Head from "next/head";
import {useEffect, useState} from "react";
import useCandyMachine from "../hooks/useCandyMachine";
import useWalletBalance from "../hooks/useWalletBalance";
import {useWallet} from "@solana/wallet-adapter-react";
import Image from 'next/image'
import Countdown from "react-countdown";
import {Toaster} from "react-hot-toast";
import AnNFT from "../components/AnNFT/AnNFT";
import Script from 'next/script'
import useWalletNfts from "../hooks/useWalletNFTs";
import {Header} from "../components/Header";
import {Hero} from "../components/Hero";
import {DataCard} from "../components/DataCard";
import {Section} from "../components/Section";
import {Timeline} from "../components/Timeline";
import {Button} from "../components/Buttons";


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

  const [isLoading, nfts] = useWalletNfts();

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
        <Button
          primary={false}
          onClick={() => startMintMultiple(mintCount)}
          disabled={isMinting}
          label={isMinting ? "loading" : `mint ${mintCount}`}
        />
        <input
          disabled={isMinting}
          type="number"
          min={1}
          max={5}
          className="px-2 mx-auto mt-5 font-bold bg-gray-500"
          value={mintCount}
          onChange={(e) => setMintCount((e.target as any).value)}
        />
        <p className="mx-auto mt-2">max 5</p>
      </>
    );
  };

  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js"
              integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p"
              crossOrigin="anonymous"/>
      <Head>
        <title>Waffle Club Collection</title>
        <meta
          name="description"
          content="Simplified NextJs with typescript example app integrated with Metaplex's Candy Machine"
        />
        <link rel="icon" href="/favicon.ico"/>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet"
              integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3"
              crossOrigin="anonymous"/>
        <link rel="stylesheet" href="/custom.css"/>
      </Head>
      <Header balance={balance} connected={connected}/>
      <Hero/>
      <Section
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <div
          style={{
            width: '45%',
            gap: '2rem',
            display: "flex",
            flexDirection: 'column',
            justifyContent: "space-between",
            alignItems: "baseline"
          }}>
          <h2>Belgian Waffles</h2>
          <p>Outside of Belgium, Belgian waffles are a variety of waffle with a lighter batter, larger squares, and
            deeper pockets than American waffles. Belgian waffles were originally leavened with yeast, but baking powder
            is now often used. They are often eaten as a breakfast food; toppings vary from whipped cream, confectioners
            sugar, soft fruit, and chocolate spread, to syrup and butter or margarine. They may also be served with
            vanilla ice cream and fresh fruit (such as strawberries) as a dessert.

            In Belgium itself, there are several kinds of waffle, including the Brussels waffle and the Liège
            waffle.</p>
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
        <img style={{
          width: '45%',
        }} src="https://upload.travelawaits.com/ta/uploads/2021/04/99c0f5627140db6db1e78cc6594c099c0f5.jpg" alt=""/>
      </Section>

      <Section>
        <h2 style={{textAlign: 'center', marginBottom: '3rem'}}>Statistics & Data</h2>
        <div style={{
          display: "flex",
          justifyContent: "space-evenly",
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
      <Section>
        <h2 style={{textAlign: 'center', marginBottom: '3rem'}}>Roadmap</h2>
        <Timeline/>
      </Section>

      <div className="parallax-init parallax-bg2">


        <div className="titlepage text-4xl font-bold items-center">Waffle Club limited NFTs drop</div>

        <div className="container" id="about">
          <h1 className="text-3xl font-bold items-center">About</h1>

          <div id="Deckcarousel" className="carousel slide carousel-fade" data-bs-ride="carousel">

            <div className="carousel-inner">
              <div className="carousel-item active">
                <Image
                  width="800" height="300" layout="responsive" objectFit="contain"
                  src="/slide_1.png"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <Image
                  width="800" height="300" layout="responsive" objectFit="contain"
                  src="/slide_2.png"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <Image
                  width="800" height="300" layout="responsive" objectFit="contain"
                  src="/slide_3.png"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <Image
                  width="800" height="300" layout="responsive" objectFit="contain"
                  src="/slide_4.png"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <Image
                  width="800" height="300" layout="responsive" objectFit="contain"
                  src="/slide_5.png"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <Image
                  width="800" height="300" layout="responsive" objectFit="contain"
                  src="/slide_6.png"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <Image
                  width="800" height="300" layout="responsive" objectFit="contain"
                  src="/slide_7.png"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <Image
                  width="800" height="300" layout="responsive" objectFit="contain"
                  src="/slide_8.png"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
              <div className="carousel-item">
                <Image
                  width="800" height="300" layout="responsive" objectFit="contain"
                  src="/slide_9.png"
                  className="d-block w-100"
                  alt="..."
                />
              </div>
            </div>

            <button className="carousel-control-prev" type="button" data-bs-target="#Deckcarousel" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"/>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#Deckcarousel" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"/>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>

      <div className="parallax-init parallax-bg2">

        <Toaster/>
        <div className="container" id="mint">
          <h1 className="text-2xl font-bold">Mint Date : dd/mm/YYYY</h1>

          <div className="flex items-start justify-center">
            {connected ? (
              <>
                {new Date(mintStartDate).getTime() < Date.now() ? (
                  <>
                    {isSoldOut ? (
                      <p>SOLD OUT</p>
                    ) : (
                      <>
                        <div className="mint-container">
                          <h1 className="mb-10 text-3xl font-bold">Mint One</h1>
                          {connected && <p className="mb-3 text-2xl">Total Supply: {nftsData.itemsAvailable}</p>}
                          {connected && <p className="mb-3 text-2xl">Available: {nftsData.itemsRemaining}</p>}
                          {connected && <p className="mb-5 text-2xl">Minted: {nftsData.itemsRedeemed}</p>}
                          <Button
                            onClick={startMint}
                            disabled={isMinting}
                            label={isMinting ? "loading" : "Mint 1"}
                          />

                        </div>
                        <div className="flex flex-col w-1/2">
                          <h1 className="mb-10 text-3xl font-bold">Mint Many</h1>
                          <MintMany/>
                        </div>
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
        </div>

        <div className="container" id="mynft">
          <h1 className="text-3xl font-bold items-center">Your Collection</h1>
          <div className="flex mt-3 gap-x-2">
            {(nfts as any).map((nft: any, i: number) => {
              return <AnNFT key={i} nft={nft}/>;
            })}
          </div>
        </div>
      </div>

      <div className="parallax-init parallax-bg3">
        <div className="container" id="team">
          <h1 className="text-3xl font-bold items-center">Waffle Team</h1>
          <div className="row">
            <div className="col-sm">
              <div className="card mx-auto brand">
                <Image src="/avatar.png" className="card-Image-top" alt="Lorem Ipsum" width="100%" height="100%"
                       layout="responsive" objectFit="contain"/>
                <div className="card-body team">
                  <h5 className="card-title">D3v0</h5>
                  <p className="card-text">Guru</p>
                  <a href="https://twitter.com/Devob3ast" className="btn btn-primary">twitter</a>
                </div>
              </div>
            </div>

            <div className="col-sm">
              <div className="card mx-auto brand">
                <Image src="/avatar_3.png" className="card-Image-top" alt="Lorem Ipsum" width="100%" height="100%"
                       layout="responsive" objectFit="contain"/>
                <div className="card-body team">
                  <h5 className="card-title">Yolo</h5>
                  <p className="card-text">Sensei</p>
                  <a href="https://twitter.com/yoloshiden" className="btn btn-primary">twitter</a>
                </div>
              </div>
            </div>

            <div className="col-sm">
              <div className="card mx-auto brand">
                <Image src="/avatar_2.png" className="card-Image-top" alt="Lorem Ipsum" width="100%" height="100%"
                       layout="responsive" objectFit="contain"/>
                <div className="card-body team">
                  <h5 className="card-title">Semias</h5>
                  <p className="card-text">Grand-sage</p>
                  <a href="https://twitter.com/morfessa" className="btn btn-primary">twitter</a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container" id="faq">
          <h1 className="text-3xl font-bold items-center">FAQ</h1>
        </div>
      </div>
    </>
  );
}
