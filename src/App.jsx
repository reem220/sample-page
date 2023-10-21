
import './App.css'
import 'bootstrap/dist/css/bootstrap.css'
import Nav from './page/Nav'
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom'
import Footer from './page/Footer'
import Card from './page/Card'
import Phh from './page/Phh'
import Name from './page/Name'


function App() {
  

  return (
    <>
    <Router>
    <Nav/>
<Routes>
<Route index element ={<Name name="Pricing"/>}/>
<Route path='feat' element={<Name name="Features"/>}/>
<Route path='enter' element={<Name name="Enterprise"/>}/>
<Route path='supp' element={<Name name="Support"/>}/>




</Routes>
<Phh/>
<Card/>
<Footer/>
    </Router>





    
    </>


      )
}

export default App
