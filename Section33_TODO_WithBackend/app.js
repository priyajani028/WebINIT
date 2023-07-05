const express= require("express");
const bodyParser= require("body-parser");
// const date= require(__dirname+"/date.js")
const mongoose =require("mongoose");
const _=require("lodash");

const app= express();
app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));

mongoose.connect("mongodb+srv://admin_Priya:pika028@cluster0.fisc3ar.mongodb.net/todolistDB",{useNewUrlParser: true});

// const items=["Eat Food", "Cook Food", "Buy food"];
// const workItems=[];

const itemsSchema={
    name: String
};

// const workSchema={
//     name:String
// };

const Item= mongoose.model("Item", itemsSchema);

const item1 =new Item ({
    name: "Welcome to your TODO list!"
});

const item2 = new Item({
    name:"Hit the + button to add new item"
});

const item3 =new Item({
    name:"<-- Hit this to delete an item."
});

const defaultItems=[item1,item2,item3];

const listSchema={
    name:String,
    items: [itemsSchema]
};

const List=mongoose.model("List", listSchema);

app.get("/", function(req,res){
    // const day= date.getDate();
    //let day= date.getDay();
    Item.find({}).then(function(foundItems){
        //console.log(foundItems);

        if(foundItems.length===0){
            Item.insertMany(defaultItems).then(function(){
                console.log("Successful Insertion");
            }).catch(function(err){
                console.log(err);
            })
            res.redirect("/");
        }
        else{
            res.render("list", {listTitle: "Today",
            newListItems: foundItems,
        });
        }
    }).catch(function(err){
        console.log(err);
    });
});

app.post("/",function(req,res){
    const itemName= req.body.newItem;
    const listName=req.body.list;

    const item=new Item({
        name:itemName
    });

    if(listName==="Today"){
        item.save();
        res.redirect("/"); 
    }else{
        List.findOne({name:listName}).then(function(foundList){
            foundList.items.push(item);
            foundList.save();
            res.redirect("/"+foundList.name);
        }).catch(function(err){
            console.log(err);
        });
    }
});

app.get("/:customListName", function(req,res){
    const customListName= _.capitalize(req.params.customListName);
    List.findOne({name:customListName}).then(function(foundList){
        if(!foundList){
            const list = new List({
                name: customListName,
                items: defaultItems
            });
        list.save();
        res.render("/"+customListName);
        }else{
            res.render("list",{
                listTitle: foundList.name,
                newListItems: foundList.items
            });
        }
    }).catch(function(err){
        console.log(err);
    })
});

app.post("/delete", function(req,res){
    const checkedItemId=req.body.checkbox;
    const listName= req.body.listName;
    if(listName==="Today"){
        Item.findByIdAndRemove(checkedItemId).then(function(){
            console.log("Success Deletion");
            res.redirect("/")
        }).catch(function(err){
            console.log(err);
        });
    }else{
        List.findOneAndUpdate({name: listName}, {$pull:{items: {_id: checkedItemId}}}).then(function(){
            console.log("Success Deletion");
            res.redirect("/"+listName);
        }).catch(function(err){
            console.log(err);
        });
    }
})


app.listen(3000, function(){
    console.log("Server running on port 3000");
});



