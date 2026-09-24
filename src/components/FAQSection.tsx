import { useState } from "react";

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
        <div>
            <h2>Frequenty Asked Questions</h2>
            <p>Here are some of our FAQs. If youhave any other questions you'd like answered, pleasefeel free to email us</p>
        </div>

        <div className="transition-all duration-300">
            {FAQContent.map((faq, index) => (
                <>
                    <div 
                        key={faq.id}
                        onClick={() => handleOpen(index)}
                    >
                        {faq.question}
                        <span>
                            {faq.open ? (
                                <img src="/icon-close.svg" alt="Close faq icon" />
                            ) : (
                                <img src="/icon-arrow.svg" alt="Open faq icon" />
                            )}
                        </span>
                    </div>
                    <div 
                        key={index}
                        className={`transition-all duration-300 ease ${faq.open === true ? "opacity-100 mb-2" : "opacity-0 max-h-0 overflow-y-hidden"}`}
                    >
                        {faq.answer}
                    </div>
                </>
            ))}
        </div>

        <div>
            <button type="button">More info</button>
        </div>
    </section>
  );
}

export default FAQSection;