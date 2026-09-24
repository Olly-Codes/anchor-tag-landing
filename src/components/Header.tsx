import Navbar from "./Navbar";

function Header() {
  return (
    <header>
        <a href="#">
            <img width={200} height={200} src="/logo-anchortag.svg" alt="Home page" />
        </a>
        <Navbar />
    </header>
  );
}

export default Header;
