const express = require("express");
const request = require("request");

const app = express();

// home url
app.get("/",(req,res)=>{
    res.send(`/datewise : get data by date,
    /citywise : get citywise data,
    /multiplecities : get data for all entered cities,
    /forecast : get data for future days`);
});

// get data datewise
app.get("/datewise",(req,res)=>{
    let city = req.query.city;
    let date = req.query.date;
    let url = urlforecaste(false,{city:city,date:date});
    request(url,(error,response,body)=>{
        console.log(url);
        if(response.statusCode === 200){
            res.send(JSON.parse(body).forecast.forecastday);
        }else{
            res.send("Error in path");
        }
    })
})

// get data citywise
app.get("/citywise",(req,res)=>{
    let city = req.query.city;
    let url = urlMaker(false,{city : city});
    request(url,(error,response,body)=>{
        console.log(url);
        let data = JSON.parse(body);
        if(response.statusCode === 200){
            res.send(`The weather report in your city ${city} : 
            {
                Weather : "${data.weather[0].description}" ,
                Temprature(in celsius) : "${data.main.temp}" C
            }`);
        }
        else{
            res.send("Error in request");
        }
    });
})

// get data by using multiplecities
app.get("/multiplecities",(req,res)=>{
    let city = req.query.cities;
    let cities = [];
    city.split(",").map((item)=>{
        cities.push(capitalizeFirstLetter(item.toLowerCase()));
    });
    const fs = require('fs');
    fs.readFile('./city_list.json', 'utf8', (err, data) => {
    if (err) {
        console.error(err);
        return;
    }
    let result  = [];
    JSON.parse(data).map((item)=>{
        cities.includes(item.name) ? result.push(item.id) : false;
    })
    let url = urlMaker(true,{cities : result.join(",")});
    request(url,(error,response,body)=>{
        if(response.statusCode ===200){
            console.log(url);
            let result=[];
            JSON.parse(body).list.map((item)=>{
                result.push(item.name+" : "+item.weather[0].description);
            });
            res.send(result);
        }else{
            res.send("Error in path or city not found");
        }
    })
    });
})

// get data of future days
app.get("/forecast",(req,res)=>{
    let city = req.query.city;
    console.log(city);
    let days = req.query.days;
    let url = urlforecaste(true,{city:city,days:days})
    request(url,(error,response,body)=>{
        console.log(url);
        let data = JSON.parse(body);
        if(response.statusCode === 200){
            let arr = [];
            data.forecast.forecastday.map((item)=>{
                arr.push(item);
            })
            res.send(arr);
        }
    })
})

// capitalizing the first letter
function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

// openweathermap api caller url
function urlMaker(toggle,{city,cities}){
    return `http://api.openweathermap.org/data/2.5/${toggle ? `group?id=${cities}` : `weather?q=${city}`}&units=metric&appid=bc12083e70d2d22298c2df1cec7101d9`;
}

// weatherapi caller url
function urlforecaste(endpoint,{city,date,days}){
    return `http://api.weatherapi.com/v1/forecast.json?q=${city}&key=8d82ccb57f7e4874b8a45024220708${endpoint?`&days=${days?days:1}` : `&dt=${date}`}`;
    }

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})