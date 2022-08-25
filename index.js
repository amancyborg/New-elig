const express = require('express'); //Import the express dependency
const app = express();              //Instantiate an express app, the main work horse of this server
const port = 5000;  
var http = require('http').Server(app);   
const path = require('path');             //Save the port number where your server will be listening
//var assetsPath = path.join(__dirname, './assets');
app.use("/assets/css/maps",express.static('assets/css/maps'));
app.use("/assets/css",express.static('assets/css'));
app.use("/assets/fonts/Rubik",express.static('assets/fonts/Rubik'));
app.use("/assets/js",express.static('assets/js'));
app.use("/assets/vendors/css",express.static('assets/vendors/css'));
app.use("/assets/vendors/js",express.static('assets/vendors/js'));
app.use("/assets/vendors/mdi/css",express.static('assets/vendors/mdi/css'));
app.use("/assets/vendors/mdi/fonts",express.static('assets/vendors/mdi/fonts'));

app.use("/dist/css",express.static('dist/css'));
app.use("/dist/i18n",express.static('dist/i18n'));
app.use("/dist/js",express.static('dist/js'));
app.use("/dist/scss",express.static('dist/scss'));
app.use("/dist/scss/plugins",express.static('dist/scss/plugins'));

app.use("/js",express.static('js'));

//Idiomatic expression in express to route and respond to a client request
app.get('/', (req, res) => {        //get requests to the root ("/") will route here
    res.sendFile('index.html', {root: __dirname});      //server responds by sending the index.html file to the client's browser
                                                        //the .sendFile method needs the absolute path to the file, see: https://expressjs.com/en/4x/api.html#res.sendFile 
});

app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`); 
});
//console.log(assetsPath);