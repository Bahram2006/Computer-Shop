import { useState, useEffect } from 'react';
import { FiChevronUp } from 'react-icons/fi';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Sahypanyň skroll bolşuna gözegçilik edýäris
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  // Iň ýokaryk smooth (ýumşak) goýberýän funksiýa
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className="fixed bottom-10 right-8 z-[100]">
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="bg-gray-400/80 hover:bg-[#d32f2f] text-white p-3 rounded-full 
                     shadow-lg transition-all duration-300 transform hover:scale-110 
                     cursor-pointer flex items-center justify-center group"
          title="Ýokaryk gaýt"
        >
          <FiChevronUp size={24} className="group-hover:-translate-y-1 transition-transform" />
        </button>
      )}
    </div>
  );
};

export default ScrollToTop;
