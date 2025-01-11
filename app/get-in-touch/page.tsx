import Header from '@/components/Header'
import Footer from '@/components/Footer'
import ContactForm from '@/components/ContactForm'
import { MapPin, Phone, Mail, Clock } from 'lucide-react'

export default function GetInTouchPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-12 text-[#000066]">Get in Touch</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-[#000066]">Contact Us</h2>
              <ContactForm />
            </div>
            <div>
              <h2 className="text-2xl font-semibold mb-6 text-[#000066]">Our Information</h2>
              <div className="space-y-4">
                <div className="flex items-center">
                  <MapPin className="w-6 h-6 mr-4 text-[#FF0000]" />
                  <p>123 Real Estate Street, Cityville, State 12345</p>
                </div>
                <div className="flex items-center">
                  <Phone className="w-6 h-6 mr-4 text-[#FF0000]" />
                  <p>(123) 456-7890</p>
                </div>
                <div className="flex items-center">
                  <Mail className="w-6 h-6 mr-4 text-[#FF0000]" />
                  <p>info@arible.com</p>
                </div>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 text-[#000066]">Office Hours</h3>
                <ul className="space-y-2">
                  <li className="flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-[#FF0000]" />
                    <span>Monday - Friday: 9:00 AM - 6:00 PM</span>
                  </li>
                  <li className="flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-[#FF0000]" />
                    <span>Saturday: 10:00 AM - 4:00 PM</span>
                  </li>
                  <li className="flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-[#FF0000]" />
                    <span>Sunday: Closed</span>
                  </li>
                </ul>
              </div>
              <div className="mt-8">
                <h3 className="text-xl font-semibold mb-4 text-[#000066]">Connect With Us</h3>
                <p className="mb-4">
                  We're here to help you with all your real estate needs. Whether you're looking to buy, sell, or rent a property, our team of experienced professionals is ready to assist you.
                </p>
                <p>
                  Don't hesitate to reach out to us with any questions or to schedule a consultation. We look forward to hearing from you!
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

