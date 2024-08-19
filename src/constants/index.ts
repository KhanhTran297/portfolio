import familycircle from "../assets//familycircle.png";
import moviecircle from "../assets//moviecircle.png";
import multitenant from "../assets//multitenant.png";
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
    title: "Familycircle Website",
    image: familycircle,
    description:
      "A fully functional social website with features like post, comment, realtime chat, follow, bookmark, push notifications, user authentication and so on. Besides, it also has a course feature that allows users can follow and learn from the online course, and a evaluate health for mother and baby features. Moreover, it also has a admin page that allows admin can manage users, courses, posts, comments, and so on.",
    technologies: [
      "JavaScript",
      "React",
      "TanStack Query",
      "AntDesign",
      "Firebase",
      "WebSocket",
    ],
    github: "https://github.com/KhanhTran297/FamilyCircle",
    deploy: "https://familycircle.vercel.app/",
  },
  {
    title: "Moviecircle Website",
    image: moviecircle,
    description:
      "An web application that allows users can search for movies, view movie details, watch trailers, and rate movies like netflix or phimmoi.",
    technologies: ["TypeScript", "NextJS", "TanStack Query"],
    github: "https://github.com/KhanhTran297/Movie-Web",
    deploy: "https://moviecircle.vercel.app/",
  },
  {
    title: "Portfolio Website",
    image: porfolio,
    description:
      "A personal portfolio website showcasing projects, skills, and contact information.",
    technologies: ["Typescript", "React", "Framer Motion"],
    github: "https://github.com/KhanhTran297/portfolio",
    deploy: "https://portfolio-teal-alpha-10.vercel.app/",
  },
  {
    title: "Multi-tenant",
    image: multitenant,
    description:
      "Building multi-tenant platform allows businesses to manage and customize individual environments for each customer, optimizing efficiency and security. Grow with scalable capabilities and easily integrate into your system.",
    technologies: ["TypeScript", "NextJS", "AntDesign", "TanStack Query"],
    github: "https://github.com/KhanhTran297/multi_tenant",
    deploy: "https://multi-tenant-ten.vercel.app/",
  },
  {
    title: "ECircle website front-end",
    image: ecircle,
    description:
      "This is a e-commerce website about selling electronic devices. It's just front end, and have full responsive design and darkmode also.",
    technologies: ["TypeScript", "ReactJS", "Framer motion"],
    github: "https://github.com/KhanhTran297/ECircleWeb",
    deploy: "https://e-circle-web.vercel.app/",
  },
];

export const CONTACT = {
  address: "S803 Vinhomegrand park, Long Binh, Thu duc city, HCMC, Vietnam",
  phoneNo: "0934768673 ",
  email: "khanhtmg29072002@gmail.com",
};
