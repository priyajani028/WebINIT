const express=require("express");
const bodyParser=require("body-parser");
const request =require("request");
const https=require("https");

const app=express();
app.use(bodyParser.urlencoded({extended:true}));

app.use(express.static("public"));

app.get("/", function(req,res){
    res.sendFile(__dirname+ "/signup.html");
    //res.send("Server running");
})

app.post("/", function(req,res){
    const firstName=req.body.fname;
    const lastName=req.body.lname;
    const email=req.body.email;
    //console.log(first);
    const data={
        members: [{
            email_address: email,
            status: "subscribed",
            merge_fields:{
                FNAME: firstName,
                LNAME:  lastName,
            }
        }]
    }

    const jsonData=JSON.stringify(data);
    const url="https://us12.api.mailchimp.com/3.0/lists/ff9487bd03"
    const options={
        method:"POST",
        auth:"batak:5de921677e409bd7d80a7b6830ac3e46-us12"
    }
    const request=https.request(url,options,function(response){
        if(response.statusCode===200){
            res.sendFile(__dirname+ "/success.html");
        }
        else{
            res.sendFile(__dirname+ "/failure.html");
        }
        response.on("data", function(data){
            console.log(JSON.parse(data));
        })
    });
    request.write(jsonData);
    request.end();
})

app.listen(process.env.PORT || 3000, function(){
    console.log("Server running on port 3000");
})


app.post("/failure", function(req,res){
    res.redirect("/");
})






