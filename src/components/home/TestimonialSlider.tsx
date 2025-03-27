"use client";
import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import { testimonials } from "../../data/testimonials";
import "swiper/css";
import "swiper/css/pagination";

const TestimonialSlider: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div>
      <Swiper
        modules={[Pagination]}
        spaceBetween={20}
        slidesPerView={1}
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        pagination={{ clickable: true, el: ".custom-pagination" }}
        breakpoints={{
          640: {
            slidesPerView: 2,
          },
        }}
      >
        {testimonials.map((testimonial, id) => (
          <SwiperSlide key={id}>
            <div className="bg-[#FFFCF8] py-8 px-5 rounded-lg border border-[#FFEAD1] transition duration-300 h-full flex flex-col justify-between space-y-8">
              <div className="min-h-[100px]">
                <p className="font-medium text-start text-lg leading-6">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Image
                  src={testimonial.image}
                  alt={testimonial.name}
                  width={40}
                  height={40}
                  className="rounded-full"
                />
                <div className="text-left">
                  <p className="font-semibold text-gray-900">
                    {testimonial.name}
                  </p>
                  <p className="text-sm text-gray-600">{testimonial.role}</p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="custom-pagination mt-6 flex justify-center gap-2">
        {testimonials.map((_, index) => (
          <span
            key={index}
            className={`dot transition-all duration-300 ${
              activeIndex === index ? "active-dot" : ""
            }`}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialSlider;
