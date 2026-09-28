function ContactSection() {
  return (
    <section className="p-20 flex flex-col justify-center items-center bg-primary-blue" id="Contact">
        <form className="text-white flex-col justify-center items-center">
            <p className="w-lg text-center mb-8 uppercase">You can join us below</p>
            <h4 className="text-3xl text-center mb-8">Stay up-to-date with how <br /> Anchor Tag is developing</h4>

            <div className="flex justify-center items-center gap-4">
                <input 
                  type="email" 
                  name="email" 
                  id="email" 
                  className="bg-white px-4 py-2 rounded-md text-gray-400"
                  placeholder="Enter your email..."
                />
                <button 
                  type="submit"
                  className="bg-primary-red px-6 py-2 rounded-md border-2 border-primary-red text-white font-semibold self-start cursor-pointer hover:bg-white hover:text-primary-red transition-all duration-300 ease"
                >
                  Contact Us
                </button>
            </div>
        </form>
    </section>
  );
}

export default ContactSection;
