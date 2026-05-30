import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import About from './pages/About'
import BlogArticle from './pages/BlogArticle'
import BlogIndex from './pages/BlogIndex'
import CaseStudies from './pages/CaseStudies'
import Contact from './pages/Contact'
import DiscoveryAudit from './pages/DiscoveryAudit'
import Home from './pages/Home'
import Privacy from './pages/Privacy'
import Proof from './pages/Proof'
import Services from './pages/Services'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="discovery-audit" element={<DiscoveryAudit />} />
        <Route path="services" element={<Services />} />
        <Route path="proof" element={<Proof />} />
        <Route path="case-studies" element={<CaseStudies />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<BlogIndex />} />
        <Route path="blog/:slug" element={<BlogArticle />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Route>
    </Routes>
  )
}
