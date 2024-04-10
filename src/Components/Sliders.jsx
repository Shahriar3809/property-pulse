import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/bundle';
import "swiper/css/pagination";

import { Navigation, Autoplay, Pagination } from "swiper/modules";

const Sliders = () => {
  return (
    <>
      <Swiper
        navigation={true}
        slidesPerView={1}
        modules={[Navigation, Autoplay, Pagination]}
        loop={true}
        pagination={{
          clickable: true,
        }}
        autoplay={{
          delay: 3000,
        }}
      >
        <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co/7rRJCcB/francesca-tosolini-Xc-Vm8mn7-NUM-unsplash.jpg')] text-blue-500 flex justify-center h-[60vh] md:h-[70vh] w-full lg:h-[70vh] bg-cover bg-center bg-no-repeat bg-green-300"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co/ZHLG7hY/digital-marketing-agency-ntwrk-g39p1k-Djv-SY-unsplash.jpg')] text-blue-500 flex justify-center h-[60vh] md:h-[70vh] w-full lg:h-[70vh] bg-cover bg-center bg-no-repeat bg-green-300"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co/G0cHmGB/bailey-anselme-Bkp3g-Lygye-A-unsplash.jpg')] text-blue-500 flex justify-center w-full lg:h-[70vh] h-[60vh] md:h-[70vh] bg-cover bg-center bg-no-repeat bg-green-300"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co/5Rc71sp/webaliser-TPTXZd9m-Oo-unsplash.jpg')] text-blue-500 flex justify-center w-full lg:h-[70vh] h-[60vh] md:h-[70vh] bg-cover bg-center bg-no-repeat bg-green-300"></div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co/thvFtrx/ronnie-george-9g-Gv-NWBe-Oq4-unsplash.jpg')] text-blue-500 flex justify-center w-full h-[60vh] md:h-[70vh] lg:h-[70vh] bg-cover bg-center bg-no-repeat bg-green-300"></div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Sliders;
