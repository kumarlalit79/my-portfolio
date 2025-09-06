import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { EffectFade, Navigation, Pagination } from "swiper/modules";
import TestimonialTemplate from "./TestimonialTemplate";
import "./testimonial.css";

const testimonialData = [
  {
    message:
      "He quickly became a valuable part of our development team during his internship.",
    quote: `From learning our existing .NET stack to delivering production-ready features, he showed strong problem-solving skills and a professional attitude. His code was clean, reliable, and always on time.`,
    name: "",
    designation: "Senior Developer, Asharp Info Technologies",
  },
  {
    message:
      "A proactive team player who contributed a lot to our college project.",
    quote: `He handled backend development efficiently, integrated APIs smoothly, and made sure everything worked perfectly. Collaboration was effortless, and he was always ready to help others debug issues.`,
    name: "Gourav Kerni",
    designation: "Project Teammate, College Project",
  },
  {
    message:
      "He showed excellent learning ability and ownership of tasks.",
    quote: `Whether it was working with SQL, .NET Core, or experimenting with Power BI for data visualization, he adapted quickly and delivered results. His dedication and consistency stood out during the entire project.`,
    name: "Gajendra Kumar",
    designation: "Project Mentor",
  },
];


const Testimonial = () => {
  return (
    <div className="flex mx-auto justify-center px-2 max-w-218 pb-10 md:pb-25">
      <div className="w-full h-full cursor-grab">
        <p className="section-title mb-6 text-center">Testimonial</p>
        <Swiper
          id="testimonialSwiper"
          spaceBetween={30}
          navigation={false}
          pagination={{
            clickable: true,
          }}
          modules={[EffectFade, Navigation, Pagination]}
        >
          {testimonialData.map((testimonial, index) => (
            <SwiperSlide key={index}>
              <TestimonialTemplate testimonial={testimonial} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Testimonial;
