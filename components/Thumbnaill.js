import Button from './Button'
import Image from 'next/image'

const Thumbnail = ({ img }) => {
  return (
    <div className="relative">
      <div
        className="hidden xl:flex xl:flex-col absolute justify-center items-center text-white bg-dark-200 h-[100%] w-[100%] hover:opacity-80 opacity-0 transition-all duration-200">
        <Button text="View Project" />
        <Button text="View Code" />
      </div>
      <Image
        src={`/images/thumbnail-project-${img}-large.webp`}
        height={400}
        width={650}
      />

    </div>
  )
}

export default Thumbnail