const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();
const port = 5000;


app.set('view engine', 'ejs');


app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  res.render('home'); 
});


// middleware
app.use(bodyParser.urlencoded({ extended: true }));


app.post('/calculate', (req, res) => {
  const weight =(req.body.weight);  
  const height =(req.body.height);  

 
  const heightInMeters = height / 100;

  
  const bmi = weight / (heightInMeters * heightInMeters);

 
  res.send(`
    <h1>Your BMI is ${bmi.toFixed(2)}</h1>
    <p><a href="/">Go Back</a></p>
  `);
});

app.listen(port, () => {
  console.log(`BMI Calculator is running on http://localhost:${port}`);
});