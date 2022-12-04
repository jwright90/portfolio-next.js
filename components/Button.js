const Button = ({ text, css, link = "", handleClick }) => {

  if (!link) {
    return (
      <button
        className={`${css} uppercase mt-12 py-4 text-base tracking-widest border-b-2 border-green hover:text-green hover:cursor-pointer`}
        onClick={handleClick}
      >
        {text}
      </button>
    )
  }

  else {
    return (
      <a href={link} >
        <button
          className={`${css} uppercase mt-12 py-4 text-base tracking-widest border-b-2 border-green hover:text-green hover:cursor-pointer`}
          onClick={handleClick}
        >
          {text}
        </button>
      </a>
    )
  }
}

export default Button