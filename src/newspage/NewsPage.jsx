import { useEffect, useRef } from 'react';
import Tickertap from './tickertap';
import News from '../component/News/News';

const NewsPage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement('script');
    script.type = 'text/javascript';
    script.async = true;
    script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js';
    script.innerHTML = JSON.stringify({
      colorTheme: 'light',
      dateRange: '1D',
      exchange: 'BSE',
      showChart: true,
      locale: 'en',
      largeChartUrl: '',
      isTransparent: false,
      showSymbolLogo: false,
      showFloatingTooltip: true,
      width: '400',
      height: '550',
      plotLineColorGrowing: 'rgba(41, 98, 255, 1)',
      plotLineColorFalling: 'rgba(41, 98, 255, 1)',
      gridLineColor: 'rgba(42, 46, 57, 0)',
      scaleFontColor: 'rgba(19, 23, 34, 1)',
      belowLineFillColorGrowing: 'rgba(41, 98, 255, 0.12)',
      belowLineFillColorFalling: 'rgba(41, 98, 255, 0.12)',
      belowLineFillColorGrowingBottom: 'rgba(41, 98, 255, 0)',
      belowLineFillColorFallingBottom: 'rgba(41, 98, 255, 0)',
      symbolActiveColor: 'rgba(41, 98, 255, 0.12)'
    });

    if (containerRef.current) {
      containerRef.current.appendChild(script);
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <>
    <div className="newpage" style={{
      position:"relative"
    }}>



    <Tickertap/>
    <div className="stocktricker" style={{display:"flex", 
    justifyContent:"center",
    gap:"30px",
    alignItems:"center",
    padding:"30px",
    border:"1px solid #ccc",
    borderRadius:"5px",
    margin:"20px 40px"

    }}>
        <div className="textstock" style={{
            width:"40%",
            padding:"20px",
            textAlign:"center",
            border:"1px solid #ccc",
            borderRadius:"5px"
            
        }}>
          <h1 style={{color:"black"}}>Stock Market Ticker</h1>

          <p style={{color:"black"}}>
            A stock market ticker provides real-time information about the
            prices and trading volume of stocks. It can help investors make
            informed decisions about buying and selling stocks.
          </p>
        </div>
    <div className="tradingview-widget-container" ref={containerRef}>
      <div className="tradingview-widget-container__widget"></div>
      <div className="tradingview-widget-copyright">
        <a href="https://www.tradingview.com/" rel="noopener nofollow" target="_blank">
        </a>
      </div>
    </div>
    </div>
    <News/>
    </div>
    </>
  );
};

export default NewsPage;
