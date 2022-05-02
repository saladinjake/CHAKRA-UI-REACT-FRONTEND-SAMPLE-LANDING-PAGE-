export default  class Tabsshow extends React.PureComponent {
    constructor(props) {
        super(props);
        this._ref = React.createRef();
        this.config ={
  "symbols": [
    {
      "title": "S&P 500",
      "proName": "INDEX:SPX"
    },
    {
      "title": "Nasdaq 100",
      "proName": "INDEX:IUXX"
    },
    {
      "title": "EUR/USD",
      "proName": "FX_IDC:EURUSD"
    },
    {
      "title": "BTC/USD",
      "proName": "BITFINEX:BTCUSD"
    },
    {
      "title": "ETH/USD",
      "proName": "BITFINEX:ETHUSD"
    },
    {
      "description": "Apple",
      "proName": "NASDAQ:AAPL"
    },
    {
      "description": "Berkshire",
      "proName": "NYSE:BRK.A"
    },
    {
      "description": "Microsoft",
      "proName": "NASDAQ:MSFT"
    },
    {
      "description": "Google",
      "proName": "NASDAQ:GOOG"
    },
    {
      "description": "Tesla",
      "proName": "NASDAQ:TSLA"
    },
    {
      "description": "Amazon",
      "proName": "NASDAQ:AMZN"
    },
    {
      "description": "AUD/USD",
      "proName": "OANDA:AUDUSD"
    },
    {
      "description": "Sony",
      "proName": "NYSE:SNE"
    },
    {
      "description": "BHP",
      "proName": "BHP"
    },
    {
      "description": "Telstra",
      "proName": "TLS"
    }
  ],
  "locale": "en"
}
    }
 componentDidMount() {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-market-overview.js'
        script.async = true;
        script.innerHTML = JSON.stringify()/* JSON-ENCODED SETTINGS STRING FROM EMBED CODE */
        this._ref.current.appendChild(script);
    }
    render() {
        return(
        <div class="tradingview-widget-container" ref={this._ref}>
            <div class="tradingview-widget-container__widget"></div>
           
        </div>
        );
    }
   
}












class Stock {
  constructor(symbol, compname, price) {
    this.symbol = symbol;
    this.compname = compname;
    this.price = price;
  }
  addtoDOM() {
    var elem = jQuery("#stock_wrapper");
    elem.append(`<div class="stock-item">
<div class="stock-inner">
<div class="symb">${this.symbol}</div>
<div class="compname">${this.compname}</div>
<div class="gap"></div>
<div class="pricetag">${this.price}<sup>$</sup></div>
</div>
</div>`);
  }
}


setTimeout(function getdata(){
  jQuery.get("https://api.coincap.io/v2/assets")
  .then(function(message) {
    console.log("data every second.---");
  displayitems(message.data);
})
    .catch(function() {
  //jQuery("#para").text("Something went wrong");
  console.log("Somthing went wrong");
});
  setTimeout(getdata,1000);
  },1000)

function displayitems(objects) {
  for (let key in objects) {
    if (objects.hasOwnProperty(key)) {
      let newstock = new Stock(
        objects[key].symbol,
        objects[key].name,
        objects[key].priceUsd
      );
      newstock.addtoDOM(); //
    }
  }
}