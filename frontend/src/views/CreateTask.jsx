import { useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const generateTimeOptions = () => {
  const options = [];

  for (let hour = 0; hour < 12; hour++) {
    for (let minute = 0; minute < 60; minute += 15) {
      const time12 = `${hour === 0 ? 12 : hour}:${minute.toString().padStart(2, '0')}`;
      const amOption = <option key={`${time12}AM`} value={`${time12} AM`}>{time12} AM</option>;
      options.push(amOption);
    }
  }

  for (let hour = 1; hour < 12; hour++) {
    for (let minute = 0; minute < 60; minute += 15) {
      const time12 = `${hour}:${minute.toString().padStart(2, '0')}`;
      const pmOption = <option key={`${time12}PM`} value={`${time12} PM`}>{time12} PM</option>;
      options.push(pmOption);
    }
  }

  return options;
};

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
          {generateTimeOptions()}
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
