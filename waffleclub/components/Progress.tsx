import styled from "styled-components";
import {Red} from "../consts";

export const Progress = (props: { value: number; max: number; }) => (
  <CustomProgress style={{}}>
        <span
          style={{width: `${(props.value / props.max) * 100}%`}}
        >
          {`${props.value} / ${props.max}`}
        </span>
  </CustomProgress>
)
const CustomProgress = styled.div`
  appearance: none;
  width: 100%;
  height: 30px;
  font-weight: bold;
  border-radius: 20px;
  overflow: hidden;
  background-color: whiteSmoke;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.25) inset;
  position: relative;
  display: block;
  color: ${Red};
  line-height: 26px;
  font-size: 20px;

  span {
    background-color: #f5d8ad;
    border-radius: 20px;
    text-align: center;
    height: 100%;
    display: block;
  }
`
