
var btc = document.getElementById("bitcoin1");
    var eth = document.getElementById("eutherium");
    var doge = document.getElementById("dogecoin");

    var settings = {
      "async": true,
      "crossDomain": true,
      "url": "https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=BTC&to_currency=USD&apikey=YOUR_API_KEY",
      "method": "GET",
      "headers": {}
    };

    $.ajax(settings).done(function(response) {
      var btcPrice = response["Realtime Currency Exchange Rate"]["5. Exchange Rate"];
      btc.innerHTML = btcPrice;
    });

    settings.url = "https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=ETH&to_currency=USD&apikey=YOUR_API_KEY";

    $.ajax(settings).done(function(response) {
      var ethPrice = response["Realtime Currency Exchange Rate"]["5. Exchange Rate"];
      eth.innerHTML = ethPrice;
    });

    
    settings.url = "https://www.alphavantage.co/query?function=CURRENCY_EXCHANGE_RATE&from_currency=DOGE&to_currency=USD&apikey=YOUR_API_KEY";

    $.ajax(settings).done(function(response) {
      var dogePrice = response["Realtime Currency Exchange Rate"]["5. Exchange Rate"];
      doge.innerHTML = dogePrice;
    });
  



