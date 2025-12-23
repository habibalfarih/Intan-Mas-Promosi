import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { ArrowRight, CheckCircle2, Package, Shirt, Megaphone, Printer } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      {/* Hero Section */}
      <section className="premium-gradient relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('/abstract-fabric-texture-dark.jpg')] opacity-5" />
        <div className="container relative mx-auto px-4 py-24 md:py-32">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-8 inline-flex">
              <Image src="/logo.png" alt="IMP" width={120} height={120} className="h-24 w-auto md:h-32" />
            </div>
            <h1 className="mb-6 font-serif text-4xl font-bold leading-tight text-balance md:text-5xl lg:text-6xl">
              Solusi B2B Premium untuk <span className="text-primary">Branding Korporat</span>
            </h1>
            <p className="mb-8 text-lg text-muted-foreground text-balance md:text-xl">
              Mitra terpercaya untuk pemesanan garmen bulk, produk promosi, dan materi iklan. Minimum pemesanan 24 buah.
              Kualitas profesional, harga kompetitif.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/products">
                <Button size="lg" className="w-full bg-primary hover:bg-primary/90 sm:w-auto">
                  Lihat Produk
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/quote">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                  Minta Penawaran
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 font-serif text-3xl font-bold text-balance md:text-4xl">Layanan Kami</h2>
            <p className="text-muted-foreground text-balance">
              Solusi komprehensif untuk semua kebutuhan branding korporat Anda
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="border-border bg-card p-6 transition-all hover:border-primary/50">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Shirt className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold text-foreground">Garmen</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Kaos, polo, jaket, seragam, dan rompi. Desain custom dan pemesanan bulk.
              </p>
            </Card>

            <Card className="border-border bg-card p-6 transition-all hover:border-primary/50">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Package className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold text-foreground">Produk Promosi</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Tote bag, tumbler, notebook, payung, dan merchandise promosi lainnya.
              </p>
            </Card>

            <Card className="border-border bg-card p-6 transition-all hover:border-primary/50">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Megaphone className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold text-foreground">Iklan</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Banner, roll-up, bendera, dan materi iklan lainnya untuk acara.
              </p>
            </Card>

            <Card className="border-border bg-card p-6 transition-all hover:border-primary/50">
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                <Printer className="h-6 w-6 text-primary" />
              </div>
              <h3 className="mb-2 font-semibold text-foreground">Cetak Offset</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Layanan cetak berkualitas tinggi untuk semua materi korporat Anda.
              </p>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="premium-gradient py-16 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl">
            <h2 className="mb-12 text-center font-serif text-3xl font-bold text-balance md:text-4xl">
              Mengapa Memilih Intan Mas Promosi?
            </h2>

            <div className="grid gap-6 md:grid-cols-2">
              <div className="flex gap-4">
                <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">Berdiri Sejak 2010</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Lebih dari satu dekade pengalaman melayani klien korporat di seluruh Indonesia.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">Kualitas Premium</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Kami hanya menggunakan material terbaik dan teknik produksi berkualitas.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">Harga Kompetitif</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Harga terbaik untuk pesanan bulk tanpa mengorbankan kualitas.
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <CheckCircle2 className="mt-1 h-6 w-6 flex-shrink-0 text-primary" />
                <div>
                  <h3 className="mb-2 font-semibold text-foreground">Produksi Cepat</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Proses manufaktur efisien dengan jaminan pengiriman tepat waktu.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-4">
          <Card className="border-primary/20 bg-card p-8 text-center md:p-12">
            <h2 className="mb-4 font-serif text-3xl font-bold text-balance md:text-4xl">Siap Memulai Pesanan Anda?</h2>
            <p className="mb-8 text-lg text-muted-foreground text-balance">
              Dapatkan penawaran personal untuk pesanan bulk Anda hari ini. Harga final dikonfirmasi via email.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row sm:justify-center">
              <Link href="/products">
                <Button size="lg" className="w-full bg-primary hover:bg-primary/90 sm:w-auto">
                  Lihat Produk
                </Button>
              </Link>
              <Link href="/quote">
                <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                  Minta Penawaran
                </Button>
              </Link>
            </div>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  )
}
