import { useState } from "react";

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
    <section>
        <div>
            <h2>Features</h2>
            <p>Anchor Tag's aim is to ensure that you have a quick and easy experience when accessing the bookmarks of your favorite websites.</p>
        </div>

        <div>
            {tabsContent.map((tab, index) => (
                <button 
                    type="button" 
                    key={index}
                    className={activeTab === index ? "text-red-300" : "" }
                    onClick={() => handleActiveTab(index)}
                >{tab.tabTtitle}</button>
            ))}
            <div>
                <div>
                    <img src={`/${description.imageURL}`} alt={`${description.title}'s illustration`} />
                </div>
                <div>
                    <h3>{description.title}</h3>
                    <p>{description.body}</p>
                </div>
                 <div>
                    <button type="button">More info</button>
                </div>
            </div>
        </div>
    </section>
  );
}

export default FeaturesSection;