import { getCategories } from "@/lib/data"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function CategoriesPage() {
  const categories = getCategories()

  return (
    <div className="container mx-auto py-12 px-4">
      <div className="flex flex-col items-center text-center mb-12">
        <h1 className="text-4xl font-bold tracking-tight mb-4">Categories</h1>
        <p className="text-muted-foreground max-w-2xl">
          Browse our collections by category to find the perfect style for you.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category) => (
          <div
            key={category.id}
            className="group relative overflow-hidden rounded-lg border bg-background transition-all hover:shadow-lg"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <Image
                src={category.image || "/placeholder.svg"}
                alt={category.name}
                width={600}
                height={450}
                className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
            <div className="p-6">
              <h2 className="text-2xl font-semibold mb-2">{category.name}</h2>
              <p className="text-muted-foreground mb-4">{category.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">{category.productCount} products</span>
                <Button asChild variant="outline" size="sm">
                  <Link href={`/categories/${category.slug}`}>
                    Browse <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
