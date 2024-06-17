import { useEffect, useRef } from "react";

const Tickertap = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.type = "text/javascript";
    script.async = true;
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-ticker-tape.js";
    script.innerHTML = JSON.stringify({
      symbols: [
        { description: "Tesla", proName: "NASDAQ:TSLA" },
        { description: "Apple Inc", proName: "NASDAQ:AAPL" },
        { description: "Nvidia", proName: "NASDAQ:NVDA" },
        { description: "Microsoft", proName: "NASDAQ:MSFT" },
        { description: "Advanced Micro Devices", proName: "NASDAQ:AMD" },
        { description: "Meta", proName: "NASDAQ:META" },
        { description: "Netflix", proName: "NASDAQ:NFLX" },
      ],
      showSymbolLogo: true,
      colorTheme: "light",
      isTransparent: false,
      displayMode: "compact",
      locale: "en",
    });

    if (containerRef.current) {
      containerRef.current.appendChild(script);
    }

    return () => {
      if (containerRef.current) {
        containerRef.current.innerHTML = "";
      }
    };
  }, []);

  return (
    <>
     
        <div className="tradingview-widget-container" ref={containerRef}>
          <div className="tradingview-widget-container__widget"></div>
          <div className="tradingview-widget-copyright">
            <a
              href="https://www.tradingview.com/"
              rel="noopener nofollow"
              target="_blank"
            >
              <span className="blue-text" style={{color:"black"}}>
                Track all markets on TradingView
              </span>
            </a>
          </div>
        </div>
       
    </>
  );
};

export default Tickertap;
