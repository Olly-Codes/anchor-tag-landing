import Navbar from "./Navbar";

function Header() {
  return (
    <header className="flex justify-center h-30">
        <div className="min-w-300 flex justify-between items-center">
            <a href="#">
                <img width={200} height={200} src="/logo-anchortag.svg" alt="Home page" />
            </a>
            <Navbar />
        </div>
    </header>
  );
}

export default Header;
