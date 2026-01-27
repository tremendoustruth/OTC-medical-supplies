require("dotenv").config();
const { USER_NAME, PASSWORD } = process.env;
const { MongoClient, ObjectId } = require("mongodb");

const uri = `mongodb+srv://${USER_NAME}:${PASSWORD}@otccluster.gzfaumc.mongodb.net/`
const client = new MongoClient(uri);
const database = client.db("OTC_DB");
const inventoryItems = database.collection("Inventory_DB");

async function createIndex(property) {
    return inventoryItems.createIndex({ [property] : 1})
}

// createIndex("title").then(console.log).finally(() => client.close())
// createIndex("description").then(console.log).finally(() => client.close())
// createIndex("price").then(console.log).finally(() => client.close())

async function createProduct(product_data) {
    await inventoryItems.insertOne(product_data)
    return product_data
}

// createProduct({
//     "title": "Five-bladed razor",
//     "description": "Elaborate device for punishing follicles",
//     "price": 9.99
// })
//     .then(console.log)
//     .catch(console.error)
//     .finally(() => client.close());


// READ all products
async function getAllProducts() {
    return inventoryItems.find({}).toArray();
}

// READ product by id
async function getProductById(id) {
    return inventoryItems.findOne({ _id: new ObjectId(id) });
}

// async function test() {
//   const products = await getAllProducts();
//   console.log(products);
//   await client.close();
// }

// test().catch(console.error);

async function testGetById() {
  const product = await getProductById("6978ea3b936fb09bb523c3d2");
//   console.log(product);
  await client.close();
}

// testGetById().catch(console.error);

// async function test() {
//   const products = await getAllProducts();
//   console.log("Total products:", products.length);
//   console.log("First product:", products[0]);
//   await client.close();
// }

// test().catch(console.error);

async function updateById(id, updatedData) {
    const newProduct = inventoryItems.updateOne({_id: new ObjectId(id)}, {$set: updatedData})
    return newProduct
}

// updateById("6979232c7256cfcef2b1cf58", {
//     title: "Seven-bladed razor",
//     description: "Five blades? You lack ambition.",
//     price: 77.77
// })
//     .then(console.log)
//     .catch(console.error)
//     .finally(() => client.close());

async function deleteProduct(id) {
    inventoryItems.deleteOne({_id: new ObjectId(id)})
    await client.close()
}

// deleteProduct("697924bc76a11a8b810d97eb")
//     .then(console.log)
//     .catch(console.error)
//     .finally(() => client.close())