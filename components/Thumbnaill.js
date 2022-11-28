import Image from 'next/image'

const Thumbnail = ({ img }) => {
  return (
    <Image
      src={`/images/thumbnail-project-${img}-large.webp`}
      height={400}
      width={650}
    />
  )
}

export default Thumbnail