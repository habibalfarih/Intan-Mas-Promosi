import Link from "next/link"
import Image from "next/image"
import { Card } from "@/components/ui/card"
import type { Product } from "@/data/products"

interface ProductCardProps {
  product: Product
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/products/${product.id}`}>
      <Card className="group overflow-hidden border-border bg-card transition-all hover:border-primary/50 hover:shadow-lg">
        <div className="aspect-square overflow-hidden bg-muted">
          <Image
            src={product.image || "/placeholder.svg"}
            alt={product.name}
            width={400}
            height={400}
            className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </div>
        <div className="p-4">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs font-medium text-primary">{product.category}</span>
            <span className="text-xs text-muted-foreground">Min. {product.minOrder} pcs</span>
          </div>
          <h3 className="mb-2 font-semibold text-foreground line-clamp-2">{product.name}</h3>
          <p className="mb-3 text-sm text-muted-foreground line-clamp-2">{product.description}</p>
          <div className="flex items-baseline gap-2">
            <span className="text-xs text-muted-foreground">Dari</span>
            <span className="font-bold text-foreground">Rp {product.basePrice.toLocaleString("id-ID")}</span>
          </div>
        </div>
      </Card>
    </Link>
  )
}
