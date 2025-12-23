"use client"

import type React from "react"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { useCart } from "@/contexts/cart-context"
import { Mail } from "lucide-react"

export default function CheckoutPage() {
  const { items, totalPrice, totalItems, clearCart } = useCart()
  const router = useRouter()

  const [formData, setFormData] = useState({
    companyName: "",
    picName: "",
    email: "",
    phone: "",
    additionalNotes: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Generate email body
    const orderDetails = items
      .map((item, index) => {
        const sizeBreakdown = Object.entries(item.sizes)
          .filter(([, qty]) => qty > 0)
          .map(([size, qty]) => `${size}: ${qty} pcs`)
          .join(", ")

        return `
${index + 1}. ${item.name}
   Kategori: ${item.category}
   Ukuran: ${sizeBreakdown}
   Warna: ${item.colors.join(", ")}
   ${item.notes ? `Catatan: ${item.notes}` : ""}
   Harga Estimasi: Rp ${item.estimatedPrice.toLocaleString("id-ID")}
      `.trim()
      })
      .join("\n\n")

    const subject = encodeURIComponent("Permintaan Pesanan Bulk – Intan Mas Promosi")
    const body = encodeURIComponent(
      `
Tim Intan Mas Promosi yang Terhormat,

Saya ingin melakukan pesanan bulk dengan detail sebagai berikut:

INFORMASI PERUSAHAAN:
Nama Perusahaan: ${formData.companyName}
Nama PIC: ${formData.picName}
Email: ${formData.email}
Telepon: ${formData.phone}

DETAIL PESANAN:
Total Item: ${totalItems} buah
Estimasi Total: Rp ${totalPrice.toLocaleString("id-ID")}

PRODUK:
${orderDetails}

${formData.additionalNotes ? `\nCATATAN TAMBAHAN:\n${formData.additionalNotes}` : ""}

Mohon konfirmasi harga final dan timeline produksi.

Hormat saya,
${formData.picName}
    `.trim(),
    )

    // Open Gmail compose
    window.location.href = `mailto:info@intanmaspromosi.com?subject=${subject}&body=${body}`

    // Clear cart after sending
    clearCart()

    // Redirect to thank you page
    setTimeout(() => {
      router.push("/thank-you")
    }, 1000)
  }

  if (items.length === 0) {
    router.push("/cart")
    return null
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <h1 className="mb-8 font-serif text-3xl font-bold md:text-4xl">Checkout</h1>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Checkout Form */}
          <div className="lg:col-span-2">
            <Card className="border-border bg-card p-6">
              <h2 className="mb-6 font-serif text-xl font-bold">Informasi Kontak</h2>

              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="companyName">Nama Perusahaan *</Label>
                  <Input
                    id="companyName"
                    required
                    value={formData.companyName}
                    onChange={(e) => setFormData({ ...formData, companyName: e.target.value })}
                    placeholder="PT. Perusahaan Anda"
                  />
                </div>

                <div>
                  <Label htmlFor="picName">Nama PIC *</Label>
                  <Input
                    id="picName"
                    required
                    value={formData.picName}
                    onChange={(e) => setFormData({ ...formData, picName: e.target.value })}
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <Label htmlFor="email">Alamat Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@company.com"
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Nomor Telepon *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+62 812 3456 7890"
                  />
                </div>

                <div>
                  <Label htmlFor="additionalNotes">Catatan Tambahan</Label>
                  <Textarea
                    id="additionalNotes"
                    value={formData.additionalNotes}
                    onChange={(e) => setFormData({ ...formData, additionalNotes: e.target.value })}
                    placeholder="Permintaan khusus atau pertanyaan..."
                    rows={4}
                  />
                </div>

                <Card className="border-primary/20 bg-muted p-4">
                  <div className="flex gap-3">
                    <Mail className="h-5 w-5 flex-shrink-0 text-primary" />
                    <div className="text-sm">
                      <p className="font-semibold">Konfirmasi Email</p>
                      <p className="text-muted-foreground">
                        Klik "Kirim Permintaan Pesanan" akan membuka aplikasi email Anda dengan detail pesanan. Tim kami
                        akan merespons dalam 24 jam dengan harga final dan timeline.
                      </p>
                    </div>
                  </div>
                </Card>

                <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                  Kirim Permintaan Pesanan via Email
                </Button>
              </form>
            </Card>
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
                  <span className="text-muted-foreground">Jumlah Produk</span>
                  <span className="font-medium">{items.length}</span>
                </div>
              </div>

              <div className="mt-4 flex justify-between text-lg font-bold">
                <span>Estimasi Total</span>
                <span className="text-primary">Rp {totalPrice.toLocaleString("id-ID")}</span>
              </div>

              <p className="mt-4 text-xs text-muted-foreground">
                * Ini adalah harga estimasi. Harga final akan dikonfirmasi via email setelah tim kami meninjau pesanan
                Anda.
              </p>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  )
}
