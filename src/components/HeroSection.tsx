import Button from "./Button";

function HeroSection() {
  return (
    <section className="flex justify-center lg:relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 lg:max-w-11/12">
            <div className="order-2 lg:order-1 flex flex-col justify-center">
                <h1 className="text-4xl font-bold mb-4 text-center lg:text-left mt-20 lg:mt-0">A Simple Anchor to your Bookmarks</h1>
                <p className="opacity-50 mb-4 text-center lg:text-left px-8 lg:px-0">Anchor Tag is a bookmark manager with a simple and clean interface that assists you in organizing your favorite websites. You simply open a new tab and see your organized bookmarks. Completely free.</p>
                <div className="flex flex-col items-center gap-4 w-full justify-center lg:justify-normal lg:w-auto lg:items-stretch lg:flex-row">
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
            <div className="flex-2 order-1 lg:order-2 relative lg:static flex justify-center">
                <img className="w-150 lg:w-auto" src="/illustration-hero.svg" alt="Hero Section Illustration" />
                <div className="block lg:hidden w-sm h-3/4 md:w-150 md:h-80 absolute right-0 bottom-0 bg-primary-blue -z-1 rounded-bl-4xl"></div>
            </div>
        </div>
        <div className="hidden lg:block w-sm h-3/4 absolute right-0 bottom-0 bg-primary-blue -z-1 rounded-bl-4xl"></div>
    </section>
  );
}

export default HeroSection;