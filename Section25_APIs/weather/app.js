const express=require("express");
const https=require("https");
const bodyParser=require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended:true}));

app.get("/", function(req,res){
    res.sendFile(__dirname+"/index.html");
});

app.post("/", function(req,res){
    console.log(req.body.cityName);
    const appid="b9e9d71c04f84655217555cba826fcb2";
    const query=req.body.cityName;
    const unit="metric";
    const url="https://api.openweathermap.org/data/2.5/weather?q="+query+"&appid="+appid+"&units="+unit;

    https.get(url, function(response){
        console.log(response.statusCode);
        response.on("data", function(data){
            const weatherData=JSON.parse(data);
            //console.log(weatherData);
            const temp=weatherData.main.temp;
            const desc=weatherData.weather[0].description;
            const icon= weatherData.weather[0].icon;
            const imgURL= "https://openweathermap.org/img/wn/"+icon+"@2x.png";
            //console.log(temp);
            //console.log(desc);
            res.write("<h1>The temperature in "+query+" is "+temp +" degrees Celsius</h1>");
            res.write("<h2>The weather is "+desc+"</h2>")
            res.write("<img alt='Image' src="+imgURL+"/>")
            res.send();
        })
    });
})



app.listen(3000, function(req,res){
    console.log("Server is running on port 3000");
})