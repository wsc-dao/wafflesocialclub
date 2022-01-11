import {Images} from "./Images";
import * as THREE from "three";
// @ts-ignore
import FOG from "vanta/dist/vanta.fog.min"
import {useEffect, useRef, useState} from "react";
import {LightRed, OffWhite, Red, YellowCream} from "../consts";

export const Hero = () => {
  const [vantaEffect, setVantaEffect] = useState(0)

  const vantaRef = useRef(null);
  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(FOG({
        el: vantaRef.current,
        THREE,
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        //minHeight: '120vh',
        // minWidth: 200.00,
        highlightColor: LightRed,
        midtoneColor: YellowCream,
        lowlightColor: OffWhite,
        baseColor: Red,
        // highlightColor: '#ffb400',
        // midtoneColor: '#ff8a00',
        // lowlightColor: '#ffffff',
        // baseColor: '#ffebeb',
        blurFactor: 0.5,
        // zoom: 1.60,
        speed: 0.6,
      }))
    }
    return () => {
      if (vantaEffect) { // @ts-ignore
        vantaEffect.destroy()
      }
    }
  }, [vantaEffect])
  return <>

    <section ref={vantaRef} style={{
      height: "100vh",
      minHeight:'1080px',
      backgroundColor: "#f5d8ad",
      backgroundImage: "url('/flat-mountains.svg')",
      backgroundPosition: "bottom",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      position: "relative",
    }}>
      <h1 style={{fontSize: "35pt", color: "#B8202E", fontWeight: "bold"}}>Have a bite!</h1>
      <Images sources={[
        /*
           "/artwork/Gaufre_0.jpg",
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
       */
        "/artwork/waffle_french.jpg",
        "/artwork/waffle_zombie.jpg",
        "/artwork/waffle_robot.jpg",
      ]}/>
      <div style={{
        paddingBottom:'250px',
      }}>
        <h2>Mint date</h2>
        <time> 12/05/2021 21:00 UTC</time>
      </div>
      <div style={{
        position: "absolute",
        bottom: 0,
        left: 0,
        right: 0,
        transform:'translateY(20%)',
        width: '100%',
        height: '263px',
        background: `url('/chantilly.pat.png')`,
      }}/>
    </section>

  </>;
}
