import { useState, lazy, Suspense } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import ScrollToTop from './components/ui/scroll-top';
import { WhatsAppChat } from './components/ui/whatsup-chat';
import GoogleAnalytics from './components/GoogleAnalytics/GoogleAnalytics';
// Import critical components directly
import { Header } from './components/header/header';
import { Footer } from './components/footer/footer';
// Import Home directly since it's likely the most visited page
import { Home } from './pages/home';
import MechFinal from './pages/MechWebinar/MechCheckout/MechFinal';

// Lazy load other pages
const InstitutePage = lazy(() => import('./pages/institute'));
const BooksPage = lazy(() => import('./pages/books'));
const SitPage = lazy(() => import('./pages/sit') );
const AboutPage = lazy(() => import('./pages/aboutus/aboutmain'));
const ContactPage = lazy(() => import('./pages/contact'));
const CSEPage = lazy(() => import('./pages/domain/csepage'));
const FullStackPage = lazy(() => import('./pages/program/full-stack'));
const BootcampPage = lazy(() => import('./pages/bootcamp'));
const CretificationMain = lazy(() => import('./pages/cretification/CertificateMain'));
const Webinar = lazy(() => import('./pages/webinar/webinar'));
const CheckoutPage = lazy(() => import('./pages/checkout/checkout') );
const WebinarCheckoutPage = lazy(() => import('./pages/webinar/webinarCheckout/webinarCheckout'));
// legals
const Terms = lazy(() => import('./pages/legals/Terms&condition'));
const Privacy = lazy(() => import('./pages/legals/privacy&policy'));
const Refund = lazy(() => import('./pages/legals/refund'));
// Simple loading component
const PageLoader = () => (
  <div className="min-h-screen flex items-center justify-center">
    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600"></div>
  </div>
);

function App() {
  return (
    <>
     <BrowserRouter>
       <GoogleAnalytics/>
       <ScrollToTop/>
       <Header/>
       <Suspense fallback={<PageLoader />}>
         <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/institute' element={<InstitutePage/>}/>
            <Route path='/books' element={<BooksPage/>}/>
            <Route path='/about' element={<AboutPage/>}/>
            <Route path='/contact' element={<ContactPage/>}/>
            <Route path='/domains/cse' element={<CSEPage/>}/>
            <Route path='/programs/full-stack' element={<FullStackPage/>}/>
            <Route path='/bootcamp' element={<BootcampPage/>}/>
            <Route path='/certificate' element={<CretificationMain/>}/>
            <Route path='/cse/wise-session' element={<Webinar/>}/>
            <Route path='/institute/sit' element={<SitPage/>} />
            <Route path='/checkout' element={<CheckoutPage/>} />
            <Route path='/webinar/checkout' element={<WebinarCheckoutPage/>}/>
            <Route path='/terms&conditions' element={<Terms/>}/>
            <Route path='/privacy&policy' element={<Privacy/>}/>
            <Route path='/Refund&cancellation_policy' element={<Refund/>}/>
            <Route path='/mech/webinar' element={<MechFinal/>}/>
         </Routes>
       </Suspense>
       <WhatsAppChat/>
       <Footer/>
     </BrowserRouter> 
    </>
  )
}

export default App