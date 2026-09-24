function Footer() {

     const links = [
        {label: "Features"},
        {label: "Pricing"},
        {label: "Contact"},
    ];

  return (
    <footer>
        <div>
            <img src="/logo-anchortag.svg" alt="Anchor Tag logo" />
            {links.map((link) => (
                <a href="#" key={link.label}>{link.label}</a>
            ))}
        </div>
        <div>
            <img src="/icon-facebook.svg" alt="Facebook icon" />
            <img src="/icon-twitter.svg" alt="Twitter icon" />
        </div>
    </footer>
  );
}

export default Footer;
