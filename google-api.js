var stock_chosen_name;
var crypto_chosen_name;
var stock_chosen_date_1;
var stock_chosen_date_2;
var money_invested;

$('button').on('click', function () {
    stock_chosen_name = $('.stock-search').val();
    crypto_chosen_name = $('.crypto-search').val();
    stock_chosen_date_1 = $('.date1').val();
    stock_chosen_date_2 = $('.date2').val();
    money_invested = $('.investment').val();

    var queryURL = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=" + stock_chosen_name + "&outputsize=full&apikey=Z192UWPZED4LZB5Z";

    var crypto_queryURL = "https://www.alphavantage.co/query?function=DIGITAL_CURRENCY_DAILY&symbol=" + crypto_chosen_name + "&market=CNY&apikey=Z192UWPZED4LZB5Z";
    var api_key = "Z192UWPZED4LZB5Z";
    console.log(stock_chosen_name.length);

    if (stock_chosen_name.length >= 3) {
        processURL(queryURL);
        debugger;
    }
    else {

    }

    console.log(crypto_chosen_name.length);
    if (crypto_chosen_name.length >= 3) {

        processURL(crypto_queryURL);
        debugger;

    }
    else {

    }

}); //end of the click button 










function processURL(queryURL) {

    $.ajax({
        url: queryURL,
        method: "GET"
    })
        .then(function (response) {



            var turn_obj_to_array = Object.values(response);
            var stock_crypto_info = turn_obj_to_array[0];
            var stock_crypto_price = Object.values(turn_obj_to_array[1]);
            var stock_crypto_dates = Object.keys(turn_obj_to_array[1]);
            //we are getting both the dates and prices 

            var newArray = stock_crypto_dates.map(function (x) {
                var date_index = stock_crypto_dates.indexOf(x);
                var price = stock_crypto_price[date_index];
                price.date = x

                //this will change some of the key names for crypto objects so that the rest of the code can function in the same way as stock
                if (price['2. high'] === undefined) {
                    var high_crypto_val = price['2b. high (USD)'];
                    var low_crypto_val = price['3b. low (USD)'];
                    var open_crypto_val = price['1b. open (USD)'];
                    var close_crypto_val = price['4a. close (CNY)'];

                    price['2. high'] = price['2b. high (USD)']
                    delete price['2b. high (USD)'];
                    price['2. high'] = Number(high_crypto_val).toFixed(4);

                    price['3. low'] = price['3b. low (USD)'];
                    delete price['3b. low (USD)'];
                    price['3. low'] = Number(low_crypto_val).toFixed(4);

                    price['1. open'] = price['1b. open (USD)'];
                    delete price['1b. open (USD)'];
                    price['1. open'] = Number(open_crypto_val).toFixed(4);

                    price['4. close'] = price['4a. close (CNY)'];
                    delete price['4a. close (CNY)'];
                    price['4. close'] = Number(close_crypto_val).toFixed(4);

                    return price
                }
                else {
                    return price
                }
            }); // end of the new array


            //finds the highest price in the last years 20 the stock/crypto 
            var stock_crypto_highest_price = newArray.reduce(function (x, obj) {

                var y = obj['2. high'];
                if (y > x) {
                    return Number(y)
                }
                else {
                    return Number(x)
                }
            }, 0);
            console.log(stock_crypto_highest_price);


            var highest_price_info = newArray.find(function (obj) {

                return obj['2. high'] === stock_crypto_highest_price.toFixed(4).toString();
            });


            var stock_crypto_lowest = newArray.reduce(function (x, obj) {
                var y = obj['3. low'];
                if (y > x) {
                    return Number(x)
                }
                else {
                    return Number(y)
                }
            }, 99999);

            var chart = new CanvasJS.Chart("chartContainer", {
                title: {
                    text: 'AAPL \n' + ' Last Refreshed:  ' + stock_crypto_info['3. Last Refreshed'],

                },
                data: [
                    {
                        // Change type to "doughnut", "line", "splineArea", etc.
                        type: "splineArea",
                        dataPoints: [
                            { label: 'Highest Price Date: ' + highest_price_info.date, y: stock_crypto_highest_price }, //this will be in what ever interval we get

                            { label: "Current Price Date: " + stock_crypto_info['3. Last Refreshed'], y: Number(newArray[0]['2. high']) }
                        ]
                    }
                ]
            });

            chart.render();

            //if the date is not chosen, do nothing

            //this save the price informations of the first date chosen. 
            var showInfo_date1 = newArray.find(function (obj) {
                return obj.date === stock_chosen_date_1
            });
            var showInfo_date2 = newArray.find(function (obj) {
                return obj.date === stock_chosen_date_2
            });


            function calculateInvestment(x) {
                var investment = x;
                var date1_avg_price = (Number(showInfo_date1['2. high']) + Number(showInfo_date1['3. low'])) / 2; //from
                var date2_avg_price = (Number(showInfo_date2['2. high']) + Number(showInfo_date2['3. low'])) / 2;  //to
                var result = investment / date1_avg_price * date2_avg_price;
                var percantageChange = (result - investment) / investment;
                var gain_or_lose = result - investment;

                return 'Your gain/lose: $' + gain_or_lose.toFixed(2) + '\n' + 'ROI: $' + result.toFixed(2) + '\n' + 'Percantage increase/deacrese: ' + percantageChange.toFixed(3) * 100 + '%'
            }

            console.log(showInfo_date1);
            console.log(showInfo_date2);
            console.log(calculateInvestment(money_invested));





        }); //end of ajax(then) call
} // end of process function




