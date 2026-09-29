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
    buttonType: 'button' | 'submit' | 'reset';
    upperCase: boolean;
};

function Button({ 
    buttonText, 
    padx, 
    pady, 
    bgColor, 
    textColor, 
    borderColor, 
    hoverBgColor, 
    hoverTextColor, 
    boldness = '',
    buttonType = 'button', 
    upperCase 
}: ButtonProps) {
    return (
        <button
            type={buttonType} 
            className={`rounded-md cursor-pointer transition-all duration-300 ease ${padx} ${pady} ${bgColor} ${textColor} border-2 ${borderColor} ${hoverBgColor} ${hoverTextColor} ${boldness} ${upperCase ? 'uppercase' : ''}`}
        >
            {buttonText}
        </button>
    );
};

export default Button;