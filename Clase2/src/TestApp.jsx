
import 'mdb-react-ui-kit/dist/css/mdb.min.css'
import './testApp.css'
import { Bootstrap } from './components/Bootstrap'
import { Mdb } from './components/Mdb'

function TestApp() {
  return (
    <div className='testApp_container'>
      <Bootstrap />
      <Mdb />
    </div>
  )
}

export default TestApp
