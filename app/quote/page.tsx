"use client"

import type React from "react"

import { useState } from "react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Mail } from "lucide-react"

export default function QuotePage() {
  const [formData, setFormData] = useState({
    companyName: "",
    picName: "",
    email: "",
    phone: "",
    productType: "",
    quantity: "",
    requirements: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    const subject = encodeURIComponent("Permintaan Penawaran – Intan Mas Promosi")
    const body = encodeURIComponent(
      `
Tim Intan Mas Promosi yang Terhormat,

Saya ingin meminta penawaran untuk hal berikut:

INFORMASI PERUSAHAAN:
Nama Perusahaan: ${formData.companyName}
Nama PIC: ${formData.picName}
Email: ${formData.email}
Telepon: ${formData.phone}

DETAIL PERMINTAAN:
Jenis Produk: ${formData.productType}
Estimasi Jumlah: ${formData.quantity} buah
Kebutuhan: ${formData.requirements}

Mohon berikan penawaran rinci termasuk harga, timeline produksi, dan informasi relevan lainnya.

Hormat saya,
${formData.picName}
    `.trim(),
    )

    window.location.href = `mailto:info@intanmaspromosi.com?subject=${subject}&body=${body}`
  }

  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        <div className="mx-auto max-w-2xl">
          <h1 className="mb-4 font-serif text-3xl font-bold md:text-4xl">Minta Penawaran</h1>
          <p className="mb-8 text-muted-foreground">
            Isi formulir di bawah ini dan kami akan menghubungi Anda dalam 24 jam dengan penawaran rinci.
          </p>

          <Card className="border-border bg-card p-6">
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
                <Label htmlFor="productType">Jenis Produk *</Label>
                <Input
                  id="productType"
                  required
                  value={formData.productType}
                  onChange={(e) => setFormData({ ...formData, productType: e.target.value })}
                  placeholder="mis. Kaos, Polo, Tas Tote, Banner"
                />
              </div>

              <div>
                <Label htmlFor="quantity">Estimasi Jumlah *</Label>
                <Input
                  id="quantity"
                  required
                  value={formData.quantity}
                  onChange={(e) => setFormData({ ...formData, quantity: e.target.value })}
                  placeholder="mis. 100 buah"
                />
              </div>

              <div>
                <Label htmlFor="requirements">Kebutuhan Rinci *</Label>
                <Textarea
                  id="requirements"
                  required
                  value={formData.requirements}
                  onChange={(e) => setFormData({ ...formData, requirements: e.target.value })}
                  placeholder="Deskripsikan kebutuhan Anda: ukuran, warna, metode cetak, penempatan logo, dll."
                  rows={6}
                />
              </div>

              <Card className="border-primary/20 bg-muted p-4">
                <div className="flex gap-3">
                  <Mail className="h-5 w-5 flex-shrink-0 text-primary" />
                  <div className="text-sm">
                    <p className="font-semibold">Respons Cepat Terjamin</p>
                    <p className="text-muted-foreground">
                      Tim kami akan meninjau permintaan Anda dan mengirim penawaran rinci dalam 24 jam.
                    </p>
                  </div>
                </div>
              </Card>

              <Button type="submit" size="lg" className="w-full bg-primary hover:bg-primary/90">
                Kirim Permintaan
              </Button>
            </form>
          </Card>
        </div>
      </div>

      <Footer />
    </div>
  )
}
