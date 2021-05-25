// 'use strict';

// // Start up DB Server

// require('dotenv').config();

// const mongoose = require('mongoose');

// const options = {
//   useNewUrlParser: true,
//   useCreateIndex: true,
//   useUnifiedTopology: true,
// };
// mongoose.connect(process.env.MONGODB_URI, options);

// // Start the web server
// require('./src/server.js').startup(process.env.PORT);

'use strict';
require('dotenv').config(); //
const server = require ('./src/server.js'); // 
// Start up DB Server
const mongoose = require('mongoose');
const options = {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
};
mongoose.connect(process.env.MONGODB_URI, options) .then (()=>{//
  server.startup(process.env.PORT);//
}).catch ((e)=>{//
  console.log('connection_error', e.message);//
});//
