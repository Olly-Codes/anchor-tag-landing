function Footer() {

     const links = [
        {label: "Features", href: "Features"},
        {label: "Pricing", href: "Pricing"},
        {label: "Contact", href: "Contact"},
    ];

  return (
    <footer>
        <div>
            <img src="/logo-anchortag.svg" alt="Anchor Tag logo" />
            {links.map((link) => (
                <a href={`#${link.href}`} key={link.label}>{link.label}</a>
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
