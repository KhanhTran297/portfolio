import {
  Navigation,
  Pagination,
  Scrollbar,
  A11y,
  EffectCoverflow,
} from "swiper/modules";
import { useMediaQuery } from "react-responsive";
import { Swiper, SwiperSlide } from "swiper/react";
import type { projectType } from "../../constants/type";
import { motion } from "framer-motion";
const Slider = ({ project }: { project: projectType }) => {
  const isDesktopOrLaptop = useMediaQuery({
    query: "(min-width: 1224px)",
  });

  return (
    <motion.div
      whileInView={{ opacity: 1, y: 0 }}
      initial={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.75 }}
      className="h-full "
    >
      <Swiper
        // install Swiper modules
        modules={[Navigation, Pagination, Scrollbar, A11y, EffectCoverflow]}
        spaceBetween={50}
        slidesPerView={isDesktopOrLaptop ? 3 : 1}
        initialSlide={0}
        effect={"coverflow"}
        centeredSlides={true}
        grabCursor={true}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
        className="h-full"
      >
        {project.image.map((image, index) => {
          return (
            <SwiperSlide key={index} className=" h-[900px]">
              <img
                src={image}
                alt={project.title}
                className="object-cover w-full h-full rounded-xl"
              />
            </SwiperSlide>
          );
        })}
      </Swiper>
    </motion.div>
  );
};

export default Slider;
