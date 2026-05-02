const Header = () => {
  return (
    <header className="w-full font-sans">
      {/* 1. TOP BAR (Gara meýdança) */}
      <div className="bg-[#1e2124] text-gray-300 py-2 text-[12px]">
        <div className="max-w-[1400px] mx-auto px-4 flex justify-between items-center">
          {/* Çep tarap */}
          <div>Biziň bilen habarlaşyň...</div>
          
          {/* Sag tarap - Linkler we Dil */}
          <div className="flex items-center gap-5">
            <ul className="hidden lg:flex gap-4">
              <li className="hover:text-white cursor-pointer transition">Biz barada</li>
              <li className="hover:text-white cursor-pointer transition">Tehniki hyzmat</li>
              <li className="hover:text-white cursor-pointer transition">Kepillik</li>
              <li className="hover:text-white cursor-pointer transition">Eltip bermek we töleg</li>
              <li className="hover:text-white cursor-pointer transition">Teswirler</li>
              <li className="hover:text-white cursor-pointer transition">Has giňişleýin</li>
            </ul>
            <div className="flex items-center gap-1 border-l border-gray-600 pl-4 cursor-pointer hover:text-white">
              <span>🌐</span>
              <span>turkmen</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER (Esasy bölüm) */}
      <div className="bg-[#282c31] py-4 shadow-md">
        <div className="max-w-[1400px] mx-auto px-4 flex items-center justify-between gap-8">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="https://sumbar-computer.com" // Hakyky logo url-y ýa-da assets-den surat
              alt="Sumbar Computer" 
              className="h-10 object-contain"
            />
          </div>

          {/* Gözleg (Search) Bar */}
          <div className="flex-1 max-w-2xl relative flex">
            <input 
              type="text" 
              placeholder="Gözleg" 
              className="w-full bg-white rounded-l-md py-2.5 px-4 text-sm outline-none"
            />
            <button className="bg-[#d32f2f] hover:bg-[#b71c1c] text-white px-6 rounded-r-md transition-colors flex items-center justify-center cursor-pointer">
              {/* Gözleg ikonkasy */}
              <svg xmlns="http://w3.org" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
              </svg>
            </button>
          </div>

          {/* Ikonkalar (User, Notification, Basket) */}
          <div className="flex items-center gap-5 text-white">
            {/* User */}
            <div className="relative cursor-pointer hover:text-gray-300">
               <span className="text-2xl">👤</span>
               <span className="absolute -top-1 -right-1 bg-red-600 text-[10px] w-4 h-4 rounded-full flex items-center justify-center">0</span>
            </div>
            {/* Notification */}
            <div className="relative cursor-pointer hover:text-gray-300">
               <span className="text-2xl">🔔</span>
               <span className="absolute -top-1 -right-1 bg-red-600 text-[10px] w-4 h-4 rounded-full flex items-center justify-center">1</span>
            </div>
            {/* Basket */}
            <div className="cursor-pointer hover:text-gray-300">
               <span className="text-2xl">🧺</span>
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
