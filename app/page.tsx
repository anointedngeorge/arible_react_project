import Header from '@/components/Header'
import HeroSlider from '@/components/HeroSlider'
import AvailableProperties from '@/components/AvailableProperties'
import RealtorsSlider from '@/components/RealtorsSlider'
import Testimonials from '@/components/Testimonials'
import OurServices from '@/components/OurServices'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <main>
        <HeroSlider />
        <AvailableProperties />
        <RealtorsSlider />
        <Testimonials />
        <OurServices />
      </main>
      <Footer />
    </div>
  )
}

