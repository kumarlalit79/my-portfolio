import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faJava, 
  faPython, 
  faHtml5, 
  faCss3Alt, 
  faJs, 
  faReact, 
  faGitAlt 
} from "@fortawesome/free-brands-svg-icons";
import { 
  faDatabase, 
  faEnvelope, 
  faCode 
} from "@fortawesome/free-solid-svg-icons";

const skills = [
  { name: "C#", icon: faCode },
  { name: "Java", icon: faJava },
  { name: "Python", icon: faPython },
  { name: "C", icon: faCode },
  { name: "C++", icon: faCode },
  { name: ".NET Core", icon: faCode },
  { name: "MVC", icon: faCode },
  { name: "Razor Pages", icon: faCode },
  { name: "Web Forms", icon: faCode },
  { name: "Entity Framework", icon: faDatabase },
  { name: "HTML", icon: faHtml5 },
  { name: "CSS", icon: faCss3Alt },
  { name: "Bootstrap", icon: faCode },
  { name: "Tailwind", icon: faCode },
  { name: "JavaScript", icon: faJs },
  { name: "JQuery", icon: faJs },
  { name: "React", icon: faReact },
  { name: "SQL Server", icon: faDatabase },
  { name: "MongoDB", icon: faDatabase },
  { name: "PostgreSQL", icon: faDatabase },
  { name: "Git", icon: faGitAlt },
  { name: "JIRA", icon: faCode },
  { name: "Highcharts", icon: faCode },
  { name: "SMTP", icon: faEnvelope },
];

const MySkills = () => {
  return (
    <section id="skills" className="bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mt-2">Tech Stack</h2>
          <p className="text-gray-500 mt-3 max-w-xl mx-auto">
            A blend of programming, frameworks, databases, and tools I use to
            build reliable applications and solve real-world problems.
          </p>
        </div>

        {/* Skill Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <div
              key={index}
              className="bg-white shadow-md rounded-lg py-6 px-6 text-center text-gray-700 font-semibold hover:shadow-xl transition flex flex-col items-center gap-2"
            >
              <FontAwesomeIcon icon={skill.icon} className="text-3xl text-[#A53BFD]" />
              <span>{skill.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MySkills;
