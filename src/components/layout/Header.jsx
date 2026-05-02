import { FiUser, FiBell, FiSearch, FiGlobe } from "react-icons/fi";
import { BiShoppingBag } from "react-icons/bi";

const Header = () => {
  return (
    <header className="w-full font-sans">
      {/* 1. TOP BAR */}
      <div className="bg-[#1e2124] text-gray-300 py-2 text-[12px]">
        <div className="max-w-[1400px] mx-auto px-4 flex justify-between items-center">
          <div>Biziň bilen habarlaşyň...</div>
          
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
              <FiGlobe className="text-sm" />
              <span>turkmen</span>
            </div>
          </div>
        </div>
      </div>

      {/* 2. MAIN HEADER */}
      <div className="bg-[#282c31] py-4 shadow-md">
        <div className="max-w-[1400px] mx-auto px-4 flex items-center justify-between gap-8">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <img 
              src="https://sumbar-computer.com" 
              alt="Sumbar Computer" 
              className="h-10 object-contain cursor-pointer"
            />
          </div>

          {/* Gözleg (Search) Bar */}
          <div className="flex-1 max-w-2xl relative flex">
            <input 
              type="text" 
              placeholder="Gözleg" 
              className="w-full bg-white rounded-l-md py-2.5 px-4 text-sm outline-none text-gray-800"
            />
            <button className="bg-[#d32f2f] hover:bg-[#b71c1c] text-white px-5 rounded-r-md transition-colors flex items-center justify-center cursor-pointer">
              <FiSearch size={20} />
            </button>
          </div>

          {/* Ikonkalar (User, Notification, Basket) */}
          <div className="flex items-center gap-6 text-white">
            {/* User */}
            <div className="relative cursor-pointer hover:text-gray-300 transition-all">
               <FiUser size={24} />
               <span className="absolute -top-2 -right-2 bg-red-600 text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">0</span>
            </div>
            
            {/* Notification */}
            <div className="relative cursor-pointer hover:text-gray-300 transition-all">
               <FiBell size={24} />
               <span className="absolute -top-2 -right-2 bg-red-600 text-[10px] w-4 h-4 rounded-full flex items-center justify-center font-bold">1</span>
            </div>
            
            {/* Basket */}
            <div className="cursor-pointer hover:text-gray-300 transition-all">
               <BiShoppingBag size={26} />
            </div>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
