/* eslint-disable react-hooks/exhaustive-deps */
import Head from "next/head";
import { useEffect, useState } from "react";
import Image from 'next/image'
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";
import useCandyMachine from "../hooks/useCandyMachine";
import useWalletBalance from "../hooks/useWalletBalance";
import { useWallet } from "@solana/wallet-adapter-react";
import Script from 'next/script'
import { Toaster } from "react-hot-toast";
import Countdown from "react-countdown";
import useWalletNfts from "../hooks/useWalletNFTs";
import AnNFT from "../components/AnNFT/AnNFT";

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

  const { connected } = useWallet();

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
        <button
          onClick={() => startMintMultiple(mintCount)}
          disabled={isMinting}
          className="px-4 py-2 mx-auto font-bold text-white transition-opacity rounded-lg hover:opacity-70 bg-gradient-to-br from-green-300 via-blue-500 to-purple-600"
        >
          {isMinting ? "loading" : `mint ${mintCount}`}
        </button>

        <input
          disabled={isMinting}
          type="number"
          min={2}
          max={5}
          className="px-2 mx-auto mt-5 font-bold text-white bg-gray-500"
          value={mintCount}
          onChange={(e) => setMintCount((e.target as any).value)}
        />
        <p className="mx-auto mt-2">[2 ; 5]</p>
      </>
    );
  };

  return (
    <>
      <Script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/js/bootstrap.bundle.min.js" integrity="sha384-ka7Sk0Gln4gmtz2MlQnikT1wXgYsOg+OMhuP+IlRH9sENBO0LRn5q+8nbTov4+1p" crossOrigin="anonymous"></Script>
      <Head>
        <title>next-candy-machine</title>
        <meta
          name="description"
          content="Simplified NextJs with typescript example app integrated with Metaplex's Candy Machine"
        />
        <link rel="icon" href="/favicon.ico" />
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossOrigin="anonymous"></link>
      <link rel="stylesheet" href="/custom.css"></link>
      </Head>
      <nav className="navbar sticky-top navbar-expand-lg navbar-dark">
      <div className="container-fluid">


        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse justify-content-center"  id="navbarNav">
          <ul className="navbar-nav ">
            <li className="nav-item ">
              <a className="nav-link mr-10" href="#about">About</a>
            </li>
            <li className="nav-item mr-10 ml-10">
              <a className="nav-link" href="#project">Roadmap</a>
            </li>
            <li className="nav-item ml-10">
              <a className="nav-link project-text" href="#team">Waffle Team</a>
            </li>
            <li className="nav-item ml-10">
            
            <a className="nav-link" aria-current="page" href="https://waffleclub.vercel.app/#/"><Image src="/waffledao_rebrand_logo.png" alt="..." width="261" height="45"/></a>
            </li>
            
        
            <li className="nav-item ml-10">
              <a className="nav-link" href="#mint">Mint</a>
            </li>
            <li className="nav-item ml-10">
              <a className="nav-link" href="#mynft">Collection</a>
            </li>
            <li className="nav-item ml-10">
              <a className="nav-link" href="#faq">FAQ</a>
            </li>
          </ul>
          

        </div>
        <div className="flex items-center">
            {connected && (
              <div className="flex items-end mr-2">
                <p className="text-xs text-yellow-400">Balance :</p>
                <p className="mx-1 text-yellow-400 font-bold leading-none">
                  {balance.toFixed(2)}
                </p>
                <p
                  className="font-bold leading-none text-transparent bg-clip-text"
                  style={{
                    backgroundImage: `linear-gradient(to bottom right, #00FFA3, #03E1FF, #DC1FFF)`,
                  }}
                >
                  SOL
                </p>
              </div>
            )}
            <WalletMultiButton />
          </div>
      </div>
      
      

    </nav>

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
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#Deckcarousel" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>

        <Toaster />
        <div className="container" id="mint">
          <h1 className="text-2xl font-bold">Mint Date : dd/mm/YYYY</h1>

<div className="flex items-start justify-center w-11/12 my-10">
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
        <button 
                          onClick={startMint}
                          disabled={isMinting}
                          className="mb-3 px-4 py-2 mx-auto font-bold text-white transition-opacity rounded-lg hover:opacity-70 bg-gradient-to-br from-green-300 via-blue-500 to-purple-600"
                        >
                          {isMinting ? "loading" : "Mint 1"}
        </button>
        </div>
                      <div className="flex flex-col w-1/2">
                        <h1 className="mb-10 text-3xl font-bold">Mint Many</h1>
                        <MintMany />
                      </div>
                    </>
                  )}
                </>
              ) : (
                <Countdown
                  date={mintStartDate}
                  onMount={({ completed }) => completed && setIsMintLive(true)}
                  onComplete={() => setIsMintLive(true)}
                />
              )}
            </>
          ) : (
            <p className="project-text">Connect wallet to mint</p>
          )}
        </div>
    </div>

        <div className="container" id="mynft">
        <div className="flex flex-col w-full">
        <h1 className="text-3xl font-bold items-center">Your Collection</h1>
          <div className="flex mt-3 gap-x-2">
            {(nfts as any).map((nft: any, i: number) => {
              return <AnNFT key={i} nft={nft} />;
            })}
          </div>
        </div>
        </div>
            
      
      </div>

      <div className="container" id="team">
        <h1 className="text-3xl font-bold items-center">Waffle Team</h1>
        <div className="row">
          <div className="col-sm">
            <div className="card mx-auto brand">
              <Image src="/avatar.png" className="card-Image-top" alt="Lorem Ipsum" width="100%" height="100%" layout="responsive" objectFit="contain"></Image>
              <div className="card-body team">
                <h5 className="card-title">D3v0</h5>
                <p className="card-text">Guru</p>
                <a href="https://twitter.com/Devob3ast" className="btn btn-primary">twitter</a>
              </div>
            </div>
          </div>

          <div className="col-sm">
            <div className="card mx-auto brand">
              <Image src="/avatar_3.png" className="card-Image-top" alt="Lorem Ipsum" width="100%" height="100%" layout="responsive" objectFit="contain"></Image>
              <div className="card-body team">
                <h5 className="card-title">Yolo</h5>
                <p className="card-text">Sensei</p>
                <a href="https://twitter.com/yoloshiden" className="btn btn-primary" >twitter</a>
              </div>
            </div>
          </div>

          <div className="col-sm">
            <div className="card mx-auto brand">
              <Image src="/avatar_2.png" className="card-Image-top" alt="Lorem Ipsum" width="100%" height="100%" layout="responsive" objectFit="contain"></Image>
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


    </>
  );
}
