// Import express 1
let express = require('express');
let cors = require('cors');

// Import Body parser
let bodyParser = require('body-parser');
// Import Mongoose
let mongoose = require('mongoose');
// Initialise the app
let app = express();

// Import routes
let apiRoutes = require("./api-routes");
app.use(cors());
// Configure bodyparser to handle post requests
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.json());
// Connect to Mongoose and set connection variable
mongoose.connect('mongodb+srv://houdini:OMZMCyR1qK3dKg5T@cluster0-vytxr.mongodb.net/test?retryWrites=true&w=majority', { useNewUrlParser: true, useUnifiedTopology: true});
var db = mongoose.connection;

// Added check for DB connection
if(!db)
    console.log("Error connecting db")
else
    console.log("Db connected successfully")

// Setup server port
var port = process.env.PORT || 8080;

// Send message for default URL
app.get('/', (req, res) => res.send('Ticket Manager Api'));

// Use Api routes in the App
app.use('/api', apiRoutes);
// Launch app to listen to specified port
app.listen(port, function () {
    console.log("Running RestHub on port " + port);
});

/*
const MongoClient = require('mongodb').MongoClient;
const uri = "mongodb+srv://vranduser:vrandpass@vrandpass-hqflx.gcp.mongodb.net/admin?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, });
client.connect(err => {
  const collection = client.db("vrandpass").collection("profile");
  		var cursor = collection.find();
  		cursor.each(function(err, doc){
  			console.log(doc);
  			console.log('ok');
  		})
  client.close();
});*/