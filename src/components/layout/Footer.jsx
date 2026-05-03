import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import { IMAGES } from "../../assets";
import "swiper/css";
import { FiMapPin, FiMail, FiPhone, FiSmartphone } from "react-icons/fi";

const Footer = () => {
  // Brendleriň sanawy (Seniň IMAGES ammaryňdan gelýär)
  const brands = [
    { id: 1, img: IMAGES.slider1 },
    { id: 2, img: IMAGES.slider2 },
    { id: 3, img: IMAGES.slider3 },
    { id: 4, img: IMAGES.slider4 },
    { id: 5, img: IMAGES.slider5 },
    { id: 6, img: IMAGES.slider6 },
    { id: 7, img: IMAGES.slider7 },
    { id: 8, img: IMAGES.slider8 },
    { id: 9, img: IMAGES.slider9 },
    { id: 10, img: IMAGES.slider10 },
    { id: 11, img: IMAGES.slider11 },
    { id: 12, img: IMAGES.slider12 },
    { id: 13, img: IMAGES.slider13 },
    { id: 14, img: IMAGES.slider14 },
    { id: 15, img: IMAGES.slider15 },
    { id: 16, img: IMAGES.slider16 },
    { id: 17, img: IMAGES.slider17 },
    { id: 18, img: IMAGES.slider18 },
    { id: 19, img: IMAGES.slider19 },
    { id: 20, img: IMAGES.slider20 },
  ];

  return (
    <footer className="w-full bg-[#1e2124] text-gray-400 font-sans mt-10">
      {/* 1. BRENDLER SLIDER (Gara meýdança - Brendleriň typýan ýeri) */}
      <div className="bg-[#111315] py-10 border-b border-gray-800 shadow-inner">
        <div className="max-w-[1400px] mx-auto px-4">
          <Swiper
            modules={[Autoplay]}
            spaceBetween={50}
            slidesPerView={10}
            loop={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            breakpoints={{
              320: { slidesPerView: 3, spaceBetween: 20 },
              768: { slidesPerView: 5, spaceBetween: 40 },
              1024: { slidesPerView: 7, spaceBetween: 50 },
            }}
            className="flex items-center"
          >
            {brands.map((brand) => (
              <SwiperSlide
                key={brand.id}
                className="flex items-center justify-center"
              >
                <img
                  src={brand.img}
                  alt="brand"
                  className="h-25 w-auto object-contain cursor-pointer 
                             brightness-200 contrast-125 // <-- Logony has ýagty görkezýär
                             hover:scale-110 transition-all duration-300"
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>

      {/* 2. ESASY FOOTER MAZMUNY */}
      <div className="max-w-[1400px] mx-auto px-4 py-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* SÜTÜN 1: Logo we Habarlaşmak */}
        <div className="flex flex-col gap-6">
          <div className="flex items-center gap-2">
            <span className="text-2xl font-black text-white tracking-tighter italic">
              SUMBAR
            </span>
            <span className="text-xs bg-red-600 text-white px-1 font-bold">
              COMPUTER
            </span>
          </div>
          <div className="text-[13px] leading-relaxed flex flex-col gap-4">
            {/* Salgy */}
            <p className="flex items-start gap-3 group">
              <FiMapPin
                className="text-[#d32f2f] shrink-0 mt-0.5 transition-transform group-hover:scale-110"
                size={18}
              />
              <span className="text-gray-300 group-hover:text-white transition-colors">
                Türkmenistan, Aşgabat, köç. A.Nyýazow (Hudayberdiýew), jaý 99
              </span>
            </p>

            {/* Email */}
            <p className="flex items-center gap-3 group">
              <FiMail
                className="text-[#d32f2f] shrink-0 transition-transform group-hover:scale-110"
                size={17}
              />
              <a
                href="mailto:sumbar.computer@gmail.com"
                className="text-gray-300 hover:text-white transition-colors"
              >
                sumbar.computer@gmail.com
              </a>
            </p>

            {/* Dükan Telefony */}
            <p className="flex items-center gap-3 group">
              <FiPhone
                className="text-[#d32f2f] shrink-0 transition-transform group-hover:scale-110"
                size={17}
              />
              <span className="text-gray-300 group-hover:text-white transition-colors">
                +993 (12) 49-23-43
              </span>
            </p>

            {/* Mobil Telefony */}
            <p className="flex items-center gap-3 group">
              <FiSmartphone
                className="text-[#d32f2f] shrink-0 transition-transform group-hover:scale-110"
                size={17}
              />
              <span className="text-gray-300 group-hover:text-white transition-colors">
                +993 (62) 70-80-45
              </span>
            </p>
          </div>
        </div>

        {/* SÜTÜN 2: Peýdaly Linkler */}
        <div className="grid grid-cols-2 gap-4 text-[12px] pt-2">
          <ul className="flex flex-col gap-4">
            <li className="hover:text-white cursor-pointer transition">
              Biz barada
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Kepillik
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Galereýa
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Gizlinlik syýasaty
            </li>
          </ul>
          <ul className="flex flex-col gap-4">
            <li className="hover:text-white cursor-pointer transition">
              Tehniki hyzmat
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Eltip bermek we töleg
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Brendler
            </li>
            <li className="hover:text-white cursor-pointer transition">
              Bal toplamak
            </li>
          </ul>
        </div>

        {/* SÜTÜN 3: Abuna we Näsazlyk */}
        <div className="flex flex-col gap-8">
          <div>
            <h4 className="text-white font-bold text-[12px] mb-4 uppercase tracking-widest">
              Täzeliklere abuna boluň
            </h4>
            <div className="flex h-11">
              <input
                type="email"
                placeholder="E-poçtaňyz"
                className="bg-[#282c31] border border-gray-700 text-white px-4 flex-1 outline-none text-sm rounded-l-md focus:border-red-600 transition-all"
              />
              <button className="bg-red-600 text-white px-5 text-xs font-black uppercase rounded-r-md hover:bg-red-700 transition cursor-pointer">
                OK
              </button>
            </div>
          </div>
          <div>
            <h4 className="text-white font-bold text-[12px] mb-3 uppercase tracking-widest">
              Websaýty gowulaşdyrmaga kömek ediň
            </h4>
            <button className="w-full text-red-500 border-2 border-red-600/30 py-2.5 text-[11px] font-black uppercase rounded-md hover:bg-red-600 hover:text-white hover:border-red-600 transition-all cursor-pointer">
              Näsazlyk bildirmek
            </button>
          </div>
        </div>

        {/* SÜTÜN 4: Programma ýüklemek (Sumbar dizaýny) */}
        <div className="bg-[#282c31]/50 p-6 rounded-xl border border-gray-700/50 flex flex-col items-center shadow-lg">
          <h4 className="text-white font-bold text-[11px] mb-5 uppercase tracking-[0.2em]">
            Programmany ýükläň:
          </h4>
          <div className="flex items-center gap-5 w-full">
            <div className="bg-white p-2 rounded-lg shadow-white/5">
              {/* Hakyky QR kod suratyňy şu taýda ulanyp bilersiň */}
              <div className="w-20 h-20 bg-gray-200 flex items-center justify-center text-[8px] text-black font-bold">
                QR CODE
              </div>
            </div>
            <div className="flex flex-col gap-3 flex-1">
              <div className="h-9 bg-black border border-gray-700 rounded flex items-center justify-center cursor-pointer hover:bg-gray-900 transition">
                <span className="text-[10px] font-bold text-white">
                  App Store
                </span>
              </div>
              <div className="h-9 bg-black border border-gray-700 rounded flex items-center justify-center cursor-pointer hover:bg-gray-900 transition">
                <span className="text-[10px] font-bold text-white">
                  Google Play
                </span>
              </div>
            </div>
          </div>
          <p className="text-[10px] text-gray-500 mt-5 text-center leading-tight">
            Mugt programmany ýükläp almak üçin skanirleň
          </p>
        </div>
      </div>

      {/* 3. COPYRIGHT (Iň aşaky inçe zolak) */}
      <div className="bg-[#111315] py-8 border-t border-gray-800/50">
        <div className="max-w-[1400px] mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-medium">
          <p>
            © 2026 <span className="text-white">sumbar-computer.com</span> Ähli
            hukuklary goraglydyr.
          </p>
          <div className="flex gap-6 items-center opacity-40 grayscale">
            <span className="text-lg">VISA</span>
            <span className="text-lg">MasterCard</span>
            <span className="text-lg">Altyn Asyr</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
