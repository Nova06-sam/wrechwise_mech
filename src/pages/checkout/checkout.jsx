// import { useState } from "react"
// import { CheckCircle, CreditCard, Shield, Lock, Zap, Gift, Timer, ArrowLeft } from "lucide-react"
// import { Link } from "react-router-dom"

// const courses = [
//   {
//     type: "Full Program",
//     price: "₹90,000",
//     originalPrice: "₹1,20,000",
//     description: "Complete 4-phase program with all capstone projects",
//     features: ["All 4 Phases", "4 Capstone Projects", "Career Services", "Lifetime Access", "Future Tech Included", "AI/ML Integration Included"],
//     popular: true,
//   },
//   {
//     type: "Individual Phase",
//     price: "₹25,000",
//     originalPrice: "₹30,000",
//     description: `You can choose any single phase based on your needs`,
//     features: ["1 Phase Access", "Phase Capstone", "Community Access", "30-day Support"],
//     popular: false,
//   },
// ];

// export default function CheckoutPage() {
//   const [selectedCourse, setSelectedCourse] = useState(courses[0])
//   const [formData, setFormData] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     phone: "",
//     country: "",
//     experience: "",
//   })
//   const [isProcessing, setIsProcessing] = useState(false)

//   const handleInputChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     })
//   }

//   const handleSubmit = async (e) => {
//     e.preventDefault()
//     setIsProcessing(true)

//     // Simulate payment processing
//     await new Promise((resolve) => setTimeout(resolve, 2000))

//     alert("Payment successful! Check your email for access details.")
//     setIsProcessing(false)
//   }

//   return (
//     <div className="min-h-screen bg-gray-50">
//       <div className="py-12">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//           {/* Back Button */}
//           <div className="mb-8">
//             <Link
//               to="/domains/cse"
//               className="inline-flex items-center text-emerald-600 hover:text-emerald-700 transition-colors"
//             >
//               <ArrowLeft className="mr-2 h-4 w-4" />
//               Back to Programs
//             </Link>
//           </div>


//           <div className="grid lg:grid-cols-3 gap-8">
//             {/* Course Selection */}
//             <div className="lg:col-span-2">
//               {/* Checkout Form */}
//               <div className="bg-white rounded-xl shadow-xl p-6">
//                 <div className="mb-6">
//                   <h2 className="text-2xl font-bold text-gray-900 flex items-center">
//                     <Lock className="mr-2 h-6 w-6 text-green-600" />
//                     Secure Checkout
//                   </h2>
//                   <p className="text-gray-600">Your information is protected with 256-bit SSL encryption</p>
//                 </div>
//                 <form onSubmit={handleSubmit} className="space-y-6">
//                   {/* Personal Information */}
//                   <div>
//                     <h3 className="text-lg font-semibold text-gray-900 mb-4">Personal Information</h3>
//                     <div className="grid md:grid-cols-2 gap-4">
//                       <div>
//                         <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
//                           First Name *
//                         </label>
//                         <input
//                           id="firstName"
//                           name="firstName"
//                           type="text"
//                           required
//                           value={formData.firstName}
//                           onChange={handleInputChange}
//                           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
//                         />
//                       </div>
//                       <div>
//                         <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
//                           Last Name *
//                         </label>
//                         <input
//                           id="lastName"
//                           name="lastName"
//                           type="text"
//                           required
//                           value={formData.lastName}
//                           onChange={handleInputChange}
//                           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
//                         />
//                       </div>
//                     </div>
//                     <div className="grid md:grid-cols-2 gap-4 mt-4">
//                       <div>
//                         <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
//                           Email Address *
//                         </label>
//                         <input
//                           id="email"
//                           name="email"
//                           type="email"
//                           required
//                           value={formData.email}
//                           onChange={handleInputChange}
//                           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
//                         />
//                       </div>
//                       <div>
//                         <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
//                           Phone Number *
//                         </label>
//                         <input
//                           id="phone"
//                           name="phone"
//                           type="tel"
//                           required
//                           value={formData.phone}
//                           onChange={handleInputChange}
//                           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
//                         />
//                       </div>
//                     </div>
//                     <div className="grid md:grid-cols-2 gap-4 mt-4">
//                       <div>
//                         <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
//                           Country *
//                         </label>
//                         <select
//                           id="country"
//                           name="country"
//                           required
//                           value={formData.country}
//                           onChange={handleInputChange}
//                           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
//                         >
//                           <option value="">Select Country</option>
//                           <option value="IN">India</option>
//                           <option value="US">United States</option>
//                           <option value="UK">United Kingdom</option>
//                           <option value="CA">Canada</option>
//                           <option value="AU">Australia</option>
//                           <option value="other">Other</option>
//                         </select>
//                       </div>
//                       <div>
//                         <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
//                           Programming Experience
//                         </label>
//                         <select
//                           id="experience"
//                           name="experience"
//                           value={formData.experience}
//                           onChange={handleInputChange}
//                           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
//                         >
//                           <option value="">Select Level</option>
//                           <option value="beginner">Complete Beginner</option>
//                           <option value="some">Some Experience</option>
//                           <option value="intermediate">Intermediate</option>
//                           <option value="advanced">Advanced</option>
//                         </select>
//                       </div>
//                     </div>
//                   </div>

//                   {/* Payment Information */}
//                   {/* <div>
//                     <h3 className="text-lg font-semibold text-gray-900 mb-4">Payment Information</h3>
//                     <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-4">
//                       <div className="flex items-center text-blue-700">
//                         <CreditCard className="mr-2 h-5 w-5" />
//                         <span className="font-semibold">Secure Payment Processing</span>
//                       </div>
//                       <p className="text-blue-600 text-sm mt-1">
//                         We use industry-standard encryption to protect your payment information
//                       </p>
//                     </div>

//                     <div className="space-y-4">
//                       <div>
//                         <label htmlFor="cardNumber" className="block text-sm font-medium text-gray-700 mb-1">
//                           Card Number *
//                         </label>
//                         <input
//                           id="cardNumber"
//                           type="text"
//                           placeholder="1234 5678 9012 3456"
//                           required
//                           className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
//                         />
//                       </div>
//                       <div className="grid grid-cols-3 gap-4">
//                         <div className="col-span-2">
//                           <label htmlFor="expiry" className="block text-sm font-medium text-gray-700 mb-1">
//                             Expiry Date *
//                           </label>
//                           <input
//                             id="expiry"
//                             type="text"
//                             placeholder="MM/YY"
//                             required
//                             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
//                           />
//                         </div>
//                         <div>
//                           <label htmlFor="cvv" className="block text-sm font-medium text-gray-700 mb-1">
//                             CVV *
//                           </label>
//                           <input
//                             id="cvv"
//                             type="text"
//                             placeholder="123"
//                             required
//                             className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
//                           />
//                         </div>
//                       </div>
//                     </div>
//                   </div> */}

//                   {/* Submit Button */}
//                   <div className="pt-6">
//                     <button
//                       type="submit"
//                       disabled={isProcessing}
//                       className="w-full bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white py-4 px-6 rounded-lg text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-xl disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
//                     >
//                       {isProcessing ? (
//                         <div className="flex items-center justify-center">
//                           <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
//                           Processing Payment...
//                         </div>
//                       ) : (
//                         <div className="flex items-center justify-center">
//                           <Zap className="mr-2 h-6 w-6" />
//                           Complete Purchase - {courses[0].price.toLocaleString()}
//                         </div>
//                       )}
//                     </button>
//                   </div>
//                 </form>
//               </div>
//             </div>

//             {/* Order Summary */}
//             <div className="lg:col-span-1">
//               <div className=" bg-white border-2 border-emerald-200 rounded-xl shadow-xl">
//                 <div className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white rounded-t-lg p-6">
//                   <h2 className="text-2xl font-bold text-center">Order Summary</h2>
//                 </div>
//                 <div className="p-6">
//                   <div className="space-y-4">
//                     <div>
//                       <h3 className="font-semibold text-gray-900 mb-2">{courses[0].type}</h3>
//                     </div>

//                     <div className="space-y-2">
//                       <div className="flex justify-between items-center">
//                         <span className="text-gray-700">Original Price</span>
//                         <span className="text-gray-500 line-through">
//                           {courses[0].originalPrice.toLocaleString()}
//                         </span>
//                       </div>
//                       <div className="flex justify-between items-center text-2xl font-bold text-emerald-600">
//                         <span>Special Price</span>
//                         <span>{courses[0].price.toLocaleString()}</span>
//                       </div>
                    
//                     </div>
//                   </div>

//                   {/* What's Included */}
//                   <div className="mt-6">
//                     <h3 className="font-semibold text-gray-900 mb-3">What's Included:</h3>
//                     <div className="space-y-2">
//                       {courses[0].features.map((feature, index) => (
//                         <div key={index} className="flex items-center text-sm">
//                           <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
//                           <span>{feature}</span>
//                         </div>
//                       ))}
//                     </div>
//                   </div>
                 
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }


import { useState, useEffect } from "react"
import { CheckCircle, CreditCard, Shield, Lock, Zap, Gift, Timer, ArrowLeft } from "lucide-react"
import { Link, useLocation } from "react-router-dom"

const defaultCourses = [
  {
    type: "Full Program",
    price: "₹90,000",
    originalPrice: "₹1,20,000",
    description: "Complete 4-phase program with all capstone projects",
    features: ["All 4 Phases", "4 Capstone Projects", "Career Services", "Lifetime Access", "Future Tech Included", "AI/ML Integration Included"],
    popular: true,
  },
  {
    type: "Individual Phase",
    price: "₹25,000",
    originalPrice: "₹30,000",
    description: `You can choose any single phase based on your needs`,
    features: ["1 Phase Access", "Phase Capstone", "Community Access", "30-day Support"],
    popular: false,
  },
];

export default function CheckoutPage() {
  const location = useLocation()
  const [selectedCourse, setSelectedCourse] = useState(defaultCourses[0])
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    country: "",
    experience: "",
  })
  const [isProcessing, setIsProcessing] = useState(false)

  // Get the selected program from location state
  useEffect(() => {
    if (location.state?.selectedProgram) {
      setSelectedCourse(location.state.selectedProgram)
    }
  }, [location.state])

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

    alert("Payment successful! Check your email for access details.")
    setIsProcessing(false)
  }

  // Helper function to format price
  const formatPrice = (price) => {
    if (typeof price === 'string') {
      return price
    }
    return price.toLocaleString?.() || price
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Back Button */}
          <div className="mb-8">
            <Link
              to="/programs/full-stack"
              className="inline-flex items-center text-emerald-600 hover:text-emerald-700 transition-colors"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Program Details
            </Link>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
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
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
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
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
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
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
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
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
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
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
                        >
                          <option value="">Select Country</option>
                          <option value="IN">India</option>
                          <option value="US">United States</option>
                          <option value="UK">United Kingdom</option>
                          <option value="CA">Canada</option>
                          <option value="AU">Australia</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="experience" className="block text-sm font-medium text-gray-700 mb-1">
                          Programming Experience
                        </label>
                        <select
                          id="experience"
                          name="experience"
                          value={formData.experience}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-transparent"
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

                  {/* Submit Button */}
                  <div className="pt-6">
                    <button
                      type="submit"
                      disabled={isProcessing}
                      className="w-full bg-gradient-to-r from-emerald-600 to-cyan-600 hover:from-emerald-700 hover:to-cyan-700 text-white py-4 px-6 rounded-lg text-lg font-semibold transform hover:scale-105 transition-all duration-300 shadow-xl disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
                    >
                      {isProcessing ? (
                        <div className="flex items-center justify-center">
                          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                          Processing Payment...
                        </div>
                      ) : (
                        <div className="flex items-center justify-center">
                          <Zap className="mr-2 h-6 w-6" />
                          Complete Purchase - {formatPrice(selectedCourse.price)}
                        </div>
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white border-2 border-emerald-200 rounded-xl shadow-xl">
                <div className="bg-gradient-to-r from-emerald-600 to-cyan-600 text-white rounded-t-lg p-6">
                  <h2 className="text-2xl font-bold text-center">Order Summary</h2>
                </div>
                <div className="p-6">
                  <div className="space-y-4">
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-2">{selectedCourse.type}</h3>
                      <p className="text-gray-600 text-sm">{selectedCourse.description}</p>
                    </div>

                    {/* Most Popular Badge */}
                    {selectedCourse.popular && (
                      <div className="bg-emerald-100 text-emerald-800 px-3 py-1 rounded-full text-sm font-medium inline-block">
                        Most Popular
                      </div>
                    )}

                    <div className="space-y-2 pt-2">
                      <div className="flex justify-between items-center">
                        <span className="text-gray-700">Original Price</span>
                        <span className="text-gray-500 line-through">
                          {formatPrice(selectedCourse.originalPrice)}
                        </span>
                      </div>
                      <div className="flex justify-between items-center text-2xl font-bold text-emerald-600">
                        <span>Special Price</span>
                        <span>{formatPrice(selectedCourse.price)}</span>
                      </div>
                    </div>
                  </div>

                  {/* What's Included */}
                  <div className="mt-6">
                    <h3 className="font-semibold text-gray-900 mb-3">What's Included:</h3>
                    <div className="space-y-2">
                      {selectedCourse.features.map((feature, index) => (
                        <div key={index} className="flex items-center text-sm">
                          <CheckCircle className="h-4 w-4 text-green-500 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Program Highlights */}
                  <div className="mt-6 pt-6 border-t border-gray-200">
                    <h3 className="font-semibold text-gray-900 mb-3">Program Highlights:</h3>
                    <div className="space-y-3">
                      <div className="flex items-center text-sm">
                        <div className="h-2 w-2 bg-emerald-500 rounded-full mr-2"></div>
                        <span>4 Phases of Mastery</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <div className="h-2 w-2 bg-emerald-500 rounded-full mr-2"></div>
                        <span>Live Online + Mentorship</span>
                      </div>
                      <div className="flex items-center text-sm">
                        <div className="h-2 w-2 bg-emerald-500 rounded-full mr-2"></div>
                        <span>Career Services Included</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

