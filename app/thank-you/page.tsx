import Link from "next/link"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { CheckCircle2 } from "lucide-react"

export default function ThankYouPage() {
  return (
    <div className="min-h-screen">
      <Navbar />

      <div className="container mx-auto px-4 py-16">
        <Card className="mx-auto max-w-2xl border-primary/20 bg-card p-8 text-center md:p-12">
          <div className="mb-6 inline-flex h-16 w-16 items-center justify-center rounded-full bg-primary/10">
            <CheckCircle2 className="h-8 w-8 text-primary" />
          </div>

          <h1 className="mb-4 font-serif text-3xl font-bold md:text-4xl">Order Request Sent!</h1>

          <p className="mb-8 text-lg text-muted-foreground leading-relaxed">
            Thank you for your interest in Intan Mas Promosi. Your order request has been sent via email. Our team will
            review your order and respond within 24 hours with final pricing and production timeline.
          </p>

          <div className="space-y-4 rounded-lg border border-border bg-muted p-6 text-left">
            <h2 className="font-semibold">What happens next?</h2>
            <ol className="list-inside list-decimal space-y-2 text-sm text-muted-foreground">
              <li>Our team reviews your order details and requirements</li>
              <li>We calculate the final pricing based on your specifications</li>
              <li>You receive a detailed quotation via email within 24 hours</li>
              <li>Once confirmed, production begins immediately</li>
            </ol>
          </div>

          <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Link href="/products">
              <Button size="lg" className="w-full bg-primary hover:bg-primary/90 sm:w-auto">
                Browse More Products
              </Button>
            </Link>
            <Link href="/">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-transparent">
                Back to Home
              </Button>
            </Link>
          </div>
        </Card>
      </div>

      <Footer />
    </div>
  )
}
