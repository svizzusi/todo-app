import { useState } from 'react'

const CreateTask = () => {

  const [taskName, setTaskName] = useState('');
  const [taskTime, setTaskTime] = useState('');
  const [taskDate, setTaskDate] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault()
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
          required>
        </input>
      </div>
      <div className="flex flex-col justify-between items-center gap-2">
        <label className="text-lg text-black ">Task Date</label>
        <input 
          className="bg-white rounded-lg w-full p-2" 
          type="date" 
          onChange={(e) => setTaskDate(e.target.value)} 
          value={taskDate} 
          required>
        </input>
      </div>
      <div className="flex flex-col justify-between items-center gap-2">
        <label className="text-lg text-black ">Task Time</label>
        <input 
          className="bg-white rounded-lg w-full p-2" 
          type="time" 
          onChange={(e) => setTaskTime(e.target.value)} 
          value={taskTime} 
          required>
        </input>
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
