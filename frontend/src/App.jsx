import { Routes, Route } from 'react-router-dom'
import Home from './views/Home'
import CreateTask from './views/CreateTask'
import NavBar from './components/NavBar'
import UpdateTask from './views/Updatetask'

function App() {
  

  return (
    <>
    <NavBar />
      <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/createtask' element={<CreateTask />}></Route>
          <Route path='/updatetask/:id' element={<UpdateTask />}></Route>
      </Routes>
    </>
  )
}

export default App
