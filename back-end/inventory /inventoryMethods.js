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

main()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());
