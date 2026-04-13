import { HelmetProvider } from 'react-helmet-async'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'
import MainPage from './pages/MainPage'

export default function App() {
  return (
    <HelmetProvider>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <MainPage />
        </main>
        <Footer />
        <WhatsAppButton />
      </div>
    </HelmetProvider>
  )
}
