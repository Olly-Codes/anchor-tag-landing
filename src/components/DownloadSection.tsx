const cardContent = [
        {
            title: "Add to Chrome",
            description: "Minimum version 62",
            imageURL: "logo-chrome.svg",

        },
        {
            title: "Add to Firefox",
            description: "Minimum version 55",
            imageURL: "logo-firefox.svg",

        },
        {
            title: "Add to Opera",
            description: "Minimum version 46",
            imageURL: "logo-opera.svg",

        },

    ];

function DownloadSection() {

  return (
    <section>
        <div>
            <h2>Download the extension</h2>
            <p>Support for more browsers are planned. Do let us know if you have a favorite you'd like for Anchor Tag to include.</p>
        </div>

        <div>
            {cardContent.map((card) => (
                <div key={card.title}>
                    <img src={`/${card.imageURL}`} />
                    <h3>{card.title}</h3>
                    <p>{card.description}</p>

                    <button type="button">Add & Install Extension</button>
                </div>
            ))}
        </div>
    </section>
  );
}

export default DownloadSection;