const express = require ('express')
const cors = require('cors');
const app = express();
const path = require('path');
require('dotenv').config({ path: path.resolve(__dirname, '.env') });


app.use(express.json());
app.use(cors()); // Enable CORS for all routes

const stripe = require ('stripe')(process.env.STRIPE_SECRET_KEY)

app.post('/donation', async (req, res) => {

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Donation',
              description: 'Supporting menstrual hygiene by providing sanitary towels to women and girls in need',
            },
            unit_amount: 5 * 100, // Amount in cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'https://carecyle.web.app',
      cancel_url: 'https://yourwebsite.com/cancel',
    });

    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173'); // Replace with your frontend's origin
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST'); // Adjust the allowed HTTP methods if needed
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type'); // Adjust the allowed headers if needed
  
    res.json({ id: session.id });
  });

  app.get('/success', (req, res) => {
    res.send('Thank you for your donation!');
  });
  
  app.get('/cancel', (req, res) => {
    res.send('Payment canceled.');
  });
  

app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });