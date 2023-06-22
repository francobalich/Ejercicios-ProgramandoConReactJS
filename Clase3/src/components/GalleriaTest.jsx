import { Image } from './Image';
import imageData from '../data/images.json'
import { useEffect, useState } from 'react';

export const GalleriaTest = () => {
  const [columns, setColumns] = useState([])
  const [count, setCount] = useState(0)
  const loadImages = () => {
    let images = []
    let i = 0
    imageData.forEach(data => {
      images.push(<Image
        key={i}
        image={data.src}
        alt={data.alt} />)
      i++
    })
    return images
  }
  const generateColumns = () => {
    console.log(columns)
    let i=0;console.log(count);
    columns.forEach(element => {
      setCount((value) => value + 1)
    })
  }
  useEffect(() => {
    const images = loadImages()
    setColumns(images)
  }, [])

  useEffect(() => {
    generateColumns()
    console.log(count);
  }, [columns])


  return (
    <>
      {/* Muestra bien las imagenes */}
      <div>
        {Object.values({ columns }).map((value, index) => {
          return (
            <div key={index} className="col-lg-4 col-md-12 mb-4 mb-lg-0">
              <h2>{value}</h2>
              <hr />
            </div>
          );
        })}
      </div>
    </>
  )
}