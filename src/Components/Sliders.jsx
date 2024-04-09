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
      pagination={
        {
            clickable: true,
        }
      }
      autoplay={
        {
            delay: 2000,

        }
      }
      >
        <SwiperSlide>
          <div className="bg-[url('https://i.ibb.co/GQJT84x/real-estate-json-object-demo.png?fbclid=IwAR19mpxSr6IK4XZ3BLX6k-hqGIW9uiwhaZek9n0TzyjxLjI8FiHO9LksqTg_aem_AYj5ilT4E_s17jWTPgPhZOGKfaSMZx0Xyl29Oxmm2gRLNWNt1JJWMmaSvXzMHLjDR_EDmpzbzYSBx-FQO_6TrgYj')] text-blue-500 flex justify-center w-full h-[90vh] bg-center bg-no-repeat bg-green-300">
            <p>Slide 1</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-blue-500 flex justify-center w-full h-[90vh] bg-center bg-no-repeat bg-green-300">
            <p>Slide 2</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-blue-500 flex justify-center w-full h-[90vh] bg-center bg-no-repeat bg-green-300">
            <p>Slide 3</p>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="text-blue-500  flex justify-center w-full h-[90vh] bg-center bg-no-repeat bg-green-300">
            <p>Slide 4</p>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
};

export default Sliders;
