require('dotenv').config()

const express = require ('express')
const app = express()

app.use(express.json())

const stripe = require ('stripe')(process.env.STRIPE_PRIVATE_KEY)


app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });