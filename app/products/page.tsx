"use client"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ProductCard } from "@/components/product-card"
import { Button } from "@/components/ui/button"
import { products, categories } from "@/data/products"

export default function ProductsPage() {
  const [selectedCategory, setSelectedCategory] = useState("Semua Produk")

  const filteredProducts =
    selectedCategory === "Semua Produk" ? products : products.filter((p) => p.category === selectedCategory)

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        {/* Header */}
        <div className="mb-8">
          <h1 className="mb-4 font-serif text-3xl font-bold md:text-4xl">Produk Kami</h1>
          <p className="text-muted-foreground">
            Jelajahi koleksi kami garmen premium dan produk promosi untuk pesanan bulk
          </p>
        </div>

        {/* Category Filter */}
        <div className="mb-8 flex flex-wrap gap-2">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={selectedCategory === category ? "bg-primary" : ""}
            >
              {category}
            </Button>
          ))}
        </div>

        {/* Product Grid - Mobile: 2 columns, Desktop: 4 columns */}
        <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
          {filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

        {filteredProducts.length === 0 && (
          <div className="py-12 text-center text-muted-foreground">Tidak ada produk ditemukan dalam kategori ini.</div>
        )}
      </div>

      <Footer />
    </div>
  )
}
