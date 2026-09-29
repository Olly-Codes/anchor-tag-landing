interface ButtonProps {
    buttonText: string;
    padx: string;
    pady: string;
    bgColor: string;
    textColor: string;
    borderColor: string;
    hoverBgColor: string;
    hoverTextColor: string;
    boldness: string;
    upperCase: boolean;
};

function Button({ buttonText, padx, pady, bgColor, textColor, borderColor, hoverBgColor, hoverTextColor, boldness = '', upperCase }: ButtonProps) {
    return (
        <button 
            className={`rounded-md cursor-pointer transition-all duration-300 ease ${padx} ${pady} ${bgColor} ${textColor} border-2 ${borderColor} ${hoverBgColor} ${hoverTextColor} ${boldness} ${upperCase ? 'uppercase' : ''}`}
        >
            {buttonText}
        </button>
    );
};

export default Button;