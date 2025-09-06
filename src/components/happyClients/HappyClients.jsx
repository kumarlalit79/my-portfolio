import Marquee from "react-fast-marquee";
const commonSVGClass = "h-5 sm:h-8 md:h-10";

const brandLogos = [
  
];

const HappyClients = () => {
  return (
    <div className="content py-10 md:py-25 flex flex-col items-center px-2">
      <div className="max-w-144.25 text-center ">
        <p className="section-title mb-6">Projects & Collaborations</p>
        <p className="text-[14px] sm:text-lg text-soft-dark font-normal">
          I’ve worked on real-world projects during internships and team collaborations, 
          building scalable solutions with modern technologies.
        </p>
      </div>
      <Marquee pauseOnHover={true} speed={100} className="">
        <p className="flex items-center pt-4 md:pt-10">
          {brandLogos?.map((logo, index) => (
            <span className="ps-5 sm:ps-10 md:ps-20" key={index}>
              {logo}
            </span>
          ))}
        </p>
      </Marquee>
    </div>
  );
};

export default HappyClients;
