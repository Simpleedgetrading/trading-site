export default function Ticker() {
  return (
    <div className="ticker-wrap">
      <div className="ticker">

        <div className="ticker-item">
          S&P 500 <span className="ticker-up">+0.82%</span>
        </div>

        <div className="ticker-item">
          NASDAQ <span className="ticker-up">+1.14%</span>
        </div>

        <div className="ticker-item">
          DOW <span className="ticker-down">-0.23%</span>
        </div>

        <div className="ticker-item">
          BTC <span className="ticker-up">+2.11%</span>
        </div>

        <div className="ticker-item">
          GOLD <span className="ticker-down">-0.35%</span>
        </div>

      </div>
    </div>
  )
}