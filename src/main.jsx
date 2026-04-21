import { ViteReactSSG } from 'vite-react-ssg'
import App from './App.jsx'
import './index.css'

// Eager imports — SSG must see all components synchronously
import Home from '@/pages/Home'
import About from '@/pages/About'
import Products from '@/pages/Products'
import Events from '@/pages/Events'
import Solutions from '@/pages/Solutions'
import Industries from '@/pages/Industries'
import NotFound from '@/pages/NotFound'

// Solution pages
import AiStrategy from '@/pages/solution/AiStrategy'
import GenerativeAi from '@/pages/solution/GenerativeAi'
import IntelligentAutomation from '@/pages/solution/IntelligentAutomation'
import Sap from '@/pages/solution/Sap'
import Cloud from '@/pages/solution/Cloud'
import CustomDev from '@/pages/solution/CustomDev'
import Cybersecurity from '@/pages/solution/Cybersecurity'

// Industry pages
import Healthcare from '@/pages/industry/Healthcare'
import Manufacturing from '@/pages/industry/Manufacturing'
import Bfsi from '@/pages/industry/Bfsi'
import Logistics from '@/pages/industry/Logistics'
import Retail from '@/pages/industry/Retail'

// Product pages
import LeadqAi from '@/pages/product/LeadqAi'
import RightdocAi from '@/pages/product/RightdocAi'
import ZposAi from '@/pages/product/ZposAi'
import PresencePage from '@/pages/product/Presence'
import VoiceAgent from '@/pages/product/VoiceAgent'

// Company pages
import Careers from '@/pages/Careers'
import Contact from '@/pages/Contact'
import CaseStudies from '@/pages/CaseStudies'

export const createRoot = ViteReactSSG(
  {
    routes: [
      {
        path: '/',
        element: <App />,
        children: [
          { index: true, element: <Home /> },
          { path: 'about', element: <About /> },
          { path: 'events', element: <Events /> },

          // Products
          { path: 'products', element: <Products /> },
          { path: 'products/leadq-ai', element: <LeadqAi /> },
          { path: 'products/rightdoc-ai', element: <RightdocAi /> },
          { path: 'products/zpos-ai', element: <ZposAi /> },
          { path: 'products/presence', element: <PresencePage /> },
          { path: 'products/voice-agent', element: <VoiceAgent /> },

          // Solutions
          { path: 'solutions', element: <Solutions /> },
          { path: 'solutions/ai-strategy', element: <AiStrategy /> },
          { path: 'solutions/generative-ai', element: <GenerativeAi /> },
          { path: 'solutions/intelligent-automation', element: <IntelligentAutomation /> },
          { path: 'solutions/sap', element: <Sap /> },
          { path: 'solutions/cloud', element: <Cloud /> },
          { path: 'solutions/custom-dev', element: <CustomDev /> },
          { path: 'solutions/cybersecurity', element: <Cybersecurity /> },

          // Industries
          { path: 'industries', element: <Industries /> },
          { path: 'industries/healthcare', element: <Healthcare /> },
          { path: 'industries/manufacturing', element: <Manufacturing /> },
          { path: 'industries/bfsi', element: <Bfsi /> },
          { path: 'industries/logistics', element: <Logistics /> },
          { path: 'industries/retail', element: <Retail /> },

          // Company
          { path: 'careers', element: <Careers /> },
          { path: 'contact', element: <Contact /> },
          { path: 'case-studies', element: <CaseStudies /> },

          // 404
          { path: '*', element: <NotFound /> },
        ],
      },
    ],
  },
  // Optional setup callback — no-op for this project
  () => {},
  {
    // SSG options
    formatting: 'none',
  }
)
