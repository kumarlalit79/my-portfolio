import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const WorkTogether = () => {
  return (
    <div className="py-25 max-w-169 mx-auto px-2">
      <div className="text-center">
        <p className="text-white md:font-semibold text-2xl sm:text-3xl md:text-5xl pb-8">
          Looking for a passionate Software Developer?
        </p>
        <p className="text-[#A5ACB5] text-xs sm:text-lg font-normal text-center pb-8">
          I’m eager to contribute my skills to impactful projects and grow with a dynamic team. Let’s connect and discuss how I can add value to your organization.
        </p>
        <a
          href="https://www.linkedin.com/in/lalitkumar7/"
          className="btn btn-primary px-4 md:px-6.5 py-3 md:py-6 text-[12px] md:text-[16px]"
          target="_blank"
        >
          Let’s Connect
          <FontAwesomeIcon
            icon={faArrowRight}
            size="l"
            style={{ color: "#FFFFFF" }}
            className="ms-3"
          />
        </a>
      </div>
    </div>
  );
};

export default WorkTogether;
