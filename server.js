const express = require('express');
const fs = require('fs');
const mysql = require('mysql');
const app = express();
app.use(express.static('web'));
app.get('/hello', (req, res) => {
  res.send('hi ' + new Date());
});
app.get('/dirlist', (req, res) => {
	let inputdir = req.query.dir;
	fs.readdir(inputdir, (err, files) => {
		let fileList = '';
		files.forEach((file) => {
			fileList += `<li>${file}</li>`;
		});
		res.send(
			`<!DOCTYPE html>
				<html>
				<head>
				  <title></title>
				</head>
				<body>
					<ul>
						${fileList}
					</ul>
				</body>
				</html>
			`);
	});
});
app.get('/getempcount', (req, res) => {
	let db = mysql.createConnection({hostname: 'localhost', port: 3306, database: 'employees', user: 'kenny', password: '123'});
	db.query('select count(*) empcount from employees', (err, result) => {
		let finalcount = ''+result[0]['empcount'];
		res.send(finalcount);
	});
	db.end();
});
app.listen(8000, () => {
  console.log('Server is ready');
});