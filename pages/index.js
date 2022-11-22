import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="bg-dark-200 min-h-screen font-space text-light-100 selection:bg-[#737996] text-center md:text-left">
      <div className="mx-auto container px-8 lg:px-0">
        <Head>
          <title>Jason Wright - Web Developer</title>
          <meta name="description" content="The personal portfolio of Jason Wright (front end web developer)." />
          <link rel="icon" href="/favicon.ico" />
        </Head>


        <nav className="grid grid-cols-12 py-8">
          <ul className="col-span-10 md:col-span-9 col-start-1 lg:col-start-2 flex z-40">
            <li className="mr-auto"><a className='text-m w-[170px] h-[50px]' href='#'>jasonwright</a></li>
            <li className="">
              <a className='w-[170px] h-[50px]' target="_blank" href='https://github.com/jwright90/'>
                <Image src='/../public/images/icon-github.svg' height={25} width={25} />
              </a>
            </li>
          </ul>

        </nav>

        <main>
          <section className="grid grid-rows-2 grid-cols-12 md:mt-[-180px] mt-[20px]">
            <div className="col-span-12 md:col-span-6 col-start-1 lg:col-start-2 row-span-full z-50 self-center relative md:pt-[200px] pt-[50px]">
              <p className="text-l xl:text-xl pb-12">
                Nice to meet you! I'm <span className="underline decoration-green underline-offset-[11px]">Jason Wright</span>.
              </p>
              <div className="absolute top-[-300px] sm:top-[-450px] md:top-[180px] left-[-500px] md:left-[-400px] md:top-[120px] md:left-[-360px]">
                <Image
                  src='/../public/images/pattern-rings.svg'
                  height={200}
                  width={600}
                  style={{ 'pointerEvents': 'none', 'userSelect': 'none' }}
                />
              </div>

              <p className="text-light-200 text-base md:w-[400px] xl:w-[580px]">
                Willing to relocate anywhere in the UK, I'm seeking my first frontend developer position using a Javascript or PHP framework.
                I have a solid foundation in the basics (HTML, CSS &amp; JS), object oriented programming and MVC. I am looking to change careers
                from management accounting to software development.
              </p>

              <button className="uppercase mt-12 py-4 tracking-widest border-b-2 border-green hover:text-green hover:cursor-pointer">
                Contact Me
              </button>
            </div>


            <div className="bg-dark-200 md:bg-dark-100 md:mt-[55px] min-h-[300px] sm:min-h-[450px] md:min-h-[720px] col-span-6 col-start-4 md:col-span-5 md:col-start-8 lg:col-start-7 row-end-1 row-span-1 md:row-span-full z-20 relative">
              <Image
                src='/../public/images/jason-profile-bw.png'
                fill
                style={{ 'pointerEvents': 'none', 'userSelect': 'none', 'objectFit': 'cover' }}
              />
              <div className="h-[120px] w-[120px] md:h-[80px] md:w-[80px] lg:h-[100px] lg:w-[100px] 2xl:h-[120px] 2xl:w-[120px] absolute bottom-[20px] left-[300px] sm:left-[425px] md:left-[250px] lg:left-[380px] xl:left-[480px] 2xl:left-[-50px]">
                <Image
                  src='/../public/images/pattern-circle.svg'
                  fill
                  style={{ 'pointerEvents': 'none', 'userSelect': 'none', 'objectFit': 'cover' }}
                />
              </div>
            </div>

            <div className="col-span-12 lg:col-span-10 col-start-1 lg:col-start-2 border-b-2 border-gray-600 mt-[100px]"></div>
          </section>

          <section className="grid grid-cols-12">
            <div className="col-span-6 col-start-2 row-span-full z-50 self-center relative pt-[200px]">

              <h2 className="text-xl">Projects</h2>
            </div>

          </section>

        </main>
      </div>

    </div>
  )
}
