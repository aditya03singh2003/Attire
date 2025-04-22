"use client"

import { useState, useEffect } from "react"
import { useSearchParams } from "next/navigation"
import { motion, AnimatePresence } from "framer-motion"
import { Filter, SlidersHorizontal } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import ProductCard from "@/components/product-card"
import ProductFilters from "@/components/product-filters"
import ProductSort from "@/components/product-sort"
import { products } from "@/lib/data"

export default function ProductsPage() {
  const searchParams = useSearchParams()
  const categoryParam = searchParams.get("category")

  const [filteredProducts, setFilteredProducts] = useState(products)
  const [filters, setFilters] = useState({
    categories: categoryParam ? [categoryParam] : [],
    colors: [],
    sizes: [],
    priceRange: [0, 500],
  })
  const [sortOption, setSortOption] = useState("featured")
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false)

  useEffect(() => {
    let result = [...products]

    // Apply category filter
    if (filters.categories.length > 0) {
      result = result.filter((product) => filters.categories.includes(product.category.toLowerCase()))
    }

    // Apply color filter
    if (filters.colors.length > 0) {
      result = result.filter((product) => product.colors.some((color) => filters.colors.includes(color.toLowerCase())))
    }

    // Apply size filter
    if (filters.sizes.length > 0) {
      result = result.filter((product) => product.sizes.some((size) => filters.sizes.includes(size.toLowerCase())))
    }

    // Apply price range filter
    result = result.filter((product) => {
      const price = product.salePrice || product.price
      return price >= filters.priceRange[0] && price <= filters.priceRange[1]
    })

    // Apply sorting
    switch (sortOption) {
      case "price-low-high":
        result.sort((a, b) => (a.salePrice || a.price) - (b.salePrice || b.price))
        break
      case "price-high-low":
        result.sort((a, b) => (b.salePrice || b.price) - (a.salePrice || a.price))
        break
      case "newest":
        result.sort((a, b) => new Date(b.date || "").getTime() - new Date(a.date || "").getTime())
        break
      case "featured":
      default:
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
        break
    }

    setFilteredProducts(result)
  }, [filters, sortOption, categoryParam])

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col space-y-6">
        <div className="flex flex-col space-y-4">
          <h1 className="text-3xl font-bold">All Products</h1>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
            <div className="flex items-center gap-2 sm:hidden">
              <Sheet open={isMobileFiltersOpen} onOpenChange={setIsMobileFiltersOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" size="sm" className="flex items-center gap-2">
                    <Filter className="h-4 w-4" />
                    Filters
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-[300px] sm:w-[400px]">
                  <div className="py-4">
                    <ProductFilters filters={filters} setFilters={setFilters} />
                  </div>
                </SheetContent>
              </Sheet>

              <ProductSort sortOption={sortOption} setSortOption={setSortOption} />
            </div>

            <div className="hidden sm:flex sm:items-center sm:gap-4">
              <ProductSort sortOption={sortOption} setSortOption={setSortOption} />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-[240px_1fr] gap-8">
          <div className="hidden md:block">
            <div className="sticky top-20">
              <ProductFilters filters={filters} setFilters={setFilters} />
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <p className="text-muted-foreground">
                Showing <span className="font-medium text-foreground">{filteredProducts.length}</span> products
              </p>

              <div className="hidden sm:block">
                <Button variant="outline" size="sm" className="flex items-center gap-2">
                  <SlidersHorizontal className="h-4 w-4" />
                  View
                </Button>
              </div>
            </div>

            <AnimatePresence mode="wait">
              {filteredProducts.length > 0 ? (
                <motion.div
                  key="products"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                  {filteredProducts.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                    >
                      <ProductCard product={product} />
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <motion.div
                  key="no-products"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="flex flex-col items-center justify-center py-12"
                >
                  <p className="text-xl font-medium mb-4">No products found</p>
                  <p className="text-muted-foreground text-center max-w-md mb-8">
                    Try adjusting your filters or search criteria to find what you're looking for.
                  </p>
                  <Button
                    onClick={() =>
                      setFilters({
                        categories: [],
                        colors: [],
                        sizes: [],
                        priceRange: [0, 500],
                      })
                    }
                  >
                    Clear All Filters
                  </Button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  )
}
