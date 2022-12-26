import Border from './Border';
import Button from './Button';
import Image from 'next/image'


const handleClick = () => {
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })
}

const Hero = () => {
  return (
    <section className="grid grid-rows-2 grid-cols-12 md:mt-[-180px] mt-[-40px]">
      <div className="col-span-12 md:col-span-6 col-start-1 lg:col-start-2 row-span-full z-50 self-center relative md:pt-[200px] pt-[50px]">
        <p className="text-[32px] font-bold sm:text-l xl:text-xl pb-12 leading-10">
          Nice to meet you! I&apos;m <span className="underline decoration-green underline-offset-[11px]">Jason Wright</span>.
        </p>
        <div className="absolute top-[-300px] sm:top-[-450px] md:top-[180px] left-[-555px] md:left-[-400px] md:top-[120px] md:left-[-360px]">
          <Image
            src='/images/pattern-rings.svg'
            height={200}
            width={600}
            style={{ 'pointerEvents': 'none', 'userSelect': 'none' }}
            alt="Hero Image"
          />
        </div>

        <p className="text-[18px] sm:text-[21px] text-light-200 text-base md:w-[400px] xl:w-[580px]">
          I&apos;m seeking my first frontend developer position, pursuing a career change from management accounting. <br /><br />

          I&apos;ve developed a broad skillset coding as a hobby over the years using various languages and frameworks, both front and backend.
          My preference is Next.js, but I&apos;m open to PHP based roles or learning a new stack.
        </p>

        <Button text="Contact Me" handleClick={handleClick} />

      </div>


      <div className="relative bg-gradient-to-t from-dark-100 md:bg-dark-100 md:mt-[55px] min-h-[300px] sm:min-h-[450px] md:min-h-[720px] col-span-6 col-start-4 md:col-span-5 md:col-start-8 lg:col-start-7 row-end-1 row-span-1 md:row-span-full z-20 ">
        <Image
          src='/images/jason-profile-bw.png'
          fill
          style={{ 'pointerEvents': 'none', 'userSelect': 'none', 'objectFit': 'cover' }}
        />
        <div className="h-[110px] w-[110px] md:h-[80px] md:w-[80px] lg:h-[100px] lg:w-[100px] 2xl:h-[120px] 2xl:w-[120px] absolute top-[225px] sm:top-[550px] left-[210px] sm:left-[425px] md:left-[250px] lg:left-[380px] xl:left-[480px] 2xl:left-[-50px]">
          <Image
            src='/images/pattern-circle.svg'
            fill
            style={{ 'pointerEvents': 'none', 'userSelect': 'none', 'objectFit': 'cover' }}
          />
        </div>
      </div>

      <Border />
    </section>
  )
}

export default Hero