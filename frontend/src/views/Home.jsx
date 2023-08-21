import { useState, useEffect } from "react";
import { BsTrash } from 'react-icons/bs'
import { AiOutlineEdit } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'



const Home = () => {

    const navigate = useNavigate();

    const [tasks, setTasks] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:3000/')
        .then(response => setTasks(response.data))
        .catch(err => console.log(err))
    }, [])
  return (
    <>
        <section className="flex flex-col gap-5 justify-between items-center">
            <h2 className="text-5xl font-bold pt-10">Hello</h2>
            <h2 className="text-5xl font-bold pb-10">Stephen!</h2>
            {tasks.map((task) => {
                return (
                    <article 
                        className='w-2/4 h-36 mx-auto mb-5 flex justify-between items-center gap-5 p-8 border-2 border-black rounded-lg shadow-2xl' 
                        key={task._id}>
                        <div>
                            <div className='text-lg font-bold'>{task.taskName}</div>
                            <div className='text-lg text-slate-500'>{task.taskDate}</div>
                            <div className='text-lg text-slate-500'>{task.taskTime}</div>
                        </div>
                        <div>
                            <button 
                                onClick={() => navigate('/updatetask')} 
                                className="text-xl p-2 text-blue-400 hover:text-blue-200"
                                ><AiOutlineEdit />
                            </button>
                            <button className="text-xl p-5 text-[rgb(220,89,87)] hover:text-red-200"><BsTrash /></button>
                        </div>
                    </article>
                )
            })}
        </section>
    </>
  )
};

export default Home;
