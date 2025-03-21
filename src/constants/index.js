import { link } from "framer-motion/client";
import project1 from "../assets/projects/project-1.gif";
import project2 from "../assets/projects/project-2.gif";
import project3 from "../assets/projects/project-3.jpg";
import project4 from "../assets/projects/project-4.jpg";

export const HERO_CONTENT = `I'm an XR Developer and Full Stack Developer dedicated to building immersive digital experiences that seamlessly merge reality with virtual environments. My expertise includes computer vision, and I'm proficient in Python, JavaScript, and React. With hands-on experience in the MERN stack and Tailwind CSS, I develop both interactive front-end interfaces and scalable back-end systems, creating innovative applications at the intersection of extended reality and modern web technologies.`;

export const ABOUT_TEXT = `I am a passionate XR Developer and Full Stack Developer, focused on building immersive Augmented Reality (AR) applications, particularly for AR glasses. My expertise includes computer vision, Python, JavaScript, React.js, and C# for AR development, with hands-on experience in projects like ARTUS, an AR-guided real-time remote tutoring system using Meta Quest Pro, and an interactive AR app for mechanical keyboard assembly. As a teaching assistant and grader for an AR/VR course at George Washington University, I have contributed to fostering innovation in immersive technologies.

Beyond XR, I specialize in full-stack development, proficient in the MERN stack, Tailwind CSS, and FastAPI. My expertise extends to Retrieval-Augmented Generation (RAG) models, AI-driven solutions, and API integrations, including Twilio for communication services. I am currently developing a Farmers Dashboard, a platform that provides farmers with vital agricultural insights, enabling them to make data-driven decisions using real-time weather, soil conditions, and crop recommendations.

Outside of technology, I have a deep appreciation for nature and astrophotography, love traveling to different places, have a keen interest in physics discoveries, and enjoy playing chess.`;

export const EXPERIENCES = [
  {
    year: "2023 - Present",
    role: "Teaching/Grading Assistant",
    company: "George Washington University",
    description: `I worked as a Teaching and Grading Assistant for the Advanced Augmented Reality course at George Washington University. My responsibilities included creating presentations on various topics such as implementing AR multiplayer and integrating AI into AR. Additionally, I demonstrated different AR concepts based on the topics covered in the course.`,
    technologies: ["Unity","Augmented Reality","Virtual Reality","MetaXR","Photon Fusion"],
  },
  {
    year: "2023 - 2024",
    role: "Grading Assistant",
    company: "George Washington University",
    description: `Serving as a grading assistant for the Augmented Reality/Virtual Reality course, evaluating student work, providing detailed feedback, and ensuring fair and consistent grading.`,
    technologies: ["Unity","Augmented Reality","Virtual Reality","ShapeXR"],
  },
  {
    year: "2022",
    role: "Web-Developer Intern",
    company: "FOREFRONT HEALTHCARE PVT LTD",
    description: `Developed a scalable E-Learning platform using the MERN stack, featuring dynamic dashboards for progress tracking, personalized course recommendations, secure UPI payments, real-time support with FAQs, and efficient data management for user activity, courses, and assessments.`,
    technologies: ["React","NodeJS","MongoDB","ExpressJS"],
  },
  {
    year: "2021",
    role: "Software Intern",
    company: "Tequed-Labs",
    description: `Engineered a machine learning-driven web platform for estimating used bike prices, utilizing supervised learning algorithms to enhance predictive accuracy.`,
    technologies: ["Python", "Flask", "Machine Learning"],
  },
];

export const PROJECTS = [
  {
    title: "AgriVantage",
    image: project4,
    description:
      "This application is designed specifically for farmers, allowing them to call a dedicated number provided through Twilio to ask any agriculture-related questions. Even in areas with limited or no personal internet access, farmers can simply use a basic phone connection to reach the system, ensuring they have access to valuable, timely information about various agricultural practices.",
    technologies: ["FastAPI", "LangChain (RAG Pipeline)", "Twilio (Call Integration)", "OpenAI API"],
    link : ["https://github.com/parithoshd/AgriVantage"],
  },
  {
    title: "The Physics Book AR Application",
    image: project1,
    description:
      "'ThePhysicsBook', also known as 'The Physics Playground' or The 'Physics Library', is an AR app developed in Unity 2022.3.5f1 for the Meta Quest Pro on the Sonoma OS platform. It covers physics topics like Eclipse, Aerodynamics, and Black Hole gravity. A key feature is its controller-free interaction, allowing users to navigate and interact using hand gestures like grab, distance grab, and pinch, providing an intuitive and immersive learning experience..",
    technologies: ["Unity","Unity Assets","OpenXR","Augmented Reality"],
    link : ["https://gwu.box.com/s/5oxewl02xqctpglcanb4x73q688innlf"],
   
  },
  {
    title: "My-AerodynamicsVRApp",
    image: project2,
    description:
      "'My-AerodynamicsVRApp' is a Virtual Reality application that simulates how air particles interact with moving objects, showcasing the science of aerodynamics. Developed in Unity 2022.3.5f1, it is optimized for the Meta Quest 2 headset and illustrates how aerodynamics affects everything from rockets to cars and kites.",
    technologies: ["Unity","Unity Assets","Virtual Reality"],
    link: ["https://gwu.box.com/s/5g9zn32kz78qiozuzxxvltcb2x5vzo4e"],
  },
];

export const CONTACT = {
  address: "1900 S EADS ST Arlington VA",
  phoneNo: "+1 571 626 9033",
  email: "parithoshdharmapalan@gmail.com",
};
