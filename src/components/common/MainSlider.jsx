import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { IMAGES } from '../../assets';

// Swiper stillerini import edýäris
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

const MainSlider = () => {
  const slides = [
    IMAGES.banner1,
    IMAGES.banner2,
    IMAGES.banner3,
    IMAGES.banner4,
    IMAGES.banner5,
    IMAGES.banner6,
    IMAGES.banner7,
    IMAGES.banner8,
    IMAGES.banner9,
    IMAGES.banner10,
  ];

  return (
    <div className="w-full h-[415px] rounded-md overflow-hidden shadow-sm border border-gray-200 bg-white">
      <Swiper
        spaceBetween={0}
        centeredSlides={true}
        autoplay={{
          delay: 3500, // 3.5 sekuntdan typýar
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper w-full h-full"
      >
        {slides.map((img, index) => (
          <SwiperSlide key={index}>
            <img 
              src={img} 
              alt={`Banner ${index + 1}`} 
              className="w-full h-full object-cover cursor-pointer"
            />
          </SwiperSlide>
        ))}
      </Swiper>
      
      {/* Sumbar stilindäki Navigation Button stillerini düzetmek üçin CSS */}
      <style dangerouslySetInnerHTML={{ __html: `
        .swiper-button-next, .swiper-button-prev {
          color: #d32f2f !important;
          transform: scale(0.5);
        }
        .swiper-pagination-bullet-active {
          background: #d32f2f !important;
        }
      `}} />
    </div>
  );
};

export default MainSlider;
