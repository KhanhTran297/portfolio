import familycircle from "../assets//familycircle.png";
import familycircle1 from "../assets//familycircle1.png";
import familycircle2 from "../assets//familycircle2.png";
import familycircle3 from "../assets//familycircle3.png";
import familycircle4 from "../assets//familycircle4.png";
import familycircle5 from "../assets//familycircle5.png";
import familycircle6 from "../assets//familycircle6.png";
import familycircle7 from "../assets//familycircle7.png";
import familycircle8 from "../assets//familycircle8.png";
import familycircle9 from "../assets//familycircle9.png";
import familycircle10 from "../assets//familycircle10.png";
import moviecircle from "../assets//moviecircle.png";
import moviecircle1 from "../assets//moviecircle1.png";
import moviecircle2 from "../assets//moviecircle2.png";
import moviecircle3 from "../assets//moviecircle3.png";
import moviecircle4 from "../assets//moviecircle4.png";
import moviecircle5 from "../assets//moviecircle5.png";
import multitenant from "../assets//multitenant.png";
import multitenant1 from "../assets//multitenant1.png";
import porfolio from "../assets//portfolio.png";
import ecircle from "../assets/ECircle.png";
export const DESCRIPTION_CONTENT = `Hello, my full name is Tran Minh Gia Khanh. I am a passionate front-end developer with a knack for crafting robust and scalable web applications. I have honed my skills in front-end technologies like ReactJS and NextJS, as well as some libraries like TanStack Query, Redux, Ant Design, React router dom, and so on. Moreover, I also have knowledge of Firebase and webSocket. My goal is to leverage my expertise to create innovative solutions that drive business growth and deliver exceptional user experiences.`;

export const ABOUT_TEXT = `I am a dedicated and versatile front-end developer with a passion for creating efficient and user-friendly web applications. I have worked with a variety of technologies, including ReactJS, NextJS, FireBase, and WebSocket. My journey in web development began with a deep curiosity for how things work, and it has evolved into a career where I continuously strive to learn and adapt to new challenges. I thrive in collaborative environments and enjoy solving complex problems to deliver high-quality solutions. Outside of coding, I enjoy staying active, exploring new technologies, and contributing to open-source projects.`;

export const EXPERIENCES = [
  {
    year: "06/2023 - 09/2023",
    role: "Frontend Developer Intern",
    company: "TMA Solutions",
    description: `Designed and developed user interfaces for library management web applications using React and Firebase for backend and handle data. Implemented responsive designs and optimized frontend performance.`,
    technologies: ["Javascript", "React.js", "Firbase", "AntDesign"],
  },
];

export const PROJECTS = [
  {
    id: "1",
    title: "Familycircle Website",
    member: "3",
    role: "Frontend Developer",
    responsibilities: [
      "Design UI",
      "Optimize applications for maximum speed and scalability",
      "Fetching API and handle data, state components",
      "Working with web socket for real-time chat and firebase for the push notification system",
      "Deploy",
      "Optimize UX",
    ],
    image: [
      familycircle,
      familycircle1,
      familycircle2,
      familycircle3,
      familycircle4,
      familycircle5,
      familycircle6,
      familycircle7,
      familycircle8,
      familycircle9,
      familycircle10,
    ],
    description:
      "A fully functional social website with features like post, comment, realtime chat, follow, bookmark, push notifications, user authentication and so on. Besides, it also has a course feature that allows users can follow and learn from the online course, and a evaluate health for mother and baby features. Moreover, it also has a admin page that allows admin can manage users, courses, posts, comments, and so on.",
    technologies: {
      frontend: [
        "JavaScript",
        "React",
        "TanStack Query",
        "AntDesign",
        "Redux",
        "TailwindCSS",
        "Firebase",
        "WebSocket",
      ],
      backend: ["Java", "Spring boot", "MySQL", "Docker", "AWS"],
    },
    account: [
      { role: "Admin", email: "admin@gmail.com", password: "12345678" },
      {
        role: "User",
        email: "giakhanh2972002@gmail.com",
        password: "29072002",
      },
      { role: "Admin", email: "expert@gmail.com", password: "12345678" },
    ],
    info: "If you want to test the website, you can use the account above to login. The server of website is deployed free, so it may take a few miniutes to start server and run the website.",
    github: "https://github.com/KhanhTran297/FamilyCircle",
    deploy: "https://familycircle.vercel.app/",
  },
  {
    id: "2",
    title: "Moviecircle Website",
    member: "1",
    role: "Frontend Developer",
    responsibilities: [
      "Design UI",
      "Optimize applications for maximum speed and scalability",
      "Fetching API and handle data, state components",
      "Deploy",
      "Optimize UX",
    ],
    image: [
      moviecircle,
      moviecircle1,
      moviecircle2,
      moviecircle3,
      moviecircle4,
      moviecircle5,
    ],
    description:
      "An web application that allows users can search for movies, view movie details, watch trailers, and rate movies like netflix or phimmoi.",
    technologies: {
      frontend: ["TypeScript", "NextJS", "TanStack Query"],
      backend: ["Public API"],
      link: "https://developer.themoviedb.org/reference/intro/getting-started",
    },
    github: "https://github.com/KhanhTran297/Movie-Web",
    deploy: "https://moviecircle.vercel.app/",
  },
  {
    id: "3",
    title: "Portfolio Website",
    member: "1",
    role: "Frontend Developer",
    responsibilities: [
      "Design UI",
      "Optimize applications for maximum speed and scalability",
      "Deploy",
      "Optimize UX",
    ],
    image: [porfolio],
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: {
      frontend: ["TypeScript", "ReactJS", "Framer motion"],
      backend: [],
    },
    github: "https://github.com/KhanhTran297/portfolio",
    deploy: "https://portfolio-teal-alpha-10.vercel.app/",
  },
  {
    id: "4",
    title: "Multi-tenant",
    member: "2",
    role: "Frontend Developer",
    responsibilities: [
      "Design UI",
      "Optimize applications for maximum speed and scalability",
      "Fetching API and handle data, state components",
      "Deploy",
      "Optimize UX",
    ],
    image: [multitenant, multitenant1],
    description:
      "Building multi-tenant platform allows businesses to manage and customize individual environments for each customer, optimizing efficiency and security. Grow with scalable capabilities and easily integrate into your system.",
    technologies: {
      frontend: ["TypeScript", "NextJS", "AntDesign", "TanStack Query"],
      backend: ["Java", "Spring boot", "PostgreSQL", "Docker", "AWS"],
    },
    account: [
      {
        role: "Admin",
        email: "admin",
        password: "12345678",
      },
    ],
    info: "If you want to test the website, you can use the account above to login. The server of website is deployed free, so it may take a few miniutes to start server and run the website.",
    github: "https://github.com/KhanhTran297/multi_tenant",
    deploy: "https://multi-tenant-ten.vercel.app/",
  },
  {
    id: "5",
    title: "ECircle website front-end",
    member: "1",
    role: "Frontend Developer",
    responsibilities: [
      "Design UI",
      "Optimize applications for maximum speed and scalability",
      "Deploy",
      "Optimize UX",
    ],
    image: [ecircle],
    description:
      "This is a e-commerce website about selling electronic devices. It's just front end, and have full responsive design and darkmode also.",
    technologies: {
      frontend: ["TypeScript", "ReactJS", "Framer motion"],
      backend: [],
    },
    github: "https://github.com/KhanhTran297/ECircleWeb",
    deploy: "https://e-circle-web.vercel.app/",
  },
];

export const CONTACT = {
  address: "S803 Vinhomegrand park, Long Binh, Thu duc city, HCMC, Vietnam",
  phoneNo: "0934768673 ",
  email: "khanhtmg29072002@gmail.com",
};
