import React, { useEffect, useState } from 'react'
import Image from 'next/image';
import Border from "./Border"

export default function Contact() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const subject = 'Message via Portfolio';

  //   Form validation state
  const [errors, setErrors] = useState({});

  //   Setting button text on form submission
  const [buttonText, setButtonText] = useState("Send Message");

  // Setting success or failure messages states
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [showFailureMessage, setShowFailureMessage] = useState(false);


  // Set CSS for error messages
  const errorCSS = "pb-4 flex flex-col gap-2 text-red-400 delay-400 transition-all opacity-100 ease-linear";
  const errorCSSHidden = "p-0 m-0 flex flex-col gap-2 text-red-400 delay-400 transition-all opacity-0 ease-linear";
  const [nameErrorCSS, setNameErrorCSS] = useState(errorCSSHidden);
  const [emailErrorCSS, setEmailErrorCSS] = useState(errorCSSHidden);
  const [messageErrorCSS, setMessageErrorCSS] = useState(errorCSSHidden);

  // Set CSS for success message
  const successCSS = "flex flex-col gap-2 text-green delay-400 transition-all opacity-100 ease-linear";
  const successCSSHidden = "p-0 m-0 flex flex-col gap-2 text-green delay-400 transition-all opacity-0 ease-linear";

  // Validation check method
  const handleValidation = () => {
    let tempErrors = {};
    let isValid = true;
    setNameErrorCSS(errorCSSHidden);
    setEmailErrorCSS(errorCSSHidden);
    setMessageErrorCSS(errorCSSHidden);

    if (name.length <= 0) {
      tempErrors["name"] = true;
      setNameErrorCSS(errorCSS);
      isValid = false;
    }
    if (email.length <= 0) {
      tempErrors["email"] = true;
      setEmailErrorCSS(errorCSS);
      isValid = false;
    }
    if (message.length <= 0) {
      tempErrors["message"] = true;
      setMessageErrorCSS(errorCSS);
      isValid = false;
    }
    setErrors({ ...tempErrors });
    setShowSuccessMessage(false);
    console.log("errors", errors);
    return isValid;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    let isValidForm = handleValidation();

    if (isValidForm) {
      setButtonText("Sending Message");
      const res = await fetch("/api/sendgrid", {
        body: JSON.stringify({
          email: email,
          name: name,
          subject: subject,
          message: message,
        }),
        headers: {
          "Content-Type": "application/json",
        },
        method: "POST",
      });

      const { error } = await res.json();
      if (error) {
        console.log(error);
        setShowSuccessMessage(false);
        setShowFailureMessage(true);
        setButtonText("Send Message");
        return;
      }

      setShowSuccessMessage(true);
      setShowFailureMessage(false);
      setButtonText("Send Message");

    }

    console.log(name, email, message);
  }

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSuccessMessage(false);

      setName("");
      setEmail("");
      setMessage("");

    }, 2200);

    return () => clearTimeout(timer);
  }, [handleSubmit])

  return (
    <>
      <div className="grid grid-cols-12 pb-8 pt-[80px] relative">
        <div className="col-span-12 lg:col-span-4 col-start-1 lg:col-start-2 mb-12 text-left">
          <h2 className="text-l sm:text-xl pb-8">Contact</h2>
          <p className="text-light-200 text-base sm:text-[21px] sm:leading-7">I would love to hear from you about any job opportunities and how I could help. Please fill in the form, and I&apos;ll get back to you as soon as possible.</p>

          <div className="absolute bottom-[65px] left-[-400px] lg:top-[400px] lg:left-[80px] xl:left-[110px] md:left-[-360px] h-[120px] w-[450px] lg:h-[150px] lg:w-[35%]">
            <Image
              src='/images/pattern-rings.svg'
              fill
              style={{ 'pointerEvents': 'none', 'userSelect': 'none' }}
            />
          </div>
        </div>

        <div className="col-span-12 lg:col-span-5 col-start-1 lg:col-start-7 text-left">
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <div className="py-4 flex flex-col gap-2">
              <label className="uppercase text-gray-400" htmlFor="name" >Name</label>
              <input
                className="bg-dark-100 border-b-2 border-b-gray-400 focus:outline-none focus:border-b-green py-2 autofill:p-2"
                type="text"
                name="name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                value={name}
              />
            </div>
            <div className={nameErrorCSS}>Please enter your name</div>

            <div className="py-4 flex flex-col gap-2">
              <label className="uppercase text-gray-400" htmlFor="email" >Email</label>
              <input
                className="bg-dark-100 border-b-2 border-b-gray-400 focus:outline-none focus:border-b-green py-2 autofill:p-2"
                type="email"
                name="email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                value={email}
              />
            </div>
            <div className={emailErrorCSS}>Please enter your email</div>

            <div className="py-4 flex flex-col gap-2">
              <label className="uppercase text-gray-400" htmlFor="message" >Message</label>
              <textarea
                className="bg-dark-100 border-b-2 border-b-gray-400 focus:outline-none focus:border-b-green py-2 autofill:p-2"
                name="message"
                onChange={(e) => {
                  setMessage(e.target.value);
                }}
                value={message}
              />
            </div>
            <div className={messageErrorCSS}>Please enter a message</div>

            <div className="flex items-center mt-4 ">
              <div className={showSuccessMessage ? successCSS : successCSSHidden}>Your message has been sent!</div>
              <button type="submit" className="my-auto pb-4 whitespace-nowrap ml-auto text-[16px] sm:text-base tracking-widest border-b-2 border-b-green uppercase focus:text-green hover:text-green hover:cursor-pointer focus:outline-none">
                {buttonText}
              </button>
            </div>

          </form>

        </div>

        <Border />
      </div>
    </>
  )
}
