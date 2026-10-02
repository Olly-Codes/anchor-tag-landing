import Button from "./Button";

function Navbar() {

    const links = [
        {label: "Features", href: "Features"},
        {label: "Pricing", href: "Pricing"},
        {label: "Contact", href: "Contact"},
    ];
  return (
    <nav className="hidden lg:block">
        <div className="flex items-center gap-8 uppercase text-sm font-bold">
            {links.map((link) => (
                <a 
                    className="font-light text-neutral-blue hover:text-primary-red" 
                    href={`#${link.href}`} 
                    key={link.label}
                >{link.label}</a>
            ))}
            <Button 
                buttonText="Login" 
                padx="px-6" 
                pady="py-2" 
                bgColor="bg-primary-red" 
                textColor="text-white" 
                borderColor="border-primary-red" 
                hoverBgColor="hover:bg-white" 
                hoverTextColor="hover:text-primary-red" 
                buttonType="button"
                upperCase={true}
                boldness=""
            />
        </div>
        
    </nav>
  );
}

export default Navbar;
