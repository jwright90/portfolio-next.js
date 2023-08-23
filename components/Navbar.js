import { useState } from 'react'


const Navbar = () => {

  const [socialFill, setSocialFill] = useState({
    'github': '#fff',
    'twitter': '#fff'
  });

  return (
    <nav className="grid grid-cols-12 grid-rows-2 md:grid-rows-1 py-8 justify-items-center md:justify-items-start">
      <ul className="col-span-12 md:col-span-6 col-start-1 lg:col-start-2 flex z-40">
        <li className="mr-auto hover:cursor-pointer">
          <a className='text-m w-[170px] h-[50px]'
            onClick={() => scroll({ top: 0, behavior: 'smooth' })}>
            jasonwright
          </a>
        </li>
      </ul>
      <ul className="col-span-12 pt-3 md:pt-0 md:col-span-3 md:col-start-11 flex z-40 gap-6 ">
        <li>
          <a className='w-[170px]' target="_blank" rel="noreferrer" href='https://github.com/jwright90/'>
            <svg
              onMouseEnter={() => setSocialFill({ ...socialFill, 'github': '#4EE1A0' })}
              onMouseLeave={() => setSocialFill({ ...socialFill, 'github': '#FFF' })}
              xmlns="http://www.w3.org/2000/svg"
              width="25" height="24">
              <path
                fill={socialFill.github} fillRule="evenodd"
                d="M12.304 0C5.506 0 0 5.506 0 12.304c0 5.444 3.522 10.042 8.413 11.672.615.108.845-.261.845-.584 0-.292-.015-1.261-.015-2.291-3.091.569-3.891-.754-4.137-1.446-.138-.354-.738-1.446-1.261-1.738-.43-.23-1.046-.8-.016-.815.97-.015 1.661.892 1.892 1.261 1.107 1.86 2.876 1.338 3.584 1.015.107-.8.43-1.338.784-1.646-2.738-.307-5.598-1.368-5.598-6.074 0-1.338.477-2.446 1.26-3.307-.122-.308-.553-1.569.124-3.26 0 0 1.03-.323 3.383 1.26.985-.276 2.03-.415 3.076-.415 1.046 0 2.092.139 3.076.416 2.353-1.6 3.384-1.261 3.384-1.261.676 1.691.246 2.952.123 3.26.784.861 1.26 1.953 1.26 3.307 0 4.721-2.875 5.767-5.613 6.074.446.385.83 1.123.83 2.277 0 1.645-.015 2.968-.015 3.383 0 .323.231.708.846.584a12.324 12.324 0 0 0 8.382-11.672C24.607 5.506 19.101 0 12.304 0Z" />
            </svg>
          </a>
        </li>
        <li className="pt-[3px]">
          <a className='w-[170px]' target="_blank" rel="noreferrer" href='https://twitter.com/jwrightwebdev'>
            <svg
              onMouseEnter={() => setSocialFill({ ...socialFill, 'twitter': '#4EE1A0' })}
              onMouseLeave={() => setSocialFill({ ...socialFill, 'twitter': '#FFF' })}
              xmlns="http://www.w3.org/2000/svg"
              width="24" height="20">
              <path fill={socialFill.twitter}
                d="M23.492 2.705a9.563 9.563 0 0 1-2.742.751 4.788 4.788 0 0 0 2.1-2.643 9.536 9.536 0 0 1-3.033 1.159 4.778 4.778 0 0 0-8.14 4.357 13.564 13.564 0 0 1-9.844-4.99 4.774 4.774 0 0 0-.646 2.4 4.778 4.778 0 0 0 2.124 3.977 4.765 4.765 0 0 1-2.163-.598v.061a4.778 4.778 0 0 0 3.832 4.684 4.812 4.812 0 0 1-2.158.082 4.78 4.78 0 0 0 4.462 3.316 9.584 9.584 0 0 1-5.932 2.045c-.38 0-.762-.022-1.14-.067a13.508 13.508 0 0 0 7.32 2.146c8.787 0 13.59-7.277 13.59-13.589 0-.205-.004-.412-.013-.617a9.71 9.71 0 0 0 2.381-2.471l.002-.003Z" />
            </svg>
          </a>
        </li>
      </ul>
    </nav >
  )
}

export default Navbar