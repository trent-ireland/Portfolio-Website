$(document).ready(function(){
    $.getJSON("https://api.coindesk.com/v1/bpi/currentprice/BTC.json", function(data) {
        var btcPrice = data.bpi.USD.rate + " Price in USD: ";
        var btcStatement = document.getElementById('btcStatement');
        btcStatement.innerHTML = btcStatement.innerHTML.replace('WORD', btcPrice);
    });
});
