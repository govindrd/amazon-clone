require('dotenv').config(); 
const functions = require("firebase-functions");   // correct
const { setGlobalOptions } = require("firebase-functions");
const cors = require("cors");
const express = require("express");
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);



  // - App config
const app = express();

// - Middleware
app.use(cors({ origin:true}));
app.use(express.json());

// - API routes
app.get("/", (req, res) => {
  res.status(200).send("Hello, its working ");
});

app.post('/payment/create',async (req,res)=>{


    const total = req.query.total;


    console.log('payment Request Recieved BOOM! for this amount >>>',total);

    const paymentIntent=await stripe.paymentIntents.create({
        amount:total,
        currency:"INR",
    });

    // ok-Created
    res.status(201).send({
        clientSecret:paymentIntent.client_secret,
    })



})



// - Listen (Firebase function export)
exports.api = functions.https.onRequest(app);


//example of end point
//http://127.0.0.1:5001/clone-79347/us-central1/api

// - Global options
setGlobalOptions({ maxInstances: 10 });
