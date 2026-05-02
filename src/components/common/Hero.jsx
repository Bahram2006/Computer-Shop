import { FiMenu, FiChevronRight } from "react-icons/fi";

// --- 1. Kategori: MONITORLAR ---
import cat1 from "../../assets/1.png";
import sub1_1 from "../../assets/1-1.png";
import sub1_2 from "../../assets/1-2.png";

// --- 2. Kategori: PK DUZUJILERI ---
import cat2 from "../../assets/2.png";
import sub2_1 from "../../assets/2-1.png";
import sub2_2 from "../../assets/2-2.png";

// --- 3. Kategori: PERIFERIÝALAR ---
import cat3 from "../../assets/3.png";
import sub3_1 from "../../assets/3-1.png";

// NOT: Eğer hata alırsan, dosyanın .png mi yoksa .jpg mi olduğunu kontrol et!

const Hero = () => {
  const categories = [
    { 
      id: 1, 
      name: "MONITORLAR", 
      img: cat1, 
      subItems: [
        { id: 101, name: "Monitorlar", img: sub1_1 },
        { id: 102, name: "Monitor berkidijiler", img: sub1_2 },
      ]
    },
    { 
      id: 2, 
      name: "PK DÜZÜJILERI", 
      img: cat2, 
      subItems: [
        { id: 201, name: "Prosesorlar", img: sub2_1 },
        { id: 202, name: "Ene platalar", img: sub2_2 },
      ] 
    },
    { 
      id: 3, 
      name: "PERIFERIÝALAR", 
      img: cat3, 
      subItems: [
        { id: 301, name: "Mouslar", img: sub3_1 },
      ]
    }
  ];

  return (
    <section className="max-w-[1400px] mx-auto px-4 py-6 flex gap-6">
      
      {/* SOL MENÜ */}
      <aside className="w-72 hidden xl:block flex-shrink-0 relative">
        <div className="bg-[#d32f2f] text-white flex items-center gap-3 px-4 py-3 rounded-t-md font-bold text-[13px] uppercase">
          <FiMenu size={20} /> ÄHLI HARYTLAR
        </div>
        
        <ul className="bg-white border border-gray-200 border-t-0 rounded-b-md shadow-sm">
          {categories.map((cat) => (
            <li key={cat.id} className="group flex items-center justify-between px-4 py-2.5 border-b border-gray-50 hover:bg-gray-50 cursor-pointer transition-all">
              <div className="flex items-center gap-3">
                <div className="w-9 h-9 flex items-center justify-center p-1">
                    <img src={cat.img} alt={cat.name} className="w-full h-full object-contain" />
                </div>
                <span className="text-[11px] font-bold text-gray-700 uppercase group-hover:text-[#d32f2f]">{cat.name}</span>
              </div>
              <FiChevronRight className="text-gray-300 group-hover:text-[#d32f2f]" size={16} />

              {/* MEGA MENU (Açılır Alt Liste) */}
              {cat.subItems.length > 0 && (
                <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute left-[100%] top-0 w-[420px] min-h-full bg-white border border-gray-200 shadow-2xl z-50 p-4 transition-all duration-200 rounded-r-lg">
                  <ul className="flex flex-col gap-2">
                    {cat.subItems.map((sub) => (
                      <li key={sub.id} className="flex items-center gap-4 p-2 hover:bg-gray-50 rounded-md group/item">
                        <div className="w-12 h-12 flex-shrink-0 border border-gray-100 rounded p-1 bg-white">
                          <img src={sub.img} alt={sub.name} className="w-full h-full object-contain" />
                        </div>
                        <span className="text-[12px] font-bold text-gray-600 group-hover/item:text-[#d32f2f]">{sub.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </li>
          ))}
        </ul>
      </aside>

      {/* SAĞ TARAF (SLIDER - Şimdilik Boş) */}
      <div className="flex-1 bg-gray-50 rounded-md border border-gray-100 min-h-[450px] flex items-center justify-center">
          <p className="text-gray-400 font-medium italic italic">Slider ve Bannerlar buraya gelecek...</p>
      </div>

    </section>
  );
};

export default Hero;
