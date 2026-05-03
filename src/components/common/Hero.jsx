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
    {
      id: 3, name: "Periferiyalar", img: IMAGES.cat3,
      subItems: [
        { id: 301, name: "Esbaplar periferiya ucin", img: IMAGES.sub3_1 },
        { id: 302, name: "Kompyuter sycanjygy", img: IMAGES.sub3_2 },
        { id: 303, name: "Klawiaturalar", img: IMAGES.sub3_3 },
        { id: 304, name: "Sycanjyk ucin halycalar", img: IMAGES.sub3_4 },
        { id: 305, name: "Gulaklyklar", img: IMAGES.sub3_5 },
        { id: 306, name: "Kolonkalar we saundbarlar", img: IMAGES.sub3_6 },
        { id: 307, name: "Portatiw kolonkalary", img: IMAGES.sub3_7 },
        { id: 308, name: "WEB kamera", img: IMAGES.sub3_8 },
        { id: 309, name: "Mikrofonlar", img: IMAGES.sub3_9 },
        { id: 310, name: "Oyun konsollary we esbaplar", img: IMAGES.sub3_10 },
        { id: 311, name: "Oyun ucin kontrollerler", img: IMAGES.sub3_11 },
        { id: 312, name: "Wideo oyunlary", img: IMAGES.sub3_12 },
        { id: 313, name: "Dok stansiyalar we hublar", img: IMAGES.sub3_13 },
      ]
    },
    {
      id: 4, name: "Toplayjylar", img: IMAGES.cat4,
      subItems: [
        { id: 401, name: "Dasky gaty diskler", img: IMAGES.sub4_1 },
        { id: 401, name: "Gaty diskler ucin stansiyalar we korpuslar", img: IMAGES.sub4_2 },
        { id: 401, name: "Fles toplayjy (USB)", img: IMAGES.sub4_3 },
        { id: 401, name: "Yat karty (SD)", img: IMAGES.sub4_4 },
        { id: 401, name: "Kartriderler", img: IMAGES.sub4_5 },
      ]
    },
    {
      id: 5, name: "Monoblok we PK", img: IMAGES.cat5,
      subItems: [
        { id: 501, name: "Mnonbloklar", img: IMAGES.sub5_1 },
        { id: 502, name: "Brend kompyuterler", img: IMAGES.sub5_2 },
      ]
    },
    {
      id: 6, name: "Noutbuklar we beylekiler", img: IMAGES.cat6,
      subItems: [
        { id: 601, name: "Noutbuklar", img: IMAGES.sub6_1 },
        { id: 602, name: "Sumkalar we ryukzaklar", img: IMAGES.sub6_2 },
        { id: 603, name: "Stendler we esbaplar", img: IMAGES.sub6_3 },
        { id: 604, name: "Batareyler", img: IMAGES.sub6_4 },
        { id: 605, name: "Zaryad berijiler", img: IMAGES.sub6_5 },
        { id: 606, name: "Yadyn moduly", img: IMAGES.sub6_6 },
        { id: 607, name: "Optiki toplayjylar DWD RW", img: IMAGES.sub6_7 },
        { id: 608, name: "Ekranlar", img: IMAGES.sub6_8 },
        { id: 609, name: "Klawiaturalar", img: IMAGES.sub6_9 },
        { id: 610, name: "Klawiatura ucin nakleykalar", img: IMAGES.sub6_10 },
      ]
    },
    {
      id: 7, name: "MOBIL PERIFERIYALARY", img: IMAGES.cat7,
      subItems: [
        { id: 701, name: "Plansetler", img: IMAGES.sub7_1 },
        { id: 702, name: "Smart sagatlar", img: IMAGES.sub7_2 },
        { id: 703, name: "Telefon ucin zaryad berijiler", img: IMAGES.sub7_3 },
        { id: 704, name: "Telefon ucin kabeller", img: IMAGES.sub7_4 },
        { id: 705, name: "Portatiw batareyler", img: IMAGES.sub7_5 },
        { id: 706, name: "Podstawkalar we saklayjylar", img: IMAGES.sub7_6 },
        { id: 707, name: "Awtoulaglar ucin wideoregistratorlar", img: IMAGES.sub7_7 },
        { id: 708, name: "Sumkalar we keysler", img: IMAGES.sub7_8 },
        { id: 709, name: "Arassalayjy serisdeler", img: IMAGES.sub7_9 },
        { id: 710, name: "Durli mobil pereferiyalary", img: IMAGES.sub7_10 },
      ]
    },
    {
      id: 8, name: "PRINTERLER WE BEYLEKILER", img: IMAGES.cat8,
      subItems: [
        { id: 801, name: "Lazer printerler", img: IMAGES.sub8_1 },
        { id: 802, name: "Injekt printerler", img: IMAGES.sub8_2 },
        { id: 803, name: "Kopiya aparatlary", img: IMAGES.sub8_3 },
        { id: 804, name: "Skanerler", img: IMAGES.sub8_4 },
        { id: 805, name: "Oy we ofis ucin telefonlar", img: IMAGES.sub8_5 },
        { id: 806, name: "Proyektorlar we duzujiler", img: IMAGES.sub8_6 },
        { id: 807, name: "Kagyz uweyji", img: IMAGES.sub8_7 },
        { id: 808, name: "Laminatorlar", img: IMAGES.sub8_8 },
        { id: 809, name: "Kanselyariya", img: IMAGES.sub8_9 },
        { id: 810, name: "Sarp edilyan harytlar", img: IMAGES.sub8_10 },
      ]
    },
    {
      id: 9, name: "TOR ENJAMLARY", img: IMAGES.cat9,
      subItems: [
        { id: 901, name: "Routerler", img: IMAGES.sub9_1 },
        { id: 902, name: "Simisz guyclendirijiler", img: IMAGES.sub9_2 },
        { id: 903, name: "Tor adapteri we platalar", img: IMAGES.sub9_3 },
        { id: 904, name: "Swicler, konwerterler we beylekiler", img: IMAGES.sub9_4 },
        { id: 905, name: "Tor kabeli", img: IMAGES.sub9_5 },
        { id: 906, name: "Testerler we gurallar", img: IMAGES.sub9_6 },
      ]
    },
    {
      id: 10, name: "HOWPSUZLYK ULGAMY", img: IMAGES.cat10,
      subItems: [
        { id: 101, name: "Gozegcilik kameralary", img: IMAGES.sub10_1 },
        { id: 102, name: "Elektron gulplar", img: IMAGES.sub10_2 },
      ]
    },
    {
      id: 11, name: "AWTOMATIZASIYA", img: IMAGES.cat11,
      subItems: [
        { id: 111, name: "POS kompyuterleri we beylekiler", img: IMAGES.sub11_1 },
        { id: 112, name: "Barkod we cek printerler", img: IMAGES.sub11_2 },
        { id: 113, name: "Barkod skanerleri", img: IMAGES.sub11_3 },
        { id: 114, name: "Pul sanayjylar", img: IMAGES.sub11_4 },
        { id: 115, name: "Pul gutusy", img: IMAGES.sub11_5 },
        { id: 116, name: "Sarp edilyan harytlar", img: IMAGES.sub11_6 },
      ]
    },
    {
      id: 12, name: "TOK SAZLAYJYLAR WE UPS", img: IMAGES.cat12,
      subItems: [
        { id: 121, name: "UPS", img: IMAGES.sub12_1 },
        { id: 122, name: "Tok sazlayjylar", img: IMAGES.sub12_2 },
        { id: 123, name: "UPS ucin batareyler", img: IMAGES.sub12_3 },
        { id: 124, name: "UPS ucin beylekiler", img: IMAGES.sub12_4 },
      ]
    },
    {
      id: 13, name: "MEBELLER", img: IMAGES.cat13,
      subItems: [
        { id: 131, name: "Kompyuter kreslolary", img: IMAGES.sub13_1 },
        { id: 132, name: "Kompyuter stollary", img: IMAGES.sub13_2 },
      ]
    },
    {
      id: 14, name: "HOJALYK HARYTLARY", img: IMAGES.cat14,
      subItems: [
        { id: 141, name: "Oy ucin atributlar", img: IMAGES.sub14_1 },
        { id: 142, name: "Telewizorlar", img: IMAGES.sub14_2 },
        { id: 143, name: "TW-pristawkalr hem tyunerler", img: IMAGES.sub14_3 },
        { id: 144, name: "Pylesoslar", img: IMAGES.sub14_4 },
        { id: 145, name: "Utukler we bugly utukler", img: IMAGES.sub14_5 },
        { id: 146, name: "Howa nemlendirijiler we arassalayjylar", img: IMAGES.sub14_6 },
        { id: 147, name: "Yyladys enjamlary", img: IMAGES.sub14_7 },
        { id: 148, name: "Ashana enjamalry we esbaplary", img: IMAGES.sub14_8 },
        { id: 149, name: "Ashana gap-gaclary", img: IMAGES.sub14_9 },
        { id: 1410, name: "Caynekler", img: IMAGES.sub14_10 },
        { id: 1411, name: "Kofe masynlary", img: IMAGES.sub14_11 },
        { id: 1412, name: "Tosterler", img: IMAGES.sub14_12 },
        { id: 1413, name: "Miwe sykyjylar", img: IMAGES.sub14_13 },
        { id: 1414, name: "Blenderler", img: IMAGES.sub14_14 },
        { id: 1415, name: "Et uweyji", img: IMAGES.sub14_15 },
        { id: 1416, name: "Terezi", img: IMAGES.sub14_16 },
        { id: 1417, name: "Howa sowadyjy", img: IMAGES.sub14_17 },
      ]
    },
    {
      id: 15, name: "GOZELLIK WE SAGLYK", img: IMAGES.cat15,
      subItems: [
        { id: 151, name: "Aynek", img: IMAGES.sub15_1 },
        { id: 152, name: "Fenlar", img: IMAGES.sub15_2 },
        { id: 153, name: "Ploykalar we goneldijiler", img: IMAGES.sub15_3 },
        { id: 154, name: "Dis cotgalary we irregatorlar", img: IMAGES.sub15_4 },
        { id: 155, name: "Elektrobritwalar", img: IMAGES.sub15_5 },
        { id: 156, name: "Sac kesmek we trimmer", img: IMAGES.sub15_6 },
        { id: 157, name: "Massajorlar", img: IMAGES.sub15_7 },
        { id: 158, name: "Elektrik skuterler", img: IMAGES.sub15_8 },
        { id: 159, name: "Gozellik we saglyk ucin", img: IMAGES.sub15_9 },
      ]
    },
    {
      id: 16, name: "BASGALAR", img: IMAGES.cat16,
      subItems: [
        { id: 161, name: "Lityum batareyler", img: IMAGES.sub16_1 },
        { id: 162, name: "Elcyralar", img: IMAGES.sub16_2 },
        { id: 163, name: "Kabeller", img: IMAGES.sub16_3 },
        { id: 164, name: "Audio kabeller we gecirijiler", img: IMAGES.sub16_4 },
        { id: 165, name: "Wideo kabeller we gecirijiler", img: IMAGES.sub16_5 },
        { id: 166, name: "Kabel-tertilemesi", img: IMAGES.sub16_6 },
        { id: 167, name: "Adapterler we konwerterler", img: IMAGES.sub16_7 },
        { id: 168, name: "Splitterler we swicler", img: IMAGES.sub16_8 },
        { id: 169, name: "Elektrik uzldyjylar we rozetkalar", img: IMAGES.sub16_9 },
        { id: 169, name: "Gurallar", img: IMAGES.sub16_10 },
        { id: 169, name: "Basgalar", img: IMAGES.sub16_11 },
      ]
    },
  
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
