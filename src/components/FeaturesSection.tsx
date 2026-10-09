import { useState } from "react";
import Button from "./Button";

 const tabsContent = [
        {
            tabTtitle: "Simple Bookmarking",
            description: {
                title: "Anchor a site in one click",
                body: "You can organize your bookmarks however you like. Categories give you control over how you manage your favorite sites.",
                imageURL: "illustration-features-tab-1.svg",
            },

        },
        {
            tabTtitle: "Speedy Searching",
            description: {
                title: "Intelligent Search",
                body: "Anchor Tag will help you find saved sites quickly without having to trawl through all your bookmarks.",
                imageURL: "illustration-features-tab-2.svg",
            },

        },
        {
            tabTtitle: "Easy Sharing",
            description: {
                title: "Share your Anchors",
                body: "Easily share your bookmarks with others. Create a shareable link that you can send at the click of a button.",
                imageURL: "illustration-features-tab-3.svg"
            },

        },

    ];

function FeaturesSection() {

    const [activeTab, setActiveTab] = useState(0);
    const [description, setDescription] = useState(tabsContent[0].description);

    const handleActiveTab = (index: number) => {
            setDescription(tabsContent[index].description);
            setActiveTab(index);
    };


  return (
    <section id="Features" className="h-auto relative lg:h-screen mt-20 lg:mt-0">
        <div className="w-full flex flex-col justify-center items-center">
            <h2 className="text-2xl font-bold mb-4 mt-8">Features</h2>
            <p className="w-full md:w-100 text-center opacity-50 mb-8 px-8 lg:px-0">Anchor Tag's aim is to ensure that you have a quick and easy experience when accessing the bookmarks of your favorite websites.</p>
        </div>

        <div className="flex flex-col items-center">
            <div className="flex flex-col sm:flex-row justify-center items-center gap-10 lg:gap-20 border-b border-gray-400">
                {tabsContent.map((tab, index) => (
                    <button 
                        type="button" 
                        key={index}
                        className={`hover:text-primary-red pb-4 font-medium cursor-pointer ${activeTab === index ? "text-primary-red border-b-4" : ""}`}
                        onClick={() => handleActiveTab(index)}
                    >
                        {tab.tabTtitle}
                    </button>
                ))}
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 mt-20 gap-20">
                <div className="relative flex items-center justify-center w-full">
                    <img key={activeTab} className="w-full max-w-xs md:max-w-md lg:max-w-xl h-auto" src={`/${description.imageURL}`} alt={`${description.title}'s illustration`} />
                    <div className="absolute top-[20%] right-[25%] left-[-100vw] -bottom-5 bg-primary-blue -z-1 rounded-full"></div>
                </div>
                <div className="flex flex-col justify-center items-start">
                    <h3 className="text-4xl font-bold mb-4 text-center lg:text-left w-full flex justify-center lg:block lg:w-auto">{description.title}</h3>
                    <p className="w-full text-center lg:text-left lg:w-100 opacity-50 mb-10 px-8 lg:px-0">{description.body}</p>
                    <div className="w-full flex justify-center lg:w-auto lg:block">
                        <Button 
                            buttonText="More info" 
                            padx="px-6" 
                            pady="py-2" 
                            bgColor="bg-primary-blue" 
                            textColor="text-white" 
                            borderColor="border-primary-blue" 
                            hoverBgColor="hover:bg-white" 
                            hoverTextColor="hover:text-primary-blue" 
                            buttonType="button"
                            upperCase={false}
                            boldness="font-semibold"
                        />
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default FeaturesSection;