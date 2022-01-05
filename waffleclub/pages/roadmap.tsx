import React from "react";
import styled from "styled-components";
import {DarkGrey, Red, YellowCream} from "../consts";

const FHSectionContainer = styled.div`
  max-height: 100vh;
  overflow: auto;
  scroll-snap-type: mandatory;
  scroll-snap-points-y: repeat(100vh);
  scroll-snap-type: y mandatory;

  section {
    height: 100vh;
    min-height: 100vh;
    max-height: 100vh;
    scroll-snap-align: start;
    padding: 5vh;
    background: ${DarkGrey};

    .content {
      background: ${Red};
      height: 90vh;
      border-radius: 30px;
      padding: 10vh;

      h2 {
        margin: 0;
        max-width: 60%;
        font-size: 55pt;
        line-height: 55pt;
        font-style: italic;
      }

      p {
        max-width: 45%;
        font-size: 20pt;
      }
    }
  }
`;
const Big = styled.span`
  font-size: 83pt;
  max-width: 130%;
  text-transform: uppercase;
  color: ${YellowCream}
`;
const Roadmap = () => <FHSectionContainer>

  <section>
    <div className="content" style={{
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'flex-end',
      background:`linear-gradient(180deg,${YellowCream},#c53535,${Red})`,
    }}>
      <h2 style={{fontSize: '110pt', lineHeight: '109pt'}}>THE WAFFLE CLUB</h2>
      <p style={{
        maxWidth: ' 80%'
      }}>Baking a Belgian limited NFT collection to create the WaffleDAO and private club whilst pionering greater
        ambitions</p>
    </div>
  </section>
  <section>
    <div className="content">
      <h2>Welcome to the <Big>WAFFLEDAO</Big></h2>
      <p>Waffle Club is a collection of 4343 delicious Waffle NFTs - unique and delicious crypto-art, freshly
        baked
        on the Solana blockchain. Made with hand-picked ingredients to offer high quality products. It’s best to
        eat
        them now when it’s still warm. Go treat yourself!
      </p>
      <p style={{fontStyle: 'italic', fontSize: '40pt', fontWeight: 'bolder'}}>
        Lekkeeer!
      </p>
    </div>

  </section>
  <section>
    <div className="content">
      <h2><Big>THE RECIPE</Big><br/>
        The Waffle private club</h2>
      <p>Inspired by BAYC, the Waffle grants you an exclusive membership to the private Waffle Club, giving you
        decisional power in the WaffleDAO* and access to increasing benefits and projects.
      </p>
      <p>
        The plan is to draw together the roadmap path.
      </p>
    </div>
  </section>
  <section>
    <div className="content">
      <h2><Big>when waffle</Big><br/>
        are all baked</h2>
      <p>The WaffleDAO chooses the next steps.
      </p>
    </div>
  </section>
</FHSectionContainer>;


export default Roadmap;
