import Button from './Button'
import Image from 'next/image'

const Thumbnail = ({ img, linkText1, href1, href2 }) => {

  return (
    <div className="relative">
      <div
        className="hidden xl:flex xl:flex-col absolute justify-center items-center text-white bg-dark-200 h-[100%] w-[100%] hover:opacity-80 opacity-0 transition-all duration-200">
        <Button text={linkText1 || "View Project"} href={href1} />
        {href2 && <Button text="View Code" href={href2} />}

      </div>
      <Image
        src={`/images/thumbnail-project-${img}-large.webp`}
        height={400}
        width={650}
        alt={`Project Image ${img}`}
      />
    </div>
  )
}

export default Thumbnail