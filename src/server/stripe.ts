import Stripe from 'stripe';

const stripe = new Stripe('your_secret_key', {
  apiVersion: '2023-10-16',
});

export async function createCheckoutSession(planName: string, price: string) {
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    line_items: [
      {
        price_data: {
          currency: 'twd',
          product_data: {
            name: planName,
          },
          unit_amount: parseInt(price.replace(',', '')) * 100,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    success_url: `${process.env.DOMAIN}/success`,
    cancel_url: `${process.env.DOMAIN}/cancel`,
  });

  return session;
}