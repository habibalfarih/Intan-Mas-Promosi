"use client"

import { useState, use } from "react"
import { useRouter } from "next/navigation"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { useCart } from "@/contexts/cart-context"
import { products } from "@/data/products"
import { ArrowLeft, Minus, Plus } from "lucide-react"
import Link from "next/link"
import { useToast } from "@/hooks/use-toast"

export default function ProductDetailPage({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = use(params) // ✅ FIX UTAMA DI SINI

  const product = products.find((p) => p.id === id)
  const router = useRouter()
  const { addItem } = useCart()
  const { toast } = useToast()

  const [sizes, setSizes] = useState<{ [key: string]: number }>(
    product?.sizes.reduce((acc, size) => ({ ...acc, [size]: 0 }), {}) || {},
  )
  const [selectedColors, setSelectedColors] = useState<string[]>([])
  const [notes, setNotes] = useState("")

  if (!product) {
    return (
      <div className="min-h-screen">
        <Navbar />
        <div className="container mx-auto px-4 py-16 text-center">
          <h1 className="mb-4 text-2xl font-bold">Produk tidak ditemukan</h1>
          <Link href="/products">
            <Button>Kembali ke Produk</Button>
          </Link>
        </div>
        <Footer />
      </div>
    )
  }

  const updateSize = (size: string, delta: number) => {
    setSizes((prev) => ({
      ...prev,
      [size]: Math.max(0, (prev[size] || 0) + delta),
    }))
  }

  const totalQuantity = Object.values(sizes).reduce((sum, qty) => sum + qty, 0)
  const estimatedPrice = totalQuantity * product.basePrice

  const toggleColor = (color: string) => {
    setSelectedColors((prev) =>
      prev.includes(color) ? prev.filter((c) => c !== color) : [...prev, color],
    )
  }

  const handleAddToCart = () => {
    if (totalQuantity < product.minOrder) {
      toast({
        title: "Minimum pesanan belum terpenuhi",
        description: `Harap pesan minimal ${product.minOrder} buah.`,
        variant: "destructive",
      })
      return
    }

    if (selectedColors.length === 0) {
      toast({
        title: "Pilih warna",
        description: "Anda harus memilih setidaknya satu warna.",
        variant: "destructive",
      })
      return
    }

    addItem({
      id: "",
      name: product.name,
      category: product.category,
      image: product.image,
      sizes,
      colors: selectedColors,
      notes,
      estimatedPrice,
    })

    toast({
      title: "Ditambahkan ke keranjang",
      description: `${totalQuantity} item berhasil ditambahkan.`,
    })

    router.push("/cart")
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <Link href="/products">
          <Button variant="ghost" size="sm" className="mb-6">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Kembali ke Produk
          </Button>
        </Link>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="aspect-square overflow-hidden rounded-lg bg-muted">
            <Image
              src={product.image || "/placeholder.svg"}
              alt={product.name}
              width={600}
              height={600}
              className="h-full w-full object-cover"
            />
          </div>

          <div className="space-y-6">
            <div>
              <Badge className="mb-2">{product.category}</Badge>
              <h1 className="mb-2 font-serif text-3xl font-bold">{product.name}</h1>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {product.description}
              </p>
            </div>

            <Card className="border-primary/20 bg-card p-4">
              <div className="flex items-baseline gap-2">
                <span className="text-sm text-muted-foreground">Harga Dasar:</span>
                <span className="text-2xl font-bold">
                  Rp {product.basePrice.toLocaleString("id-ID")}
                </span>
                <span className="text-sm text-muted-foreground">/ buah</span>
              </div>
              <p className="mt-2 text-xs text-muted-foreground">
                Minimum pemesanan: {product.minOrder} buah
              </p>
            </Card>

            <div>
              <Label className="mb-3 block text-base font-semibold">
                Pilih Ukuran & Jumlah
              </Label>
              <div className="space-y-3">
                {product.sizes.map((size) => (
                  <div
                    key={size}
                    className="flex items-center justify-between rounded-lg border border-border bg-card p-3"
                  >
                    <span className="font-medium">{size}</span>
                    <div className="flex items-center gap-3">
                      <Button
                        size="icon"
                        variant="outline"
                        onClick={() => updateSize(size, -1)}
                        disabled={sizes[size] === 0}
                      >
                        <Minus className="h-4 w-4" />
                      </Button>
                      <Input
                        type="number"
                        value={sizes[size]}
                        onChange={(e) =>
                          setSizes((prev) => ({
                            ...prev,
                            [size]: Math.max(
                              0,
                              Number.parseInt(e.target.value) || 0,
                            ),
                          }))
                        }
                        className="w-20 text-center"
                        min="0"
                      />
                      <Button
                        size="icon"
                        variant="outline"
                        onClick={() => updateSize(size, 1)}
                      >
                        <Plus className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                ))}
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Total: {totalQuantity} buah{" "}
                {totalQuantity < product.minOrder &&
                  `(min. ${product.minOrder})`}
              </p>
            </div>

            <div>
              <Label className="mb-3 block text-base font-semibold">
                Pilih Warna
              </Label>
              <div className="flex flex-wrap gap-2">
                {product.colors.map((color) => (
                  <Button
                    key={color}
                    variant={
                      selectedColors.includes(color) ? "default" : "outline"
                    }
                    size="sm"
                    onClick={() => toggleColor(color)}
                  >
                    {color}
                  </Button>
                ))}
              </div>
            </div>

            <div>
              <Label
                htmlFor="notes"
                className="mb-3 block text-base font-semibold"
              >
                Catatan Tambahan
              </Label>
              <Textarea
                id="notes"
                placeholder="Preferensi bahan, metode cetak, permintaan custom, dll."
                value={notes}
                onChange={(e) => setNotes(e.target.value)}
                rows={4}
              />
            </div>

            <Card className="border-primary bg-card p-4">
              <div className="mb-2 flex items-center justify-between">
                <span className="font-semibold">Estimasi Total:</span>
                <span className="text-2xl font-bold text-primary">
                  Rp {estimatedPrice.toLocaleString("id-ID")}
                </span>
              </div>
              <p className="text-xs text-muted-foreground">
                * Harga final akan dikonfirmasi via email setelah review
              </p>
            </Card>

            <Button
              size="lg"
              className="w-full bg-primary hover:bg-primary/90"
              onClick={handleAddToCart}
              disabled={
                totalQuantity < product.minOrder ||
                selectedColors.length === 0
              }
            >
              Tambahkan ke Keranjang
            </Button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
