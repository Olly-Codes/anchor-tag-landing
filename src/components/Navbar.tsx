function Navbar() {

    const links = [
        {label: "Features", href: "Features"},
        {label: "Pricing", href: "Pricing"},
        {label: "Contact", href: "Contact"},
    ];
  return (
    <nav>
        <div className="flex items-center gap-8 uppercase text-sm font-bold">
            {links.map((link) => (
                <a className="font-light text-neutral-blue" href={`#${link.href}`} key={link.label}>{link.label}</a>
            ))}
            <button 
                type="button" 
                className="uppercase px-6 py-2 rounded-md text-white bg-primary-red cursor-pointer">Login</button>
        </div>
        
    </nav>
  );
}

export default Navbar;
