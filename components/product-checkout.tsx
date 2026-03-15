'use client'

import { useState, useCallback, useMemo } from 'react'
import { ShoppingBag, Check, X, ArrowLeft, Shield, Truck, Award, CreditCard, Smartphone, RotateCcw } from 'lucide-react'
import {
  EmbeddedCheckout,
  EmbeddedCheckoutProvider,
} from '@stripe/react-stripe-js'
import { loadStripe, type Stripe } from '@stripe/stripe-js'
import { startCheckoutSession } from '@/app/actions/stripe'

let stripePromise: Promise<Stripe | null> | null = null

function getStripePromise() {
  if (!stripePromise) {
    const key = process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY
    if (key) {
      stripePromise = loadStripe(key)
    }
  }
  return stripePromise
}

interface ProductCheckoutProps {
  slug: string
  productName: string
  price: number
  originalPrice: number
  lang: 'es' | 'en'
}

export default function ProductCheckout({
  slug,
  productName,
  price,
  originalPrice,
  lang,
}: ProductCheckoutProps) {
  const [showCheckout, setShowCheckout] = useState(false)
  const [checkoutComplete, setCheckoutComplete] = useState(false)

  const savings = originalPrice - price
  const savingsPercent = Math.round((savings / originalPrice) * 100)

  const fetchClientSecret = useCallback(
    () => startCheckoutSession(slug),
    [slug]
  )

  const handleCheckoutComplete = useCallback(() => {
    setCheckoutComplete(true)
  }, [])

  if (checkoutComplete) {
    return (
      <div className="mt-6 p-8 bg-secondary text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
          <Check className="w-8 h-8 text-green-600" />
        </div>
        <h3 className="font-serif text-2xl">
          {lang === 'es' ? 'Pedido Confirmado' : 'Order Confirmed'}
        </h3>
        <p className="text-sm text-muted-foreground mt-2">
          {lang === 'es'
            ? 'Gracias por tu compra. Recibirás un email con los detalles de tu pedido.'
            : 'Thank you for your purchase. You will receive an email with your order details.'}
        </p>
        <div className="bg-background p-4 mt-6">
          <p className="text-sm font-medium">{productName}</p>
          <p className="font-serif text-2xl mt-2">{price}€</p>
        </div>
      </div>
    )
  }

  const stripe = useMemo(() => getStripePromise(), [])

  if (showCheckout) {
    if (!stripe) {
      return (
        <div className="mt-6 p-8 bg-secondary text-center">
          <div className="w-16 h-16 bg-yellow-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <X className="w-8 h-8 text-yellow-600" />
          </div>
          <h3 className="font-serif text-2xl">
            {lang === 'es' ? 'Configuración Pendiente' : 'Configuration Pending'}
          </h3>
          <p className="text-sm text-muted-foreground mt-2">
            {lang === 'es'
              ? 'El sistema de pagos no está configurado. Por favor, contacta al administrador.'
              : 'Payment system is not configured. Please contact the administrator.'}
          </p>
          <button
            onClick={() => setShowCheckout(false)}
            className="mt-6 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            {lang === 'es' ? 'Volver' : 'Back'}
          </button>
        </div>
      )
    }

    return (
      <div className="mt-6 border border-border overflow-hidden">
        <div className="bg-secondary px-6 py-4 border-b border-border">
          <div className="flex items-center justify-between">
            <button
              onClick={() => setShowCheckout(false)}
              className="flex items-center gap-2 text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4" />
              {lang === 'es' ? 'Volver' : 'Back'}
            </button>
            <div className="flex items-center gap-2">
              <Shield className="w-4 h-4 text-muted-foreground" />
              <span className="text-xs text-muted-foreground">
                {lang === 'es' ? 'Pago 100% seguro' : '100% secure payment'}
              </span>
            </div>
          </div>
        </div>

        <div className="px-6 py-4 border-b border-border bg-background">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium">{productName}</p>
              <p className="text-xs text-muted-foreground mt-0.5">
                {lang === 'es' ? 'Envío gratis incluido' : 'Free shipping included'}
              </p>
            </div>
            <p className="font-serif text-xl">{price}€</p>
          </div>
        </div>

        <div className="px-6 py-3 border-b border-border bg-secondary/50">
          <div className="flex items-center justify-center gap-4">
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <CreditCard className="w-3.5 h-3.5" />
              <span>{lang === 'es' ? 'Tarjeta' : 'Card'}</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Smartphone className="w-3.5 h-3.5" />
              <span>Apple Pay</span>
            </div>
            <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
              <Smartphone className="w-3.5 h-3.5" />
              <span>Google Pay</span>
            </div>
          </div>
        </div>

        <div className="p-6">
          <div id="checkout" className="min-h-[400px]">
            <EmbeddedCheckoutProvider
              stripe={stripe}
              options={{
                fetchClientSecret,
                onComplete: handleCheckoutComplete,
              }}
            >
              <EmbeddedCheckout />
            </EmbeddedCheckoutProvider>
          </div>
        </div>

        <div className="px-6 py-4 border-t border-border bg-secondary/30">
          <div className="flex items-center justify-center gap-6 text-xs text-muted-foreground">
            <div className="flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5" />
              <span>SSL</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Truck className="w-3.5 h-3.5" />
              <span>{lang === 'es' ? 'Envío gratis' : 'Free shipping'}</span>
            </div>
            <div className="flex items-center gap-1.5">
              <Award className="w-3.5 h-3.5" />
              <span>{lang === 'es' ? '2 años garantía' : '2 year warranty'}</span>
            </div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="mt-6 space-y-4">
      <button
        onClick={() => setShowCheckout(true)}
        className="group w-full inline-flex items-center justify-center gap-3 bg-foreground text-background px-10 py-5 text-[11px] tracking-[0.2em] uppercase font-sans hover:bg-foreground/90 transition-all cursor-pointer"
      >
        <ShoppingBag className="w-4 h-4" />
        {lang === 'es' ? `Comprar Ahora — ${price}€` : `Buy Now — €${price}`}
      </button>

      {savingsPercent > 0 && (
        <div className="flex items-center justify-center gap-2 text-sm text-green-600">
          <Check className="w-4 h-4" />
          <span className="font-medium">
            {lang === 'es' ? `Ahorras ${savings}€ (${savingsPercent}% dto.)` : `You save €${savings} (${savingsPercent}% off)`}
          </span>
        </div>
      )}

      <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground">
        <RotateCcw className="w-4 h-4" />
        <span>
          {lang === 'es' ? '30 días de devolución garantizada' : '30-day money-back guarantee'}
        </span>
      </div>
    </div>
  )
}
