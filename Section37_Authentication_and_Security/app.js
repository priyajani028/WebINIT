//jshint esversion:6

const dotenv=require("dotenv").config();
const express= require("express");
const bodyParser= require("body-parser");
const ejs=require("ejs");
const mongoose= require('mongoose');
const encrypt= require("mongoose-encryption");
const md5= require("md5");
const bcrypt=require("bcrypt");
const session = require("express-session");
const passport =require("passport");
const passportLocalMongoose =require("passport-local-mongoose");
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const findOrCreate= require("mongoose-findorcreate");

const saltRounds=10;


const app= express();

app.use(express.static("public"));
app.set("view engine", 'ejs');
app.use(bodyParser.urlencoded({
    extended: true
}));

//level5 ---

app.use(session({
    secret: "Our little secret.",
    resave: false,
    saveUninitialized: false,
}));

app.use(passport.initialize());
app.use(passport.session());

// ----

mongoose.connect(process.env.AuthURL, {useNewUrlParser: true});

// mongoose.set("UseCreateIndex", true);

//used for level 1
// const userSchema={
//     email:String,
//     password: String
// };


//level2 ----
const userSchema=new mongoose.Schema({
    email:String,
    password: String,
    googleId:String,
    secret: String
});

//userSchema.plugin(encrypt,{secret: process.env.SECRET, encryptedFields:["password"]});
//-----level2

//level5
userSchema.plugin(passportLocalMongoose);
userSchema.plugin(findOrCreate);


//level 3 using md5 . check post login and register .


//level5
const User=new mongoose.model("User", userSchema);

passport.use(User.createStrategy());
// passport.serializeUser(User.serializeUser());
// passport.deserializeUser(User.deserializeUser());

//level6

passport.serializeUser(function(user, cb) {
    process.nextTick(function() {
      return cb(null, {
        id: user.id,
        username: user.username,
        picture: user.picture
      });
    });
  });
  
  passport.deserializeUser(function(user, cb) {
    process.nextTick(function() {
      return cb(null, user);
    });
  });
passport.use(new GoogleStrategy({
    clientID: process.env.CLIENT_ID,
    clientSecret: process.env.CLIENT_SECRET,
    callbackURL: "http://localhost:3000/auth/google/secrets",
    userProfileURL:"https://www.googleapis.com/oauth2/v3/userinfo"
  },
  function(accessToken, refreshToken, profile, cb) {
    //console.log(profile);
    User.findOrCreate({ googleId: profile.id }, function (err, user) {
      return cb(err, user);
    });
  }
));


app.get("/", function(req,res){
    res.render("home");
});

app.get("/register", function(req,res){
    res.render("register");
});

app.get("/login", function(req,res){
    res.render("login");
});

app.get("/secrets", function(req,res){
    User.find({"secret":{$ne: null}}).then(function(foundUsers){
        res.render("secrets", {usersWithSecrets: foundUsers});
    }).catch(function(err){
        console.log(err);
    })
    // if(req.isAuthenticated()){
    //     res.render("secrets");
    // }else{
    //     res.redirect("/login");
    // }
});

app.get("/submit", function(req,res){
    if(req.isAuthenticated()){
        res.render("submit");
    }else{
        res.redirect("/login");
    }
});

app.post("/submit", function(req,res){
    const submittedSecret =req.body.secret;
    User.findById(req.user.id).then(function(foundUser){
        foundUser.secret=submittedSecret;
        foundUser.save().then(function(){
            res.redirect("/secrets");
        }).catch(function(err){
            console.log(err);
        })
    }).catch(function(err){
        console.log(err);
    })

})

app.get("/auth/google",
    passport.authenticate("google", {scope: ["profile"]})
);
app.get('/auth/google/secrets', 
  passport.authenticate('google', { failureRedirect: '/login' }),
  function(req, res) {
    // Successful authentication, redirect home.
    res.redirect("/secrets");
  });

app.get("/logout", function(req,res){
    req.logout((err)=>{
        if(err){
            console.log(err);
        }else{
            res.redirect("/");
        }
    });
})

// Level 5 cookies and sessions
app.post("/register", function(req,res){
    User.register({username: req.body.username},req.body.password, function(err,user){
        if(err){
            console.log(err);
            res.redirect("/register");
        }
        else{
            passport.authenticate("local")(req,res, function(){
                res.redirect("/secrets");
            })
        }
    });
});

// Level 5 cookies and sessions
app.post("/login", function(req,res){
    const user=new User({
        username: req.body.username,
        password: req.body.password
    })
    req.login(user,function(err){
        if(err){
            console.log(err);
        }
        else{
            passport.authenticate("local")(req,res, function(){
                res.redirect("/secrets");
            });
        }
    })
});


//Level 4 Hashing and Salting 
// app.post("/register", function(req,res){
//     bcrypt.hash(req.body.password, saltRounds, function(err, hash) {
//         const newUser= new User({
//             email: req.body.username,
//             password: hash
//         });
//         newUser.save().then(function(){
//             res.render("secrets");
//         }).catch(function(err){
//             console.log(err);
//         })
//     });
// });


//used md5 for level 3 hashing security
// app.post("/register", function(req,res){

//     const newUser= new User({
//         email: req.body.username,
//         password: md5(req.body.password)
//     });
//     newUser.save().then(function(){
//         res.render("secrets");
//     }).catch(function(err){
//         console.log(err);
//     })
// });


//level 4 hashing and salting
// app.post("/login", function(req,res){
//     const username=req.body.username;
//     const password=req.body.password;

//     User.findOne({email: username}).then(function(foundUser){
//         if(foundUser){
//             bcrypt.compare(password, foundUser.password, function(err, result) {
//                 if(result===true){
//                     res.render("secrets");
//                 }
//             });
            
//         }else{
//             console.log(err);
//         }
//     }).catch(function(err){
//         console.log(err);
//     })
// })

//level3

// app.post("/login", function(req,res){
//     const username=req.body.username;
//     const password=md5(req.body.password);

//     User.findOne({email: username}).then(function(foundUser){
//         if(foundUser){
//             if(foundUser.password===password){
//                 res.render("secrets");
//             }
//         }else{
//             console.log(err);
//         }
//     }).catch(function(err){
//         console.log(err);
//     })

// })





app.listen(3000, function(req,res){
    console.log("Server running on port 3000");
})


