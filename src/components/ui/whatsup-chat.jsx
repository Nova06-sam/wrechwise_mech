import { useState, useEffect } from "react";
import { MessageCircle, X } from "lucide-react";
import ChatIcon from '../../assets/chaticon.gif';

const quickMessages = [
  "Tell me about your courses",
  "What are the fees?",
  "How do I enroll?",
  "Placement assistance details",
];

export function WhatsAppChat() {
  const [isOpen, setIsOpen] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Small delay to show animation when component mounts
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  const handleQuickMessage = (message) => {
    window.open(`https://wa.me/917550077725?text=${encodeURIComponent(message)}`, "_blank");
    setIsOpen(false);
  };

  const handleWhatsAppClick = () => {
    window.open("https://wa.me/917550077725?text=Hi! I'm interested in WrenchWise programs. Can you help me?", "_blank");
    setIsOpen(false);
  };

  if (!isVisible) return null;

  return (
    <>
      {/* WhatsApp Floating Button */}
      <div className="fixed bottom-6 right-6 z-50 animate-bounce">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-cyan-600 cursor-pointer hover:bg-green-600 text-white rounded-full w-14 h-14 shadow-lg p-2 transition-all duration-300 transform hover:scale-110 hover:rotate-12"
        >
          {isOpen ? (
            <X className="h-6 w-6 mx-auto" />
          ) : (
            <img 
              src={ChatIcon} 
              alt="Chat with us" 
              className="w-10 h-10 mx-auto rounded-full"
            />
          )}
        </button>
      </div>

      {/* WhatsApp Chat Popup */}
      {isOpen && (
        <div className="fixed bottom-24 right-6 z-50 bg-white rounded-lg shadow-2xl border w-80 max-w-[calc(100vw-3rem)] transform transition-all duration-300 scale-100 opacity-100">
          <div className="bg-gradient-to-r from-green-500 to-green-600 text-white p-4 rounded-t-lg">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center">
                <MessageCircle className="h-5 w-5 text-green-500" />
              </div>
              <div>
                <h3 className="font-semibold">WrenchWise Support</h3>
                <p className="text-sm text-green-100">We're here to help!</p>
              </div>
            </div>
          </div>
          
          <div className="p-4">
            <div className="bg-gray-50 rounded-lg p-3 mb-4 border border-gray-200">
              <p className="text-sm text-gray-700">
                👋 Hi there! Welcome to WrenchWise!
                <br />
                <br />
                How can we help you today? Choose a quick option below:
              </p>
            </div>

            {/* Quick Message Buttons */}
            <div className="space-y-2 mb-4">
              {quickMessages.map((message, index) => (
                <button
                  key={index}
                  className="w-full text-left text-sm py-3 px-4 border border-gray-200 hover:border-green-300 hover:bg-green-50 bg-white rounded-lg transition-all duration-200 text-gray-700 hover:text-green-700 font-medium"
                  onClick={() => handleQuickMessage(message)}
                >
                  {message}
                </button>
              ))}
            </div>

            <button 
              onClick={handleWhatsAppClick} 
              className="w-full bg-green-500 hover:bg-green-600 text-white py-3 px-4 rounded-lg flex items-center justify-center transition-all duration-200 font-medium transform hover:scale-105 shadow-md hover:shadow-lg"
            >
              <MessageCircle className="mr-2 h-5 w-5" />
              Start WhatsApp Chat
            </button>
          </div>
        </div>
      )}
    </>
  );
}