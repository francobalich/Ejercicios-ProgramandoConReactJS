
export const Image = ({image,alt}) => {
  return (
    <img
      src={image}
      className="w-100 shadow-1-strong rounded mb-4"
      alt={alt}
    />
  )
}
