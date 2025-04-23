"use client"

import { Button } from "@/components/ui/button"
import { ProductCard } from "@/components/product-card"
import Link from "next/link"
import HeroModern from "@/components/hero-modern"
import { ArrowRight, ShoppingBag, Star, TrendingUp, Sparkles } from "lucide-react"
import { featuredProducts, categories, newArrivals } from "@/lib/data"
import Image from "next/image"
import { motion } from "framer-motion"
import FuturisticBackground from "@/components/futuristic-background"

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section with Modern Design */}
      <HeroModern />

      {/* Featured Products Section */}
      <section className="py-20 container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="h-5 w-5 text-amber-500" />
              <span className="text-sm font-medium uppercase tracking-wider text-amber-500">Curated Selection</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight">Featured Products</h2>
            <p className="text-muted-foreground mt-2">Discover our handpicked selection of premium items</p>
          </div>
          <Button asChild variant="outline" className="mt-4 md:mt-0">
            <Link href="/products">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.slice(0, 4).map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="transform transition-all duration-300 hover:-translate-y-2"
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </div>
      </section>

      {/* New Arrivals Section */}
      <FuturisticBackground variant="gradient" className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Sparkles className="h-5 w-5 text-purple-300" />
              <span className="text-sm font-medium uppercase tracking-wider text-purple-300">Just Arrived</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight mb-4 text-white">New Arrivals</h2>
            <p className="text-white/70 max-w-2xl mx-auto">
              Be the first to discover our latest additions and stay ahead of the trends
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newArrivals.slice(0, 3).map((product, index) => (
              <motion.div
                key={product.id}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="bg-white/10 backdrop-blur-md rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow border border-white/10">
                  <div className="relative aspect-[3/4]">
                    <Image
                      src={product.images[0] || "/placeholder.svg"}
                      alt={product.name}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className="bg-purple-500 text-white text-xs font-bold px-3 py-1 rounded-full">New</span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-bold text-lg mb-2 text-white">{product.name}</h3>
                    <p className="text-white/70 mb-4 line-clamp-2">{product.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="font-bold text-lg text-white">
                        ${(product.salePrice || product.price).toFixed(2)}
                      </span>
                      <Button asChild size="sm" className="bg-white/20 hover:bg-white/30 backdrop-blur-sm text-white">
                        <Link href={`/products/${product.id}`}>View Details</Link>
                      </Button>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white border border-white/20"
            >
              <Link href="/products">
                View All New Arrivals
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </FuturisticBackground>

      {/* Categories Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-2 mb-2">
              <Sparkles className="h-5 w-5 text-blue-500" />
              <span className="text-sm font-medium uppercase tracking-wider text-blue-500">Collections</span>
            </div>
            <h2 className="text-3xl font-bold tracking-tight mb-4">Shop by Category</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Browse our carefully curated collections designed for every occasion and style preference
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categories.slice(0, 6).map((category, index) => (
              <motion.div
                key={category.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Link
                  href={`/categories/${category.slug}`}
                  className="group relative overflow-hidden rounded-xl aspect-[4/3] block"
                >
                  <Image
                    src={category.image || "/placeholder.svg"}
                    alt={category.name}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 p-6">
                    <h3 className="text-2xl font-bold text-white mb-2">{category.name}</h3>
                    <p className="text-white/80 mb-4">{category.description}</p>
                    <span className="inline-flex items-center text-white font-medium">
                      Shop Now <ArrowRight className="ml-2 h-4 w-4" />
                    </span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <FuturisticBackground variant="waves" className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <ShoppingBag className="h-10 w-10 text-blue-300" />,
                title: "Free Shipping",
                description: "Free shipping on all orders over $50",
              },
              {
                icon: <Star className="h-10 w-10 text-purple-300" />,
                title: "Premium Quality",
                description: "Handcrafted with the finest materials",
              },
              {
                icon: <TrendingUp className="h-10 w-10 text-pink-300" />,
                title: "Latest Trends",
                description: "Stay ahead with our seasonal collections",
              },
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="flex flex-col items-center text-center p-8 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all"
              >
                <div className="mb-4 p-4 rounded-full bg-white/10">{feature.icon}</div>
                <h3 className="text-xl font-bold mb-2 text-white">{feature.title}</h3>
                <p className="text-white/70">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </FuturisticBackground>

      {/* Newsletter Section */}
      <FuturisticBackground variant="particles" className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <Sparkles className="h-8 w-8 mx-auto mb-4 text-yellow-300" />
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">Join Our Newsletter</h2>
            <p className="text-white/80 mb-8">
              Subscribe to get special offers, free giveaways, and once-in-a-lifetime deals.
            </p>
            <form className="flex flex-col sm:flex-row gap-3 max-w-lg mx-auto">
              <input
                type="email"
                placeholder="Your email address"
                className="flex-1 px-4 py-3 rounded-md border border-white/20 bg-white/10 backdrop-blur-sm placeholder:text-white/60 text-white focus:outline-none focus:ring-2 focus:ring-white"
                required
              />
              <Button size="lg" className="bg-white text-indigo-900 hover:bg-white/90">
                Subscribe
              </Button>
            </form>
          </div>
        </div>
      </FuturisticBackground>
    </div>
  )
}
