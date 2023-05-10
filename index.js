const express = require('express')
const bodyParser = require("body-parser")
const app =  express()
const port = 3001
const jsonFilePath = "public/cafes.json";
const fs = require("fs")

//Hämtar lista på alla cafeer 
let cafeData = fs.readFileSync('public/cafes.json')
let cafes = JSON.parse(cafeData)

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));


app.use(express.static('public'))

app.listen(port, () => {
  console.log(`listening on port ${port}`)

})

//add function
app.post("/", (req, res) => {
    let data = req.body;

    data.rating = parseInt( data.rating );

    cafes.push(data)
    console.log(cafes);

    let jsonData = JSON.stringify(cafes, null,2);

    fs.writeFile(jsonFilePath, jsonData, (err) => {

        if (err) console.log(err);
    });
})
