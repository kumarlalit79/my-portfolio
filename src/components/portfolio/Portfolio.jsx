import { useState } from "react";
import Projects from "./Projects";
import card1 from "../../assets/images/portfolio-images/smart_dairy.png";
import card2 from "../../assets/images/portfolio-images/event_management.png";
import card3 from "../../assets/images/portfolio-images/expense.png";
import card4 from "../../assets/images/portfolio-images/meter.png";
import card5 from "../../assets/images/portfolio-images/library.png";
import card6 from "../../assets/images/portfolio-images/olympic.png";
import card7 from "../../assets/images/portfolio-images/courses.png";
import card8 from "../../assets/images/portfolio-images/amazon.png";
import card9 from "../../assets/images/portfolio-images/sales.png";
import card10 from "../../assets/images/portfolio-images/Travel.png";
import card11 from "../../assets/images/portfolio-images/ecom.png";
import card12 from "../../assets/images/portfolio-images/login.png";


const projectData = [
  {
    id: 1,
    image: card1,
    category: ".NET Core MVC",
    title: "Smart Dairy Tracker",
    description:
      "A web app for milk suppliers to upload receipts, extract data using Python OCR, and manage records via .NET Core MVC.",
    link: "https://github.com/kumarlalit79/My_Aanchal_NoteBook",
    
  },
  {
    id: 8,
    image: card8,
    category: "Data Analytics (Power BI)",
    title: "Amazon Global Sales Dashboard",
    description:
      "Built a dashboard to analyze global Amazon sales performance and trends.",
    link: "https://github.com/kumarlalit79",
  },
  {
    id: 3,
    image: card3,
    category: ".NET MVC",
    title: "Expense Management System",
    description:
      "A daily expense tracker with categories, subcategories, and graphical reports using Highcharts to analyze spending patterns.",
    link: "https://github.com/kumarlalit79/Expenses_Management_System",
  },
  {
    id: 2,
    image: card2,
    category: ".NET MVC",
    title: "Event Management System",
    description:
      "Built for managing college events where students could book seats online, make payments, and get a QR code. Security staff scanned the QR at entry for easy verification.",
    link: "https://github.com/Gajendrakumar1/Event_Management_System",
  },
  
  {
    id: 4,
    image: card4,
    category: "ASP .NET",
    title: "Meter Tracking System",
    description:
      "Built an application to track utility meter readings and generate automated reports.",
    link: "https://github.com/kumarlalit79/Meter-Tracking-System",
  },
  {
    id: 5,
    image: card5,
    category: "ASP .NET",
    title: "Library Management System",
    description:
      "Developed a system to manage book records, issue/return tracking, and student registrations with a responsive dashboard for smooth access across devices.",
    link: "https://github.com/kumarlalit79/Library_Management_Project",
  },
  {
    id: 6,
    image: card6,
    category: "Data Analytics (Power BI)",
    title: "Olympic Data Dashboard",
    description:
      "Interactive dashboard for analyzing Olympic data trends by country, year, and event.",
    link: "https://github.com/kumarlalit79",
  },
  {
    id: 7,
    image: card7,
    category: "React JS",
    title: "Top Courses Chooser",
    description:
      "A React app to explore and filter trending courses, using hooks, API integration, and Tailwind for a responsive UI.",
    link: "https://github.com/kumarlalit79",
  },
  
  {
    id: 9,
    image: card9,
    category: "Excel",
    title: "City-wise Sales Analysis",
    description:
      "Analyzed sales performance using pivot tables, VLOOKUP, and Excel charts.",
    link: "https://github.com/kumarlalit79",
  },
  {
    id: 10,
    image: card10,
    category: "React JS",
    title: "Tour Planner App",
    description:
      "A simple app to plan and view tours using React JS and Tailwind CSS.",
    link: "https://github.com/kumarlalit79",
  },
  {
    id: 11,
    image: card11,
    category: "Data Analytics (Power BI)",
    title: "Online Sales Data Dashboard",
    description:
      "Dashboard to monitor e-commerce KPIs like sales, profit, and region-wise performance.",
    link: "https://github.com/kumarlalit79",
  },
  {
    id: 12,
    image: card12,
    category: "React JS",
    title: "Login/Signup with Routing",
    description:
      "Authentication pages with React Router, react-icons, and toast notifications.",
    link: "https://github.com/kumarlalit79",
  },
  
];

const Portfolio = () => {
  const [showCount, setShowCount] = useState(6);

  const handleLoadMore = () => {
    setShowCount((prev) => prev + 6);
  };

  return (
    <div
      className="content mt-10 md:mt-15 xl:mt-25 mb-10 md:mb-25 max-xxl:p-2"
      id="portfolio"
    >
      <div className="xl:mb-17.5 mb-5">
        <div className="max-sm:px-2 text-center mx-auto max-w-144.25">
          <p className="section-title ">Projects</p>
          <p className="font-normal text-[18px] max-sm:text-[14px] pt-6 text-gray-400">
            A collection of my projects showcasing .NET Core, Database, Data Analytics, and React JS skills.
          </p>
        </div>
      </div>

      <div className="mx-auto flex justify-center">
        <div className="grid xl:grid-cols-3 md:grid-cols-2 gap-6">
          {projectData.slice(0, showCount).map((data, index) => (
            <Projects data={data} key={index} />
          ))}
        </div>
      </div>

      {showCount < projectData.length && (
        <div className="text-center">
          <button
            onClick={handleLoadMore}
            className="btn btn-primary py-3 px-6 mt-12.5 text-center text-[16px] font-semibold"
          >
            More Projects
          </button>
        </div>
      )}
    </div>
  );
};

export default Portfolio;
