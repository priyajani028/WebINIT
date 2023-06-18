//jshint esversion:6

const { MongoClient} = require('mongodb');
const uri="mongodb+srv://demo:node1234@cluster0.rhv03gd.mongodb.net/?retryWrites=true&w=majority";

async function main(){
    const client =new MongoClient(uri);
    try{
        await client.connect();
        //await listDatabases(client);


        // await createListing(client,{
        //     name: "Lovely Loft",
        //     summary: "Its in Paris",
        //     bedrooms: 1,
        //     bathrooms: 1
        // })


        // await createMultipleListings(client,
        //     [
        //         {
        //             name: "Lob lob",
        //             summary:"Just fun",
        //             bedrooms: 2,
        //             bathrooms: 3,
        //             property_type: "House",
        //             beds: 5
        //         },
        //         {
        //             name: "QWERTY",
        //             summary:"Just fun",
        //             bedrooms: 4,
        //             bathrooms: 1,
        //             beds: 2
        //         },
        //         {
        //             name: "ASDFG",
        //             summary:"Just fun",
        //             bedrooms: 1,
        //             bathrooms: 4,
        //             property_type: "Apartment",
        //             beds: 6
        //         },
        //         {
        //             name: "Not a good Life",
        //             summary:"Just fun",
        //             bedrooms: 4,
        //             bathrooms: 3,
        //             property_type: "House",
        //             beds: 5,
        //             last_review: new Date()
        //         }

        //     ]
        // ) ;

        // await findOneListingByName(client, "ASDFG");
        
        // await findListingsWithMinBedroomsBathrooms(client,{
        //     minimumBedrooms:1,
        //     minimumBathrooms:2,
        //     maxResults:1
        // });

        // await updateListingbyName(client, "QWERTY", {bedrooms: 6, bathrooms:3});

        // await upsertListingbyName(client,"Cozy Cottage", {name: "Cozy Cottage",bedrooms:2, bathrooms:2});

        // await updateAllListingToHavePropertyType(client );

        // await deleteListingByName(client, "Cozy Cottage");

        await deleteListingsScrapedBeforeDate(client, new Date("2019-02-15"));
    }catch (e){
        console.error(e);
    }finally{
        await client.close();
    }
}

main().catch(console.error);

async function deleteListingsScrapedBeforeDate(client, date){
    const result = await client.db("sample_airbnb").collection("listingsAndReviews").deleteMany({"last_scraped":{$lt:date}});
    console.log(`${result.deletedCount} document(s) was/were deleted.`);
}

async function deleteListingByName(client, nameOfListing){
    const result = await client.db("sample_airbnb").collection("listingsAndReviews").deleteOne({name: nameOfListing});
    console.log(`${result.deletedCount} document(s) was/were deleted.`);
}

async function updateAllListingToHavePropertyType(client){
    const result=await client.db("sample_airbnb").collection("listingsAndReviews").updateMany({
        property_type:{$exists: false}
    },
    {$set: {property_type:"Unknown"}});

    console.log(`${result.matchedCount} documents matched the criteria.`);
    console.log(`${result.modifiedCount} document(s) was/were updated.`);
}

async function upsertListingbyName(client,nameOfListing, updatedListing){
    const result=await client.db("sample_airbnb").collection("listingsAndReviews").updateOne({name:nameOfListing},{$set: updatedListing},{upsert: true});
    console.log(`${result.matchedCount} document(s) matched the query criteria`);
    if(result.upsertedCount>0){
        console.log(`One document was inserted with id ${result.upsertedId}`);
    }
    else{
        console.log(`${result.modifiedCount} documents was/were updated.`);
    }
}

async function updateListingbyName(client,nameOfListing, updatedListing){
    const result=await client.db("sample_airbnb").collection("listingsAndReviews").updateOne({name:nameOfListing},{$set: updatedListing});
    console.log(`${result.matchedCount} document(s) matched the query criteria`);
    console.log(`${result.modifiedCount} documents was/were updated.`);
}

async function findListingsWithMinBedroomsBathrooms(client, {
    minimumBedrooms=0,
    minimumBathrooms=0,
    maxResults=Number.MAX_SAFE_INTEGER
}={}){
    const cursor= await client.db("sample_airbnb").collection("listingsAndReviews").find({
        bedrooms: {$gte: minimumBedrooms},
        bathrooms:{$gte: minimumBathrooms}
    }).sort({last_review: -1}).limit(maxResults);
    const results= await cursor.toArray();
    console.log(results);
}

async function findOneListingByName(client, nameOfListing){
    const result=await client.db("sample_airbnb").collection("listingsAndReviews").findOne({name: nameOfListing});
    if(result){
        console.log(`Found it ${nameOfListing}`);
        console.log(result);
    }else{
        console.log(`No Listing found of ${nameOfListing}`);
    }
}

async function createMultipleListings(client, newListings){
    const results=await client.db("sample_airbnb").collection("listingsAndReviews").insertMany(newListings);
    console.log(`${results.insertedCount} new listings with id(s): `);
    console.log(results.insertedIds);
}

async function createListing (client, newListing){
    const result= await client.db("sample_airbnb").collection("listingsAndReviews").insertOne(newListing);
    console.log(`New listing created ${result.insertedId}`);
}

async function listDatabases(client){
    const databasesList=await client.db().admin().listDatabases();
    console.log("databases: ") ;
    databasesList.databases.forEach(db => {
        console.log(`- ${db.name}`);
    });
}