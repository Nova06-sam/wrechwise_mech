import { Link } from "react-router-dom";
import { Linkedin, Instagram, Youtube, Twitter, Facebook } from "lucide-react";
import Logo from '../../assets/logo.png'; 
import './footer.css'
export function Footer() {
  return (
    <footer className="bg-gray-50 text-white py-4">
      <div className="mx-auto px-4 sm:px-6 footer-cover lg:px-8">
        <div className="flex justify-between flex-wrap gap-6">
          {/* details */}
          <div className="h-auto flex flex-col">
            <div className="flex items-center space-x-3 mb-4">
              <img
                src={Logo}
                alt="Wrench Wise"
                width={250}
                height={200}
                className="transform hover:scale-105 transition-transform duration-300"
              />
            </div>
            <p className="text-gray-900 mb-6 max-w-md">
              Innovate. Engineer. Excel. Empowering the next generation of engineers with industry-relevant skills and
              hands-on experience.
            </p>
            <div className="flex space-x-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.facebook.com/people/Wrench-Wise/61578397160217/"
                className="text-gray-900 hover:text-emerald-400 transition-colors transform hover:scale-110 duration-300"
              >
                <Facebook className="h-6 w-6" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com/company/wrench-wise"
                className="text-gray-900 hover:text-emerald-400 transition-colors transform hover:scale-110 duration-300"
              >
                <Linkedin className="h-6 w-6" />
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com/wrench_wise_official/"
                className="text-gray-900 hover:text-emerald-400 transition-colors transform hover:scale-110 duration-300"
              >
                <Instagram className="h-6 w-6" />
              </a>
              {/* Uncomment when you have YouTube and Twitter links */}
              {/* <a
                target="_blank"
                rel="noopener noreferrer"
                href="#"
                className="text-gray-900 hover:text-emerald-400 transition-colors transform hover:scale-110 duration-300"
              >
                <Youtube className="h-6 w-6" />
              </a> */}
              {/* <a
                target="_blank"
                rel="noopener noreferrer"
                href="#"
                className="text-gray-900 hover:text-emerald-400 transition-colors transform hover:scale-110 duration-300"
              >
                <Twitter className="h-6 w-6" />
              </a> */}
            </div>
          </div>
           
           {/*home quick  */}
          <div className="h-auto box-1 flex flex-col justify-center ">
            <h3 className="text-lg text-gray-900 font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-900 hover:text-emerald-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/domains/cse" className="text-gray-900 hover:text-emerald-400 transition-colors">
                  CSE Programs
                </Link>
              </li>
              <li>
                <Link to="/institute" className="text-gray-900 hover:text-emerald-400 transition-colors">
                  For Institutions
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-900 hover:text-emerald-400 transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
           
           {/* legal thinks */}
            <div className="h-auto box-2 flex flex-col justify-center">
            <h3 className="text-lg text-gray-900 font-semibold mb-4">Legals</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-gray-900 hover:text-emerald-400 transition-colors">
                    {/* ABOUT US  */}
                    About Us
                </Link>
              </li>
              <li>
                <Link to="/terms&conditions" className="text-gray-900 hover:text-emerald-400 transition-colors">
                    {/* TERMS & CONDITIONS */}
                    Terms & Conditions
                </Link>
              </li>
              <li>
                <Link to="/privacy&policy" className="text-gray-900 hover:text-emerald-400 transition-colors">
                     {/* PRIVACY POLICY  */}
                     Privacy policy
                </Link>
              </li>
              <li>
                <Link to="/Refund&cancellation_policy" className="text-gray-900 hover:text-emerald-400 transition-colors">
                    {/* REFUND & CANCELLATION POLICY  */}
                    Refund & Cancellation policy
                </Link>
              </li>
            </ul>
          </div>

         {/* contact */}
          <div className="h-auto box-3 flex flex-col justify-center">
            <h3 className="text-lg font-semibold mb-3 text-gray-900">Contact Info</h3>
            <div className="space-y-2 flex flex-col text-gray-900">
              <a className="text-gray-900 hover:text-emerald-400 transition-colors"  href="mailto:hello@wrench-wise.com" style={{ textTransform: 'lowercase' }}>
                hello@wrench-wise.com
              </a>
              <a  href="https://wa.me/917358102193?text=Hi! I'm interested in WrenchWise programs. Can you help me?" className="text-gray-900 hover:text-emerald-400 transition-colors" >Book a Free Consultation</a>
            </div>
          </div>

        </div>

        <div className="border-t border-gray-300 mt-8 pt-8 flex justify-between gap-3 text-center text-gray-900">
         <p>&copy; 2025 <span className="font-bold g1">Wrench</span> <span className="font-bold g2">Wise</span>. All rights reserved.</p>
          <Link to='https://wynsync.tech/' target="_">Designed by <span className="font-bold text-blue-900">Wyn</span><span className="font-bold text-gray-600">Sync</span></Link>
        </div>
      </div>
    </footer>
  );
}
