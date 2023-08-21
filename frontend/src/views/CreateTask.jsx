import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const CreateTask = () => {

  const navigate = useNavigate()

  const [taskName, setTaskName] = useState('');
  const [taskTime, setTaskTime] = useState('');
  const [taskDate, setTaskDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
    axios.post('http://localhost:3000/createtask', {taskName, taskTime, taskDate})
    .then( () => navigate('/') )
    .catch(err => console.log(err)) 
  }

  return (
    <form 
      onSubmit={handleSubmit} 
      className="mt-20 flex flex-col justify-center items-center gap-5 bg-blue-400 p-20 w-2/4 h-1/3 m-auto rounded-lg"
    >
      <h1 
        className="text-2xl text-[rgb(220,89,87)] font-bold text-center"
        >CREATE NEW TASK
      </h1>
      <div className="flex flex-col justify-between items-center gap-2">
        <label className="text-lg text-black ">Task Name</label>
        <input
          className="bg-white rounded-lg w-full p-2" 
          type="text" 
          placeholder="Task Name" 
          onChange={(e) => setTaskName(e.target.value)} 
          value={taskName} 
          required
        />
      </div>
      <div className="flex flex-col justify-between items-center gap-2">
        <label className="text-lg text-black ">Task Date</label>
        <input
          className="bg-white rounded-lg w-full p-2" 
          type="date" 
          onChange={(e) => setTaskDate(e.target.value)} 
          value={taskDate} 
          required
        />
      </div>
      <div className="flex flex-col justify-between items-center gap-2">
        <label className="text-lg text-black">Task Time</label>
        <select
          className="bg-white rounded-lg w-full p-2"
          onChange={(e) => setTaskTime(e.target.value)}
          value={taskTime}
          required
        >
          <option value="">Select Time</option>
          <option value="12:00AM">12:00AM</option>
          <option value="12:15AM">12:15AM</option>
          <option value="12:30AM">12:30AM</option>
          <option value="12:45AM">12:45AM</option>
          <option value=">1:00AM">1:00AM</option>
          <option value=">1:15AM">1:15AM</option>
          <option value=">1:30AM">1:30AM</option>
          <option value=">1:45AM">1:45AM</option>
          <option value=">2:00AM">2:00AM</option>
          <option value=">2:15AM">2:15AM</option>
          <option value=">2:30AM">2:30AM</option>
          <option value=">2:45AM">2:45AM</option>
          <option value=">3:00AM">3:00AM</option>
          <option value=">3:15AM">3:15AM</option>
          <option value=">3:30AM">3:30AM</option>
          <option value=">3:45AM">3:45AM</option>
          <option value=">4:00AM">4:00AM</option>
          <option value=">4:15AM">4:15AM</option>
          <option value=">4:30AM">4:30AM</option>
          <option value=">4:45AM">4:45AM</option>
          <option value=">5:00AM">5:00AM</option>
          <option value=">5:15AM">5:15AM</option>
          <option value=">5:30AM">5:30AM</option>
          <option value=">5:45AM">5:45AM</option>
          <option value=">6:00AM">6:00AM</option>
          <option value=">6:15AM">6:15AM</option>
          <option value=">6:30AM">6:30AM</option>
          <option value=">6:45AM">6:45AM</option>
          <option value=">7:00AM">7:00AM</option>
          <option value=">7:15AM">7:15AM</option>
          <option value=">7:30AM">7:30AM</option>
          <option value=">7:45AM">7:45AM</option>
          <option value=">8:00AM">8:00AM</option>
          <option value=">8:15AM">8:15AM</option>
          <option value=">8:30AM">8:30AM</option>
          <option value=">8:45AM">8:45AM</option>
          <option value=">9:00AM">9:00AM</option>
          <option value=">9:15AM">9:15AM</option>
          <option value=">9:30AM">9:30AM</option>
          <option value=">9:45AM">9:45AM</option>
          <option value="10:00AM">10:00AM</option>
          <option value="10:15AM">10:15AM</option>
          <option value="10:30AM">10:30AM</option>
          <option value="10:45AM">10:45AM</option>
          <option value="11:00AM">11:00AM</option>
          <option value="11:15AM">11:15AM</option>
          <option value="11:30AM">11:30AM</option>
          <option value="11:45AM">11:45AM</option>
          <option value="12:00 PM">12:00 PM</option>
          <option value="12:15 PM">12:15 PM</option>
          <option value="12:30 PM">12:30 PM</option>
          <option value="12:45 PM">12:45 PM</option>
          <option value=">1:00 PM">1:00 PM</option>
          <option value=">1:15 PM">1:15 PM</option>
          <option value=">1:30 PM">1:30 PM</option>
          <option value=">1:45 PM">1:45 PM</option>
          <option value=">2:00 PM">2:00 PM</option>
          <option value=">2:15 PM">2:15 PM</option>
          <option value=">2:30 PM">2:30 PM</option>
          <option value=">2:45 PM">2:45 PM</option>
          <option value=">3:00 PM">3:00 PM</option>
          <option value=">3:15 PM">3:15 PM</option>
          <option value=">3:30 PM">3:30 PM</option>
          <option value=">3:45 PM">3:45 PM</option>
          <option value=">4:00 PM">4:00 PM</option>
          <option value=">4:15 PM">4:15 PM</option>
          <option value=">4:30 PM">4:30 PM</option>
          <option value=">4:45 PM">4:45 PM</option>
          <option value=">5:00 PM">5:00 PM</option>
          <option value=">5:15 PM">5:15 PM</option>
          <option value=">5:30 PM">5:30 PM</option>
          <option value=">5:45 PM">5:45 PM</option>
          <option value=">6:00 PM">6:00 PM</option>
          <option value=">6:15 PM">6:15 PM</option>
          <option value=">6:30 PM">6:30 PM</option>
          <option value=">6:45 PM">6:45 PM</option>
          <option value=">7:00 PM">7:00 PM</option>
          <option value=">7:15 PM">7:15 PM</option>
          <option value=">7:30 PM">7:30 PM</option>
          <option value=">7:45 PM">7:45 PM</option>
          <option value=">8:00 PM">8:00 PM</option>
          <option value=">8:15 PM">8:15 PM</option>
          <option value=">8:30 PM">8:30 PM</option>
          <option value=">8:45 PM">8:45 PM</option>
          <option value=">9:00 PM">9:00 PM</option>
          <option value=">9:15 PM">9:15 PM</option>
          <option value=">9:30 PM">9:30 PM</option>
          <option value=">9:45 PM">9:45 PM</option>
          <option value="10:00 PM">10:00 PM</option>
          <option value="10:15 PM">10:15 PM</option>
          <option value="10:30 PM">10:30 PM</option>
          <option value="10:45 PM">10:45 PM</option>
          <option value="11:00 PM">11:00 PM</option>
          <option value="11:15 PM">11:15 PM</option>
          <option value="11:30 PM">11:30 PM</option>
          <option value="11:45 PM">11:45 PM</option>
        </select>
      </div>
      <button 
        className="bg-[rgb(220,89,87)] p-2 text-white rounded-lg hover:bg-white hover:text-[rgb(220,89,87)] mt-5" 
        type="submit" 
        >Submit
      </button>
    </form>
  )
};

export default CreateTask;
