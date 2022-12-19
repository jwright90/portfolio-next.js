import Link from "next/link"

const Button = ({ text, css, href = "", handleClick }) => {

  if (href) {
    return (
      <Link href={href} >
        <button
          className={`${css} uppercase mt-12 py-4 text-base tracking-widest border-b-2 border-green hover:text-green hover:cursor-pointer`}
          onClick={handleClick}
        >
          {text}
        </button>
      </Link>
    )
  } else {
    return (
      <button
        className={`${css} uppercase mt-12 py-4 text-base tracking-widest border-b-2 border-green hover:text-green hover:cursor-pointer`}
        onClick={handleClick}
      >
        {text}
      </button>
    )
  }
}

export default Button