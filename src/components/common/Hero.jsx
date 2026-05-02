import { FiMenu, FiChevronRight } from "react-icons/fi";
import { IMAGES } from "../../assets"; // Ähli suratlary bir obýektden alýarys

const Hero = () => {
  // Kategoriýa maglumatlarynyň sanawy
  const categories = [
    { 
      id: 1, name: "MONITORLAR", img: IMAGES.cat1, 
      subItems: [
        { id: 102, name: "Monitor berkidijiler", img: IMAGES.sub1_2 },
        { id: 103, name: "Aksesuarlar", img: IMAGES.sub1_3 }
      ]
    },
    { 
      id: 2, name: "PK DÜZÜJILERI", img: IMAGES.cat2, 
      subItems: [
        { id: 201, name: "Prosesorlar", img: IMAGES.sub2_1 },
        { id: 202, name: "Ene platalar", img: IMAGES.sub2_2 },
        { id: 203, name: "Wideokartalar", img: IMAGES.sub2_3 },
        { id: 204, name: "Operatiw ýat (RAM)", img: IMAGES.sub2_4 },
        { id: 205, name: "Gaty diskler (HDD)", img: IMAGES.sub2_5 },
        { id: 206, name: "SSD diskler", img: IMAGES.sub2_6 },
        { id: 207, name: "Iýmit bloklary", img: IMAGES.sub2_7 },
        { id: 208, name: "PK korpuslary", img: IMAGES.sub2_8 },
        { id: 209, name: "Sowadyjylar (Cooler)", img: IMAGES.sub2_9 },
        { id: 210, name: "Termopasta", img: IMAGES.sub2_10 },
        { id: 211, name: "Optiki diskler", img: IMAGES.sub2_11 },
        { id: 212, name: "Ses kartalary", img: IMAGES.sub2_12 }
      ]
    },
    { id: 3, name: "PERIFERIÝALAR", img: IMAGES.cat3, subItems: [{id: 301, name: "Mouslar", img: IMAGES.sub3_1}, {id: 302, name: "Klawiaturalar", img: IMAGES.sub3_2}] },
    { id: 4, name: "TOPLAÝYÝLAR", img: IMAGES.cat4, subItems: [{id: 401, name: "USB Fleshler", img: IMAGES.sub4_1}] },
    { id: 5, name: "MONOBLOK WE PK", img: IMAGES.cat5, subItems: [{id: 501, name: "Monobloklar", img: IMAGES.sub5_1}] },
    { id: 6, name: "NOUTBUKLAR", img: IMAGES.cat6, subItems: [{id: 601, name: "Noutbuklar", img: IMAGES.sub6_1}] },
    { id: 7, name: "MOBIL PERIFERIÝALARY", img: IMAGES.cat7, subItems: [{id: 701, name: "Zarýad berijiler", img: IMAGES.sub7_1}] },
    { id: 8, name: "PRINTERLER", img: IMAGES.cat8, subItems: [{id: 801, name: "Printerler", img: IMAGES.sub8_1}] },
    { id: 9, name: "TOR ENJAMLARY", img: IMAGES.cat9, subItems: [{id: 901, name: "Routerler", img: IMAGES.sub9_1}] },
    { id: 10, name: "HOWPSUZLYK", img: IMAGES.cat10, subItems: [{id: 1001, name: "Kameralar", img: IMAGES.sub10_1}] },
    { id: 11, name: "ÖÝ ENJAMLARY", img: IMAGES.cat11, subItems: [{id: 1101, name: "Öý enjamlary", img: IMAGES.sub11_1}] },
    { id: 12, name: "OYUNLARY", img: IMAGES.cat12, subItems: [{id: 1201, name: "Playstation", img: IMAGES.sub12_1}] },
    { id: 13, name: "AKSESUARLAR", img: IMAGES.cat13, subItems: [{id: 1301, name: "Sumkalar", img: IMAGES.sub13_1}] },
    { id: 14, name: "PROGRAMMALAR", img: IMAGES.cat14, subItems: [{id: 1401, name: "Windows", img: IMAGES.sub14_1}] },
    { id: 15, name: "BEÝLEKILER", img: IMAGES.cat15, subItems: [{id: 1501, name: "Beýlekiler", img: IMAGES.sub15_1}] },
  ];

  return (
    <section className="max-w-[1400px] mx-auto px-4 py-6 flex gap-6">
      
      {/* 1. SOL TARAP: KATEGORIÝA MENÝUSY */}
      <aside className="w-72 hidden xl:block flex-shrink-0 relative group/sidebar">
        <div className="bg-[#d32f2f] text-white flex items-center gap-3 px-4 py-3 rounded-t-md font-bold text-[13px] uppercase tracking-wider">
          <FiMenu size={20} /> ÄHLI HARYTLAR
        </div>
        
        <ul className="bg-white border border-gray-200 border-t-0 rounded-b-md shadow-sm">
          {categories.map((cat) => (
            <li 
              key={cat.id} 
              className="group flex items-center justify-between px-4 py-2 border-b border-gray-50 hover:bg-gray-50 cursor-pointer transition-all"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 flex items-center justify-center p-1">
                    <img src={cat.img} alt={cat.name} className="w-full h-full object-contain" />
                </div>
                <span className="text-[10px] font-bold text-gray-700 uppercase group-hover:text-[#d32f2f] transition-colors leading-tight w-40">
                    {cat.name}
                </span>
              </div>
              <FiChevronRight className="text-gray-300 group-hover:text-[#d32f2f]" size={16} />

              {/* MEGA MENU (Açylýan 2-nji List) */}
              {cat.subItems && cat.subItems.length > 0 && (
                <div className="invisible group-hover:visible opacity-0 group-hover:opacity-100 absolute left-[100%] top-0 w-[450px] min-h-full bg-white border border-gray-200 shadow-2xl z-50 p-4 transition-all duration-200 rounded-r-lg overflow-y-auto max-h-[600px]">
                  <h3 className="text-[#d32f2f] font-black text-xs mb-4 border-b pb-2 uppercase tracking-widest">{cat.name}</h3>
                  <div className="grid grid-cols-1 gap-1">
                    {cat.subItems.map((sub) => (
                      <div key={sub.id} className="flex items-center gap-4 p-2 hover:bg-gray-50 rounded-md transition-colors group/item">
                        <div className="w-12 h-12 flex-shrink-0 border border-gray-100 rounded p-1 bg-white shadow-sm">
                          <img src={sub.img} alt={sub.name} className="w-full h-full object-contain" />
                        </div>
                        <span className="text-[12px] font-bold text-gray-600 group-hover/item:text-[#d32f2f]">
                          {sub.name}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </li>
          ))}
        </ul>
      </aside>

      {/* 2. SAG TARAP: SLIDER MEÝDANÇASY */}
      <div className="flex-1 flex flex-col gap-4">
        {/* Esasy Slider - Bu ýere Slider komponentiň geler */}
        <div className="w-full h-[480px] bg-white rounded-md border border-gray-200 shadow-sm flex items-center justify-center relative overflow-hidden group">
             <div className="absolute inset-0 bg-gray-50 animate-pulse group-hover:hidden"></div>
             <p className="text-gray-400 font-bold italic z-10">Slider Bölümi (Tizden...)</p>
        </div>
        
        {/* Bannerlar */}
        <div className="grid grid-cols-4 gap-4">
           {[1,2,3,4].map(i => (
             <div key={i} className="h-36 bg-white rounded border border-gray-200 hover:shadow-lg transition-all cursor-pointer"></div>
           ))}
        </div>
      </div>

    </section>
  );
};

export default Hero;
