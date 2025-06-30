import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Check,
  Zap,
  Shield,
  Users,
  BarChart3,
  Star,
  Twitter,
  Linkedin,
  Github,
  Mail,
  ArrowRight,
  ExternalLink,
} from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <header className="border-b bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60 sticky top-0 z-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                <Zap className="w-5 h-5 text-white" />
              </div>
              <span className="text-xl font-bold text-gray-900">StreamLine</span>
            </div>

            <nav className="hidden md:flex items-center space-x-8">
              <Link href="#features" className="text-gray-600 hover:text-gray-900 transition-colors">
                Features
              </Link>
              <Link href="#pricing" className="text-gray-600 hover:text-gray-900 transition-colors">
                Pricing
              </Link>
              <Link href="#testimonials" className="text-gray-600 hover:text-gray-900 transition-colors">
                About
              </Link>
              <Link href="#contact" className="text-gray-600 hover:text-gray-900 transition-colors">
                Contact
              </Link>
            </nav>

            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
              Start Free Trial
            </Button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 lg:py-32 bg-gradient-to-br from-blue-50 via-white to-purple-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <Badge variant="secondary" className="bg-blue-100 text-blue-800 hover:bg-blue-100">
                  🚀 New: AI-Powered Automation
                </Badge>
                <h1 className="text-4xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Streamline Your
                  <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                    {" "}
                    Workflow
                  </span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Boost productivity by 300% with our AI-powered workflow automation platform. Connect your tools,
                  automate repetitive tasks, and focus on what matters most.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
                >
                  Start Free Trial
                </Button>
                <Button size="lg" variant="outline">
                  Watch Demo
                </Button>
              </div>

              <div className="flex items-center space-x-6 text-sm text-gray-600">
                <div className="flex items-center space-x-1">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>14-day free trial</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Check className="w-4 h-4 text-green-500" />
                  <span>Cancel anytime</span>
                </div>
              </div>
            </div>

            <div className="relative">
              <Image
                src="/placeholder.svg?height=600&width=800"
                alt="StreamLine Dashboard"
                width={800}
                height={600}
                className="rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="bg-purple-100 text-purple-800">
              Features
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">
              Everything you need to streamline your workflow
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Powerful features designed to help teams collaborate better, automate processes, and achieve more.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Zap className="w-6 h-6 text-blue-600" />
                </div>
                <CardTitle className="text-xl">AI Automation</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Intelligent automation that learns from your patterns and optimizes workflows automatically.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Shield className="w-6 h-6 text-green-600" />
                </div>
                <CardTitle className="text-xl">Enterprise Security</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Bank-level security with end-to-end encryption, SSO, and compliance with major standards.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <Users className="w-6 h-6 text-purple-600" />
                </div>
                <CardTitle className="text-xl">Team Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Real-time collaboration tools that keep your team synchronized and productive.
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardHeader className="text-center pb-4">
                <div className="w-12 h-12 bg-orange-100 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <BarChart3 className="w-6 h-6 text-orange-600" />
                </div>
                <CardTitle className="text-xl">Advanced Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Detailed insights and reporting to track performance and identify optimization opportunities.
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="bg-green-100 text-green-800">
              Testimonials
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Loved by teams worldwide</h2>
            <p className="text-xl text-gray-600">See what our customers have to say about StreamLine</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-6">
                  "StreamLine has completely transformed how our team works. We've reduced manual tasks by 80% and our
                  productivity has never been higher."
                </blockquote>
                <div className="flex items-center space-x-3">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Sarah Johnson"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">Sarah Johnson</div>
                    <div className="text-sm text-gray-600">CEO, TechCorp</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-6">
                  "The AI automation features are incredible. StreamLine anticipates our needs and handles routine tasks
                  seamlessly."
                </blockquote>
                <div className="flex items-center space-x-3">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Michael Chen"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">Michael Chen</div>
                    <div className="text-sm text-gray-600">CTO, InnovateLab</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="pt-6">
                <div className="flex mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-gray-700 mb-6">
                  "Implementation was smooth and the support team is outstanding. We saw results within the first week
                  of using StreamLine."
                </blockquote>
                <div className="flex items-center space-x-3">
                  <Image
                    src="/placeholder.svg?height=40&width=40"
                    alt="Emily Rodriguez"
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                  <div>
                    <div className="font-semibold text-gray-900">Emily Rodriguez</div>
                    <div className="text-sm text-gray-600">Operations Manager, GrowthCo</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4 mb-16">
            <Badge variant="secondary" className="bg-blue-100 text-blue-800">
              Pricing
            </Badge>
            <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Simple, transparent pricing</h2>
            <p className="text-xl text-gray-600">Choose the plan that's right for your team</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <Card className="border-2 border-gray-200 hover:border-blue-300 transition-colors">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl">Starter</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$29</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <CardDescription>Perfect for small teams getting started</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Up to 5 team members</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Basic automation workflows</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Standard integrations</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Email support</span>
                  </li>
                </ul>
                <Button className="w-full mt-8 bg-transparent" variant="outline">
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-blue-500 relative hover:border-blue-600 transition-colors">
              <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-blue-500">Most Popular</Badge>
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl">Pro</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">$79</span>
                  <span className="text-gray-600">/month</span>
                </div>
                <CardDescription>Best for growing teams and businesses</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Up to 25 team members</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Advanced AI automation</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Premium integrations</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Priority support</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Advanced analytics</span>
                  </li>
                </ul>
                <Button className="w-full mt-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                  Start Free Trial
                </Button>
              </CardContent>
            </Card>

            <Card className="border-2 border-gray-200 hover:border-purple-300 transition-colors">
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl">Enterprise</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">Custom</span>
                </div>
                <CardDescription>For large organizations with custom needs</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <ul className="space-y-3">
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Unlimited team members</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Custom AI workflows</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Custom integrations</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>Dedicated support</span>
                  </li>
                  <li className="flex items-center space-x-3">
                    <Check className="w-5 h-5 text-green-500" />
                    <span>SLA guarantee</span>
                  </li>
                </ul>
                <Button className="w-full mt-8 bg-transparent" variant="outline">
                  Contact Sales
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-purple-600">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="max-w-3xl mx-auto space-y-8">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">Ready to streamline your workflow?</h2>
            <p className="text-xl text-blue-100">
              Join thousands of teams who have already transformed their productivity with StreamLine. Start your free
              trial today and see the difference in just 14 days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
                Start Free Trial
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Schedule Demo
              </Button>
            </div>
            <div className="flex items-center justify-center space-x-6 text-sm text-blue-100">
              <div className="flex items-center space-x-1">
                <Check className="w-4 h-4" />
                <span>14-day free trial</span>
              </div>
              <div className="flex items-center space-x-1">
                <Check className="w-4 h-4" />
                <span>No setup fees</span>
              </div>
              <div className="flex items-center space-x-1">
                <Check className="w-4 h-4" />
                <span>Cancel anytime</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* McLean Landing Page Section */}
      <section className="py-20 bg-gradient-to-br from-red-50 via-white to-gray-50 flex items-center justify-center p-4">
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

              <p className="text-lg text-gray-600">
                Visit our new website to stay updated on all our rowing programs, events, and community initiatives.
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

            {/* Footer */}
            <div className="pt-4">
              <p className="text-xs text-gray-400">
                © {new Date().getFullYear()} McLean Million Meters. All rights reserved.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      {/* Footer */}
      <footer id="contact" className="bg-gray-900 text-white py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="space-y-4">
              <div className="flex items-center space-x-2">
                <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg flex items-center justify-center">
                  <Zap className="w-5 h-5 text-white" />
                </div>
                <span className="text-xl font-bold">StreamLine</span>
              </div>
              <p className="text-gray-400">
                Streamline your workflow with AI-powered automation and boost your team's productivity.
              </p>
              <div className="flex space-x-4">
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Twitter className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Linkedin className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Github className="w-5 h-5" />
                </Link>
                <Link href="#" className="text-gray-400 hover:text-white transition-colors">
                  <Mail className="w-5 h-5" />
                </Link>
              </div>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Product</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Features
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Integrations
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    API
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Security
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    About
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Blog
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Careers
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Press
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-4">Support</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Privacy
                  </Link>
                </li>
                <li>
                  <Link href="#" className="hover:text-white transition-colors">
                    Terms
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; {new Date().getFullYear()} StreamLine. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
