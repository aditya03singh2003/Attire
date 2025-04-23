"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import { Heart, ShoppingBag, Trash2, ArrowLeft } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { useToast } from "@/hooks/use-toast"
import Link from "next/link"
import Image from "next/image"
import FuturisticBackground from "@/components/futuristic-background"

export default function WishlistPage() {
  const { toast } = useToast()

  // Mock wishlist data
  const [wishlistItems, setWishlistItems] = useState([
    {
      id: "prod-1",
      name: "Premium Cotton T-Shirt",
      price: 29.99,
      image: "https://images.unsplash.com/photo-1617137968427-85924c800a22?q=80&w=1000&auto=format&fit=crop",
      category: "Men",
    },
    {
      id: "prod-2",
      name: "Leather Crossbody Bag",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1591561954557-26941169b49e?q=80&w=1000&auto=format&fit=crop",
      category: "Accessories",
    },
    {
      id: "prod-3",
      name: "Minimalist Watch",
      price: 79.99,
      image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=1000&auto=format&fit=crop",
      category: "Accessories",
    },
    {
      id: "prod-4",
      name: "Floral Maxi Dress",
      price: 69.99,
      image: "https://images.unsplash.com/photo-1581044777550-4cfa60707c03?q=80&w=1000&auto=format&fit=crop",
      category: "Women",
    },
    {
      id: "prod-5",
      name: "Leather Sneakers",
      price: 89.99,
      image: "https://images.unsplash.com/photo-1595950653106-6c9ebd614d3a?q=80&w=1000&auto=format&fit=crop",
      category: "Footwear",
    },
  ])

  const removeFromWishlist = (id: string) => {
    setWishlistItems(wishlistItems.filter((item) => item.id !== id))
    toast({
      title: "Removed from wishlist",
      description: "The item has been removed from your wishlist.",
    })
  }

  const addToCart = (item: any) => {
    toast({
      title: "Added to cart",
      description: `${item.name} has been added to your cart.`,
    })
  }

  return (
    <FuturisticBackground variant="gradient" className="min-h-screen py-12">
      <div className="container mx-auto px-4">
        <div className="flex items-center mb-8">
          <Button variant="ghost" size="sm" asChild className="mr-4">
            <Link href="/">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Shopping
            </Link>
          </Button>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="bg-white/10 backdrop-blur-md rounded-lg border border-white/20 shadow-xl p-6"
        >
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center">
              <Heart className="h-6 w-6 text-pink-400 mr-2" />
              <h1 className="text-2xl font-bold text-white">My Wishlist</h1>
            </div>
            <span className="text-white/70">{wishlistItems.length} items</span>
          </div>

          {wishlistItems.length > 0 ? (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {wishlistItems.map((item, index) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="group"
                >
                  <Card className="overflow-hidden bg-white/5 backdrop-blur-sm border-white/10 hover:bg-white/10 transition-all">
                    <div className="relative aspect-square">
                      <Image
                        src={item.image || "/placeholder.svg"}
                        alt={item.name}
                        fill
                        className="object-cover transition-transform group-hover:scale-105"
                      />
                      <Button
                        variant="destructive"
                        size="icon"
                        className="absolute top-2 right-2 h-8 w-8 rounded-full opacity-0 group-hover:opacity-100 transition-opacity"
                        onClick={() => removeFromWishlist(item.id)}
                      >
                        <Trash2 className="h-4 w-4" />
                      </Button>
                      <div className="absolute bottom-2 left-2">
                        <span className="px-2 py-1 text-xs font-medium bg-black/50 text-white rounded-full">
                          {item.category}
                        </span>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-medium text-white line-clamp-1">{item.name}</h3>
                      <p className="text-white/70">${item.price.toFixed(2)}</p>
                    </CardContent>
                    <CardFooter className="p-4 pt-0">
                      <Button
                        className="w-full bg-white/20 hover:bg-white/30 text-white"
                        onClick={() => addToCart(item)}
                      >
                        <ShoppingBag className="mr-2 h-4 w-4" />
                        Add to Cart
                      </Button>
                    </CardFooter>
                  </Card>
                </motion.div>
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <Heart className="h-16 w-16 text-white/20 mx-auto mb-4" />
              <h2 className="text-xl font-semibold text-white mb-2">Your wishlist is empty</h2>
              <p className="text-white/70 mb-6">Add items to your wishlist to save them for later.</p>
              <Button asChild>
                <Link href="/products">Browse Products</Link>
              </Button>
            </div>
          )}
        </motion.div>
      </div>
    </FuturisticBackground>
  )
}
