import {useCallback, useState} from "react";

const LightenDarkenColor = (col: string, amt: number) => {

  var usePound = false;

  if (col[0] == "#") {
    col = col.slice(1);
    usePound = true;
  }

  var num = parseInt(col, 16);

  var r = (num >> 16) + amt;

  if (r > 255) r = 255;
  else if (r < 0) r = 0;

  var b = ((num >> 8) & 0x00FF) + amt;

  if (b > 255) b = 255;
  else if (b < 0) b = 0;

  var g = (num & 0x0000FF) + amt;

  if (g > 255) g = 255;
  else if (g < 0) g = 0;

  return (usePound ? "#" : "") + (g | (b << 8) | (r << 16)).toString(16);
}
export default function Home() {
  const steps = [-100, -90, -80, -70, -60, -50, -40, -30, -20, -10, 0, 10, 20, 30, 40, 50, 60, 70, 80, 90, 100]
  const [color, setColor] = useState('#9b0000');
  const updateColor = useCallback((ev) => {
    setColor(ev.target.value);
  }, []);
  const images = ["/transparent/0.png",
    "/transparent/1.png",
    "/transparent/2.png",
    "/transparent/3.png",
    "/transparent/4.png",
    "/transparent/5.png",
    "/transparent/6.png",
    "/transparent/7.png",
    "/transparent/8.png",
    "/transparent/9.png",]
  return <>
    <input type="color" onChange={updateColor} value={color} style={{width: '50px', height: '50px',}}/>
    <div
      style={{
        display: "grid",
        gridTemplateColumns: `repeat(${images.length + 1}, 1fr)`,
        background: color,
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      {steps.map((idx) => {
        const newColor = LightenDarkenColor(color, idx);
        return [
          <div key={newColor}
               style={{
                 background: newColor,
                 height: '100%',
               }}>
            <span>{newColor}</span>
          </div>,
          ...images.map((src) => <div key={src} style={{
            background: newColor,
            padding: 0,
          }}><img width={150} src={src} alt=""/>
          </div>)]
      })}
    </div>
  </>

}
