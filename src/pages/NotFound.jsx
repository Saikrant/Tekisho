import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Home } from 'lucide-react'
import SEOHead from '@/components/SEOHead'

export default function NotFound() {
  return (
    <>
      <SEOHead
        page="home"
        customTitle="Page Not Found | Tekisho Infotech"
        customDesc="The page you're looking for doesn't exist. Return to Tekisho's homepage."
      />
      <main id="main-content" className="min-h-screen bg-[var(--bg-primary)] flex items-center justify-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-md"
        >
          <div className="text-8xl font-bold text-[#1B4FD8] mb-4">404</div>
          <h1 className="text-2xl font-bold text-[var(--text-primary)] mb-4 font-display">
            Page Not Found
          </h1>
          <p className="text-[var(--text-muted)] mb-8">
            The page you're looking for doesn't exist or has been moved. Let's get you back on track.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              to="/"
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#1B4FD8] hover:bg-[#1a44c0] rounded-full font-semibold text-white transition-colors"
            >
              <Home size={16} /> Back to Home
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 border border-[var(--brand-border)] rounded-full font-semibold text-[var(--text-primary)] hover:border-[#1B4FD8] transition-colors"
            >
              Contact Us <ArrowRight size={16} />
            </Link>
          </div>
        </motion.div>
      </main>
    </>
  )
}
