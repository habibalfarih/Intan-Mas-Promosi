import Image from "next/image"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { CheckCircle2, Award, Users, Clock } from "lucide-react"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="mb-16 text-center">
          <div className="mb-8 inline-flex">
            <Image src="/logo.png" alt="IMP" width={120} height={120} />
          </div>
          <h1 className="mb-4 font-serif text-4xl font-bold text-balance md:text-5xl">Tentang Intan Mas Promosi</h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground text-balance">
            Mitra terpercaya Anda untuk pemesanan garmen bulk premium dan produk promosi sejak 2010
          </p>
        </div>

        {/* Stats */}
        <div className="mb-16 grid gap-6 md:grid-cols-4">
          <Card className="border-border bg-card p-6 text-center">
            <Award className="mx-auto mb-3 h-8 w-8 text-primary" />
            <div className="text-3xl font-bold">14+</div>
            <div className="text-sm text-muted-foreground">Tahun Pengalaman</div>
          </Card>
          <Card className="border-border bg-card p-6 text-center">
            <Users className="mx-auto mb-3 h-8 w-8 text-primary" />
            <div className="text-3xl font-bold">500+</div>
            <div className="text-sm text-muted-foreground">Klien Korporat</div>
          </Card>
          <Card className="border-border bg-card p-6 text-center">
            <CheckCircle2 className="mx-auto mb-3 h-8 w-8 text-primary" />
            <div className="text-3xl font-bold">10K+</div>
            <div className="text-sm text-muted-foreground">Proyek Selesai</div>
          </Card>
          <Card className="border-border bg-card p-6 text-center">
            <Clock className="mx-auto mb-3 h-8 w-8 text-primary" />
            <div className="text-3xl font-bold">24J</div>
            <div className="text-sm text-muted-foreground">Waktu Respons</div>
          </Card>
        </div>

        {/* Company Story */}
        <div className="mb-16">
          <Card className="border-border bg-card p-8 md:p-12">
            <h2 className="mb-6 font-serif text-3xl font-bold">Cerita Kami</h2>
            <div className="space-y-4 text-muted-foreground leading-relaxed">
              <p>
                Didirikan pada tahun 2010, Intan Mas Promosi (IMP) telah berkembang dari bengkel garmen kecil menjadi
                salah satu mitra B2B paling terpercaya di Indonesia untuk solusi branding korporat. Kami mengkhususkan
                diri dalam pesanan bulk untuk garmen, produk promosi, dan materi iklan.
              </p>
              <p>
                Komitmen kami terhadap kualitas, harga kompetitif, dan pengiriman tepat waktu telah membuat kami
                mendapatkan kepercayaan dari lebih dari 500 klien korporat di seluruh Indonesia. Dari perusahaan
                multinasional hingga startup yang berkembang, kami telah membantu bisnis dari semua ukuran mewujudkan
                visi branding mereka.
              </p>
              <p>
                Dengan fasilitas produksi canggih dan tim profesional berpengalaman, kami memastikan setiap pesanan
                memenuhi standar kualitas dan keahlian tertinggi.
              </p>
            </div>
          </Card>
        </div>

        {/* Values */}
        <div className="mb-16">
          <h2 className="mb-8 text-center font-serif text-3xl font-bold">Nilai-Nilai Kami</h2>
          <div className="grid gap-6 md:grid-cols-3">
            <Card className="border-border bg-card p-6">
              <CheckCircle2 className="mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-2 font-semibold">Kualitas Utama</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Kami tidak pernah berkompromi dengan kualitas. Setiap produk dibuat menggunakan bahan premium dan
                menjalani kontrol kualitas yang ketat.
              </p>
            </Card>
            <Card className="border-border bg-card p-6">
              <CheckCircle2 className="mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-2 font-semibold">Fokus pada Pelanggan</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Kesuksesan Anda adalah kesuksesan kami. Kami bekerja sama dengan klien untuk memahami kebutuhan mereka
                dan memberikan solusi yang melampaui ekspektasi.
              </p>
            </Card>
            <Card className="border-border bg-card p-6">
              <CheckCircle2 className="mb-4 h-8 w-8 text-primary" />
              <h3 className="mb-2 font-semibold">Terpercaya & Tepat Waktu</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Kami memahami pentingnya deadline. Proses produksi kami yang efisien memastikan pengiriman tepat waktu,
                setiap saat.
              </p>
            </Card>
          </div>
        </div>

        {/* CTA */}
        <Card className="border-primary/20 bg-card p-8 text-center md:p-12">
          <h2 className="mb-4 font-serif text-3xl font-bold">Siap Bekerja Sama?</h2>
          <p className="mb-8 text-lg text-muted-foreground">
            Mari diskusikan kebutuhan pesanan bulk Anda dan wujudkan visi branding Anda
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

      <Footer />
    </div>
  )
}
