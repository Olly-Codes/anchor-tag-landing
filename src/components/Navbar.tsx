function Navbar() {

    const links = [
        {label: "Features"},
        {label: "Pricing"},
        {label: "Contact"},
    ];
  return (
    <nav>
        <ul>
            {links.map((link) => (
                <li key={link.label}>{link.label}</li>
            ))}
        </ul>
        <button type="button">Login</button>
    </nav>
  );
}

export default Navbar;
