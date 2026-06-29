import { Routes, Route } from 'react-router-dom'
import { AppointmentModalProvider } from './context/AppointmentModalContext.jsx'
import Header from './components/layout/Header.jsx'
import Footer from './components/layout/Footer.jsx'
import FloatingActions from './components/layout/FloatingActions.jsx'
import AppointmentModal from './components/ui/AppointmentModal.jsx'

import Home from './pages/Home.jsx'
import ServicesList from './pages/ServicesList.jsx'
import ServiceCategory from './pages/ServiceCategory.jsx'
import ServiceItem from './pages/ServiceItem.jsx'
import SpecialistsList from './pages/SpecialistsList.jsx'
import DoctorProfile from './pages/DoctorProfile.jsx'
import DepartmentsList from './pages/DepartmentsList.jsx'
import DepartmentDetail from './pages/DepartmentDetail.jsx'
import DepartmentSub from './pages/DepartmentSub.jsx'
import BranchesList from './pages/BranchesList.jsx'
import BranchDetail from './pages/BranchDetail.jsx'
import Analizy from './pages/Analizy.jsx'
import AboutClinic from './pages/AboutClinic.jsx'
import Contacts from './pages/Contacts.jsx'
import Feedback from './pages/Feedback.jsx'
import NewsList from './pages/NewsList.jsx'
import NewsArticle from './pages/NewsArticle.jsx'
import PromosList from './pages/PromosList.jsx'
import PromoDetail from './pages/PromoDetail.jsx'
import Gobmp from './pages/Gobmp.jsx'
import Partners from './pages/Partners.jsx'
import Charity from './pages/Charity.jsx'
import Corporate from './pages/Corporate.jsx'
import Career from './pages/Career.jsx'
import PrivacyPolicy from './pages/PrivacyPolicy.jsx'
import NotFound from './pages/NotFound.jsx'

export default function App() {
  return (
    <AppointmentModalProvider>
      <div className="flex min-h-screen flex-col">
        <Header />
        <main className="flex-1">
          <Routes>
            <Route path="/" element={<Home />} />

            <Route path="/uslugi" element={<ServicesList />} />
            <Route path="/uslugi/:slug" element={<ServiceCategory />} />
            <Route path="/uslugi/:slug/:itemSlug" element={<ServiceItem />} />

            <Route path="/specialisty" element={<SpecialistsList />} />
            <Route path="/specialisty/:slug" element={<DoctorProfile />} />

            <Route path="/filialy" element={<BranchesList />} />
            <Route path="/filialy/:slug" element={<BranchDetail />} />

            <Route path="/otdeleniya" element={<DepartmentsList />} />
            <Route path="/otdeleniya/:slug" element={<DepartmentDetail />} />
            <Route path="/otdeleniya/:slug/:sub" element={<DepartmentSub />} />
            {/* Алиасы для нового раздела «Направления» */}
            <Route path="/napravleniya" element={<DepartmentsList />} />
            <Route path="/napravleniya/:slug" element={<DepartmentDetail />} />
            <Route path="/napravleniya/:slug/:sub" element={<DepartmentSub />} />

            <Route path="/analizy" element={<Analizy />} />
            <Route path="/o-klinike" element={<AboutClinic />} />
            <Route path="/kontakty" element={<Contacts />} />
            <Route path="/zhaloby-i-predlozheniya" element={<Feedback />} />

            <Route path="/infocentr" element={<NewsList />} />
            <Route path="/infocentr/:slug" element={<NewsArticle />} />

            <Route path="/akcii-i-specpredlozheniya" element={<PromosList />} />
            <Route path="/akcii-i-specpredlozheniya/:slug" element={<PromoDetail />} />
            <Route path="/akcii" element={<PromosList />} />

            <Route path="/lechenie-gombp-i-osms" element={<Gobmp />} />
            <Route path="/partnery" element={<Partners />} />
            <Route path="/blagotvoritelnost" element={<Charity />} />
            <Route path="/korporativnyj-otdel" element={<Corporate />} />
            <Route path="/karera" element={<Career />} />
            <Route path="/politika-konfidencialnosti" element={<PrivacyPolicy />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        <Footer />
        <FloatingActions />
        <AppointmentModal />
      </div>
    </AppointmentModalProvider>
  )
}
