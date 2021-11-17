const express = require('express')
const app = express()
const port = process.env.PORT || 5000;
const getApi=require('./api/get');

// parse application/urlencoded
app.use(express.urlencoded({ extended: false }))

// parse application/json
app.use(express.json())

app.get('/',(req,res)=>{res.send('<h1>connection successful go to /history</h1>')})

//using get request of API
app.use('/jossa',getApi)


// Listen on enviroment port or 5000
app.listen(port, () => console.log(`Listening on port ${port}`))