import Navbar from "./Navbar";
import MobileNav from "./MobileNav";
import { useState } from "react";
import { createPortal } from "react-dom";

function Header() {
  const [openNav, setOpenNav] = useState<boolean>(false);

  const handlOnClose = () => {
    setOpenNav(false);
  };

  return (
    <header className="flex lg:justify-center h-50">
        <div className="w-full px-10 lg:max-w-11/12 flex justify-between items-center lg:px-0">
            <a href="#">
                <img 
                  width={200} 
                  height={200} 
                  src="/logo-anchortag.svg" 
                  alt="Home page" 
                />
            </a>
            <button
              type="button"
              aria-label="Open menu"
              aria-expanded={openNav}
              className="block lg:hidden cursor-pointer"
              onClick={() => setOpenNav(true)}
            >
              <img width={25} height={25} src="/icon-hamburger.svg" alt="menu icon" />
            </button>
            <Navbar />

            {openNav && createPortal(
              <MobileNav onNavClose={handlOnClose} isNavOpen={openNav} />, document.body
            )}
        </div>
    </header>
  );
}

export default Header;
