
function Wrapper({ children, bg, additionalCss }) {
  return (
    <div className={`${bg} ${additionalCss} font-space text-light-100 selection:bg-[#737996] text-center md:text-left`}>
      <div className="mx-auto container px-8 lg:px-0">
        {children}
      </div>
    </div>
  )
}

export default Wrapper