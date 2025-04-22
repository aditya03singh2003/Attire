"use client"

import type React from "react"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Eye, Heart, ShoppingBag } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useToast } from "@/hooks/use-toast"
import { useCart } from "@/components/cart-provider"
import { Badge } from "@/components/ui/badge"
import { useRouter } from "next/navigation"

type Product = {
  id: string
  name: string
  price: number
  images: string[]
  category: string
  colors: string[]
  sizes: string[]
  description: string
  featured?: boolean
  new?: boolean
  sale?: boolean
  salePrice?: number
}

// Export as both default and named export to support both import styles
export function ProductCard({ product }: { product: Product }) {
  const [isHovered, setIsHovered] = useState(false)
  const { addToCart } = useCart()
  const { toast } = useToast()
  const router = useRouter()

  const handleQuickAdd = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()

    addToCart({
      id: product.id,
      name: product.name,
      price: product.salePrice || product.price,
      quantity: 1,
      image: product.images[0],
      selectedColor: product.colors[0],
      selectedSize: product.sizes[0],
    })

    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  const handleViewProduct = (e: React.MouseEvent) => {
    e.preventDefault()
    e.stopPropagation()
    router.push(`/products/${product.id}`)
  }

  const handleCardClick = () => {
    router.push(`/products/${product.id}`)
  }

  return (
    <motion.div
      whileHover={{ y: -5 }}
      className="group relative cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={handleCardClick}
    >
      <div className="block">
        <div className="relative aspect-[3/4] overflow-hidden rounded-lg bg-muted">
          <Image
            src={product.images[0] || "/placeholder.svg"}
            alt={product.name}
            fill
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />

          {/* Product badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-2">
            {product.new && <Badge className="bg-blue-500 hover:bg-blue-600">New</Badge>}
            {product.sale && <Badge className="bg-red-500 hover:bg-red-600">Sale</Badge>}
          </div>

          {/* Quick actions */}
          <div
            className={`absolute inset-0 flex items-center justify-center gap-2 bg-black/40 transition-opacity duration-300 ${isHovered ? "opacity-100" : "opacity-0"}`}
          >
            <Button size="icon" variant="secondary" className="h-10 w-10 rounded-full" onClick={handleQuickAdd}>
              <ShoppingBag className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="secondary" className="h-10 w-10 rounded-full" onClick={handleViewProduct}>
              <Eye className="h-5 w-5" />
            </Button>
            <Button size="icon" variant="secondary" className="h-10 w-10 rounded-full">
              <Heart className="h-5 w-5" />
            </Button>
          </div>
        </div>

        <div className="mt-3">
          <h3 className="font-medium">{product.name}</h3>
          <div className="flex items-center gap-2">
            {product.sale && product.salePrice ? (
              <>
                <span className="font-bold">${product.salePrice.toFixed(2)}</span>
                <span className="text-sm text-muted-foreground line-through">${product.price.toFixed(2)}</span>
              </>
            ) : (
              <span className="font-bold">${product.price.toFixed(2)}</span>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  )
}

// Also export as default for backward compatibility
export default ProductCard
