const express = require('express')
const mongoose = require('mongoose')
const config = require('./config')
const FakeDB = require('./fake-db')
const productRoutes = require('./routes/products')
const path = require('path')

const app = express()

//Set up default mongoose connection
const mongoDB = config.DB_URI;
mongoose.connect(mongoDB).then(
  () => {
    if(process.env.NODE_ENV !== 'production') {
    const fakeDb = new FakeDB;
    // fakeDb.initDb()
    }
  }
)
// Get Mongoose to use the global promise library
mongoose.Promise = global.Promise;
//Get the default connection
const db = mongoose.connection;

//Bind connection to error event (to get notification of connection errors)
db.on("error", console.error.bind(console, "MongoDB connection error:"));

app.use('/api/v1/products',productRoutes)

if(process.env.NODE_ENV === 'production') {
const appPath = path.join( __dirname, '..', 'dist', 'mean-app', 'browser')
app.use(express.static(appPath))
app.get("*", function(req, res) {
  res.sendFile(path.resolve(appPath, 'index.html'))
})
}

const PORT = process.env.PORT || '3001'

app.listen(PORT, () => {
  console.log(`I am running!`)
})

