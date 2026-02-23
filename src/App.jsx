import { Route, Routes } from 'react-router-dom'
import './App.css'
import  { Button, buttonVariants } from './components/ui/button'
import { Home } from './Pages/Home'
import { CandidateId } from './Pages/CandidateId'

function App() {
  return (
  <>   
   <Routes>
    <Route path='/' element ={<Home />} ></Route>
    <Route path='/candidate/:id' element ={<CandidateId />}></Route>
   </Routes>
  </>
  )
}

export default App
