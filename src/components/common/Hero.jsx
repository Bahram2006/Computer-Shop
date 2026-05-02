import { FiMenu, FiChevronRight } from "react-icons/fi";

const Hero = () => {
  // Kategoriýa maglumatlary - Hakyky PNG/SVG ýollary bilen
  const categories = [
    { 
      id: 1, 
      name: "MONITORLAR", 
      img: "https://sumbar-computer.com" 
    },
    { 
      id: 2, 
      name: "PK DÜZÜJILERI", 
      img: "https://sumbar-computer.com" 
    },
    { 
      id: 3, 
      name: "PERIFERIÝALAR", 
      img: "https://sumbar-computer.com" 
    },
    { 
      id: 4, 
      name: "TOPLAÝYÝLAR", 
      img: "https://sumbar-computer.com" 
    },
    { 
      id: 5, 
      name: "MONOBLOK WE PK", 
      img: "https://sumbar-computer.com" 
    },
    { 
      id: 6, 
      name: "NOUTBUKLAR WE BEÝLEKILER", 
      img: "https://sumbar-computer.com" 
    }
  ];

  return (
    <section className="max-w-[1400px] mx-auto px-4 py-6 flex gap-6">
      
      {/* SOL TARAP: KATEGORI MENÜSÜ */}
      <aside className="w-72 hidden xl:block flex-shrink-0">
        <div className="bg-[#d32f2f] text-white flex items-center gap-3 px-4 py-3 rounded-t-md font-bold text-sm">
          <FiMenu size={20} />
          ÄHLI HARYTLAR
        </div>
        <ul className="bg-white border border-gray-200 border-t-0 rounded-b-md shadow-sm">
          {categories.map((cat) => (
            <li 
              key={cat.id} 
              className="flex items-center justify-between px-4 py-2 border-b border-gray-50 hover:bg-gray-50 group cursor-pointer transition-all"
            >
              <div className="flex items-center gap-3">
                {/* Hakyky PNG Surat */}
                <div className="w-8 h-8 flex items-center justify-center">
                    <img 
                      src={cat.img} 
                      alt={cat.name} 
                      className="w-full h-full object-contain grayscale group-hover:grayscale-0 transition-all" 
                    />
                </div>
                <span className="text-[11px] font-bold text-gray-700 group-hover:text-[#d32f2f]">
                    {cat.name}
                </span>
              </div>
              <FiChevronRight className="text-gray-400 group-hover:text-[#d32f2f]" size={14} />
            </li>
          ))}
        </ul>
      </aside>

      {/* SAG TARAP: SLIDER BÖLÜMI (Öňki ýaly galýar) */}
      <div className="flex-1 flex flex-col gap-4">
        <div className="relative w-full h-[415px] bg-black rounded-md overflow-hidden">
           <img 
            src="https://sumbar-computer.com" 
            className="w-full h-full object-cover" 
            alt="Slider"
           />
        </div>
        
        {/* Bannerlar */}
        <div className="grid grid-cols-4 gap-4">
            <div className="h-40 bg-white rounded border border-gray-200 overflow-hidden cursor-pointer hover:shadow-lg transition">
                <img src="https://sumbar-computer.com" className="w-full h-full object-cover" />
            </div>
            <div className="h-40 bg-white rounded border border-gray-200 overflow-hidden cursor-pointer hover:shadow-lg transition">
                <img src="https://sumbar-computer.com" className="w-full h-full object-cover" />
            </div>
            <div className="h-40 bg-white rounded border border-gray-200 overflow-hidden cursor-pointer hover:shadow-lg transition">
                <img src="https://sumbar-computer.com" className="w-full h-full object-cover" />
            </div>
            <div className="h-40 bg-white rounded border border-gray-200 overflow-hidden cursor-pointer hover:shadow-lg transition">
                <img src="https://sumbar-computer.com" className="w-full h-full object-cover" />
            </div>
        </div>
      </div>

    </section>
  );
};

export default Hero;
