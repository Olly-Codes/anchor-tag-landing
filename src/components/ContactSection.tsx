import Button from "./Button";

function ContactSection() {
  return (
    <section className="p-20 flex flex-col justify-center items-center bg-primary-blue" id="Contact">
        <form className="text-white flex-col justify-center items-center">
            <div>
              <p className="lg:w-lg text-center mb-8 uppercase">You can join us below</p>
              <h4 className="text-3xl text-center mb-8">Stay up-to-date with how <br /> Anchor Tag is developing</h4>
            </div>

            <div className="flex flex-col lg:flex-row justify-center items-center gap-4">
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  className="bg-white px-4 py-2 rounded-md text-gray-400"
                  placeholder="Enter your email..."
                />
                <Button 
                      buttonText="Contact Us" 
                      padx="px-6" 
                      pady="py-2" 
                      bgColor="bg-primary-red" 
                      textColor="text-white" 
                      borderColor="border-primary-red" 
                      hoverBgColor="hover:bg-white" 
                      hoverTextColor="hover:text-primary-red"
                      buttonType="submit"
                      upperCase={false}
                      boldness="font-semibold"
                  />
            </div>
        </form>
    </section>
  );
}

export default ContactSection;
