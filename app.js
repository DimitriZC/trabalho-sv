const express = require('express');
const fetch = require('node-fetch');

const app = express()
const port = 3000

app.use(express.json());

app.get('/', async (req, res) => {
	/*
	fetch('http://ip-api.com/json')
	.then( res => res.json())
	.then(response => {
		console.log("Country: ", response.country);
	})
	.catch((data, status) => {
		console.log('Request failed');
 })*/

	const url = 'http://ip-api.com/json'
	const options = { "method": "GET", }

	const response = await fetch(url, options)
 		.then(res => res.json())
 		.catch(err => {
			 console.error({
				 "message": "errrrrou",
				 error: err,
			 });
		 })
	console.log("RESPONSE: ", response);
	res.json(response)

})

app.listen(port, () => {
	console.log(`Server listen to port ${port}`)
})
// testing repository
