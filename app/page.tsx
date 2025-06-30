import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, ExternalLink } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 via-white to-gray-50 flex items-center justify-center p-4">
      <Card className="w-full max-w-2xl shadow-2xl border-0">
        <CardContent className="p-12 text-center space-y-8">
          {/* Logo */}
          <div className="flex justify-center mb-8">
            <Image
              src="/images/mclean-logo.png"
              alt="McLean Million Meters Logo"
              width={200}
              height={200}
              className="w-48 h-48 object-contain"
              priority
            />
          </div>

          {/* Main Heading */}
          <div className="space-y-4">
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              We're Moving to a<span className="block text-red-600">New & Improved Website!</span>
            </h1>

            <div className="w-24 h-1 bg-red-600 mx-auto rounded-full"></div>
          </div>

          {/* Description */}
          <div className="space-y-4">
            <p className="text-xl text-gray-700 leading-relaxed">
              McLean Million Meters is getting a fresh new look with enhanced features and improved user experience.
            </p>
          </div>

          {/* CTA Button */}
          <div className="pt-6">
            <Button
              asChild
              size="lg"
              className="bg-red-600 hover:bg-red-700 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
            >
              <Link href="#" className="inline-flex items-center space-x-2">
                <span>Visit Our New Website</span>
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
          </div>

          {/* Additional Info */}
          <div className="pt-8 border-t border-gray-200">
            <p className="text-sm text-gray-500 flex items-center justify-center space-x-1">
              <ExternalLink className="w-4 h-4" />
              <span>You'll be redirected to our new domain</span>
            </p>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
