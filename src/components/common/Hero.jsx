import React from 'react';
import { FiMenu, FiChevronRight } from "react-icons/fi";

const Hero = () => {
  // Kategori Listesi Verisi (Clean Code için veriyi ayrı tutuyoruz)
  const categories = [
    { id: 1, name: "MONITORLAR", icon: "🖥️" },
    { id: 2, name: "PK DÜZÜJILERI", icon: "⚙️" },
    { id: 3, name: "PERIFERIÝALAR", icon: "🖱️" },
    { id: 4, name: "TOPLAÝYÝLAR", icon: "🔌" },
    { id: 5, name: "MONOBLOK WE PK", icon: "💻" },
    { id: 6, name: "NOUTBUKLAR WE BEÝLEKILER", icon: "💻" },
    { id: 7, name: "MOBIL PERIFERIÝALARY", icon: "📱" },
    { id: 8, name: "PRINTERLER WE BEÝLEKILER", icon: "🖨️" },
    { id: 9, name: "TOR ENJAMLARY", icon: "📡" },
    { id: 10, name: "HOWPSUZLYK ULGAMY", icon: "🛡️" },
  ];

  return (
    <section className="max-w-[1400px] mx-auto px-4 py-6 flex gap-6">
      
      {/* SOL TARAP: KATEGORI MENÜSÜ */}
      <aside className="w-72 hidden xl:block flex-shrink-0">
        <div className="bg-[#d32f2f] text-white flex items-center gap-3 px-4 py-3 rounded-t-md font-bold text-sm">
          <FiMenu size={20} />
          ÄHLI HARYTLAR
        </div>
        <ul className="bg-white border border-gray-200 border-t-0 rounded-b-md">
          {categories.map((cat) => (
            <li 
              key={cat.id} 
              className="flex items-center justify-between px-4 py-2.5 text-[12px] font-semibold text-gray-700 hover:bg-gray-50 hover:text-[#d32f2f] cursor-pointer border-b border-gray-100 last:border-0 transition-all"
            >
              <div className="flex items-center gap-3">
                <span className="text-lg">{cat.icon}</span>
                {cat.name}
              </div>
              <FiChevronRight className="text-gray-400" />
            </li>
          ))}
        </ul>
      </aside>

      {/* SAG TARAP: SLIDER WE BANNERLAR */}
      <div className="flex-1 flex flex-col gap-4">
        
        {/* ANA SLIDER (ASUS GÖRESELİ) */}
        <div className="relative w-full h-[400px] bg-[#000] rounded-md overflow-hidden group cursor-pointer">
          <img 
            src="https://asus.com" 
            alt="Asus Banner" 
            className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700"
          />
          {/* Slider Noktaları */}
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
            {[1, 2, 3, 4, 5].map((dot) => (
              <span key={dot} className={`w-2 h-2 rounded-full ${dot === 1 ? 'bg-white' : 'bg-white/40'}`}></span>
            ))}
          </div>
        </div>

        {/* ALT BANNERLAR (4'LÜ GRID) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <BannerCard img="https://media-amazon.com" title="RAPIDS SSD" />
          <BannerCard img="https://media-amazon.com" title="100W CHARGER" brand="UGREEN" />
          <BannerCard img="https://media-amazon.com" title="QUADSTELLAR" />
          <BannerCard img="https://media-amazon.com" title="KEYBOARD" brand="UGREEN" />
        </div>

      </div>
    </section>
  );
};

// Alt Bannerlar için Küçük Bir Helper Bileşen (Clean Code)
const BannerCard = ({ img, title, brand }) => (
  <div className="relative bg-white border border-gray-200 rounded-md overflow-hidden h-48 group cursor-pointer">
    <img src={img} alt={title} className="w-full h-full object-contain p-4 group-hover:scale-110 transition-transform" />
    <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white text-[10px] py-1 px-2 flex justify-between items-center">
       <span className="font-bold uppercase tracking-wider">{title}</span>
       {brand && <span className="bg-emerald-500 text-[8px] px-1 rounded font-black">{brand}</span>}
    </div>
  </div>
);

export default Hero;
