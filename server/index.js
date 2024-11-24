const express = require('express')
const mongoose = require('mongoose')
const config = require('./config/dev')
const FakeDB = require('./fake-db')
const productRoutes = require('./routes/products')

const app = express()

//Set up default mongoose connection
const mongoDB = config.DB_URI;
mongoose.connect(mongoDB).then(
  () => {
    const fakeDb = new FakeDB;
    fakeDb.initDb()
  }
)
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use('/api/v1/products',productRoutes)

const PORT = process.env.PORT || '3001'

app.listen(PORT, () => {
  console.log(`I am running!`)
})

//mongodb+srv://test:testtest@cluster0.4kc3r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0