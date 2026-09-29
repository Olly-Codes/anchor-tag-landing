import { useState } from "react";
import Button from "./Button";

function FAQSection() {

    const [FAQContent, setFAQContent] = useState([
        {
            id: crypto.randomUUID(),
            question: "What is a bookmark?",
            answer: "A bookmark is a saved link to a specific website address that lets you return to the page quickly in the future",
            open: true,

        },
        {
            id: crypto.randomUUID(),
            question: "How can I request a browser?",
            answer: "You can simply contact our support email ollysupport@gmail.com (please don't actually email this email...yet).",
            open: false,

        },
        {
            id: crypto.randomUUID(),
            question: "Is there a mobile app?",
            answer: "As of right now there are no plans for a mobile app. It is possible that your browser might support the extension if it can install extensions already.",
            open: false,
        },
        {
            id: crypto.randomUUID(),
            question: "What about other Chromium browsers?",
            answer: "We are expanding the support for Anchor Tag on different Chromium browsers. It is likely though that it should work on a Chromium browser besides Chrome.",
            open: false,
        },

    ]);

    const handleOpen = (index: number) => {
        setFAQContent((prevFAQContent) => {
         return prevFAQContent.map((faq, i) => {
            if (i === index) {
                return {...faq, open: !faq.open}
            }
            return faq;
         })   
        })
    };

  return (
    <section>
        <div className="w-full flex flex-col justify-center items-center">
            <h2 className="text-2xl font-bold mb-4 mt-20">Frequenty Asked Questions</h2>
            <p className="w-150 text-center opacity-50 mb-8">Here are some of our FAQs. If you have any other questions you'd like answered, please feel free to email us</p>
        </div>

        <div className="flex flex-col items-center ransition-all duration-300">
            {FAQContent.map((faq, index) => (
                <div className="max-w-120 flex flex-col justify-center p-4 border-b-2 border-gray-200">
                    <div 
                        key={faq.id}
                        className={`flex justify-between items-center cursor-pointer hover:text-primary-red ${faq.open ? 'text-primary-red' : ''}`}
                        onClick={() => handleOpen(index)}
                        
                    >
                        {faq.question}
                        <span>
                            {faq.open ? (
                                <svg className="stroke-current rotate-180 text-primary-red" xmlns="http://www.w3.org/2000/svg" width="18" height="12"><path fill="none"  stroke-width="3" d="M1 1l8 8 8-8"/></svg>
                            ) : (
                                <img src="/icon-arrow.svg" alt="Open faq icon" />
                            )}
                        </span>
                    </div>
                    <div 
                        key={index}
                        className={`transition-all duration-300 ease ${faq.open === true ? "opacity-50 mb-2 mt-4" : "opacity-0 max-h-0 overflow-y-hidden"}`}
                    >
                        {faq.answer}
                    </div>
                </div>
            ))}
        </div>

        <div className="flex justify-center mt-10 mb-20">
            <Button 
                buttonText="More info" 
                padx="px-6" 
                pady="py-2" 
                bgColor="bg-primary-blue" 
                textColor="text-white" 
                borderColor="border-primary-blue" 
                hoverBgColor="hover:bg-white" 
                hoverTextColor="hover:text-primary-blue" 
                upperCase={false}
                boldness="font-semibold"
            />
        </div>
    </section>
  );
}

export default FAQSection;