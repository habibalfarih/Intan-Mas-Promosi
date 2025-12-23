"use client"

import Link from "next/link"
import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { useCart } from "@/contexts/cart-context"
import { Trash2, ShoppingBag } from "lucide-react"

export default function CartPage() {
  const { items, removeItem, totalPrice, totalItems } = useCart()

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-8 font-serif text-3xl font-bold md:text-4xl">Keranjang Belanja</h1>

        {items.length === 0 ? (
          <Card className="p-12 text-center">
            <ShoppingBag className="mx-auto mb-4 h-16 w-16 text-muted-foreground" />
            <h2 className="mb-2 text-xl font-semibold">Keranjang Anda kosong</h2>
            <p className="mb-6 text-muted-foreground">Mulai tambahkan produk ke pesanan bulk Anda</p>
            <Link href="/products">
              <Button className="bg-primary hover:bg-primary/90">Lihat Produk</Button>
            </Link>
          </Card>
        ) : (
          <div className="grid gap-8 lg:grid-cols-3">
            {/* Cart Items */}
            <div className="space-y-4 lg:col-span-2">
              {items.map((item) => {
                const itemTotal = Object.values(item.sizes).reduce((sum, qty) => sum + qty, 0)

                return (
                  <Card key={item.id} className="overflow-hidden border-border bg-card">
                    <div className="flex gap-4 p-4">
                      <div className="relative h-24 w-24 flex-shrink-0 overflow-hidden rounded-lg bg-muted">
                        <Image src={item.image || "/placeholder.svg"} alt={item.name} fill className="object-cover" />
                      </div>

                      <div className="flex-1 space-y-2">
                        <div className="flex items-start justify-between">
                          <div>
                            <h3 className="font-semibold">{item.name}</h3>
                            <p className="text-sm text-muted-foreground">{item.category}</p>
                          </div>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeItem(item.id)}
                            className="text-destructive hover:text-destructive"
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>

                        <div className="space-y-1 text-sm">
                          <div>
                            <span className="text-muted-foreground">Ukuran: </span>
                            {Object.entries(item.sizes)
                              .filter(([, qty]) => qty > 0)
                              .map(([size, qty]) => `${size}(${qty})`)
                              .join(", ")}
                          </div>
                          <div>
                            <span className="text-muted-foreground">Warna: </span>
                            {item.colors.join(", ")}
                          </div>
                          <div>
                            <span className="text-muted-foreground">Total Jumlah: </span>
                            {itemTotal} buah
                          </div>
                          {item.notes && (
                            <div>
                              <span className="text-muted-foreground">Catatan: </span>
                              {item.notes}
                            </div>
                          )}
                        </div>

                        <div className="pt-2 font-semibold">Rp {item.estimatedPrice.toLocaleString("id-ID")}</div>
                      </div>
                    </div>
                  </Card>
                )
              })}
            </div>

            {/* Order Summary */}
            <div>
              <Card className="sticky top-20 border-border bg-card p-6">
                <h2 className="mb-4 font-serif text-xl font-bold">Ringkasan Pesanan</h2>

                <div className="space-y-3 border-b border-border pb-4">
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Total Item</span>
                    <span className="font-medium">{totalItems} buah</span>
                  </div>
                  <div className="flex justify-between text-sm">
                    <span className="text-muted-foreground">Estimasi Subtotal</span>
                    <span className="font-medium">Rp {totalPrice.toLocaleString("id-ID")}</span>
                  </div>
                </div>

                <div className="mt-4 flex justify-between text-lg font-bold">
                  <span>Estimasi Total</span>
                  <span className="text-primary">Rp {totalPrice.toLocaleString("id-ID")}</span>
                </div>

                <p className="mt-4 text-xs text-muted-foreground">
                  * Harga final akan dikonfirmasi via email setelah meninjau detail pesanan Anda.
                </p>

                <Link href="/checkout">
                  <Button size="lg" className="mt-6 w-full bg-primary hover:bg-primary/90">
                    Lanjutkan ke Checkout
                  </Button>
                </Link>

                <Link href="/products">
                  <Button variant="outline" size="lg" className="mt-3 w-full bg-transparent">
                    Lanjutkan Belanja
                  </Button>
                </Link>
              </Card>
            </div>
          </div>
        )}
      </div>

      <Footer />
    </div>
  )
}
