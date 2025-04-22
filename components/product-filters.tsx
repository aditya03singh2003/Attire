"use client"

import type React from "react"

import { useState, useEffect } from "react"
import { Slider } from "@/components/ui/slider"
import { Checkbox } from "@/components/ui/checkbox"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { X, Check } from "lucide-react"

type FiltersProps = {
  filters: {
    categories: string[]
    colors: string[]
    sizes: string[]
    priceRange: number[]
  }
  setFilters: React.Dispatch<
    React.SetStateAction<{
      categories: string[]
      colors: string[]
      sizes: string[]
      priceRange: number[]
    }>
  >
}

const categoryOptions = [
  { id: "men", label: "Men" },
  { id: "women", label: "Women" },
  { id: "accessories", label: "Accessories" },
  { id: "footwear", label: "Footwear" },
]

const colorOptions = [
  { id: "black", label: "Black", color: "#000000" },
  { id: "white", label: "White", color: "#ffffff" },
  { id: "gray", label: "Gray", color: "#808080" },
  { id: "blue", label: "Blue", color: "#0000ff" },
  { id: "red", label: "Red", color: "#ff0000" },
  { id: "green", label: "Green", color: "#008000" },
  { id: "brown", label: "Brown", color: "#a52a2a" },
  { id: "navy", label: "Navy", color: "#000080" },
]

const sizeOptions = [
  { id: "xs", label: "XS" },
  { id: "s", label: "S" },
  { id: "m", label: "M" },
  { id: "l", label: "L" },
  { id: "xl", label: "XL" },
  { id: "xxl", label: "XXL" },
]

export default function ProductFilters({ filters, setFilters }: FiltersProps) {
  const [localPriceRange, setLocalPriceRange] = useState(filters.priceRange)
  const [activeFiltersCount, setActiveFiltersCount] = useState(0)

  useEffect(() => {
    // Count active filters
    const count =
      filters.categories.length +
      filters.colors.length +
      filters.sizes.length +
      (filters.priceRange[0] > 0 || filters.priceRange[1] < 500 ? 1 : 0)
    setActiveFiltersCount(count)
  }, [filters])

  const handleCategoryChange = (category: string, checked: boolean) => {
    setFilters((prev) => {
      if (checked) {
        return {
          ...prev,
          categories: [...prev.categories, category],
        }
      } else {
        return {
          ...prev,
          categories: prev.categories.filter((c) => c !== category),
        }
      }
    })
  }

  const handleColorChange = (color: string) => {
    setFilters((prev) => {
      if (prev.colors.includes(color)) {
        return {
          ...prev,
          colors: prev.colors.filter((c) => c !== color),
        }
      } else {
        return {
          ...prev,
          colors: [...prev.colors, color],
        }
      }
    })
  }

  const handleSizeChange = (size: string) => {
    setFilters((prev) => {
      if (prev.sizes.includes(size)) {
        return {
          ...prev,
          sizes: prev.sizes.filter((s) => s !== size),
        }
      } else {
        return {
          ...prev,
          sizes: [...prev.sizes, size],
        }
      }
    })
  }

  const handlePriceChange = (value: number[]) => {
    setLocalPriceRange(value)
    setFilters((prev) => ({
      ...prev,
      priceRange: value,
    }))
  }

  const resetFilters = () => {
    setFilters({
      categories: [],
      colors: [],
      sizes: [],
      priceRange: [0, 500],
    })
    setLocalPriceRange([0, 500])
  }

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="text-lg font-semibold">Filters</h3>
        {activeFiltersCount > 0 && (
          <Button variant="outline" size="sm" onClick={resetFilters} className="h-8 gap-1">
            <X className="h-3.5 w-3.5" />
            Clear All ({activeFiltersCount})
          </Button>
        )}
      </div>

      <div>
        <h4 className="text-sm font-medium mb-3">Categories</h4>
        <div className="space-y-2">
          {categoryOptions.map((category) => (
            <div key={category.id} className="flex items-center space-x-2">
              <Checkbox
                id={`category-${category.id}`}
                checked={filters.categories.includes(category.id)}
                onCheckedChange={(checked) => handleCategoryChange(category.id, checked === true)}
              />
              <Label htmlFor={`category-${category.id}`} className="text-sm font-normal cursor-pointer">
                {category.label}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      <div>
        <h4 className="text-sm font-medium mb-3">Price Range</h4>
        <Slider
          defaultValue={[0, 500]}
          min={0}
          max={500}
          step={10}
          value={localPriceRange}
          onValueChange={handlePriceChange}
          className="mb-6"
        />
        <div className="flex items-center justify-between">
          <span className="text-sm">${localPriceRange[0]}</span>
          <span className="text-sm">${localPriceRange[1]}</span>
        </div>
      </div>

      <Separator />

      <div>
        <h4 className="text-sm font-medium mb-3">Colors</h4>
        <div className="grid grid-cols-4 gap-2">
          {colorOptions.map((color) => (
            <div key={color.id} className="flex flex-col items-center gap-1">
              <button
                className={`h-8 w-8 rounded-full border-2 ${
                  filters.colors.includes(color.id) ? "border-primary" : "border-transparent"
                }`}
                style={{ backgroundColor: color.color }}
                onClick={() => handleColorChange(color.id)}
                aria-label={`Select ${color.label} color`}
              >
                {filters.colors.includes(color.id) && (
                  <Check className={`h-4 w-4 ${color.id === "white" ? "text-black" : "text-white"}`} />
                )}
              </button>
              <span className="text-xs">{color.label}</span>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      <div>
        <h4 className="text-sm font-medium mb-3">Sizes</h4>
        <div className="grid grid-cols-3 gap-2">
          {sizeOptions.map((size) => (
            <button
              key={size.id}
              className={`h-10 rounded-md border text-sm font-medium ${
                filters.sizes.includes(size.id)
                  ? "border-primary bg-primary/10 text-primary"
                  : "border-input bg-background hover:bg-muted"
              }`}
              onClick={() => handleSizeChange(size.id)}
            >
              {size.label}
            </button>
          ))}
        </div>
      </div>

      <Separator />

      <Button className="w-full" onClick={() => console.log("Applied filters:", filters)}>
        Apply Filters
      </Button>
    </div>
  )
}
