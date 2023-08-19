import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import CreateTask from './pages/CreateTask'
function App() {
  

  return (
    <>
      <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/createtask' element={<CreateTask />}></Route>
      </Routes>
    </>
  )
}

export default App
