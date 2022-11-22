import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="bg-dark-200 min-h-screen font-space text-light-100 selection:bg-[#737996]">
      <div className="mx-auto container px-8 lg:px-0">
        <Head>
          <title>Jason Wright - Web Developer</title>
          <meta name="description" content="The personal portfolio of Jason Wright (front end web developer)." />
          <link rel="icon" href="/favicon.ico" />
          <link rel="preconnect" href="https://fonts.googleapis.com" />
          <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
          <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />

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
          <section className="grid grid-cols-12 mt-[-180px]">
            <div className="col-span-6 col-start-1 lg:col-start-2 row-span-full z-50 self-center relative pt-[200px]">
              <p className="text-l xl:text-xl pb-12">
                Nice to meet you! I'm <span className="underline decoration-green underline-offset-[11px]">Jason Wright</span>.
              </p>
              <div className="absolute top-[180px] left-[-400px] md:top-[120px] md:left-[-360px]">
                <Image
                  src='/../public/images/pattern-rings.svg'
                  height={200}
                  width={600}
                  style={{ 'pointerEvents': 'none', 'userSelect': 'none' }}
                />
              </div>

              <p className="text-light-200 text-base w-[400px] xl:w-[580px]">
                Willing to relocate anywhere in the UK, I'm seeking my first frontend developer position using a Javascript or PHP framework.
                I have a solid foundation in the basics (HTML, CSS &amp; JS), object oriented programming and MVC. I am looking to change careers
                from management accounting to software development.
              </p>

              <button className="uppercase mt-12 py-4 tracking-widest border-b-2 border-green hover:text-green hover:cursor-pointer">
                Contact Me
              </button>
            </div>


            <div className="bg-dark-100 mt-[55px] min-h-[720px] col-span-5 col-start-8 lg:col-start-7 row-span-full z-20 relative">
              <Image
                src='/../public/images/jason-profile-bw.png'
                fill
                style={{ 'pointerEvents': 'none', 'userSelect': 'none', 'objectFit': 'cover' }}
              />
              <div className="h-[80px] w-[80px] lg:h-[100px] lg:w-[100px] 2xl:h-[120px] 2xl:w-[120px] absolute bottom-[20px] left-[225px] md:left-[250px] lg:left-[380px] xl:left-[480px] 2xl:left-[-50px]">
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
