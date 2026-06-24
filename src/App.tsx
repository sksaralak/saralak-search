import { Navigate, Route, Routes } from 'react-router-dom'
import Layout from './components/Layout'
import About from './pages/About'
import BlogArticle from './pages/BlogArticle'
import BlogIndex from './pages/BlogIndex'
import CaseStudies from './pages/CaseStudies'
import Contact from './pages/Contact'
import DiscoveryAudit from './pages/DiscoveryAudit'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Privacy from './pages/Privacy'
import ServiceContentMarketing from './pages/ServiceContentMarketing'
import ServiceGEO from './pages/ServiceGEO'
import ServiceGoogleMaps from './pages/ServiceGoogleMaps'
import ServiceLocalSEO from './pages/ServiceLocalSEO'
import ServiceSEO from './pages/ServiceSEO'
import Services from './pages/Services'

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="discovery-audit" element={<DiscoveryAudit />} />
        <Route path="services" element={<Services />} />
        <Route path="services/seo" element={<ServiceSEO />} />
        <Route path="services/local-seo" element={<ServiceLocalSEO />} />
        <Route path="services/google-maps" element={<ServiceGoogleMaps />} />
        <Route path="services/geo" element={<ServiceGEO />} />
        <Route path="services/content-marketing" element={<ServiceContentMarketing />} />
        <Route path="proof" element={<Navigate to="/case-studies" replace />} />
        <Route path="case-studies" element={<CaseStudies />} />
        <Route path="about" element={<About />} />
        <Route path="blog" element={<BlogIndex />} />
        <Route path="blog/:slug" element={<BlogArticle />} />
        <Route path="contact" element={<Contact />} />
        <Route path="privacy" element={<Privacy />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  )
}
