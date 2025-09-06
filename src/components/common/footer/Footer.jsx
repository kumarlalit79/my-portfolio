import logo from "../../../assets/logo.png";
import { Link } from "react-scroll";

/* Footer nabLinks */
const navItems = [
  { id: 1, name: "Home", url: "introduction" },
  { id: 2, name: "About", url: "profile" },
  { id: 3, name: "Process", url: "work-process" },
  { id: 5, name: "Tech Stack", url: "skills" },
  { id: 4, name: "Projects", url: "Portfolio" },
  { id: 6, name: "What I Do?", url: "Services" },
  { id: 7, name: "Contact", url: "Contact" },
];
const copyrightYear = new Date().getFullYear();

const Footer = () => {
  return (
    <div className="pt-25 md:pt-40 content max-2xl:px-3">
      <div className="flex max-md:flex-col justify-between mx-0 items-center h-full w-full text-neutral-200">
        <a href="#" className="flex items-center border-0">
          <img src={logo} className="h-12 sm:h-18 rounded-2xl" alt="logo" />
          <p className="text-3xl sm:text-[32px] my-auto ms-[12px] font-semibold">
            Lalit
          </p>
        </a>
        <div className="mx-7 max-md:my-7 text-center">
          {navItems.map((item) => (
            <Link
              key={item.id}
              to={item.url.toLowerCase()} // same id jaisa section me hai
              smooth={true}
              duration={1000}
              offset={-140}
              className="mx-2 group inline-block relative w-fit text-[12px] sm:text-[16px] cursor-pointer"
            >
              {item.name}
              <span className="absolute left-0 bottom-0 h-0.5 w-full bg-white scale-x-0 duration-300 group-hover:scale-x-100"></span>
            </Link>
          ))}
        </div>
        <p className="text-[12px] sm:text-[16px]">
          Copyright &copy; {copyrightYear} Lalit.
        </p>
      </div>
      <p className="text-white text-center max-xs:text-[12px] max-md:text-[14px] w-full py-10">
        Designed and built by{" "}
        <a
          href="https://www.linkedin.com/in/lalitkumar7/"
          className="underline font-bold"
          target="_blank"
        >
          Lalit Kumar
        </a>
      </p>
    </div>
  );
};

export default Footer;
