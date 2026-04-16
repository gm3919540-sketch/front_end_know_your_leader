import { Route, Routes } from 'react-router-dom'
import './App.css'
import  { Button, buttonVariants } from './components/ui/button'
import { Home } from './Pages/Home'
import { CandidateId } from './Pages/CandidateId'
import SearchBox from './Pages/SearchBox'
import { ADMINPOST } from './Pages/ADMINPOST'
import Login from './Pages/Login'
import protectedroute from './ProtectedRoute/protectedroute'

function App() {
  return (
  <>   
   <Routes>
    <Route path='/' element ={<Home />} ></Route>
    <Route path='/candidate/:id' element ={<CandidateId />}></Route>
    <Route path='/Login' element={<Login/>}></Route>
    <Route path='/admin'element={<protectedroute>
      <ADMINPOST />
    </protectedroute>} />
   </Routes>
 

  </>
  )
}

export default App
