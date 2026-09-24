const cardContent = [
        {
            title: "Add to Chrome",
            description: "Minimum version 62",
            imageURL: "logo-chrome.svg",
            mt: 0

        },
        {
            title: "Add to Firefox",
            description: "Minimum version 55",
            imageURL: "logo-firefox.svg",
            mt: 10

        },
        {
            title: "Add to Opera",
            description: "Minimum version 46",
            imageURL: "logo-opera.svg",
            mt: 20

        },

    ];

function DownloadSection() {

  return (
    <section className="h-auto">
        <div className="w-full flex flex-col justify-center items-center">
            <h2 className="text-2xl font-bold mb-4 mt-20">Download the extension</h2>
            <p className="w-100 text-center opacity-50 mb-8">Support for more browsers are planned. Do let us know if you have a favorite you'd like for Anchor Tag to include.</p>
        </div>

        <div className="flex justify-center gap-12">
            {cardContent.map((card) => (
                <div className={`h-100 w-70 flex flex-col relative items-center shadow-sm bg-white p-6 rounded-lg mt-${card.mt}`} key={card.title}>
                    <img className="mb-8" src={`/${card.imageURL}`} />
                    <h3 className="font-bold mb-4">{card.title}</h3>
                    <p className="opacity-50 text-sm mb-20">{card.description}</p>
                    <img src="/bg-dots.svg" />
                    <button className="bg-primary-blue px-6 py-2 rounded-md text-white font-semibold self-start cursor-pointer absolute bottom-5 left-2 right-2" type="button">Add & Install Extension</button>
                </div>
            ))}
        </div>
    </section>
  );
}

export default DownloadSection;