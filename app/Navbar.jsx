import NavbarDemo from "./NavbarDemo";
import "./css/Navbar.css";
import logo from "../public/DCT_LOGO_NEW_V6.svg";
import Image from "next/image";

export default function Navbar() {
  return (
    <div className="flex flex-wrap ">
      <div className="text-white">
        <Image
          src="/DCT_LOGO_NEW_V6.svg"
          alt="dct logo"
          width={97} // Set the width of the image
          height={48} // Set the height of the image
          className=" ml-4 mt-3 "
        />
      </div>
      <NavbarDemo />
    </div>
  );
}
