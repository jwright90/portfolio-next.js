import Border from "./Border"

export default function Contact() {
  return (
    <>
      <div className="grid grid-cols-12 pb-8">
        <div className="col-span-12 md:col-span-5 col-start-1 lg:col-start-2">
          <h2 className="text-l sm:text-xl py-8">Contact</h2>
          <p className="text-base font-normal text-light-200">I would love to hear from you about any job opportunities and how I could help. Please fill in the form, and I&apos;ll get back to you as soon as possible.</p>
        </div>

        <Border />
      </div>
    </>
  )
}
