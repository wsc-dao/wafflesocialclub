import styled from "styled-components";
import {Red} from "../consts";
import {Socials} from "../components/Socials";

const Intro = styled.section`
  
  background: url("/banner.png") center center / cover no-repeat;
  padding-top: 9rem;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h1 {
    font-family: 'Dancing Script', cursive;
    font-size: 3rem;
    text-align: center;
    margin: 0 0 5vh;
  }

  .socials {
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    margin-bottom: 20vh;

    height: 100%;
    flex-direction: column;
    margin-left: 2vw;

    a {
      padding: 3px;
      width: 60px;
      height: 60px;

      svg {
        fill: white;
        filter: drop-shadow(0 0 5px ${Red});

      }
    }
  }
`;

const App = () => <Intro>
  <Socials/>
  <h1>Currently mixing dough...</h1>
</Intro>

export default App;
