require('dotenv').config();

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const cors = require('cors');
const swaggerUI = require('swagger-ui-express');
const swaggerJSDoc = require('swagger-jsdoc');

const { db_user, db_pwd, db_host, db_name } = require('./config');

//requiring routes
const indexRoutes = require('./routes/index');
const opportunityRoutes = require('./routes/opportunity');

const mongoSrvString = `mongodb+srv://${db_user}:${db_pwd}@${db_host}/${db_name}?retryWrites=true&w=majority`;

// connect the database
mongoose
  .connect(mongoSrvString, {
    useNewUrlParser: true,
    useUnifiedTopology: true, //significant refactor of how it handles monitoring all the servers in a replica set or sharded cluster.
    //In MongoDB parlance, this is known as server discovery and monitoring.
    useCreateIndex: true,
    useFindAndModify: true,
  })
  .then(() => {
    console.log('Connected to mongo db');
  })
  .catch((err) => {
    console.log("Couldn't connect to mongo db, err: ", err);
  });

app.use(cors());
// in order to read HTTP POST data , we have to use "body-parser" node module. body-parser is a piece of express middleware that reads a form's input and stores it as a javascript object accessible through req.body
// app.use(bodyParser.urlencoded({ extended: true })); //middleware for parsing bodies from URL.
//app.use(bodyParser.json());
// express has got its own middleware for bodyparsing, use this as an alternative to bodyparser.json()
app.use(express.json());

app.set('view engine', 'ejs');
app.use(express.static(__dirname + '/public'));
app.use(methodOverride('_method')); //to support HTTP Verbs other than GET,POST

app.use('/', indexRoutes);
app.use('/opportunity', opportunityRoutes);

// swagger
app.use('/playground', swaggerUI.serve);
app.get(
  '/playground',
  swaggerUI.setup(
    swaggerJSDoc({
      definition: {
        openapi: '3.0.0',
      },
      apis: ['./routes/*.js'], // files containing annotations as above
    })
  )
);

const port = process.env.PORT || 3030;
app.listen(port, function () {
  console.log(`[OK] server started on port ${port}`);
});
