import styled from "styled-components";

const Intro = styled.section`
  background: url("/banner.png") center center / cover no-repeat;
  padding-top: 9rem;
  width: 100%;
  height: 100vh;

`;

const App = () => <Intro>
  <h1 style={{textAlign: "center", margin: 0,}}>Mixing dough</h1>
</Intro>

export default App;
