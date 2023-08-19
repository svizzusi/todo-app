import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CreateTask from './pages/CreateTask'
import NavBar from './components/NavBar'
import UpdateTask from './pages/Updatetask'

function App() {
  

  return (
    <>
    <NavBar />
      <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/createtask' element={<CreateTask />}></Route>
          <Route path='/updatetask' element={<UpdateTask />}></Route>
      </Routes>
    </>
  )
}

export default App
