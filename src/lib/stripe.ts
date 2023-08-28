import Stripe from 'stripe'

const secretKey = process.env.STRIPE_SECRET_KEY

export const stripe = new Stripe(secretKey!, {
  apiVersion: '2023-08-16',
  appInfo: {
    name: 'Ignite Shop',
  },
})
