"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { useParams, notFound, useRouter } from "next/navigation"
import { Star, Truck, ArrowLeft, Check, ShoppingBag, Heart } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import { useCart } from "@/components/cart-provider"
import { products } from "@/lib/data"
import { motion } from "framer-motion"
import { useToast } from "@/hooks/use-toast"
import ProductCard from "@/components/product-card"

export default function ProductPage() {
  const params = useParams()
  const router = useRouter()
  const { toast } = useToast()
  const { addToCart } = useCart()
  const [product, setProduct] = useState<any>(null)
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(false)
  const [selectedImage, setSelectedImage] = useState(0)
  const [selectedColor, setSelectedColor] = useState("")
  const [selectedSize, setSelectedSize] = useState("")
  const [quantity, setQuantity] = useState(1)
  const [isWishlisted, setIsWishlisted] = useState(false)

  useEffect(() => {
    try {
      const id = params?.id as string
      const foundProduct = products.find((p) => p.id === id)

      if (!foundProduct) {
        setError(true)
        setLoading(false)
        return
      }

      setProduct(foundProduct)
      setSelectedColor(foundProduct.colors[0])
      setSelectedSize(foundProduct.sizes[0])
      setLoading(false)
    } catch (err) {
      console.error("Error loading product:", err)
      setError(true)
      setLoading(false)
    }
  }, [params])

  const handleAddToCart = () => {
    if (!product) return

    addToCart({
      id: product.id,
      name: product.name,
      price: product.salePrice || product.price,
      quantity,
      image: product.images[0],
      selectedColor,
      selectedSize,
    })

    toast({
      title: "Added to cart",
      description: `${product.name} has been added to your cart.`,
    })
  }

  const toggleWishlist = () => {
    setIsWishlisted(!isWishlisted)
    toast({
      title: isWishlisted ? "Removed from wishlist" : "Added to wishlist",
      description: isWishlisted
        ? `${product?.name} has been removed from your wishlist.`
        : `${product?.name} has been added to your wishlist.`,
    })
  }

  if (error) {
    return notFound()
  }

  if (loading || !product) {
    return (
      <div className="container mx-auto py-12 px-4">
        <div className="animate-pulse grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="aspect-square bg-gray-200 rounded-lg"></div>
          <div className="space-y-4">
            <div className="h-8 bg-gray-200 rounded w-3/4"></div>
            <div className="h-4 bg-gray-200 rounded w-1/2"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
            <div className="h-4 bg-gray-200 rounded w-full"></div>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/products" className="inline-flex items-center text-sm font-medium mb-6 hover:underline">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to Products
      </Link>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
        {/* Product Images */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-4"
        >
          <div className="relative aspect-square overflow-hidden rounded-lg bg-muted">
            <Image
              src={product.images[selectedImage] || "/placeholder.svg"}
              alt={product.name}
              fill
              className="object-cover"
              priority
            />
            <div className="absolute top-4 right-4 flex flex-col gap-2">
              <Button
                size="icon"
                variant="secondary"
                className="rounded-full h-10 w-10 bg-white/80 backdrop-blur-sm hover:bg-white"
                onClick={toggleWishlist}
              >
                <Heart className={`h-5 w-5 ${isWishlisted ? "fill-red-500 text-red-500" : ""}`} />
                <span className="sr-only">Add to wishlist</span>
              </Button>
            </div>
          </div>

          <div className="grid grid-cols-4 gap-2">
            {product.images.map((image: string, index: number) => (
              <button
                key={index}
                className={`relative aspect-square overflow-hidden rounded-md transition-all ${
                  selectedImage === index ? "ring-2 ring-primary" : "ring-1 ring-border hover:ring-primary/50"
                }`}
                onClick={() => setSelectedImage(index)}
              >
                <Image
                  src={image || "/placeholder.svg"}
                  alt={`${product.name} - Image ${index + 1}`}
                  fill
                  className="object-cover"
                />
              </button>
            ))}
          </div>
        </motion.div>

        {/* Product Details */}
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          <div>
            <div className="flex items-center gap-2 mb-2">
              {product.new && (
                <span className="px-2 py-1 text-xs font-semibold bg-blue-100 text-blue-700 rounded-full">New</span>
              )}
              {product.sale && (
                <span className="px-2 py-1 text-xs font-semibold bg-red-100 text-red-700 rounded-full">Sale</span>
              )}
              {product.featured && (
                <span className="px-2 py-1 text-xs font-semibold bg-purple-100 text-purple-700 rounded-full">
                  Featured
                </span>
              )}
            </div>
            <h1 className="text-3xl font-bold">{product.name}</h1>
            <div className="flex items-center gap-2 mt-2">
              <div className="flex">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.floor(product.rating) ? "text-yellow-400 fill-yellow-400" : "text-gray-300"
                    }`}
                  />
                ))}
              </div>
              <span className="text-sm text-muted-foreground">
                {product.rating} ({product.reviews} reviews)
              </span>
            </div>
          </div>

          <div className="flex items-center gap-4">
            {product.sale && product.salePrice ? (
              <>
                <span className="text-2xl font-bold">${product.salePrice.toFixed(2)}</span>
                <span className="text-lg text-muted-foreground line-through">${product.price.toFixed(2)}</span>
                <span className="px-2 py-1 text-xs font-semibold bg-red-100 text-red-700 rounded-full">
                  Save ${(product.price - product.salePrice).toFixed(2)}
                </span>
              </>
            ) : (
              <span className="text-2xl font-bold">${product.price.toFixed(2)}</span>
            )}
          </div>

          <p className="text-muted-foreground">{product.description}</p>

          <Separator />

          {/* Color Selection */}
          <div>
            <h3 className="text-sm font-medium mb-3">
              Color: <span className="capitalize">{selectedColor}</span>
            </h3>
            <div className="flex flex-wrap gap-2">
              {product.colors.map((color: string) => (
                <button
                  key={color}
                  className={`relative h-10 w-10 rounded-full ${
                    selectedColor === color ? "ring-2 ring-primary ring-offset-2" : "ring-1 ring-border"
                  }`}
                  style={{
                    backgroundColor:
                      color === "white"
                        ? "#ffffff"
                        : color === "black"
                          ? "#000000"
                          : color === "gray"
                            ? "#808080"
                            : color === "blue"
                              ? "#0000ff"
                              : color === "red"
                                ? "#ff0000"
                                : color === "green"
                                  ? "#008000"
                                  : color === "brown"
                                    ? "#a52a2a"
                                    : color === "navy"
                                      ? "#000080"
                                      : color === "olive"
                                        ? "#808000"
                                        : color === "silver"
                                          ? "#c0c0c0"
                                          : color === "tortoise"
                                            ? "#704214"
                                            : color === "multicolor"
                                              ? "linear-gradient(to right, red, orange, yellow, green, blue, indigo, violet)"
                                              : color,
                  }}
                  onClick={() => setSelectedColor(color)}
                >
                  {selectedColor === color && (
                    <Check
                      className={`h-4 w-4 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 ${
                        color === "white" || color === "yellow" ? "text-black" : "text-white"
                      }`}
                    />
                  )}
                </button>
              ))}
            </div>
          </div>

          {/* Size Selection */}
          <div>
            <div className="flex items-center justify-between mb-3">
              <h3 className="text-sm font-medium">
                Size: <span className="uppercase">{selectedSize}</span>
              </h3>
              <button className="text-sm text-primary hover:underline">Size Guide</button>
            </div>
            <RadioGroup value={selectedSize} onValueChange={setSelectedSize} className="grid grid-cols-6 gap-2">
              {product.sizes.map((size: string) => (
                <div key={size}>
                  <RadioGroupItem value={size} id={`size-${size}`} className="peer sr-only" />
                  <Label
                    htmlFor={`size-${size}`}
                    className="flex h-10 w-full cursor-pointer items-center justify-center rounded-md border border-input bg-background text-sm font-medium ring-offset-background transition-colors hover:bg-muted focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/10 peer-data-[state=checked]:text-primary"
                  >
                    {size.toUpperCase()}
                  </Label>
                </div>
              ))}
            </RadioGroup>
          </div>

          {/* Quantity and Add to Cart */}
          <div className="flex flex-col sm:flex-row gap-4">
            <div className="flex items-center border rounded-md">
              <button
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="px-3 py-2 text-lg"
                disabled={quantity <= 1}
              >
                -
              </button>
              <span className="px-4 py-2 text-center w-12">{quantity}</span>
              <button onClick={() => setQuantity(quantity + 1)} className="px-3 py-2 text-lg">
                +
              </button>
            </div>

            <Button size="lg" className="flex-1" onClick={handleAddToCart}>
              <ShoppingBag className="mr-2 h-5 w-5" />
              Add to Cart
            </Button>
          </div>

          {/* Shipping Info */}
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Truck className="h-4 w-4" />
            <span>Free shipping on orders over $50</span>
          </div>

          {/* Product Details Tabs */}
          <Separator className="my-6" />

          <Tabs defaultValue="description">
            <TabsList className="w-full">
              <TabsTrigger value="description" className="flex-1">
                Description
              </TabsTrigger>
              <TabsTrigger value="details" className="flex-1">
                Details
              </TabsTrigger>
              <TabsTrigger value="shipping" className="flex-1">
                Shipping
              </TabsTrigger>
            </TabsList>
            <TabsContent value="description" className="pt-4">
              <p className="text-muted-foreground">{product.longDescription}</p>
            </TabsContent>
            <TabsContent value="details" className="pt-4">
              <ul className="space-y-2 text-muted-foreground">
                <li>
                  <span className="font-medium text-foreground">Material:</span> {product.material}
                </li>
                <li>
                  <span className="font-medium text-foreground">Colors:</span>{" "}
                  {product.colors.map((c: string) => c.charAt(0).toUpperCase() + c.slice(1)).join(", ")}
                </li>
                <li>
                  <span className="font-medium text-foreground">Sizes:</span>{" "}
                  {product.sizes.map((s: string) => s.toUpperCase()).join(", ")}
                </li>
                <li>
                  <span className="font-medium text-foreground">Product ID:</span> {product.id}
                </li>
              </ul>
            </TabsContent>
            <TabsContent value="shipping" className="pt-4">
              <ul className="space-y-2 text-muted-foreground">
                <li>Free standard shipping on orders over $50</li>
                <li>Standard shipping: 3-5 business days</li>
                <li>Express shipping: 1-2 business days</li>
                <li>Free returns within 30 days</li>
              </ul>
            </TabsContent>
          </Tabs>
        </motion.div>
      </div>

      {/* Related Products */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold mb-6">You May Also Like</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products
            .filter((p) => p.category === product.category && p.id !== product.id)
            .slice(0, 4)
            .map((relatedProduct, index) => (
              <motion.div
                key={relatedProduct.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
              >
                <ProductCard product={relatedProduct} />
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  )
}
