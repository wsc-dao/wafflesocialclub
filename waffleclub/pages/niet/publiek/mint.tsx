/* eslint-disable react-hooks/exhaustive-deps */
import Head from "next/head";
import {useEffect, useState} from "react";
import useCandyMachine from "../../../hooks/useCandyMachine";
import useWalletBalance from "../../../hooks/useWalletBalance";
import {useWallet} from "@solana/wallet-adapter-react";
import Image from 'next/image'
import Countdown from "react-countdown";
import {Toaster} from "react-hot-toast";
import AnNFT from "../../../components/AnNFT/AnNFT";
import Script from 'next/script'
import useWalletNfts from "../../../hooks/useWalletNFTs";
import {Header} from "../../../components/Header";
import {Hero} from "../../../components/Hero";
import {DataCard} from "../../../components/DataCard";
import {Section} from "../../../components/Section";
import {Timeline} from "../../../components/Timeline";
import {Button} from "../../../components/Buttons";


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
        title={'WELCOME TO THE WAFFLE CLUB'}
      >
        <div style={{
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
          <img style={{
            width: '45%',
          }} src="https://upload.travelawaits.com/ta/uploads/2021/04/99c0f5627140db6db1e78cc6594c099c0f5.jpg" alt=""/>
        </div>
      </Section>

      <Section title={'Statistics & Data'}>
        <div style={{
          display: "flex",
          justifyContent: "space-evenly",
          gap: '1rem',
          flexWrap: 'wrap',
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
      <Section title={'Roadmap'}>
        <p>Inspired by BAYC, the Waffle grants you an exclusive membership to the private Waffle Club, giving you
          decisional power in the WaffleDAO* and access to increasing benefits and projects.
        </p>
        <p>
          The plan is to draw together the roadmap path.
        </p>
        <Timeline/>
      </Section>
      <Section title={'THE PRIVATE UNDERGROUND CLUB'}>
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between'}}>
          <div style={{maxWidth: '45%'}}>
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
          <img style={{maxWidth: '45%'}} src="/table_1.png" alt=""/>
        </div>
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
        <table style={{margin: 'auto', minWidth: '650px'}}>
          <tr>
            <th>COMMON</th>
            <th>UNCOMMON</th>
            <th>RARE</th>
            <th>EPIC</th>
            <th>LEGENDARY</th>
          </tr>
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
        </table>
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
