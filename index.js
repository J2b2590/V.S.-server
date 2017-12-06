require('./db/db');


const express = require('express');
const app = express();



const cors = require('cors');
const bodyParser = require('body-parser');
const methodOverride = require('method-override');


app.use(cors());
app.set('view engine', 'ejs');
app.set('views', __dirname +'/views');
// app.use(methodOverride('_method'));
app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json())

const userController = require('./controllers/user');
app.use('/user', userController);




const port = process.env.PORT || 3001;
app.listen(port, ()=>{
	console.log('server is listening on ' + port);
})