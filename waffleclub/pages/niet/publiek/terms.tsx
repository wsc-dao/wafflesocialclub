import Head from "next/head";
import {Header} from "../../../components/Header";
import {Section} from "../../../components/Section";
import {Footer} from "../../../components/Footer";

export default function Home() {


  return (
    <>
      <Head>
        <title>Waffle Social Club Collection</title>
      </Head>
      <Header/>
      <Section title='Terms & Conditions' id="terms and conditions">
      <p>Waffle Social Club is a collection of digital artworks (NFTs) running on the Solana network. This website is only an interface allowing participants to purchase and exchange digital collectibles. Users are entirely responsible for the safety and management of their own private Solana wallets and validating all transactions and contracts generated by this website before approval. Furthermore, as the Waffle Social Club smart contract runs on the Solana network, there is no ability to undo, reverse, or restore any transactions.
        This website and its connected services are provided “as is” and “as available” without warranty of any kind. By using this website you are accepting sole responsibility for any and all transactions involving Waffle Social Club digital collectibles.
        </p>
        </Section>
      <Section title="Ownership" id="ownership">
      <p>
i. You own the NFT. Each Waffle is an NFT on the Solana blockchain. When you purchase an NFT, you own the underlying Waffle, the Art, completely. Ownership of the NFT is mediated entirely by the Smart Contract and the Solana Network: at no point may we seize, freeze, or otherwise modify the ownership of any Waffle.
</p>
<p>
  ii. Personal Use. Subject to your continued compliance with these Terms, the Waffle Social Club creators grant you a worldwide, royalty-free license to use, copy, and display the purchased Art, along with any extensions that you choose to create or use, solely for the following purposes: (i) for your own personal, non-commercial use; (ii) as part of a marketplace that permits the purchase and sale of your Waffle Social Club / NFT, provided that the marketplace cryptographically verifies each Waffle owner’s rights to display the Art for their Waffle to ensure that only the actual owner can display the Art; or (iii) as part of a third party website or application that permits the inclusion, involvement, or participation of your Waffle, provided that the website or application cryptographically verifies each Waffle owner’s rights to display the Art for their Waffle to ensure that only the actual owner can display the Art, and provided that the Art is no longer visible once the owner of the Waffle leaves the website or application.
  </p>
<p>iii. Commercial Use. Subject to your continued compliance with these Terms, the Waffle Social Club creators grant you an unlimited, worldwide license to use, copy, and display the purchased Art for the purpose of creating derivative works based upon the Art (“Commercial Use”). Examples of such Commercial Use would e.g. be the use of the Art to produce and sell merchandise products (T-Shirts etc.) displaying copies of the Art. For the sake of clarity, nothing in this Section will be deemed to restrict you from (i) owning or operating a marketplace that permits the use and sale of Waffles generally, provided that the marketplace cryptographically verifies each Waffle owner’s rights to display the Art for their Waffle to ensure that only the actual owner can display the Art; (ii) owning or operating a third party website or application that permits the inclusion, involvement, or participation of Waffles generally, provided that the third party website or application cryptographically verifies each Waffle owner’s rights to display the Art for their Waffle to ensure that only the actual owner can display the Art, and provided that the Art is no longer visible once the owner of the Purchased Waffle leaves the website or application; or (iii) earning revenue from any of the foregoing.
</p>
      </Section>

      <Section title={'TAXES'} id="TAXES">
      <p>You are solely responsible for all taxes and charges that apply in connection with any Waffle NFT transaction. The creators are not responsible for determining the taxes that may apply to any of your transactions, and offer no representation or warranty that any such transaction will be tax-free or will not otherwise have tax consequences.</p>
      </Section>
      <Section title={'CHILDREN'} id="CHILDREN">
      <p>The Waffle Social Club is not targeted towards children. You agree that you are over the age of eighteen (18), or above the legal age of your jurisdiction, whichever is greater. </p>
      </Section>
      <Section title={'Terms are subject to change'} id="Terms">
      </Section>

      <Footer/>
    </>
  );
}

