import React from 'react';
import styled from "styled-components";

interface Props {
  selected: boolean;
}

const Line = styled.div`
  height: 3px;
  position: absolute;
  bottom: 2rem;
  left:0;
  right: 0;
  transform: translateY(50%);
  background: #f5d8ad;
`;

const StyledTimeline = styled.div`
  display: flex;
  overflow: auto;
  font-size: 1.3rem;
  padding: 2rem;
  position: relative;
  gap: 2rem;
`;

const TimelineElement = styled.div<{ selected: boolean }>`
  position: relative;
  border-left: 2px solid #f5d8ad;
  color: #B8202E;
  min-width: max-content;

  :before {
    content: ' ';
    position: absolute;
    background: ${p => p.selected ? '#B8202E' : '#f5d8ad'};
    border: 1px solid white;
    border-radius: 50%;
    aspect-ratio: 1/1;
    height: 20px;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    bottom: 0;
    left: 0;
    transform: translate3d(-50%, 50%, 0);
  }

  div {
    margin-top: 1rem;
    margin-bottom: 3rem;
    background: #f5d8ad;
    padding: 1rem 2rem;

  }
`;


export const Timeline = () => {
  return <StyledTimeline>
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
      },
    ].map(({title, description, selected}, idx) => (
      <TimelineElement key={`${title}-${idx}`} selected={selected}>
        <div>
          <h3>{title}-{idx}</h3>
          <p>{description}</p>
        </div>
      </TimelineElement>))}
    <Line/>
  </StyledTimeline>
}
