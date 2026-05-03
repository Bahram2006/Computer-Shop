import Header from "./components/layout/Header";
import Hero from "./components/common/Hero";
import ProductCard from "./components/common/ProductCard";
import Footer from "./components/layout/Footer"; // Footer import edildi
import { IMAGES } from "./assets";
import ScrollToTop from "./components/ui/ScrollToTop";

function App() {
  // 1. Harytlar sanawy
  const products = [
    {
      id: 1,
      name: "Mikser ARDESTO HMK-4006W (Ak bilen çal reňk)",
      price: "455.40",
      img: IMAGES.sub6_1,
    },
    { id: 2, name: "Fonar 2E PLBL1844", price: "336.60", img: IMAGES.sub11_1 },
    {
      id: 3,
      name: "Kolonka Yandex Stansiýa 3 (Melewşe reňk)",
      price: "5 682.60",
      img: IMAGES.sub3_1,
    },
    {
      id: 4,
      name: "Audio geçiriji UGREEN CM672 Bluetooth versiyasy 5.2",
      price: "396.00",
      img: IMAGES.sub7_1,
    },
    {
      id: 5,
      name: "Noutbuk HP 15-FD0154WM",
      price: "12 450.00",
      img: IMAGES.sub6_2,
    },
    {
      id: 6,
      name: "Prosesor AMD Ryzen 5 7500F",
      price: "3 200.00",
      img: IMAGES.sub2_1,
    },
    {
      id: 7,
      name: "Kompýuter korpusy SIGNATURE",
      price: "850.00",
      img: IMAGES.sub2_8,
    },
    {
      id: 8,
      name: "Saç guradyjy BaByliss Pro SL",
      price: "1 250.00",
      img: IMAGES.sub11_2,
    },
  ];

  return (
    <div className="min-h-screen bg-[#f5f5f5] flex flex-col">
      {/* 1. ÝOKARKY BÖLÜM (Header) */}
      <Header />

      {/* 2. BANNER WE KATEGORIÝALAR (Hero) */}
      <Hero />

      {/* 3. ESASY MAZMUN (Harytlar we Teswirler) */}
      <main className="max-w-[1400px] mx-auto px-4 py-10 flex gap-8 flex-1">
        {/* ÇEP TARAP: Teswirler we Reýting */}
        <aside className="w-72 hidden lg:block flex-shrink-0">
          <div className="bg-white border border-gray-200 rounded-md p-6 sticky top-24 shadow-sm">
            <h2 className="font-bold text-[11px] uppercase border-b border-gray-100 pb-3 mb-4 tracking-tighter text-gray-800">
              Dükana degişli teswirler
            </h2>
            <div className="flex flex-col items-center">
              <span className="text-5xl font-black text-[#d32f2f]">4.69</span>
              <div className="text-yellow-400 text-xl my-2 text-center">
                ★★★★★
              </div>
              <span className="text-gray-400 text-[11px] font-medium">
                (193) ses berlişik
              </span>
              <button className="mt-4 w-full border border-gray-200 py-2 text-[10px] font-bold uppercase rounded hover:bg-gray-50 transition cursor-pointer">
                Baha beriň
              </button>
            </div>
          </div>
        </aside>

        {/* SAG TARAP: Tablar we Harytlar Gridi */}
        <div className="flex-1">
          {/* Tab Menýu */}
          <div className="flex justify-center lg:justify-start gap-10 border-b border-gray-200 mb-8 overflow-x-auto whitespace-nowrap scrollbar-hide">
            <button className="pb-3 border-b-2 border-[#d32f2f] text-[#d32f2f] font-bold text-[11px] uppercase tracking-wider cursor-pointer transition-all">
              Maslahat berilýänler
            </button>
            <button className="pb-3 text-gray-400 font-bold text-[11px] uppercase tracking-wider hover:text-gray-600 cursor-pointer transition-all">
              Täzeler
            </button>
            <button className="pb-3 text-gray-400 font-bold text-[11px] uppercase tracking-wider hover:text-gray-600 cursor-pointer transition-all">
              Meşhurlar
            </button>
          </div>

          {/* Harytlar Gridi */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 xl:grid-cols-4 gap-5">
            {products.map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
          </div>
        </div>
      </main>

      {/* 4. ASAKY BÖLÜM (Footer) */}
      <Footer />
      {/* ÝOKARYK GAÝT DÜWMESİ */}
      <ScrollToTop />
    </div>
  );
}

export default App;
