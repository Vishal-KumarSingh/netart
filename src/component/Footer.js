
import { FaFacebook } from "react-icons/fa";
import { IoGlobeOutline } from "react-icons/io5";
import { IoCall } from "react-icons/io5";
function Footer() {
  return (
    <footer>
       
      <p><span className="flex justify-center m-1"><IoCall size={25}/></span><span> Toll free 1800 200 1234</span></p>

      <p><span className="flex justify-center m-1"><FaFacebook size={25}/></span> <span>www.facebook.com/cripumps</span></p>

      <p><span className="flex justify-center m-1"><IoGlobeOutline size={25}/></span> <span>www.crigroups.com</span></p>
      
    </footer>
  );
}

export default Footer;