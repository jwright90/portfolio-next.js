import Border from "./Border"

export default function Contact() {
  return (
    <>
      <div className="grid grid-cols-12 pb-8 pt-[80px]">
        <div className="col-span-12 lg:col-span-4 col-start-1 lg:col-start-2 mb-12 text-left">
          <h2 className="text-l sm:text-xl pb-8">Contact</h2>
          <p className="text-light-200 text-base sm:text-[21px] sm:leading-7">I would love to hear from you about any job opportunities and how I could help. Please fill in the form, and I&apos;ll get back to you as soon as possible.</p>
        </div>

        <div className="col-span-12 lg:col-span-5 col-start-1 lg:col-start-7 text-left">
          <form className="flex flex-col">
            <div className="py-4 flex flex-col gap-2">
              <label className="uppercase text-gray-400" htmlFor="name" >Name</label>
              <input className="bg-dark-100 border-b-2 border-b-gray-400 focus:outline-none focus:border-b-green py-2 autofill:p-2" type="text" name="name" />
            </div>

            <div className="py-4 flex flex-col gap-2">
              <label className="uppercase text-gray-400" htmlFor="email" >Email</label>
              <input className="bg-dark-100 border-b-2 border-b-gray-400 focus:outline-none focus:border-b-green py-2 autofill:p-2" type="email" name="email" />
            </div>

            <div className="py-4 flex flex-col gap-2">
              <label className="uppercase text-gray-400" htmlFor="message" >Message</label>
              <textarea className="bg-dark-100 border-b-2 border-b-gray-400 focus:outline-none focus:border-b-green py-2 autofill:p-2" name="message" />
            </div>


            <button className="mt-8 py-4 flex ml-auto text-base tracking-widest border-b-2 border-b-green uppercase focus:text-green hover:text-green hover:cursor-pointer focus:outline-none">
              Send Message
            </button>

          </form>
        </div>

        <Border />
      </div>
    </>
  )
}
