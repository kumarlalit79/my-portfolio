import Roles from "./Roles";

const rolesData = [
  {
    id: 1,
    title: "Backend Development",
    description:
      "I develop secure and scalable backend systems using .NET Core, MVC, Razor Pages, EF Core, and SQL Server, integrating REST APIs where needed.",
  },
  {
    id: 2,
    title: "Frontend",
    description:
      "I build responsive web apps using React or JQuery, Bootstrap or Tailwind consuming and creating APIs to deliver smooth and dynamic user experiences.",
  },
  {
    id: 3,
    title: "Data Dashboards",
    description:
      "I design interactive dashboards using Power BI and Highcharts/ChartJS, turning complex data into actionable insights.",
  },
];

const Profession = () => {
  return (
    <div
      className="content grid md:grid-cols-2 max-xxl:px-4 xxl:px-2 py-10 md:py-15 lg:py-37.5"
      id="services"
    >
      <div className="flex flex-col justify-between h-fit md:pe-8 lg:pe-35.75 max-md:text-center my-auto">
        <p className="section-title max-md:text-center">What I do?</p>
        <div className="mt-6 text-[14px]">
          <p className="text-xs sm:text-lg font-normal text-gray-400 mb-4">
            I develop secure, reliable web applications and backend systems using .NET technologies, React/JQuery, and modern APIs..
            I also analyze data to create dashboards and reports using tools like Power BI and Highcharts.
          </p>
          <p className="text-xs sm:text-lg font-normal text-gray-400">
            My focus is on writing clean code, integrating APIs, and delivering reliable solutions that work in real-world scenarios.
          </p>
        </div>
        <a
          href="#contact"
          className="mt-5 md:mt-12.5 btn btn-primary text-white w-fit md:py-3 md:px-6 text-[12px] sm:text-[16px] font-semibold max-md:mx-auto max-md:mb-5"
        >
          Get in Touch!
        </a>
      </div>
      <div className="">
        {rolesData.map((role, index) => (
          <Roles role={role} key={index} />
        ))}
      </div>
    </div>
  );
};

export default Profession;
