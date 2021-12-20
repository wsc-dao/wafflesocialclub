import {Images} from "./Images";

export const Hero =()=> <section style={{
  height: "100vh",
  backgroundColor: "#f5d8ad",
  backgroundImage: "url('/flat-mountains.svg')",
  backgroundPosition: "bottom",
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
}}>
  <h1 style={{fontSize: "35pt", color: "#B8202E", fontWeight: "bold"}}>Have a bite!</h1>
  <Images sources={["/artwork/Gaufre_0.jpg",
    "/artwork/Gaufre_1.jpg",
    "/artwork/Gaufre_2.jpg",
    "/artwork/Gaufre_3.jpg",
    "/artwork/Gaufre_4.jpg",
    "/artwork/Gaufre_5.jpg",
    "/artwork/Gaufre_6.jpg",
    "/artwork/Gaufre_7.jpg",
    "/artwork/Gaufre_8.jpg",
    "/artwork/Gaufre_9.jpg",
    "/artwork/Gaufre_10.jpg",
  ]}/>
  <div>
    <h2>Mint date</h2>
    <time> 12/05/2021 21:00 UTC</time>
  </div>
</section>;
