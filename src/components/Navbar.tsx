function Navbar() {

    const links = [
        {label: "Features", href: "Features"},
        {label: "Pricing", href: "Pricing"},
        {label: "Contact", href: "Contact"},
    ];
  return (
    <nav>
        <div>
            {links.map((link) => (
                <a href={`#${link.href}`} key={link.label}>{link.label}</a>
            ))}
        </div>
        <button type="button">Login</button>
    </nav>
  );
}

export default Navbar;
