import './App.css'
import HTMLFlipBook from 'react-pageflip'

import FlipPage from "react-flip-page"
import page1 from "./assets/first.png"
import page14 from "./assets/second.png"
import p2 from "./assets/2.png"
import p3 from "./assets/3.png"
import p4 from "./assets/4.png"
import p5 from "./assets/5.png"
import p6 from "./assets/6.png"
import p7 from "./assets/7.png"
import p8 from "./assets/8.png"
import p9 from "./assets/9.png"
import p10 from "./assets/10.png"
import p11 from "./assets/11.png"
import p12 from "./assets/12.png"
import p13 from "./assets/13.png"
import p14 from "./assets/14.png"
import p15 from "./assets/15.png"
import p16 from "./assets/16.png"
import p17 from "./assets/17.png"
import p18 from "./assets/18.png"
import p19 from "./assets/19.png"
import p20 from "./assets/20.png"
import p21 from "./assets/21.png"
import p22 from "./assets/22.png"
import p23 from "./assets/23.png"
import p24 from "./assets/24.png"
import p25 from "./assets/25.png"
import p26 from "./assets/26.png"
import p27 from "./assets/27.png"
import p28 from "./assets/28.png"
import p29 from "./assets/29.png"
import p30 from "./assets/30.png"
import p31 from "./assets/31.png"
import p32 from "./assets/32.png"
import p33 from "./assets/33.png"
import p34 from "./assets/34.png"
import p35 from "./assets/35.png"
import p36 from "./assets/36.png"
import p37 from "./assets/37.png"
import p38 from "./assets/38.png"
import p39 from "./assets/39.png"
import p40 from "./assets/40.png"
import p41 from "./assets/41.png"
import p42 from "./assets/42.png"
import p43 from "./assets/43.png"
import p44 from "./assets/44.png"
import p45 from "./assets/45.png"
import p46 from "./assets/46.png"
import p47 from "./assets/47.png"
import p48 from "./assets/48.png"
import p49 from "./assets/49.png"
import p50 from "./assets/50.png"
import p51 from "./assets/51.png"
import p52 from "./assets/52.png"
import p53 from "./assets/53.png"
import p54 from "./assets/54.png"
import p55 from "./assets/55.png"
import p56 from "./assets/56.png"
import p57 from "./assets/57.png"
import p58 from "./assets/58.png"
import p59 from "./assets/59.png"
import p60 from "./assets/60.png"
import p61 from "./assets/61.png"
import p62 from "./assets/62.png"
import p63 from "./assets/63.png"
import p64 from "./assets/64.png"
import p65 from "./assets/65.png"
import p66 from "./assets/66.png"
import p67 from "./assets/67.png"
import p68 from "./assets/68.png"
import p69 from "./assets/69.png"
import p70 from "./assets/70.png"
import p71 from "./assets/71.png"
import p72 from "./assets/72.png"
import p73 from "./assets/73.png"
import p74 from "./assets/74.png"
import p75 from "./assets/75.png"
import p76 from "./assets/76.png"
import p77 from "./assets/77.png"
import p78 from "./assets/78.png"
import p79 from "./assets/79.png"
import p80 from "./assets/80.png"
import p81 from "./assets/81.png"
import p82 from "./assets/82.png"
import p83 from "./assets/83.png"
import p84 from "./assets/84.png"
import p85 from "./assets/85.png"
import p87 from "./assets/87.png"
import p88 from "./assets/88.png"
import p89 from "./assets/89.png"
import p90 from "./assets/90.png"
import p91 from "./assets/91.png"
import p92 from "./assets/92.png"
import p93 from "./assets/93.png"
import p94 from "./assets/94.png"
import p95 from "./assets/95.png"
import p96 from "./assets/96.png"


const imges = [
  p78,
  p79,
  p80,
  p81,
  p82,
  p83,
  p84,
  p85,
  p87,
  p88,
  p89,
  p90,
  p91,
  p92,
  p93,
  p94,
  p95,
  p96,
  p2,
  p3,
  p4,
  p5,
  p6,
  p7,
  p8,
  p9,
  p10,
  p11,
  p12,
  p13,
  p14,
  p15,
  p16,
  p17,
  p18,
  p19,
  p20,
  p21,
  p22,
  p23,
  p24,
  p25,
  p26,
  p27,
  p28,
  p29,
  p30,
  p31,
  p32,
  p33,
  p34,
  p35,
  p36,
  p37,
  p38,
  p39,
  p40,
  p41,
  p42,
  p43,
  p44,
  p45,
  p46,
  p47,
  p48,
  p49,
  p50,
  p51,
  p52,
  p53,
  p54,
  p55,
  p56,
  p57,
  p58,
  p59,
  p60,
  p61,
  p62,
  p63,
  p64,
  p65,
  p66,
  p67,
  p68,
  p69,
  p70,
  p71,
  p72,
  p73,
  p74,
  p75,
  p76,
  p77
]




function App() {

  return (
    <>
      <div
        style={{
            width: "100vw",
            height: "100vh"
          }}

          className='flip'
        >
        <HTMLFlipBook 
          width={400}
          height={500}
          autoSize={true}
          showCover={true}
          startPage={95}
      >

              <div
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
              >
                  <img src={page14} width="100%" height="100%"/>
              </div>

              {
                imges.map((item, index) => (
                  <div className="demoPage" key={index}>
                    <img src={item} width="100%" height="100%"/>
                  </div>
                ))
              }

              <div className="demoPage">
                <img src={page1} width="100%" height="100%"/>
              </div>
      </HTMLFlipBook>
      </div>

      <div
        style={{
            width: "100vw",
            height: "100vh"
          }}

          className='flip2'
        >
        <HTMLFlipBook 
          width={280}
          height={380}
          autoSize={true}
          showCover={true}
          startPage={95}
      >

              <div
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
              >
                  <img src={page14} width="100%" height="100%"/>
              </div>

              {
                imges.map((item, index) => (
                  <div className="demoPage" key={index}>
                    <img src={item} width="100%" height="100%"/>
                  </div>
                ))
              }

              <div className="demoPage">
                <img src={page1} width="100%" height="100%"/>
              </div>
      </HTMLFlipBook>
      </div>

      <div
        style={{
            width: "100vw",
            height: "100vh"
          }}

          className='flip3'
        >
        <HTMLFlipBook 
          width={170}
          height={270}
          autoSize={true}
          showCover={true}
          startPage={95}
      >

              <div
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
              >
                  <img src={page14} width="100%" height="100%"/>
              </div>

              {
                imges.map((item, index) => (
                  <div className="demoPage" key={index}>
                    <img src={item} width="100%" height="100%"/>
                  </div>
                ))
              }

              <div className="demoPage">
                <img src={page1} width="100%" height="100%"/>
              </div>
      </HTMLFlipBook>
      </div>

      <div
        style={{
            width: "100vw",
            height: "100vh"
          }}

          className='flip4'
        >
        <HTMLFlipBook 
          width={130}
          height={230}
          autoSize={true}
          showCover={true}
          startPage={95}
      >

              <div
                  style={{
                    width: "100%",
                    height: "100%",
                  }}
              >
                  <img src={page14} width="100%" height="100%"/>
              </div>

              {
                imges.map((item, index) => (
                  <div className="demoPage" key={index}>
                    <img src={item} width="100%" height="100%"/>
                  </div>
                ))
              }

              <div className="demoPage">
                <img src={page1} width="100%" height="100%"/>
              </div>
      </HTMLFlipBook>
      </div>
    </>
  )
}

export default App
