import logo from "../assets/logo.jpg";
import { FaLinkedin, FaGithub, FaInstagram } from "react-icons/fa";
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between py-6 mb-20 ">
      <div className="flex items-center flex-shrink-0">
        <img src={logo} alt="" className="w-10 h-10 mx-2 rounded-full " />
      </div>
      <div className="flex justify-center gap-4 m-8 text-2xl intems-center">
        <a href="https://www.linkedin.com/in/khanhtran297/">
          <FaLinkedin className="cursor-pointer " />
        </a>
        <a href="https://github.com/KhanhTran297">
          <FaGithub className="cursor-pointer " />
        </a>
        <a href="https://www.instagram.com/ka.nart_/">
          <FaInstagram className="cursor-pointer " />
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
