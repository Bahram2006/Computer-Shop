import { FiMenu, FiChevronRight } from "react-icons/fi";

// Suratlary assets papgasyndan import edýäris (Seniň faýl atlaryň)
import mainSlider from "../../assets/main-slider.jpg";
import monitorImg from "../../assets/monitor.png";
import noutbukImg from "../../assets/noutbuk.png";
import periferyImg from "../../assets/perifery.png";
import pkImg from "../../assets/pk.png";
import toplayjyImg from "../../assets/toplayjy.png";

const Hero = () => {
  // Kategoriýa maglumatlary
  const categories = [
    { 
      id: 1, 
      name: "MONITORLAR", 
      img: monitorImg,
      subItems: [
        { id: 101, name: "Monitorlar", img: monitorImg },
        { id: 102, name: "Monitorlar üçin berkidijiler", img: periferyImg }, // Elindäki bar bolan suraty ulandyk
      ]
    },
    { id: 2, name: "PK DÜZÜJILERI", img: pkImg, subItems: [] },
    { id: 3, name: "PERIFERIÝALAR", img: periferyImg, subItems: [] },
    { id: 4, name: "TOPLAÝYÝLAR", img: toplayjyImg, subItems: [] },
    { id: 5, name: "NOUTBUKLAR WE BEÝLEKILER", img: noutbukImg, subItems: [] },
  ];

  return (
    <section className="max-w-[1400px] mx-auto px-4 py-6 flex gap-6">
      
      {/* 1. GAPDAL KATEGORIÝA MENÝUSY */}
      <aside className="w-72 hidden xl:block flex-shrink-0 relative">
        {/* Menýu Başlygy */}
        <div className="bg-[#d32f2f] text-white flex items-center gap-3 px-4 py-3 rounded-t-md font-bold text-[13px] uppercase">
          <FiMenu size={20} />
          ÄHLI HARYTLAR
        </div>
        
        {/* Kategoriýa Sanawy */}
        <ul className="bg-white border border-gray-200 border-t-0 rounded-b-md shadow-sm">
          {categories.map((cat) => (
            <li 
              key={cat.id} 
              className="group flex items-center justify-between px-4 py-2.5 border-b border-gray-50 hover:bg-gray-50 cursor-pointer transition-all"
            >
              {/* Esasy Bölüm */}
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 flex items-center justify-center">
                    <img src={cat.img} alt={cat.name} className="w-full h-full object-contain" />
                </div>
                <span className="text-[11px] font-bold text-gray-700 uppercase group-hover:text-[#d32f2f] transition-colors">
                    {cat.name}
                </span>
              </div>
              <FiChevronRight className="text-gray-300 group-hover:text-[#d32f2f]" size={16} />

              {/* --- MEGA MENU (GAPDALDA AÇYLYAN) --- */}
              {cat.subItems.length > 0 && (
                <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute left-full top-0 w-[400px] bg-white border border-gray-200 shadow-2xl z-50 p-4 transition-all duration-200 rounded-r-lg">
                  <ul className="flex flex-col gap-2">
                    {cat.subItems.map((sub) => (
                      <li 
                        key={sub.id} 
                        className="flex items-center gap-4 p-2 hover:bg-gray-50 rounded-md transition-colors group/item"
                      >
                        <div className="w-12 h-12 flex-shrink-0 border border-gray-100 rounded p-1 bg-white">
                          <img src={sub.img} alt={sub.name} className="w-full h-full object-contain" />
                        </div>
                        <span className="text-[13px] font-semibold text-gray-600 group-hover/item:text-[#d32f2f]">
                          {sub.name}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </aside>

      {/* 2. SLIDER WE BANNERLAR (SAG TARAP) */}
      <div className="flex-1 flex flex-col gap-4 overflow-hidden">
        
        {/* Esasy Slider */}
        <div className="relative w-full h-[435px] bg-[#f0f0f0] rounded-md overflow-hidden group cursor-pointer shadow-sm">
          <img 
            src={mainSlider} 
            alt="Main Banner" 
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
          />
        </div>

        {/* Kiçi Bannerlar (4-li Grid) */}
        <div className="grid grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="h-40 bg-white rounded-md border border-gray-200 overflow-hidden cursor-pointer hover:shadow-md transition-all group">
               <img 
                src={mainSlider} 
                alt="Sub Banner" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 opacity-90 group-hover:opacity-100"
               />
            </div>
          ))}
        </div>

      </div>

    </section>
  );
};

export default Hero;
