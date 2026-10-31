import { useState, useEffect } from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Services from './pages/Services';

function App() {
  const [currentPage, setCurrentPage] = useState(() => {
    const rawHash = window.location.hash.replace('#', '').toLowerCase();
    const [page] = rawHash.split('/');
    if (page === 'about') return 'about';
    if (page === 'contact') return 'contact';
    if (page === 'services') return 'services';
    return 'home';
  });

  const [selectedService, setSelectedService] = useState(() => {
    const rawHash = window.location.hash.replace('#', '').toLowerCase();
    const [, svc] = rawHash.split('/');
    return svc || 'wedding';
  });

  useEffect(() => {
    const handleHashChange = () => {
      const rawHash = window.location.hash.replace('#', '').toLowerCase();
      const [page, svc] = rawHash.split('/');
      if (page === 'about') {
        setCurrentPage('about');
      } else if (page === 'contact') {
        setCurrentPage('contact');
      } else if (page === 'services') {
        setCurrentPage('services');
        if (svc) setSelectedService(svc);
      } else {
        setCurrentPage('home');
      }
      window.scrollTo(0, 0);
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navigateTo = (page, serviceId) => {
    if (page === 'services' && serviceId) {
      window.location.hash = `services/${serviceId}`;
      setSelectedService(serviceId);
      setCurrentPage('services');
    } else {
      window.location.hash = page === 'home' ? '' : page;
      setCurrentPage(page);
    }
    window.scrollTo(0, 0);
  };

  return (
    <div className="app-root">
      {currentPage === 'about' && <About onNavigate={navigateTo} />}
      {currentPage === 'contact' && <Contact onNavigate={navigateTo} />}
      {currentPage === 'services' && (
        <Services initialService={selectedService} onNavigate={navigateTo} />
      )}
      {currentPage === 'home' && <Home onNavigate={navigateTo} />}
    </div>
  );
}

export default App;
