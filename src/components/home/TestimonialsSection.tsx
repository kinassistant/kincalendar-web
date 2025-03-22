import Image from "next/image";
import { testimonials } from "../../data/testimonials";
import TestimonialSlider from "./TestimonialSlider";

const TestimonialsSection = () => {
  return (
    <section
      id="testimonials"
      className="max-w-[1250px] mx-auto pt-[60px] md:pt-[120px] bg-white space-y-6 md:space-y-10 px-6 2xl:px-0"
    >
      <h2 className="text-2xl md:text-[32px] font-semibold text-[#020617] md:leading-10  text-start md:text-center">
        Words from our first families
      </h2>

      <div className="hidden lg:grid lg:grid-cols-3 gap-5 xl:gap-6">
        {testimonials.map((testimonial, id) => (
          <div
            key={id}
            className="bg-[#FFFCF8] py-8 px-5 rounded-lg border border-[#FFEAD1] transition duration-300 h-full flex flex-col justify-between space-y-8"
          >
            <div className="min-h-[100px]">
              <p className="font-medium text-start text-lg leading-6">
                “{testimonial.text}”
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
        ))}
      </div>
      <div className="relative lg:hidden">
        <TestimonialSlider />
      </div>
    </section>
  );
};

export default TestimonialsSection;
