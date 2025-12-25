"use client"

import { useState } from "react"
import { CheckCircle, CreditCard, Shield, Lock, Zap, Gift, Star, Timer } from "lucide-react"

const features = [
  "15-day intensive UI/UX bootcamp",
  "Live interactive sessions (1.5 hours daily)",
  "2-3 portfolio-ready projects",
  "Industry expert mentorship",
  "Lifetime access to recordings",
  "Exclusive UI/UX toolkit ($297 value)",
  "1-on-1 portfolio review",
  "Design community access",
  "Certificate of completion",
  "30-day money-back guarantee",
]

const testimonials = [
  {
    name: "Sarah Chen",
    role: "Product Designer at Google",
    image: "/placeholder.svg?height=60&width=60",
    text: "This bootcamp completely transformed my design skills. I landed a $85k job within 2 months!",
  },
  {
    name: "Mike Rodriguez",
    role: "UX Designer at Spotify",
    image: "/placeholder.svg?height=60&width=60",
    text: "The hands-on approach and real projects made all the difference. Highly recommended!",
  },
  {
    name: "Emily Johnson",
    role: "Design Lead at Airbnb",
    image: "/placeholder.svg?height=60&width=60",
    text: "Best investment I made in my career. The mentorship was invaluable.",
  },
]

export default function WebinarCheckoutPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    experience: "",
  })

  const [isProcessing, setIsProcessing] = useState(false)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsProcessing(true)

    // Simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Redirect to success page or show success message
    alert("Payment successful! Check your email for access details.")
    setIsProcessing(false)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      {/* <header className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex justify-between items-center">
            <div className="text-2xl font-bold text-purple-600">UI/UX Bootcamp</div>
            <nav className="flex space-x-6">
              <a href="#" className="text-gray-700 hover:text-purple-600">Home</a>
              <a href="#" className="text-gray-700 hover:text-purple-600">Curriculum</a>
              <a href="#" className="text-gray-700 hover:text-purple-600">Pricing</a>
              <a href="#" className="text-gray-700 hover:text-purple-600">Contact</a>
            </nav>
          </div>
        </div>
      </header> */}

      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center bg-gradient-to-r from-pink-500 to-purple-500 text-white mb-4 px-6 py-2 text-lg rounded-full animate-pulse">
              <Gift className="mr-2 h-5 w-5" />
              Limited Time - 67% OFF
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">Secure Your Spot Now</h1>
            <p className="text-xl text-gray-600">
              Join the UI/UX Design Bootcamp and transform your career in just 15 days
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="sticky top-8 bg-white border-2 border-purple-200 rounded-xl shadow-xl">
                <div className="bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-t-lg p-6">
                  <h2 className="text-2xl font-bold text-center">Order Summary</h2>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div className="flex justify-between items-center">
                      <span className="font-semibold">UI/UX Design Bootcamp</span>
                      <span className="text-gray-500 line-through">$297</span>
                    </div>
                    <div className="flex justify-between items-center text-2xl font-bold text-green-600">
                      <span>Special Price</span>
                      <span>$97</span>
                    </div>
                    <div className="border-t pt-4">
                      <div className="flex justify-between items-center text-lg font-bold">
                        <span>Total</span>
                        <span className="text-purple-600">$97</span>
                      </div>
                      <div className="text-center text-green-600 font-semibold mt-2">You Save: $200 (67% OFF)</div>
                    </div>
                  </div>

                  {/* Urgency */}
                  <div className="mt-6 bg-red-50 border border-red-200 rounded-lg p-4">
                    <div className="flex items-center text-red-600 mb-2">
                      <Timer className="mr-2 h-5 w-5" />
                      <span className="font-semibold">Limited Time Offer!</span>
                    </div>
                    <div className="text-red-700 text-sm">Only 23 spots left at this price</div>
                  </div>

                  {/* What's Included */}
                  <div className="mt-6">
                    <h3 className="font-semibold text-gray-900 mb-3">What's Included:</h3>
                    <div className="space-y-2">
                      {features.slice(0, 5).map((feature, index) => (
                        <div key={index} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                      <div className="text-purple-600 font-semibold text-sm">+ 5 more exclusive bonuses</div>
                    </div>
                  </div>

                  {/* Guarantee */}
                  <div className="mt-6 bg-green-50 border border-green-200 rounded-lg p-4">
                    <div className="flex items-center text-green-700">
                      <Shield className="mr-2 h-5 w-5" />
                      <span className="font-semibold">30-Day Money-Back Guarantee</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Checkout Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-xl p-6">
                <div className="mb-6">
                  <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                    <Lock className="mr-2 h-6 w-6 text-green-600" />
                    Secure Checkout
                  </h2>
                  <p className="text-gray-600">Your information is protected with 256-bit SSL encryption</p>
                </div>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                          First Name *
                        </label>
                        <input
                          id="firstName"
                          name="firstName"
                          type="text"
                          required
                          value={formData.firstName}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                          Last Name *
                        </label>
                        <input
                          id="lastName"
                          name="lastName"
                          type="text"
                          required
                          value={formData.lastName}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address *
                        </label>
                        <input
                          id="email"
                          name="email"
                          type="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number *
                        </label>
                        <input
                          id="phone"
                          name="phone"
                          type="tel"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                      </div>
                    </div>
                    <div className="grid md:grid-cols-2 gap-4 mt-4">
                      <div>
                        <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                          Country *
                        </label>
                        <select
                          id="country"
                          name="country"
                          required
                          value={formData.country}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        >
                          <option value="">Select Country</option>
                          <option value="US">United States</option>
                          <option value="IN">India</option>
                          <option value="UK">United Kingdom</option>
                          <option value="CA">Canada</option>
                          <option value="AU">Australia</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                          Design Experience
                        </label>
                        <select
                          id="experience"
                          name="experience"
                          value={formData.experience}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        >
                          <option value="">Select Level</option>
                          <option value="beginner">Complete Beginner</option>
                          <option value="some">Some Experience</option>
                          <option value="intermediate">Intermediate</option>
                          <option value="advanced">Advanced</option>
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Payment Information */}
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Information</h3>
                    <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
                      <div className="flex items-center text-blue-700">
                        <CreditCard className="mr-2 h-5 w-5" />
                        <span className="font-semibold">Secure Payment Processing</span>
                      </div>
                      <p className="text-blue-600 text-sm mt-1">
                        We use industry-standard encryption to protect your payment information
                      </p>
                    </div>

                    <div className="space-y-4">
                      <div>
                        <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
                          Card Number *
                        </label>
                        <input
                          id="cardNumber"
                          type="text"
                          placeholder="1234 5678 9012 3456"
                          required
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                        />
                      </div>
                      <div className="grid grid-cols-3 gap-4">
                        <div className="col-span-2">
                          <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-1">
                            Expiry Date *
                          </label>
                          <input
                            id="expiry"
                            type="text"
                            placeholder="MM/YY"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          />
                        </div>
                        <div>
                          <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
                            CVV *
                          </label>
                          <input
                            id="cvv"
                            type="text"
                            placeholder="123"
                            required
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="pt-6">
                    <button
                      type="submit"
                      disabled={isProcessing}
                      className="w-full bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white py-4 px-6 rounded-lg text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-xl disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {isProcessing ? (
                        <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Processing Payment...
                        </div>
                      ) : (
                        <div className="flex items-center justify-center">
                          <Zap className="mr-2 h-6 w-6" />
                          Complete Purchase - $97
                        </div>
                      )}
                    </button>

                    <div className="text-center mt-4 text-sm text-gray-600">
                      <div className="flex items-center justify-center space-x-4">
                        <div className="flex items-center">
                          <Shield className="h-4 w-4 text-green-600 mr-1" />
                          <span>SSL Secured</span>
                        </div>
                        <div className="flex items-center">
                          <Lock className="h-4 w-4 text-green-600 mr-1" />
                          <span>256-bit Encryption</span>
                        </div>
                      </div>
                      <p className="mt-2">30-day money-back guarantee • Instant access after payment</p>
                    </div>
                  </div>
                </form>
              </div>

              {/* Testimonials */}
              <div className="mt-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-6 text-center">What Our Students Say</h3>
                <div className="grid md:grid-cols-3 gap-6">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                      <div className="flex items-center mb-4">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                        ))}
                      </div>
                      <p className="text-gray-600 mb-4 italic">"{testimonial.text}"</p>
                      <div className="flex items-center">
                        <div className="w-10 h-10 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 mr-3 flex items-center justify-center text-white font-bold">
                          {testimonial.name.charAt(0)}
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900">{testimonial.name}</div>
                          <div className="text-sm text-gray-500">{testimonial.role}</div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      {/* <footer className="bg-gray-900 text-white py-8 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">UI/UX Bootcamp</h3>
              <p className="text-gray-400">Transform your design career in just 15 days with our intensive bootcamp.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Program</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">Curriculum</a></li>
                <li><a href="#" className="hover:text-white">Schedule</a></li>
                <li><a href="#" className="hover:text-white">Instructors</a></li>
                <li><a href="#" className="hover:text-white">Projects</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Support</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">FAQ</a></li>
                <li><a href="#" className="hover:text-white">Contact</a></li>
                <li><a href="#" className="hover:text-white">Refund Policy</a></li>
                <li><a href="#" className="hover:text-white">Terms</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Connect</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white">LinkedIn</a></li>
                <li><a href="#" className="hover:text-white">Instagram</a></li>
                <li><a href="#" className="hover:text-white">Twitter</a></li>
                <li><a href="#" className="hover:text-white">Dribbble</a></li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© 2024 UI/UX Bootcamp. All rights reserved.</p>
          </div>
        </div>
      </footer> */}
    </div>
  )
}