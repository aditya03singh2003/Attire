import { getCategory, getProductsByCategory } from "@/lib/data"
import { ProductCard } from "@/components/product-card"
import { notFound } from "next/navigation"
import type { Metadata } from "next"
import { ChevronLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

interface CategoryPageProps {
  params: {
    slug: string
  }
}

export async function generateMetadata({ params }: CategoryPageProps): Promise<Metadata> {
  const category = getCategory(params.slug)

  if (!category) {
    return {
      title: "Category Not Found",
    }
  }

  return {
    title: `${category.name} - Fashion Store`,
    description: category.description,
  }
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const category = getCategory(params.slug)

  if (!category) {
    notFound()
  }

  const products = getProductsByCategory(params.slug)

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
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white p-6">
            <h1 className="text-4xl font-bold mb-2">{category.name}</h1>
            <p className="max-w-2xl mx-auto">{category.description}</p>
          </div>
        </div>
      </div>

      {products.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
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
