import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
    <div className="bg-dark-200 min-h-screen font-space text-light-100">
      <div className="container mx-auto pt-[50px]">
      <Head>
        <title>Jason Wright - Web Developer</title>
        <meta name="description" content="The personal portfolio of Jason Wright (front end web developer)." />
        <link rel="icon" href="/favicon.ico" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
        <link href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&display=swap" rel="stylesheet" />
        
      </Head>

      <nav>

      </nav>
      
      <main className="grid grid-cols-12">
        <div className="col-span-6 col-start-2 row-span-full z-10 self-center">
          <h1 className="text-xl pb-12">
            Nice to meet you!<br/>I'm <span className="underline decoration-green underline-offset-[11px]">Jason Wright</span>.
          </h1>
          <p className="text-light-200 w-[580px]">
            Based in Manchester, UK, I'm a qualified management accountant with 8 years finance experience, looking for a career change.
            I'm seeking a front-end developer position using React or Next.js, but I am also open to PHP based roles. I have a solid foundation in object oriented programming 
            and MVC frameworks. 
          </p>
        </div>
        
        <div className="bg-dark-100 h-[720px] w-[550px] col-span-5 col-end-12 row-span-full z-0">
          
        </div>
          
        </main>
        </div>

    </div>
  )
}
