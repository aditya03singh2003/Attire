"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { CheckCircle, ShoppingBag, ArrowRight, Printer, Calendar, Gift, Mail, Heart, Share2 } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import confetti from "canvas-confetti"
import Image from "next/image"

export default function PaymentConfirmationPage() {
  const [orderNumber, setOrderNumber] = useState("")
  const [orderDate, setOrderDate] = useState("")
  const [estimatedDelivery, setEstimatedDelivery] = useState("")
  const [showShareOptions, setShowShareOptions] = useState(false)

  useEffect(() => {
    // Generate random order number
    const randomOrderNumber = Math.floor(100000000 + Math.random() * 900000000).toString()
    setOrderNumber(`ORD-${randomOrderNumber}`)

    // Set current date
    const today = new Date()
    setOrderDate(today.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }))

    // Set estimated delivery date (7-10 days from now)
    const deliveryDate = new Date(today)
    deliveryDate.setDate(today.getDate() + 7 + Math.floor(Math.random() * 4))
    setEstimatedDelivery(deliveryDate.toLocaleDateString("en-US", { year: "numeric", month: "long", day: "numeric" }))

    // Trigger confetti animation
    const duration = 3 * 1000
    const animationEnd = Date.now() + duration
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 }

    function randomInRange(min: number, max: number) {
      return Math.random() * (max - min) + min
    }

    const interval: NodeJS.Timeout = setInterval(() => {
      const timeLeft = animationEnd - Date.now()

      if (timeLeft <= 0) {
        return clearInterval(interval)
      }

      const particleCount = 50 * (timeLeft / duration)
      // since particles fall down, start a bit higher than random
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 },
      })
      confetti({
        ...defaults,
        particleCount,
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 },
      })
    }, 250)

    return () => clearInterval(interval)
  }, [])

  const recommendedProducts = [
    {
      id: "rec-1",
      name: "Classic White T-Shirt",
      price: 24.99,
      image: "https://images.unsplash.com/photo-1581655353564-df123a1eb820?q=80&w=500&auto=format&fit=crop",
    },
    {
      id: "rec-2",
      name: "Leather Wallet",
      price: 39.99,
      image: "https://images.unsplash.com/photo-1601592996763-f05c9c80a7f6?q=80&w=500&auto=format&fit=crop",
    },
    {
      id: "rec-3",
      name: "Minimalist Watch",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=500&auto=format&fit=crop",
    },
  ]

  return (
    <div className="container mx-auto px-4 py-16">
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
        className="mb-8 flex justify-center"
      >
        <div className="rounded-full bg-gradient-to-r from-green-100 to-green-200 p-3">
          <CheckCircle className="h-16 w-16 text-green-600" />
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="text-center"
      >
        <h1 className="text-3xl md:text-4xl font-bold mb-4">Thank You for Your Purchase!</h1>
        <p className="text-xl text-muted-foreground mb-8">Your order has been confirmed and will be shipped soon.</p>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="max-w-md mx-auto bg-card rounded-lg border p-6 mb-8"
      >
        <div className="space-y-4">
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Order Number:</span>
            <span className="font-medium">{orderNumber}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Date:</span>
            <span>{orderDate}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Estimated Delivery:</span>
            <span>{estimatedDelivery}</span>
          </div>
          <div className="flex justify-between items-center">
            <span className="text-muted-foreground">Payment Method:</span>
            <span>Credit Card (****1234)</span>
          </div>
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="max-w-3xl mx-auto mb-12 bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-lg p-6 border"
      >
        <div className="flex items-center gap-3 mb-4">
          <Gift className="h-5 w-5 text-purple-500" />
          <h3 className="text-lg font-semibold">What's Next?</h3>
        </div>
        <ul className="space-y-3 mb-6">
          <li className="flex items-start gap-2">
            <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
              1
            </span>
            <p>
              You'll receive an order confirmation email at <span className="font-medium">your@email.com</span> with
              your order details.
            </p>
          </li>
          <li className="flex items-start gap-2">
            <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
              2
            </span>
            <p>Our team will process your order and prepare it for shipping within 1-2 business days.</p>
          </li>
          <li className="flex items-start gap-2">
            <span className="bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-300 rounded-full w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5">
              3
            </span>
            <p>Once your order ships, you'll receive a shipping confirmation email with tracking information.</p>
          </li>
        </ul>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button variant="outline" className="gap-2">
            <Mail className="h-4 w-4" />
            Check Your Email
          </Button>
          <Button className="gap-2">
            <Calendar className="h-4 w-4" />
            Track Your Order
          </Button>
        </div>
      </motion.div>

      {/* Recommended Products */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.8 }}
        className="max-w-4xl mx-auto mb-12"
      >
        <h3 className="text-xl font-semibold mb-6 text-center">You Might Also Like</h3>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {recommendedProducts.map((product, index) => (
            <Link key={product.id} href={`/products/${product.id}`} className="group">
              <div className="bg-card rounded-lg overflow-hidden border hover:shadow-md transition-shadow">
                <div className="relative aspect-square">
                  <Image
                    src={product.image || "/placeholder.svg"}
                    alt={product.name}
                    fill
                    className="object-cover transition-transform group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <h4 className="font-medium">{product.name}</h4>
                  <p className="text-muted-foreground">${product.price.toFixed(2)}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1 }}
        className="flex flex-col sm:flex-row gap-4 justify-center mb-8"
      >
        <Button asChild size="lg" variant="outline" className="gap-2">
          <Link href="/products">
            <ShoppingBag className="h-4 w-4" />
            Continue Shopping
          </Link>
        </Button>
        <Button asChild size="lg" className="gap-2">
          <Link href="/">
            Go to Home
            <ArrowRight className="h-4 w-4" />
          </Link>
        </Button>
      </motion.div>

      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, delay: 1.2 }}
        className="flex flex-col sm:flex-row gap-6 justify-center text-sm text-muted-foreground"
      >
        <button className="flex items-center gap-2 hover:text-foreground transition-colors">
          <Printer className="h-4 w-4" />
          Print Receipt
        </button>
        <button className="flex items-center gap-2 hover:text-foreground transition-colors">
          <Heart className="h-4 w-4" />
          Save to Wishlist
        </button>
        <button
          className="flex items-center gap-2 hover:text-foreground transition-colors"
          onClick={() => setShowShareOptions(!showShareOptions)}
        >
          <Share2 className="h-4 w-4" />
          Share Your Purchase
        </button>
      </motion.div>

      {showShareOptions && (
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex justify-center gap-4 mt-4"
        >
          {["Facebook", "Twitter", "Instagram", "Email"].map((platform) => (
            <button
              key={platform}
              className="px-3 py-1 bg-muted rounded-full text-xs hover:bg-muted/80 transition-colors"
            >
              {platform}
            </button>
          ))}
        </motion.div>
      )}
    </div>
  )
}
