import {readdirSync} from "fs";
import Head from "next/head";
import Image from "next/image";
import path from "path";
import AliceCarousel from "react-alice-carousel";
import {AssetViewer} from "../../../components/AssetViewer";
import {DataCard} from "../../../components/DataCard";
import {Details} from "../../../components/Details";
import {Footer} from "../../../components/Footer";
import {Header} from "../../../components/Header";
import {Hero} from "../../../components/Hero";
import {MemberCard} from "../../../components/MemberCard";
import {Section} from "../../../components/Section";
import {Timeline} from "../../../components/Timeline";
import truck from "../../../public/banner.png";
import table from "../../../public/whipped_creamdao.png";

const getImagesFromFolder = (dirRelativeToPublicFolder: string) => {
  const dir = path.resolve('./public', dirRelativeToPublicFolder);
  const filenames = readdirSync(dir);
  return filenames.filter((name: string) => name.endsWith('.png') || name.endsWith('.jpg') || name.endsWith('.jpeg')).map((name: string) => path.join('/', dirRelativeToPublicFolder, name))
}

export async function getServerSideProps() {
  const artworks = getImagesFromFolder('artwork');
  const accessories = getImagesFromFolder('waffle-assets/accessories');
  const base = getImagesFromFolder('waffle-assets/base');
  const body = getImagesFromFolder('waffle-assets/body');
  const eyes = getImagesFromFolder('waffle-assets/eyes');
  const head = getImagesFromFolder('waffle-assets/head');
  const mouth = getImagesFromFolder('waffle-assets/mouth');
  return {
    props: {
      artworks,
      assets: {
        accessories,
        base,
        body,
        eyes,
        head,
        mouth,
      }
    }, // will be passed to the page component as props
  }
}

export default function Home({artworks, assets}: { artworks: string[]; assets: any }) {
  return (
    <>
      <Head>
        <title>Waffle Social Club</title>
        <style lang="css">{`
        .btn-group{
          flex-direction: column;
          gap: 2rem;
        }
        
        @media (min-width: 778px) {
          .btn-group{
            flex-direction: row;
          }
        }
        `}</style>
      </Head>
      <Header home={true}/>
      <Hero artworks={artworks}/>
      <Section title={'WELCOME TO THE WAFFLE SOCIAL CLUB'} flex>
        <div
          style={{
            gap: '2rem',
            display: "flex",
            flexDirection: 'column',
            justifyContent: "space-between",
            alignItems: "flex-start"
          }}>
          <p>
            <strong>Waffle Social Club </strong>is a collection of <strong>4444 delicious Waffle NFTs</strong> - unique
            and delicious
            <em> crypto-art</em>, freshly baked on the <strong>Solana blockchain</strong>. Made with hand-picked
            ingredients to offer high quality
            products. It’s best to eat them now when it’s still warm. <em>Go treat yourself!</em>
          </p>
          <p style={{margin:0}}>
            <strong>Lekker!</strong>
          </p>
          <div className={'btn-group'} style={{display: 'flex', justifyContent: 'space-between', width: '100%'}}>
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a
              style={{
                background: '#B8202E',
                color: '#f5d8ad',
                padding: '12px 16px',
                borderRadius: '20px',
                fontWeight: 'bold'
              }}
              href="/niet/publiek/roadmap.deck">Check the roadmap</a>
            <a
              style={{
                color: '#B8202E',
                background: '#f5d8ad',
                padding: '12px 16px',
                borderRadius: '20px',
                fontWeight: 'bold'
              }}
              href="#collection">Mint coming soon</a>
          </div>
        </div>
        <Image
          src={truck}
          alt=""
          layout={"responsive"}
        />
      </Section>

      <Section title={'Statistics & Data'}>
        <div style={{
          display: "grid",
          gridTemplateColumns: 'repeat( auto-fit, minmax(150px, 1fr) )',
          gap: '2rem',
          alignItems: 'center',
          maxWidth: '100%',
          fontSize: '1.3rem'
        }}>
          <DataCard value={'4444'} label={'Waffles'}/>
          <DataCard value={'4200'} label={'Available on hold'}/>
          <DataCard value={'140+'} label={'Unique Traits'}/>
          <DataCard value={'TBA'} label={'Mint Date'}/>
          <DataCard value={'TBD'} label={'Solana'}/>
          <DataCard value={'Made In Belgium'} label={''}/>
        </div>
      </Section>
      <Section title={'Roadmap'} id={"roadmap"}>
        <p>The Waffle grants you an <strong>exclusive membership</strong> to the private{' '}
          <abbr title="Wafle Social Club">WSC</abbr>, giving you decisional power in the WaffleDAO* and access to
          <strong> increasing benefits and projects</strong>.
        </p>
        <p>
          <strong>The plan is to draw together the roadmap path.</strong>
        </p>
        <Timeline/>
      </Section>
      <Section title={'THE PRIVATE UNDERGROUND CLUB'} flex className={"private-club"}>
        <div>
          <p>
            Owning your waffle, it’s not only an avatar and a provably-rare piece of art, it’s also
            an <strong> exclusive membership</strong> to a 4000+ members <em> private club</em>.
          </p>
          <p>
            Events will be cooked to bring the community closer. Ideas and plans are already boiling in our heads:
            a<strong> permanent gallery</strong> to showcase and deal our NFTs, an <strong> underground and
            secret</strong> (not so secret anymore heh) fight club for members to meet-up, the privatization of the
            Atomium for member-exclusive parties, and much more…<br/><em>What we will do, will be you, as the WaffleDAO,
            want us to do.</em>
          </p>

        </div>
        <Image
          layout={"responsive"}
          src={table}
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
        <AssetViewer assets={assets}/>
      </Section>

      <Section
        title={'Waffle Team'}
        contentStyle={{
         display: 'flex',
          maxWidth: '1500px',
        //  gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr) )',
          gap: '6rem',
          alignItems: 'baseline',
          justifyContent:'center',
          flexWrap:'wrap'
        }}
        id={'team'}
      >
        <MemberCard
          url={"https://twitter.com/D3v0_WSC"}
          avatar={"/avatar_1.png"}
          title={'Waffle Maker'}
          role={'Co-founder & Technical Lead'}
          name={'D3v0'}
        />
        <MemberCard
          middle
          url={"https://twitter.com/yoloshiden"}
          avatar={"/avatar_2.png"}
          title={'Pastry Chef'}
          role={"Co-founder / Project Manager & NFT Connoisseur"}
          name={'Yolo'}
        />
        <MemberCard
          url={"https://twitter.com/morfessa"}
          avatar={"/avatar_3.png"}
          role={'DevOps & DAO Facilitator'}
          title={'Chocolatier'}
          name={'Semias'}
        />
        <MemberCard
          name={'Kahtael'}
          avatar={"/avatar_4.png"}
          title={'Ice Cream Maker'}
          role={"Marketing Officer & Jpeg Maximalist"}
        />
        <MemberCard
          middle
          name={'Agent'}
          avatar={"/avatar_5.png"}
          title={'Candy Confectioner'}
          role={'Developer & Hodler'}
        />

      </Section>

      <Section
        title={'FAQ'}
        id="faq"
        className={'faq'}
      >
        <Details
          question={"What is a NFT?"}
          content={"NFTs (Non-Fungible Tokens) are one-of-a-kind tokens that represent a unique good or asset, like digital art with sometimes benefits for the buyers. They can be sold to everyone that has interest in crypto or wants to invest in a project. Our NFTs will be certified on the Solana blockchain. "}/>
        <Details
          question={"When will I be able to bake my very own waffle?"}
          content={"Follow our announcement on our social media to be the first informed of the exact date in April."}
        />
        <Details
          question={"What can I do with my waffle NFT after minting?"}
          content={"You can keep your waffle to get exclusive access to the Waffle Social Club and meet the membres of the community during our splendid events. You can also share it, gift it or sell it directly from your wallet on to the secondary market. There you can see what your NFT is worth at the moment."}
        />
        <Details
          question={"What does my Waffle Social Club access offers?"}
          content={"The main goal of the Waffle Social Club is to be an incubator for belgian artists. We would love to shine some light on national talents. The Waffle Social Club will also give you the opportunity to attend splendid events for the community, catered by the community."}
        />
        <Details
          question={"When will I be able to buy and sell waffles on the secondary market?"}
          content={"We will update you on our social media platforms as soon as our waffles will be available on the secondary market. Join us to stay on top of the news."}
        />
        <Details
          question={"Why do we chose Solana Blockchain over Ethereum?"}
          content={"We wanted to include more people in the project, Ethereum has high fees like 40€ to hundred of euros for just using their blockchain."}
        />
        <Details
          question={"How to ensure I have the ownership of the NFT?"}
          content={"The fundamental idea of an NFT is tracking ownership on-chain. This means your NFT's ownership is directly linked to your wallet address. Please read the conditions and terms page."}
        />
        <Details
          question={"I got a DM with a link from someone claiming to be part of the team, can I trust it?"}
          content={"We never send DMs and never ask for a private key or recovery phrase. If someone ask you any personal information claiming to be part of the team, be careful and don't answer. We like our community to be safe."}
        />
        <Details
          question={"Do we accept Euros? "}
          content={"In a ways, we can say yes, Moonpay includes the Phantom wallet so you can send a bank transfer directly to them and they transfer you the Solana on your account. After you gonna have the possibility to buy a waffle on the mint page. But I supposed you can ask your crypto friend."}
        />
        <Details
          question={"How can I get more detailed information?"}
          content={"You can join us on Discord and ask us anything or check our docs on https://docs.wafflesocialclub.be/"}
        />
        <Details
          question={"What is a wallet?"}
          content={"A wallet is the digital storage where all your NFTs are saved for you in one place to access them. It's like your very own digital safe."}
        />
        <Details
          question={"How do I access my NFT?"}
          content={"1) Access your wallet by clicking the Phantom icon button just right from the address bar of your browser 2) Open your wallet by entering your password 3) Open your NFT collection by clicking the gallery button (four small squares)"}
        />
        <Details
          question={"Where can I see the contract address?"}
          content={" The contract address will be shared here once the mint begins."}
        />
      </Section>
      <AliceCarousel
        animationDuration={15000}
        autoPlayInterval={1}
        animationEasingFunction={'linear'}
        autoPlay
        infinite
        disableDotsControls
        autoWidth
        disableButtonsControls
        mouseTracking
        items={artworks.map((src: string) => <Image key={src} src={src} width={300} height={300} alt={""}/>)}
      />
      <Footer/>
    </>
  );
}
