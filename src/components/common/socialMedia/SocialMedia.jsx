import {
  faBehance,
  faDribbble,
  faFacebookF,
  faInstagram,
  faLinkedin,
  faSquareXTwitter, 
  faGithub
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const socialIcons = [
  { icon: faGithub, link: "https://github.com/kumarlalit79" },
  { icon: faLinkedin, link: "https://www.linkedin.com/in/lalitkumar7/" },
  { icon: faSquareXTwitter, link: "https://x.com/LuckyAr27221725" },
];

const SocialMedia = () => {
  return socialIcons.map((item, index) => (
    <a
      href={item.link}
      className={`text-picto-primary hover:bg-picto-primary p-2 pt-3 xs:p-2.5 xs:pt-3.75 sm:pt-4 md:pt-5 sm:p-3 md:p-3.75 hover:text-white rounded-md`}
      key={index}
      target="_blank" 
    >
      <FontAwesomeIcon
        icon={item.icon}
        className={`text-xl w-4.5 aspect-square`}
      />
    </a>
  ));
};

export default SocialMedia;
