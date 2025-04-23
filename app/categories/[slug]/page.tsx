"use client"

import { useState, useEffect } from "react"
import { useParams, notFound } from "next/navigation"
import { ProductCard } from "@/components/product-card"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { products, categories } from "@/lib/data"
import { motion } from "framer-motion"

export default function CategoryPage() {
  const params = useParams()
  const slug = params?.slug as string
  const [category, setCategory] = useState<any>(null)
  const [categoryProducts, setCategoryProducts] = useState<any[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)

  useEffect(() => {
    try {
      // Find the category
      const foundCategory = categories.find((c) => c.slug === slug)

      if (!foundCategory) {
        setError(true)
        setLoading(false)
        return
      }

      setCategory(foundCategory)

      // Get products for this category
      const filteredProducts = products.filter(
        (product) => product.category.toLowerCase() === foundCategory.name.toLowerCase(),
      )

      setCategoryProducts(filteredProducts)
      setLoading(false)
    } catch (err) {
      console.error("Error loading category:", err)
      setError(true)
      setLoading(false)
    }
  }, [slug])

  if (error) {
    return notFound()
  }

  if (loading || !category) {
    return (
      <div className="container mx-auto py-12 px-4 flex justify-center items-center min-h-[50vh]">
        <div className="animate-pulse flex flex-col items-center">
          <div className="h-8 w-64 bg-gray-200 rounded mb-4"></div>
          <div className="h-4 w-48 bg-gray-200 rounded"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto py-12 px-4">
      <Link
        href="/categories"
        className="inline-flex items-center text-sm text-muted-foreground hover:text-foreground mb-8"
      >
        <ChevronLeft className="mr-1 h-4 w-4" />
        Back to Categories
      </Link>

      <div className="relative rounded-xl overflow-hidden mb-12 h-64">
        <Image src={category.image || "/placeholder.svg"} alt={category.name} fill className="object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-transparent flex items-center">
          <div className="text-white p-6 max-w-2xl">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-4xl font-bold mb-2"
            >
              {category.name}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
            >
              {category.description}
            </motion.p>
          </div>
        </div>
      </div>

      {categoryProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {categoryProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      ) : (
        <div className="text-center py-12">
          <h2 className="text-2xl font-semibold mb-2">No products found</h2>
          <p className="text-muted-foreground">
            We couldn't find any products in this category. Please check back later.
          </p>
        </div>
      )}
    </div>
  )
}
