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

  div {
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


export const Timeline = () => <StyledTimeline>
  {[
    {
      title: 'November 2021',
      description: 'Final team composition',
      selected: true,
    }, {
      title: 'December 2021',
      description: 'Teammeeting',
      selected: true,
    },
    {
      title: 'January 2022',
      description: 'Artist selected\nTrait listing',
      selected: true,
    }, {
      title: 'February 2022',
      description: 'Coming soon page\n',
      selected: false,
    }, {
      title: 'Oktober 2021',
      description: 'Artwork\nWebsite',
      selected: false,
    }, {
      title: 'November 2021',
      description: 'Marketing plan\nScaling',
      selected: false,
    }
  ].map(({title, description, selected}, idx) => (
    <div key={`${title}-${idx}`} className={`row ${idx % 2 ? 'even' : 'odd'}`}>
      <div className={'filler'}/>
      <TimelineElement
        key={`${title}-${idx}`}
        even={!!(idx % 2)}
        selected={selected}
      >
        <div className={idx % 2 ? 'left' : 'right'}>
          <h3>{title}</h3>
          <ul>{description.split('\n').map(el => <li key={`${title}-${idx}-${el}`}>{el}</li>)}</ul>
        </div>
      </TimelineElement>
    </div>))}
</StyledTimeline>;
