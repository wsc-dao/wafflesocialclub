import Head from "next/head";
import Image from "next/image";
import {Header} from "../../../components/Header";
import {Hero} from "../../../components/Hero";
import {DataCard} from "../../../components/DataCard";
import {Section} from "../../../components/Section";
import {Timeline} from "../../../components/Timeline";
import {MemberCard} from "../../../components/MemberCard";
import {Footer} from "../../../components/Footer";
import truck from "../../../public/banner.png";
import table from "../../../public/whipped_creamdao.png";
import {Details} from "../../../components/Details";
import AliceCarousel from "react-alice-carousel";
import {readdirSync} from "fs";
import path from "path";

const artworks = ["/transparent/0.png",
  "/transparent/1.png",
  "/transparent/2.png",
  "/transparent/3.png",
  "/transparent/4.png",
  "/transparent/5.png",
  "/transparent/6.png",
  "/transparent/7.png",
  "/transparent/8.png",
  "/transparent/9.png"];
export async function getServerSideProps() {
  const dirRelativeToPublicFolder = 'artwork'

  const dir = path.resolve('./public', dirRelativeToPublicFolder);

  const filenames = readdirSync(dir);

  const artworks = filenames.map((name:string) => path.join('/', dirRelativeToPublicFolder, name))

  return {
    props: {artworks}, // will be passed to the page component as props
  }
}
export default function Home({artworks}:{artworks:string[]}) {
  return (
    <>
      <Head>
        <title>Waffle Social Club</title>
      </Head>
      <Header home={true}/>
      <Hero artworks={artworks}/>
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
          <div style={{display: 'flex', justifyContent: 'space-evenly', width: '100%'}}>
            {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
            <a
              style={{
                background: '#B8202E',
                color: '#f5d8ad',
                padding: '12px 16px',
                borderRadius: '20px',
                fontWeight: 'bold'
              }}
              href="/niet/publiek/roadmap.deck">View ou roadmap</a>
            <a
              style={{
                color: '#B8202E',
                background: '#f5d8ad',
                padding: '12px 16px',
                borderRadius: '20px',
                fontWeight: 'bold'
              }}
              href="#collection">View collection</a>
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

      <Section
        title={'Waffle Team'}
        contentStyle={{
          display: 'grid',
          maxWidth: '1500px',
          gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr) )',
          gap: '6rem',
          alignItems: 'baseline',
        }}
        id={'team'}
      >
        <MemberCard
          name={'WaffleDAO'}
          title={"our new CEO"}
          url={'https://twitter.com/WaffleSoClubNFT'}
        />
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
        contentStyle={{
          display: 'grid',
          maxWidth: '1500px',
          gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr) )',
          gap: '2rem',
          alignItems: 'baseline',
        }}
      >
        <Details
          question={"What is a NFT ?"}
          content={"NFTs (Non-Fungible Tokens) are one-of-a-kind tokens that represent a unique good or asset, like digital art. They can be sold to collectors and the sale of NFTs. Our NFTs will be create by minting and are hosted on the Solana blockchain."}/>
        <Details
          question={"What is a wallet ?"}
          content={"A wallet is the digital storage where all your NFTs are saved for you in one place to access them. It's like your very own digital safe."}
        />
        <Details
          question={"How can I get more detailed information ?"}
          content={"You can join us on Discord and ask us anything"}
        />
        <Details
          question={"When will I be able to bake my very own waffle ?"}
          content={"Follow our social media to be the first informed of the reveal date."}
        />
        <Details
          question={"How do I access my NFT ?"}
          content={"1) Access your wallet by clicking the Phantom icon button just right from the address bar of your browser 2) Open your wallet by entering your password 3) Open your NFT collection by clicking the gallery button (four small squares)"}
        />
        <Details
          question={"What can I do with my waffle NFT after minting ?"}
          content={"You can keep your waffle to get exclusive access to the Waffle Social Club and meet the membres of the community during our splendid events. You can also share it, gift it or sell it directly from your wallet on to the secondary market. There you can see what your NFT is worth at the moment."}
        />
        <Details
          question={"What does my Waffle Social Club access offers ?"}
          content={"The main goal of the Waffle Social Club is to be an incubator for belgian artists. We would love to shine some light on national talents. The Waffle Social Club will also give you the opportunity to attend splendid events for the community, catered by the community."}
        />
        <Details
          question={"When will I be able to buy and sell waffles on the secondary market ?"}
          content={"We will update you on our social media platforms as soon as our waffles will be available on the secondary market. Join us to stay on top of the news."}
        />
        <Details
          question={"How to ensure I have the ownership of the NFT ?"}
          content={"The fundamental idea of an NFT is tracking ownership on-chain. This means your NFT's ownership is directly linked to your wallet address."}
        />
        <Details
          question={"Where can I see the contract address ?"}
          content={" The contract address will be shared here once the mint begins."}
        />
        <Details
          question={"I got a DM with a link from someone claiming to be part of the team, can I trust it ?"}
          content={"We never send DMs and never ask for a private key or recovery phrase. If someone ask you any personal information claiming to be part of the team, be careful and don't answer. We like our community to be safe."}
        />
        <Details
          question={"Do we accept Euros ? "}
          content={"The main goal of the Waffle Social Club is to be an incubator for belgian artists. We would love to shine some light on national talents. The Waffle Social Club will also give you the opportunity to attend splendid events for the community, catered by the community."}
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
        items={artworks.map((src:string) => <Image key={src} src={src} width={300} height={300} alt={""}/>)}
      />
      <Footer/>
    </>
  );
}
