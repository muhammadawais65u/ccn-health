import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './sections/Hero';
import TrustedPartners from './sections/TrustedPartners';
import Features from './sections/Features';
import Programs from './sections/Programs';
import DeviceEcosystem from './sections/DeviceEcosystem';
import Integrations from './sections/Integrations';
import DashboardPreview from './sections/DashboardPreview';
import Workflow from './sections/Workflow';
import Testimonials from './sections/Testimonials';
import CTA from './sections/CTA';
import Contact from './sections/Contact';

function App() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <Header />
      <main className="flex-1">
        <Hero />
        <TrustedPartners />
        <Features />
        <Programs />
        <DeviceEcosystem />
        <Integrations />
        <DashboardPreview />
        <Workflow />
        <Testimonials />
        <CTA />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
