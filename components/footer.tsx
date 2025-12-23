import Link from "next/link"
import Image from "next/image"
import { Mail, Phone, MapPin } from "lucide-react"

export function Footer() {
  return (
    <footer className="border-t border-border bg-card">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* Brand */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <Image src="/logo.png" alt="Intan Mas Promosi" width={48} height={48} />
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Mitra terpercaya untuk pemesanan garmen bulk dan produk promosi sejak 2010.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Tautan Cepat</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>
                <Link href="/" className="transition-colors hover:text-foreground">
                  Beranda
                </Link>
              </li>
              <li>
                <Link href="/products" className="transition-colors hover:text-foreground">
                  Produk
                </Link>
              </li>
              <li>
                <Link href="/about" className="transition-colors hover:text-foreground">
                  Tentang Kami
                </Link>
              </li>
              <li>
                <Link href="/quote" className="transition-colors hover:text-foreground">
                  Minta Penawaran
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Layanan</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li>Produksi Garmen</li>
              <li>Produk Promosi</li>
              <li>Materi Iklan</li>
              <li>Cetak Offset</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="mb-4 font-semibold text-foreground">Kontak</h3>
            <ul className="space-y-3 text-sm text-muted-foreground">
              <li className="flex items-start gap-2">
                <Mail className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <span>info@intanmaspromosi.com</span>
              </li>
              <li className="flex items-start gap-2">
                <Phone className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <span>+62 21 1234 5678</span>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="mt-0.5 h-4 w-4 flex-shrink-0" />
                <span>Jakarta, Indonesia</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-border pt-8 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Intan Mas Promosi. Hak cipta dilindungi undang-undang.</p>
        </div>
      </div>
    </footer>
  )
}
