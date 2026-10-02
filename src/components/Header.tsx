import Navbar from "./Navbar";

function Header() {
  return (
    <header className="flex lg:justify-center h-50">
        <div className="w-full px-10 lg:w-300 flex justify-between items-center">
            <a href="#">
                <img width={200} height={200} src="/logo-anchortag.svg" alt="Home page" />
            </a>
            <img width={25} height={25} className="block lg:hidden cursor-pointer" src="/icon-hamburger.svg" alt="menu icon"/>
            <Navbar />
        </div>
    </header>
  );
}

export default Header;
