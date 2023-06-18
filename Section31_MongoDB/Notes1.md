# Notes

To start with, type "mongod" in cmd, open another one and type "mongosh" after mongod is established.

Below is the example of CRUD operations: 

```
test> show dbs
admin   40.00 KiB
config  72.00 KiB
local   40.00 KiB
test> use shopDB
switched to db shopDB
shopDB> show dbs
admin   40.00 KiB
config  72.00 KiB
local   40.00 KiB
shopDB> db
shopDB
shopDB> db.products.insertOne({_id: 1, name: "Pen", price: 1.20})
{ acknowledged: true, insertedId: 1 }
shopDB> show collections
products
shopDB> db.products.insertOne({_id: 2, name: "Pencil", price: 0.80 , stock: 12})
{ acknowledged: true, insertedId: 2 }
shopDB> show collections
products
shopDB> db.products.find()
[
  { _id: 1, name: 'Pen', price: 1.2 },
  { _id: 2, name: 'Pencil', price: 0.8, stock: 12 }
]
shopDB> db.products.find({id: 1});

shopDB> db.products.find({_id: 1});
[ { _id: 1, name: 'Pen', price: 1.2 } ]
shopDB> db.products.find({price: {$gt: 1}});
[ { _id: 1, name: 'Pen', price: 1.2 } ]
shopDB> db.products.find({_id: 1}, {name: 1})
[ { _id: 1, name: 'Pen' } ]
shopDB> db.products.find({_id: 1}, {name: 1, _id:0})
[ { name: 'Pen' } ]
shopDB> db.products.updateOne({_id: 1}, {$set: {stock: 32}})
{
  acknowledged: true,
  insertedId: null,
  matchedCount: 1,
  modifiedCount: 1,
  upsertedCount: 0
}
shopDB> db.products.find();
[
  { _id: 1, name: 'Pen', price: 1.2, stock: 32 },
  { _id: 2, name: 'Pencil', price: 0.8, stock: 12 }
]
shopDB> db.products.deleteOne({_id:2})
{ acknowledged: true, deletedCount: 1 }
shopDB> db.products.find();
[ { _id: 1, name: 'Pen', price: 1.2, stock: 32 } ]
```

```
db.products.insertOne({
    _id:2,
    name:"Glitters",
    price: 0.8,
    stock: 12,
    reviews: [
        {
            authorName: "Selena",
            rating: 5,
            review: "Wow"
        },
        {
            authorName: "Tommy",
            rating: 5,
            review: "Hehe"
        }
    ]
}
)
```