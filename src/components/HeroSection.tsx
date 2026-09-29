import Button from "./Button";

function HeroSection() {
  return (
    <section className="flex justify-center relative">
        <div className="grid grid-cols-2 max-w-300">
            <div className="flex flex-col justify-center">
                <h1 className="text-4xl font-bold mb-4">A Simple Anchor to your Bookmarks</h1>
                <p className="opacity-50 mb-4">Anchor Tag is a bookmark manager with a simple and clean interface that assists you in organizing your favorite websites. You simply open a new tab and see your organized bookmarks. Completely free.</p>
                <div className="flex gap-4">
                    <Button 
                        buttonText="Get it on Chrome" 
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
                    <Button 
                        buttonText="Get it on FireFox" 
                        padx="px-6" 
                        pady="py-2" 
                        bgColor="bg-primary-red" 
                        textColor="text-white" 
                        borderColor="border-primary-red" 
                        hoverBgColor="hover:bg-white" 
                        hoverTextColor="hover:text-primary-red" 
                        buttonType="button"
                        upperCase={false}
                        boldness="font-semibold"
                    />
                </div>
            </div>
            <div className="flex-2">
                <img src="/illustration-hero.svg" alt="Hero Section Illustration" />
            </div>
        </div>
        <div className="w-150 h-70 absolute right-0 bottom-0 bg-primary-blue -z-1 rounded-bl-4xl"></div>
    </section>
  );
}

export default HeroSection;