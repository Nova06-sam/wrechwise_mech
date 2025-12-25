import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const GoogleAnalytics = () => {
  const location = useLocation();

  useEffect(() => {
    // Check if gtag is already initialized to avoid duplicate scripts
    if (window.gtag) return;

    // Load Google Analytics script
    const script = document.createElement('script');
    script.src = 'https://www.googletagmanager.com/gtag/js?id=G-X9N0GZ07P4';
    script.async = true;
    script.onload = () => {
      console.log('Google Analytics loaded successfully');
    };
    script.onerror = () => {
      console.error('Failed to load Google Analytics');
    };
    document.head.appendChild(script);

    // Initialize gtag
    window.dataLayer = window.dataLayer || [];
    function gtag(){window.dataLayer.push(arguments);}
    window.gtag = gtag;
    
    gtag('js', new Date());
    gtag('config', 'G-X9N0GZ07P4', {
      send_page_view: false // We'll handle page views manually
    });

    // Cleanup function
    return () => {
      // Only remove script if you want, but usually we keep it
      // document.head.removeChild(script);
    };
  }, []);

  // Track page views when route changes
  useEffect(() => {
    if (window.gtag) {
      window.gtag('event', 'page_view', {
        page_title: document.title,
        page_location: window.location.href,
        page_path: location.pathname + location.search,
      });
      
      console.log(`Page view tracked: ${location.pathname}`);
    }
  }, [location]);

  return null; // This component doesn't render anything
};

export default GoogleAnalytics;