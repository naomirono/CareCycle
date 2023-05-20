require('dotenv').config()

const express = require ('express')
const app = express()

app.use(express.json())

const stripe = require ('stripe')(process.env.STRIPE_PRIVATE_KEY)

app.post('/create-checkout-session', async (req, res) => {
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'usd',
            product_data: {
              name: 'Donation',
            },
            unit_amount: 500, // Amount in cents
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: 'https://yourwebsite.com/success',
      cancel_url: 'https://yourwebsite.com/cancel',
    });
  
    res.json({ id: session.id });
  });

app.listen(3000, () => {
    console.log('Server is running on port 3000');
  });