import React from 'react';
import styled from "styled-components";

interface Props {
  selected: boolean;
}

const Line = styled.div`
  height: 3px;
  position: absolute;
  bottom: 2rem;
  left: 0;
  right: 0;
  transform: translateY(50%);
  background: #f5d8ad;
`;

const StyledTimeline = styled.div`
  // display: grid;
  overflow: auto;
  font-size: 1.3rem;
  padding: 2rem;
  position: relative;
  gap: 0;
`;

const TimelineElement = styled.div<{ selected: boolean; even: boolean; }>`
  position: relative;
  color: #B8202E;
  width: 50%;

  :before {
    content: ' ';
    position: absolute;
    background: ${p => p.selected ? '#f5d8ad' : '#B8202E'};
    border: 1px solid white;
    border-radius: 50%;
    aspect-ratio: 1/1;
    height: 20px;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    bottom: 0;
    z-index: 2;
    ${p => p.even ? `transform: translate3d(50%, 50%, 0);
      right: 0;` : `left: 0;
    transform: translate3d(-50%, 50%, 0);`}
  }

  :after {
    content: ' ';
    position: absolute;
    width: ${p => p.selected ?'6px': '2px'};
    top: 0;
    height: 100%;
    background: #f5d8ad;
    ${p => p.even ? `right: 0;
      transform: translateX(50%);` : `left: 0;
      transform: translateX(-50%);`}
  }

  div {
    margin-top: 3rem;
    margin-bottom: 3rem;
    background: #f5d8ad;
    padding: 1rem 2rem;
  }
`;


export const Timeline = () => <StyledTimeline>
  {[
    {
      title: 'Oktober 2021',
      description: 'Artwork\nWebsite',
      selected: true,
    }, {
      title: 'November 2021',
      description: 'Marketing plan\nScaling',
      selected: true,
    },
    {
      title: 'Oktober 2021',
      description: 'Artwork\nWebsite',
      selected: false,
    }, {
      title: 'November 2021',
      description: 'Marketing plan\nScaling',
      selected: false,
    }, {
      title: 'Oktober 2021',
      description: 'Artwork\nWebsite',
      selected: false,
    }, {
      title: 'November 2021',
      description: 'Marketing plan\nScaling',
      selected: false,
    },
    {
      title: 'Oktober 2021',
      description: 'Artwork\nWebsite',
      selected: false,
    }, {
      title: 'November 2021',
      description: 'Marketing plan\nScaling',
      selected: false,
    },
  ].map(({title, description, selected}, idx) => (
    <div key={`${title}-${idx}`} style={{
      display: 'flex',
      flexDirection: idx % 2 ? 'row' : 'row-reverse'
    }}>
      <div/>
      <TimelineElement key={`${title}-${idx}`} selected={selected} even={idx % 2}>
        <div>
          <h3>{title}-{idx}</h3>
          <ul>{description.split('\n').map(el => <li  key={`${title}-${idx}-${el}`}>{el}</li>)}</ul>
        </div>
      </TimelineElement>
    </div>))}
  <Line/>
</StyledTimeline>;
