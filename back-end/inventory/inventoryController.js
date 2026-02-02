require("dotenv").config();
const { USER_NAME, PASSWORD } = process.env;
const { MongoClient, ObjectId } = require("mongodb");

const uri = `mongodb+srv://${USER_NAME}:${PASSWORD}@otccluster.gzfaumc.mongodb.net/`
const client = new MongoClient(uri);
const database = client.db("OTC_DB");
const inventoryItems = database.collection("Inventory_DB");

async function createIndex(property) {
    try {
        return inventoryItems.createIndex({ [property] : 1})
    } catch (error) {
        console.error("Error creating index:", error)
    }
}

// createIndex("title").then(console.log).finally(() => client.close())
// createIndex("description").then(console.log).finally(() => client.close())
// createIndex("price").then(console.log).finally(() => client.close())

async function createProduct(product_data) {
    try {
        await inventoryItems.insertOne(product_data)
        return product_data
    } catch (error) {
        console.error("Error creating product:", error)
    }
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
    try {
        return inventoryItems.find({}).toArray();
    } catch (error) {
        console.error("Error fetching products:", error)
    }
}

// READ product by id
async function getProductById(id) {
    try {
        const product = inventoryItems.findOne({ _id: new ObjectId(id) });
        if (!product) {
            console.error(error)
            return
        }
        return product
    } catch (error) {
        console.error("Error fetching product:", error)    
    }
}

// async function test() {
//   const products = await getAllProducts();
//   console.log(products);
//   await client.close();
// }

// test().catch(console.error);

// async function testGetById() {
//   const product = await getProductById("6978ea3b936fb09bb523c3d2");
// //   console.log(product);
//   await client.close();
// }

// testGetById().catch(console.error);

// async function test() {
//   const products = await getAllProducts();
//   console.log("Total products:", products.length);
//   console.log("First product:", products[0]);
//   await client.close();
// }

// test().catch(console.error);

async function updateById(id, updatedData) {
    try{
        const newProduct = inventoryItems.updateOne({_id: new ObjectId(id)}, {$set: updatedData})
        if(!newProduct) {
            console.error(error)
            return        }
        return newProduct
    } catch (error) {
        console.error("Error updating product:", error)
    }
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
    try {
        const result = await inventoryItems.deleteOne({_id: new ObjectId(id)})
        if(!result) {
            console.error(error)
            return        
        }
        return result.deletedCount === 1; // return true if deleted, false otherwise
    } catch {
        console.error("Error deleting product:", error)
    }
}

// deleteProduct("697945e1727cca0f9c03a16d")
//     .then(console.log)
//     .catch(console.error)
//     .finally(() => client.close())


module.exports = {
  createIndex,
  createProduct,
  getAllProducts,
  getProductById,
  updateById,
  deleteProduct,
  client, // optional, but useful for graceful shutdown
};
