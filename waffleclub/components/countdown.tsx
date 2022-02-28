import Countdown from 'react-countdown';
import React, {useState} from 'react';
import styled from "styled-components";

const Root = styled.div`
  display: flex;
  padding: 0;

  & > * {
    margin-right: 0;
    display: flex;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;
    background: #384457;
    color: white;
    border-radius: 5px;
    font-size: 10px;
  }

  .item {
    font-weight: bold;
    font-size: 18px;
  }

  .done {
    display: flex;
    margin-right: 0;
    flex-direction: column;
    align-content: center;
    align-items: center;
    justify-content: center;
    background: #384457;
    color: white;
    border-radius: 5px;
    font-weight: bold;
    font-size: 18px;
  }
`;


interface PhaseCountdownProps {
  date: Date | undefined;
  style?: React.CSSProperties;
  status?: string;
  onComplete?: () => void;
  start?: Date;
  end?: Date;
}

interface CountdownRender {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
  completed: boolean;
}

export const PhaseCountdown: React.FC<PhaseCountdownProps> = ({
                                                                date,
                                                                status,
                                                                style,
                                                                start,
                                                                end,
                                                                onComplete,
                                                              }) => {

  const [isFixed, setIsFixed] = useState(start && end && date ? start.getTime() - Date.now() < 0 : false);

  const renderCountdown = ({days, hours, minutes, seconds, completed}: CountdownRender) => {
    hours += days * 24
    if (completed) {
      return status ? <span className={'done'}>{status}</span> : null;
    } else {
      return (
        <Root style={style}>
          {isFixed && <div>
            <span className={'item'}>
              +
            </span>
          </div>}
          <div>
            <span className={'item'}>
              {hours < 10 ? `0${hours}` : hours}
            </span>
            <span>hrs</span>
          </div>
          <div>
            <span className={'item'}>
              {minutes < 10 ? `0${minutes}` : minutes}
            </span>
            <span>mins</span>
          </div>
          <div>
            <span className={'item'}>
              {seconds < 10 ? `0${seconds}` : seconds}
            </span>
            <span>secs</span>
          </div>
        </Root>
      )
    }
  }

  if (date && start && end) {
    if (isFixed) {
      return <Countdown
        date={start}
        now={() => end.getTime()}
        onComplete={() => setIsFixed(false)}
        renderer={renderCountdown}
      />
    }
  }

  if (date) {
    return (
      <Countdown
        date={date}
        onComplete={onComplete}
        renderer={renderCountdown}
      />
    )
  } else {
    return null
  }
}
