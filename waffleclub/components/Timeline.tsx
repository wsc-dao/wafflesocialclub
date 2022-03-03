import {motion} from "framer-motion";
import React from 'react';
import styled from "styled-components";
import {OffWhite} from "../consts";

const StyledTimeline = styled.div`
  // display: grid;
  overflow: auto;
  font-size: 1.3rem;
  padding: 2rem;
  position: relative;
  gap: 0;

  .row {
    display: flex;

    @media (min-width: 778px) {
      &.odd {
        flex-direction: row-reverse;
      }

      &.even {
        flex-direction: row
      }
    }

    .filler {
      display: none;
      @media (min-width: 778px) {
        display: unset;
      }
    }
  }
`;

const TimelineElement = styled.div<{ even: boolean; selected: boolean; }>`
  position: relative;
  color: #B8202E;
  width: 100%;
  @media (min-width: 778px) {
    width: 50%;
  }


  :after {
    content: ' ';
    position: absolute;
    width: ${p => p.selected ? '6px' : '2px'};
    top: 0;
    height: 100%;
    background: #f5d8ad;
    left: 0;
    transform: translateX(-50%);
    @media (min-width: 778px) {
      left: unset;
      transform: unset;
      ${p => p.even ? `right: 0;
      transform: translateX(50%);` : `left: 0;
      transform: translateX(-50%);`}
    }
  }

  .card {
    position: relative;
    z-index: 4;
    margin-top: 3rem;
    margin-bottom: 3rem;
    background: #f5d8ad;
    padding: 1rem 2rem;
    max-width: 350px;
    border-radius: 10px;
    box-shadow: #c9b99f 0 0 25px 0;
    margin-left: 25px;

    &.left {
      @media (min-width: 778px) {
        margin-left: auto;
        margin-right: 25px;
      }
    }

    :before {
      content: ' ';
      position: absolute;
      background: ${p => p.selected ? '#f5d8ad' : '#B8202E'};
      border: 1px solid ${OffWhite};
      border-radius: 50%;
      aspect-ratio: 1/1;
      height: 20px;
      font-size: 14px;
      line-height: 20px;
      text-align: center;
      top: 0;
      z-index: 2;
      left: 0;
      transform: translate3d(-50%, 50%, 0);

      @media (min-width: 778px) {
        left: unset;
        transform: unset;
        ${p => p.even ? `
        transform: translate3d(50%, 50%, 0);
        right: -25px;
      ` : `
        left: -25px;
        transform: translate3d(-50%, 50%, 0);
    `}
      }
    }
  }
`;
const cardVariantsLeft = {
  offscreen: {
    x: -300,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1.8
    }
  }
};
const cardVariantsRight = {
  offscreen: {
    x: 300,
    opacity: 0,
  },
  onscreen: {
    x: 0,
    opacity: 1,

    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 1.8
    }
  },
};

function AnimatedTimelineElement(props: { idx: number, selected: boolean, title: string, description: string, callbackfn: (el: any) => JSX.Element }) {
  return (
    <TimelineElement
      even={!!(props.idx % 2)}
      selected={props.selected}
    >
      <motion.div
        initial="offscreen"
        whileInView="onscreen"
        viewport={{once: true, amount: 0.8}}
      >
        <motion.div
          className={`card ${props.idx % 2 ? "left" : "right"}`}
          variants={props.idx % 2 ? cardVariantsLeft : cardVariantsRight}>

          <h3>{props.title}</h3>
          <ul>{props.description.split("\n").map(props.callbackfn)}</ul>
        </motion.div>
      </motion.div>
    </TimelineElement>

  );
}

export const Timeline = () => <StyledTimeline>
  {[
    {
      title: 'December 2021',
      description: 'Gathering the Waffle A-Team\nVision & Utility of the NFT project\nLitepaper’s Creation ',
      selected: false,
    }, {
      title: 'January 2021',
      description: 'Setting Social Networks (Discord / Twitter / FB / …)\nAssets and Traits definitions\nArtist & Artwork choice\nMarketing Planning ',
      selected: false,
    },
    {
      title: 'February 2022',
      description: 'Community Building\nStreet Marketing Campaign\nPartnerships (Influencers, Companies,...)\nWebsite Development\nDevnet Testing',
      selected: false,
    }, {
      title: 'March 2022',
      description: 'Waffle Reveal\nWebsite & Litepaper Reveal\nInfluencer Marketing Campaign\nGiveaway & Contest\nRarity agreement',
      selected: true,
    }, {
      title: 'April 2022',
      description: 'Mainnet Deployment\nMint Release',
      selected: true,
    }, {
      title: '2022-2023',
      description: 'More coming soon',
      selected: true,
    }
  ].map(({title, description, selected}, idx) => (
    <div key={`${title}-${idx}`} className={`row ${idx % 2 ? 'even' : 'odd'}`}>
      <div className={'filler'}/>
      <AnimatedTimelineElement key={`${title}-${idx}`} idx={idx} selected={selected} title={title}
                               description={description}
                               callbackfn={el => <li key={`${title}-${idx}-${el}`}>{el}</li>}/>
    </div>))}
</StyledTimeline>;
