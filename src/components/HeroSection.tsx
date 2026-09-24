function HeroSection() {
  return (
    <section className="flex justify-center">
        <div className="grid grid-cols-2 max-w-300">
            <div className="flex flex-col justify-center">
                <h1 className="text-4xl font-bold mb-4">A Simple Anchor to your Bookmarks</h1>
                <p className="opacity-50 mb-4">Anchor Tag is a bookmark manager with a simple and clean interface that assists you in organizing your favorite websites. You simply open a new tab and see your organized bookmarks. Completely free.</p>
                <div className="flex gap-4">
                    <button 
                        type="button"
                        className="bg-primary-blue px-6 py-2 rounded-md text-white font-semibold"
                    >
                        Get it on Chrome
                    </button>
                    <button 
                        type="button"
                        className="bg-primary-red px-6 py-2 rounded-md text-white font-semibold"
                    >
                        Get it on FireFox
                    </button>
                </div>
            </div>
            <div className="flex-2">
                <img src="/illustration-hero.svg" alt="Hero Section Illustration" />
            </div>
        </div>
    </section>
  );
}

export default HeroSection;