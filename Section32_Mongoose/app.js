//jshint esverion6

//const express= require("express");
// const { MongoClient} = require('mongodb');
const mongoose=require("mongoose");
//const app = express();

const uri="mongodb+srv://demo:priya028@cluster0.kz4qqq1.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(uri,{
    useNewUrlParser: true
});

// const fruitSchema= new mongoose.Schema({
//     name: String,
//     rating: Number,
//     review: String
// });


const fruitSchema= new mongoose.Schema({
    name: {
        type:String,
        required:[true, "Pls check your data entry!"]
    },
    rating: {
        type: Number,
        min: 1,
        max:10
    },
    review: String
});


const Fruit=mongoose.model("Fruit", fruitSchema);

const fruit=new Fruit({
    name:"Apple",
    rating: 7,
    review: "Good"
});
// fruit.save();

// app.get("/", function(req,res){
//     res.send("<h1>Hello</h1>");
// })

// app.listen(3000, function(){
//     console.log("Server connected");
// })

const personSchema=new mongoose.Schema({
    name: String,
    age: Number,
    favFruit: fruitSchema
});

const Person= mongoose.model("Person", personSchema);

const pineapple = new Fruit({
    name: "Pineapple",
    score: 9,
    review:"Pineapple is lovely."
});

// pineapple.save();

// const person =new Person({
//     name:"John",
//     age:37
// });

const person =new Person({
    name:"Amy",
    age:12,
    favFruit: pineapple
});

person.save();


const mango=new Fruit({
    name:"Mango",
    rating: 10,
    review: "Wow"
});

const banana=new Fruit({
    name:"Banana",
    rating: 6,
    review: "thik hai"
});

const cherry=new Fruit({
    name:"Cherry",
    rating: 9,
    review: "Nice"
});

// Fruit.insertMany([mango, banana, cherry]).then(function(){
//     console.log("Success");
// }).catch(function(err){
//     console.log(err);
// });

// let fruits=new Fruit();

// Fruit.find(fruits).then(function(){
//     console.log(fruits);
// }).catch(function(err){
//     console.log(err);
// });

//mongoose.connection.close();

// Fruit.updateOne({name:"Apple"},{name:"Peach"}).then(function(){
//     console.log("Successfully updated");
// }).catch(function(err){
//     console.log(err);
// });

// Fruit.deleteOne({name:"Apple"}).then(function(){
//     console.log("Deleted successfully");
// }).catch(function(err){
//     console.log(err);
// })

// Fruit.deleteMany({name:"Apple"}).then(function(){
//     console.log("Success");
// }).catch(function(err){
//     console.log(err);
// });


const orange = new Fruit({
    name: "Orange",
    score: 5,
    review:"Yummy"
});
orange.save();

Person.updateMany({name:"John"},{favFruit: orange}).then(function(){
    console.log("Updated");
}).catch(function(err){
    console.log(err);
});