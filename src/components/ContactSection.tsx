import React, { useState } from "react";
import Button from "./Button";

function ContactSection() {

  const [email, setEmail] = useState<string>("");
  const [error, setError] = useState<string>("");

  const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  
  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);
  };

  const handleSubmit = (e: React.SubmitEvent) => {
    e.preventDefault();

    if (!emailRegex.test(email)) {
      setError("Woops, make sure it is an email");
      return;
    } else {
      setError("");
    }
  };
  return (
    <section className="p-20 flex flex-col justify-center items-center bg-primary-blue" id="Contact">
        <form 
          onSubmit={handleSubmit}
          noValidate
          className="text-white flex-col justify-center items-center"
        >
            <div>
              <p className="lg:w-lg text-center mb-8 uppercase">You can join us below</p>
              <h4 className="text-3xl text-center mb-8">Stay up-to-date with how <br /> Anchor Tag is developing</h4>
            </div>

            <div className="flex flex-col lg:flex-row justify-center items-center lg:items-start gap-4">
                <div className="flex flex-col relative">
                  <input 
                    type="email" 
                    name="email" 
                    id="email"
                    value={email}
                    onChange={handleEmailChange}
                    className={` bg-white px-4 py-2 rounded-sm text-neutral-blue placeholder:text-gray-400 ${error ? 'border-3 border-primary-red' : ''}`}
                    placeholder="Enter your email adress"
                    aria-invalid={Boolean(error)}
                    aria-describedby={error ? "email-error" : undefined}
                  />
                  {error && <img src="/icon-error.svg" alt="Error icon" className="absolute top-[15%] right-[5%]" />}
                  {error && <span id="email-error" role="alert" className=" bg-primary-red text-white text-xs px-2 py-2 rounded-bl-md rounded-br-md">{error}</span>}
                </div>
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
