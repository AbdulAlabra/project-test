var crypto_name = "BTC";
var stock_name = "";

var queryURL = "https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=AAPL&outputsize=full&apikey=Z192UWPZED4LZB5Z";
var api_key = "Z192UWPZED4LZB5Z";

console.log(queryURL);
// var stock = $("stock-box").val();
$.ajax({
    url: queryURL,
    method: "GET"
})
    .then(function (response) {
        var AA_from_2000_to_2018_stock = response;
        var AA_convert_object_to_array = Object.values(AA_from_2000_to_2018_stock);
        var AA_array_for_numbers = Object.values(AA_convert_object_to_array[1]);
        var AA_array_for_dates = Object.keys(AA_convert_object_to_array[1]);
console.log(response);
console.log(AA_convert_object_to_array);
console.log(AA_array_for_numbers);
        //empty arrays to use later in the foor loop in order to seaprete high and low value.  
        var array_for_low_values = [];
        var array_for_high_values = [];
        // console.log(AA_array_for_dates);
        // console.log(AA_array_for_numbers);

        var days_array_2018 = [];
        var days_array_2017 = [];
        var days_array_2016 = [];
        var days_array_2015 = [];
        var days_array_2014 = [];
        var days_array_2013 = [];
        var days_array_2012 = [];
        var days_array_2011 = [];
        var days_array_2010 = [];
        var days_array_2009 = [];
        var days_array_2008 = [];
        var days_array_2007 = [];
        var days_array_2006 = [];
        var days_array_2005 = [];
        var days_array_2004 = [];
        var days_array_2003 = [];
        var days_array_2002 = [];
        var days_array_2001 = [];
        var days_array_2000 = [];


        for (var i = 0; i < AA_array_for_numbers.length; i++) {
            //every index has low and high value. so we should break every index into 2 parts; high and low.

            // this capture the low value of the index and store it in the "low_values" variable.
            var low_values = AA_array_for_numbers[i]['3. low'];

            //samething here but this will be for high values
            var high_values = AA_array_for_numbers[i]['2. high'];
            //gets the date of the index
            var date_for_values = AA_array_for_dates[i];

            array_for_low_values.push(low_values);
            array_for_high_values.push(high_values);
            // array_for_high_values.push(high_values);
        }

        // these variables find the lowest and highest values of AA_array_for_low_value and AA_array_for_high_value arrays. 
        var lowVal_index = array_for_low_values.indexOf(Math.min(...array_for_low_values).toFixed(4));
        var highVal_index = array_for_high_values.indexOf(Math.max(...array_for_high_values).toFixed(4));

        for (var i = 0; i < AA_array_for_dates.length; i++) {

            if (AA_array_for_dates[i].includes('2018')) { 
                days_array_2018.push(AA_array_for_dates[i]);      
            }
             else if(AA_array_for_dates[i].includes('2017')){
                days_array_2017.push(AA_array_for_dates[i]);
                
            }

            else if(AA_array_for_dates[i].includes('2016')) {
                days_array_2016.push(AA_array_for_dates[i]);
            }

            else if(AA_array_for_dates[i].includes('2015')) {
                days_array_2015.push(AA_array_for_dates[i]);
            }

            else if(AA_array_for_dates[i].includes('2014')) {
                days_array_2014.push(AA_array_for_dates[i]);
            }

            else if(AA_array_for_dates[i].includes('2013')) {
                days_array_2013.push(AA_array_for_dates[i]);
            }

            else if(AA_array_for_dates[i].includes('2012')) {
                days_array_2012.push(AA_array_for_dates[i]);
            }

            else if(AA_array_for_dates[i].includes('2011')) {
                days_array_2011.push(AA_array_for_dates[i]);
            }

            else if(AA_array_for_dates[i].includes('2010')) {
                days_array_2010.push(AA_array_for_dates[i]);
            }

            else if(AA_array_for_dates[i].includes('2009')) {
                days_array_2009.push(AA_array_for_dates[i]);
            }
            else if(AA_array_for_dates[i].includes('2008')) {
                days_array_2008.push(AA_array_for_dates[i]);
            }
            else if(AA_array_for_dates[i].includes('2007')) {
                days_array_2007.push(AA_array_for_dates[i]);
            }
            else if(AA_array_for_dates[i].includes('2006')) {
                days_array_2006.push(AA_array_for_dates[i]);
            }
            else if(AA_array_for_dates[i].includes('2005')) {
                days_array_2005.push(AA_array_for_dates[i]);
            }
            else if(AA_array_for_dates[i].includes('2004')) {
                days_array_2004.push(AA_array_for_dates[i]);
            }
            else if(AA_array_for_dates[i].includes('2003')) {
                days_array_2003.push(AA_array_for_dates[i]);
            }
            else if(AA_array_for_dates[i].includes('2002')) {
                days_array_2002.push(AA_array_for_dates[i]);
            }
            else if(AA_array_for_dates[i].includes('2001')) {
                days_array_2001.push(AA_array_for_dates[i]);
            }
            else if(AA_array_for_dates[i].includes('2000')) {
                days_array_2000.push(AA_array_for_dates[i]);
            }
            else{
                break;

            }

        }
        console.log(days_array_2018);
        console.log(days_array_2017);
        console.log(days_array_2016);
        console.log(days_array_2015);
        console.log(days_array_2014);
        console.log(days_array_2013);
        console.log(days_array_2012);
        console.log(days_array_2011);
        console.log(days_array_2010);
        console.log(days_array_2009);
        console.log(days_array_2008);
        console.log(days_array_2007);
        console.log(days_array_2006);
        console.log(days_array_2005);
        console.log(days_array_2004);
        console.log(days_array_2003);
        console.log(days_array_2002);
        console.log(days_array_2001);
        console.log(days_array_2000);


        // console.log("----2018---");
        // console.log(AA_array_for_dates[0]);
        // console.log(AA_array_for_dates[138]);

        // console.log("-----2017-----");
        // console.log(AA_array_for_dates[389]);
        // console.log(AA_array_for_dates[139]);

        // console.log("-----2016-----");
        // console.log(AA_array_for_dates[390]);
        // console.log(AA_array_for_dates[641]);

        // console.log("-----2015-----");
        // console.log(AA_array_for_dates[642]);
        // console.log(AA_array_for_dates[893]);

        // console.log("-----2014-----");
        // console.log(AA_array_for_dates[894]);
        // console.log(AA_array_for_dates[1145]);

        // console.log("-----2013-----");
        // console.log(AA_array_for_dates[1146]);
        // console.log(AA_array_for_dates[1397]);

        // console.log("-----2012-----");
        // console.log(AA_array_for_dates[1398]);
        // console.log(AA_array_for_dates[1647]);

        // console.log("-----2011-----");
        // console.log(AA_array_for_dates[1648]);
        // console.log(AA_array_for_dates[1899]);

        // console.log("-----2010-----");
        // console.log(AA_array_for_dates[1900]);
        // console.log(AA_array_for_dates[2150]);





















        var chart = new CanvasJS.Chart("chartContainer", {
            title: {
                text: "Apple lnc."
            },
            data: [
                {
                    // Change type to "doughnut", "line", "splineArea", etc.
                    type: "splineArea",
                    dataPoints: [
                        { label: AA_array_for_dates[lowVal_index], y: Number(array_for_low_values[lowVal_index]) },
                        { label: AA_array_for_dates[highVal_index], y: Number(array_for_high_values[highVal_index]) },
                        { label: "banana", y: 25 },
                        { label: "mango", y: 30 },
                        { label: "grape", y: 28 }
                    ]
                }
            ]
        });
        chart.render();

    }); //end of ajax(then) call

// window.onload = function () {
//     var chart = new CanvasJS.Chart("chartContainer", {
//         title: {
//             text: "Apple lnc."
//         },
//         data: [
//             {
//                 // Change type to "doughnut", "line", "splineArea", etc.
//                 type: "column",
//                 dataPoints: [
//                     { label: "apple", y: 10 },
//                     { label: "orange", y: 15 },
//                     { label: "banana", y: 25 },
//                     { label: "mango", y: 30 },
//                     { label: "grape", y: 28 }
//                 ]
//             }
//         ]
//     });
//     chart.render();
// }
