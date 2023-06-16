import { MongoClient, ObjectId } from 'mongodb';
import { mongoURI } from './secrets.js';

const dbName = "c11-practice";
const collectionName = "my-third";

//Connect to the MongoDB cluster
const mongoConnect = new MongoClient(mongoURI);
await mongoConnect.connect();
const db = mongoConnect.db(dbName);

//CRUD: READ
async function readAll() {
    const result = await db.collection(collectionName)
    .find( {} )
    .limit(10)
    .toArray();

    return readAll;
}

//CRUD: DELETE
async function deleteOne(id) {
    const deleteOne = await db.collection(collectionName)
        .deleteOne( {_id: new ObjectId(id) } );
        return deleteOne;
 
}

//CRUD: INSERT
async function insertOne(document){
    const insertOne = await db.collection(collectionName)
    .insertOne(document);
    
    return insertOne;
}

//CRUD: UPDATE
async function updateOne(id, document) {
    const updateOne = await db.collection(collectionName)
    .updateOne(
        {_id: new ObjectId(id)},
        { $set: document }
    );

    return updateOne;
}
// const result = await readAll();
//const result = await deleteOne("648b760ae99a587a7cef9cd7");

//const datadocument = {
//    name: "new document",
//    age: 100,
//    isAlive: true,
//};

const datadocument = {
    name: "green Onion"
}

const result = await updateOne("648b760ae99a587a7cef9cd8",datadocument);
console.log(result);
mongoConnect.close();