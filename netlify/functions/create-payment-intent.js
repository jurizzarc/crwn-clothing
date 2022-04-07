require('dotenv').config();
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

exports.handler = async (event) => {
    try {
        const headers = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': '*',
            'Access-Control-Allow-Credentials': 'true',
            'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept',
            'Content-Type': 'application/json',
        };

        if (event.httpMethod === 'OPTIONS') {
            return {
                statusCode: 200,
                headers,
                body: JSON.stringify({
                    message: 'Successful preflight call.'
                })
            };
        } else if (event.httpMethod === 'POST') {
            const { amount } = JSON.parse(event.body);
            const paymentIntent = await stripe.paymentIntents.create({
                amount,
                currency: 'usd',
                payment_method_types: ['card']
            });
            
            return {
                statusCode: 200,
                headers,
                body: JSON.stringify({ paymentIntent }),
            }; 
        }
    } catch (error) {
        console.log({ error });

        return {
            status: 400,
            body: JSON.stringify({ error })
        }
    }
}