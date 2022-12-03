import Head from 'next/head'
import Hero from '../components/Hero'
import Navbar from '../components/Navbar'
import Projects from '../components/Projects'
import Wrapper from '../components/layout/Wrapper'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Jason Wright - Web Developer</title>
        <meta name="description" content="The portfolio of Jason Wright, front end web developer." />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Wrapper bg="bg-dark-200" additionalCss="min-h-screen">
        <Navbar />
        <Hero />
        <Projects />
      </Wrapper>

      <Wrapper bg="bg-dark-100">
        <Contact />
        <Footer />
      </Wrapper>
    </>
  )
}
