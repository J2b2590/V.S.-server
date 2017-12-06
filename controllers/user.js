const express = require('express');
const router = express.Router();
const User = require('../models/user');

router.get('/', (req, res)=>{
	User.find((err, users)=>{
		
		res.json(users)
	})
	
})

router.post('/', (req, res)=>{
console.log(req.body, 'body')
	User.create(req.body, (err, user)=>{
		console.log(req.body)
		if(err){
			res.send(err);
		}
		else{
			user.save((err, data)=>{
				res.send(data);
				console.log(data)
			})
		}
	})
})




module.exports = router;