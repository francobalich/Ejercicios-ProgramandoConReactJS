import ReactPng from './assets/react-logo.png'
import './App.css'

// EEjemplo con desestructuranción
const Component = ({num="0",name="test"}) => {
  return (
    <>
      <h1>Mi {num} página web</h1>
      <img src={ReactPng} className='img' />
      <p>Por {name}</p>
    </>
  )
}
export default Component


