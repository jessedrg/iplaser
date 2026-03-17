'use server'

import { stripe } from '@/lib/stripe'
import { getProductBySlug } from '@/lib/products'

const BASE_URL = 'https://ipllaserstore.com'

export async function startCheckoutSession(slug: string) {
  const product = getProductBySlug(slug)
  if (!product) {
    throw new Error(`Product with slug "${slug}" not found`)
  }

  const session = await stripe.checkout.sessions.create({
    ui_mode: 'embedded',
    redirect_on_completion: 'never',
    line_items: [
      {
        price_data: {
          currency: 'eur',
          product_data: {
            name: product.name.en,
            description: product.description.en,
            images: product.images.map((img) => `${BASE_URL}${img}`),
          },
          unit_amount: product.price * 100,
        },
        quantity: 1,
      },
    ],
    mode: 'payment',
    billing_address_collection: 'auto',
    shipping_address_collection: {
      allowed_countries: ['ES', 'DE', 'FR', 'IT', 'NL', 'PT', 'GB', 'AT', 'BE', 'IE'],
    },
    shipping_options: [
      {
        shipping_rate_data: {
          type: 'fixed_amount',
          fixed_amount: { amount: 0, currency: 'eur' },
          display_name: 'Free Shipping to Europe',
          delivery_estimate: {
            minimum: { unit: 'business_day', value: 10 },
            maximum: { unit: 'business_day', value: 14 },
          },
        },
      },
    ],
    phone_number_collection: {
      enabled: true,
    },
  })

  if (!session.client_secret) {
    throw new Error('Failed to create checkout session')
  }

  return session.client_secret
}
