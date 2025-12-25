import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import Logo from '../../assets/logo.png';
import { FlashBanner } from "../ui/gift";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDomainsOpen, setIsDomainsOpen] = useState(false);
  const [isWiseSessionsOpen, setIsWiseSessionsOpen] = useState(false);
  const [isInstitutionsOpen, setIsInstitutionsOpen] = useState(false);
  
  const location = useLocation();
  const currentPath = location.pathname;

  const NavLinks = [
    { name: "About Us", href: "/about" },
    { name: "Books", href: "/books" },
    { name: "Contact Us", href: "/contact" },
  ];

  const wiseSessionsLinks = [
    { name: "Mechanical Engineering", href: "/mech/webinar" },
    { name: "Computer Science & Engineering", href: "/cse/wise-session" }
  ];

  // Close mobile menu on route change
  useEffect(() => {
    setIsMenuOpen(false);
    setIsDomainsOpen(false);
    setIsWiseSessionsOpen(false);
    setIsInstitutionsOpen(false);
  }, [currentPath]);

  const toggleMenu = () => setIsMenuOpen(prev => !prev);
  const toggleDomains = () => setIsDomainsOpen(prev => !prev);
  const toggleWiseSessions = () => setIsWiseSessionsOpen(prev => !prev);
  const toggleInstitutions = () => setIsInstitutionsOpen(prev => !prev);
  const closeMenu = () => {
    setIsMenuOpen(false);
    setIsDomainsOpen(false);
    setIsWiseSessionsOpen(false);
    setIsInstitutionsOpen(false);
  };

  return (
    <>
      <FlashBanner />
      <header className="bg-white border-b border-gray-100 sticky top-0 z-50 py-5 pt-0">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="flex justify-between items-center h-20">
            
            {/* Logo */}
            <div className="flex-shrink-0 logo-holder">
              <Link to="/" className="flex items-center space-x-3">
                <img
                  src={Logo}
                  alt="Wrench Wise"
                  width={200}
                  height={200}
                  className="transform hover:scale-110 transition-transform duration-300"
                />
              </Link>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden navbar md:flex items-center gap-8 pt-5 flex-1 justify-center">
              
              {/* Domains Dropdown */}
              <div className="relative group">
                <button className="bg-gradient-to-r nav-btn from-emerald-600 to-cyan-600 flex px-3 py-1 rounded-full items-center text-white hover:from-emerald-700 hover:to-cyan-700 transition-all duration-300 font-medium group">
                  Domains
                  <ChevronDown className="ml-1 h-4 w-4 transform group-hover:rotate-180 transition-transform duration-200" />
                </button>

                <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-100 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                  <Link
                    to="/domains/cse"
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors rounded-t-lg"
                  >
                    Computer Science & Engineering
                  </Link>
                  <Link
                    // to="/domains/mechanical"
                    className="block cursor-not-allowed px-4 py-3 text-sm text-gray-200 hover:bg-emerald-50 hover:text-emerald-600 transition-colors"
                  >
                    Mechanical Engineering
                  </Link>
                </div>
              </div>

              {/* Wise Sessions Dropdown */}
              <div className="relative group">
                <button className="flex nav-btn px-3 py-1 rounded-full items-center transition-all duration-300 font-medium group hover:text-emerald-600">
                  Wise Sessions
                  <ChevronDown className="ml-1 h-4 w-4 transform group-hover:rotate-180 transition-transform duration-200" />
                </button>

                <div className="absolute top-full left-0 mt-2 w-64 bg-white border border-gray-100 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                  {wiseSessionsLinks.map((link, index) => (
                    <Link
                      key={index}
                      to={link.href}
                      className={`block px-4 py-3 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors ${
                        index === 0 ? 'rounded-t-lg' : index === wiseSessionsLinks.length - 1 ? 'rounded-b-lg' : ''
                      }`}
                    >
                      {link.name}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Institutions Dropdown */}
              <div className="relative group">
                <button className="flex nav-btn px-3 py-1 rounded-full items-center transition-all duration-300 font-medium group hover:text-emerald-600">
                  For Institutions
                  <ChevronDown className="ml-1 h-4 w-4 transform group-hover:rotate-180 transition-transform duration-200" />
                </button>

                <div className="absolute top-full left-0 mt-2 w-64 py-3 bg-white border border-gray-100 rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 z-50">
                  <Link
                    to='/institute'
                    className="block px-4 py-3 text-sm text-gray-700 hover:bg-emerald-50 hover:text-emerald-600 transition-colors rounded-t-lg"
                  >
                    For Institutes
                  </Link>
                  <Link 
                    // to='/institute/sit'
                    style={{cursor:''}}
                    className="block px-4 py-3 cursor-not-allowed text-sm text-gray-300 hover:bg-emerald-50 hover:text-gray-600 transition-colors rounded-b-lg"
                  >
                    For SIT Madurai
                  </Link>
                </div>
              </div>

              {/* Navigation Links */}
              {NavLinks.map((nav, index) => (
                <Link
                  key={index}
                  to={nav.href}
                  className={`${
                    currentPath === nav.href
                      ? "g2 font-medium"
                      : "text-gray-700 hover:text-emerald-600 transition-colors font-medium"
                  }`}
                >
                  {nav.name}
                </Link>
              ))}
            </nav>

            {/* Mobile Menu Button */}
            <div className="md:hidden flex-shrink-0">
              <button
                className="p-2 rounded-md hover:bg-gray-100 transition-colors"
                onClick={toggleMenu}
              >
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-100">
              <div className="py-4 space-y-2">
                <Link
                  to="/"
                  className="block py-3 px-4 text-gray-700 hover:bg-gray-50 font-medium rounded-lg transition-colors"
                  onClick={closeMenu}
                >
                  Home
                </Link>
                
                {/* Mobile Domains */}
                <div>
                  <button
                    onClick={toggleDomains}
                    className="flex items-center justify-between w-full py-3 px-4 text-gray-700 hover:bg-gray-50 font-medium rounded-lg transition-colors"
                  >
                    <span>Domains</span>
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isDomainsOpen ? "rotate-180" : ""}`} />
                  </button>

                  {isDomainsOpen && (
                    <div className="ml-4 mt-1 space-y-1">
                      <Link
                        to="/domains/cse"
                        className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-50 hover:text-emerald-600 rounded-lg transition-colors"
                        onClick={closeMenu}
                      >
                        Computer Science & Engineering
                      </Link>
                      <Link
                        to="/domains/mechanical"
                        className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-50 hover:text-emerald-600 rounded-lg transition-colors"
                        onClick={closeMenu}
                      >
                        Mechanical Engineering
                      </Link>
                    </div>
                  )}
                </div>

                {/* Mobile Wise Sessions */}
                <div>
                  <button
                    onClick={toggleWiseSessions}
                    className="flex items-center justify-between w-full py-3 px-4 text-gray-700 hover:bg-gray-50 font-medium rounded-lg transition-colors"
                  >
                    <span>Wise Sessions</span>
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isWiseSessionsOpen ? "rotate-180" : ""}`} />
                  </button>

                  {isWiseSessionsOpen && (
                    <div className="ml-4 mt-1 space-y-1">
                      {wiseSessionsLinks.map((link, index) => (
                        <Link
                          key={index}
                          to={link.href}
                          className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-50 hover:text-emerald-600 rounded-lg transition-colors"
                          onClick={closeMenu}
                        >
                          {link.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>

                {/* Mobile Institutions */}
                <div>
                  <button
                    onClick={toggleInstitutions}
                    className="flex items-center justify-between w-full py-3 px-4 text-gray-700 hover:bg-gray-50 font-medium rounded-lg transition-colors"
                  >
                    <span>For Institutions</span>
                    <ChevronDown className={`h-4 w-4 transition-transform duration-200 ${isInstitutionsOpen ? "rotate-180" : ""}`} />
                  </button>

                  {isInstitutionsOpen && (
                    <div className="ml-4 mt-1 space-y-1">
                      <Link
                        to="/institute"
                        className="block py-2 px-4 text-sm text-gray-600 hover:bg-gray-50 hover:text-emerald-600 rounded-lg transition-colors"
                        onClick={closeMenu}
                      >
                        For Institutes
                      </Link>
                      <Link
                        // to="/institute/sit"
                        className="block py-2 px-4 text-sm text-gray-300 hover:bg-gray-50 hover:text-emerald-600 rounded-lg transition-colors"
                        onClick={closeMenu}
                      >
                        For SIT Madurai
                      </Link>
                    </div>
                  )}
                </div>
                
                {/* Mobile Nav Links */}
                {NavLinks.map((nav, index) => (
                  <Link
                    key={index}
                    to={nav.href}
                    className="block capitalize py-3 px-4 text-gray-700 hover:bg-gray-50 hover:text-emerald-600 font-medium rounded-lg transition-colors"
                    onClick={closeMenu}
                  >
                    {nav.name}
                  </Link>
                ))}
              </div>
            </div>
          )}
        </div>
      </header>
    </>
  );
}