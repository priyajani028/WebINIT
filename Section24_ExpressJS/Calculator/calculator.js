const express=require("express");
const bodyParser= require("body-parser");
const app =express();
app.use(bodyParser.urlencoded({
    extended:true
}))

app.get("/", function(req, res){
    // console.log(__dirname+"/index.html");
    res.sendFile(__dirname+"/index.html");
})

app.post("/", function(req,res){
    //console.log(req.body);
    var num1= Number(req.body.num1);
    var num2= Number(req.body.num2);
    var sum= num1+num2;
    res.send("Result: "+sum);
});

app.get("/bmiCalculator", function(req,res){
    res.sendFile(__dirname+"/bmiCalculator.html");
});

app.post("/bmiCalculator", function(req,res){
    var h=parseFloat(req.body.height);
    var w=parseFloat(req.body.weight);
    var bmi= w/(h*h);
    res.send("<h1>BMI</h1> </br> Your BMI is "+bmi);
})

app.listen(3000, function(){
    console.log("Server Started!!");
});