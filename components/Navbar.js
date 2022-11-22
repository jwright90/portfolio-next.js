import Image from 'next/image'

const Navbar = () => {
  return (
    <nav className="grid grid-cols-12 grid-rows-2 md:grid-rows-1 py-8 justify-items-center md:justify-items-start">
      <ul className="col-span-12 md:col-span-6 col-start-1 lg:col-start-2 flex z-40">
        <li className="mr-auto"><a className='text-m w-[170px] h-[50px]' href='#'>jasonwright</a></li>
      </ul>
      <ul className="col-span-12 pt-3 md:pt-0 md:col-span-3 md:col-start-11 flex z-40">
        <li className="">
          <a className='w-[170px] h-[50px]' target="_blank" href='https://github.com/jwright90/'>
            <Image src='/images/icon-github.svg' height={25} width={25} />
          </a>
        </li>
      </ul>
    </nav >
  )
}

export default Navbar