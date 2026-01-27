require("dotenv").config();
const { USER_NAME, PASSWORD } = process.env;
const { MongoClient } = require("mongodb");

const uri = `mongodb+srv://${USER_NAME}:${PASSWORD}@otccluster.gzfaumc.mongodb.net/`
const client = new MongoClient(uri);
const database = client.db("OTC_DB");
const inventoryItems = database.collection("Inventory_DB");

async function create_index(property) {
    return inventoryItems.createIndex({ [property] : 1})
}

// await create_index("title").then(console.log).finally(() => client.close())
// await create_index("description").then(console.log).finally(() => client.close())
// await create_index("price").then(console.log).finally(() => client.close())

async function create_product(product_data) {
    await inventoryItems.insertOne(product_data)
    return product_data
}

// await create_product({
//     "title": "Five-bladed razor",
//     "description": "Elaborate device for punishing follicles",
//     "price": 9.99
// })