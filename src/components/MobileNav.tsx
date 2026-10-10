import { useEffect } from "react";
import Button from "./Button";

interface MobileNavProps {
    onNavClose: () => void;
    isNavOpen: boolean;
}

function MobileNav({ onNavClose, isNavOpen }: MobileNavProps) {

    useEffect (() => {
        document.body.classList.add('fixed-position');

        return () => {
            document.body.classList.remove('fixed-position');
        };
    }, []);

    const mobileLinks = [
        {label: "Features", href: "Features"},
        {label: "Download", href: "Download"},
        {label: "Contact", href: "Contact"},
    ];

    return (
        <div className={`flex flex-col items-center absolute top-0 left-0 w-full h-full bg-neutral-blue/90 p-10 transition-all ${isNavOpen ? 'animate-slide' : ''}`}>
            <div className="flex justify-between w-full border-b border-b-white/50 pb-8">
                <img
                    width={220} 
                    height={220} 
                    src="/logo-anchortag-white.svg" 
                />
                <button
                    type="button"
                    aria-label="Close menu"
                    className="w-5 h-5 cursor-pointer"
                    onClick={() => onNavClose()}
                >
                    <img className="w-full" src="/icon-close.svg" />
                </button>
            </div>

            <div className="flex flex-col w-full mb-8">
                {mobileLinks.map((link) => (
                        <a 
                            href={`#${link.href}`} 
                            onClick={() => onNavClose()}
                            className="text-white text-2xl uppercase text-center p-4 border-b border-b-white/50"
                        >
                            {link.label}
                        </a>
                ))}
            </div>

            <div className="mb-20">
                <Button 
                    buttonText="Login" 
                    padx="px-35" 
                    pady="py-2" 
                    bgColor="transparent" 
                    textColor="text-white" 
                    borderColor="border-white" 
                    hoverBgColor="hover:bg-white" 
                    hoverTextColor="hover:text-primary-red" 
                    buttonType="button"
                    upperCase={true}
                    boldness=""
                />
            </div>

            <div className="flex gap-4">
                <svg className="fill-current text-white hover:text-primary-red cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24"><path fill-rule="evenodd" d="M22.675 0H1.325C.593 0 0 .593 0 1.325v21.351C0 23.407.593 24 1.325 24H12.82v-9.294H9.692v-3.622h3.128V8.413c0-3.1 1.893-4.788 4.659-4.788 1.325 0 2.463.099 2.795.143v3.24l-1.918.001c-1.504 0-1.795.715-1.795 1.763v2.313h3.587l-.467 3.622h-3.12V24h6.116c.73 0 1.323-.593 1.323-1.325V1.325C24 .593 23.407 0 22.675 0z"/></svg>
                <svg className="fill-current text-white hover:text-primary-red cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="20"><path fill-rule="evenodd" d="M24 2.557a9.83 9.83 0 0 1-2.828.775A4.932 4.932 0 0 0 23.337.608a9.864 9.864 0 0 1-3.127 1.195A4.916 4.916 0 0 0 16.616.248c-3.179 0-5.515 2.966-4.797 6.045A13.978 13.978 0 0 1 1.671 1.149a4.93 4.93 0 0 0 1.523 6.574 4.903 4.903 0 0 1-2.229-.616c-.054 2.281 1.581 4.415 3.949 4.89a4.935 4.935 0 0 1-2.224.084 4.928 4.928 0 0 0 4.6 3.419A9.9 9.9 0 0 1 0 17.54a13.94 13.94 0 0 0 7.548 2.212c9.142 0 14.307-7.721 13.995-14.646A10.025 10.025 0 0 0 24 2.557z"/></svg>
                
                <a href="https://github.com/Olly-Codes" target="_blank">
                    <svg className="fill-current text-white hover:text-primary-red cursor-pointer" xmlns="http://www.w3.org/2000/svg" width="24" height="24"  viewBox="0 0 16 16"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/></svg>
                </a>
            </div>
        </div>
    );
};

export default MobileNav;