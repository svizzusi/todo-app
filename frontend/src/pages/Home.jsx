import { useState } from "react";
import { BsTrash } from 'react-icons/bs'
import { AiOutlineEdit } from 'react-icons/ai'
import { useNavigate } from 'react-router-dom'



const Home = () => {

const navigate = useNavigate();

    const [tasks, setTasks] = useState(
        [
            {
                taskId: 1,
                taskName: "Read",
                taskDate: 'August, 19, 2023',
                taskTime: 20
            },
            {
                taskId: 2,
                taskName: "Journal",
                taskDate: 'August, 19, 2023',
                taskTime: 21
            },
            {
                taskId: 3,
                taskName: "Gym",
                taskDate: 'August, 19, 2023',
                taskTime: 2
            },
            {
                taskId: 4,
                taskName: "Code",
                taskDate: 'August, 19, 2023',
                taskTime: 9
            }
        ]
    );
  return (
    <>
        <section className="flex flex-col gap-5 justify-between items-center">
            <h2 className="text-5xl font-bold pt-10">Hello</h2>
            <h2 className="text-5xl font-bold pb-10">Stephen!</h2>
            {tasks.map((task) => {
                return (
                    <article 
                        className='w-2/4 h-36 mx-auto mb-5 flex justify-between items-center gap-5 p-8 border-2 border-black rounded-lg shadow-2xl' 
                        key={task.taskId}>
                        <div>
                            <div className='text-lg font-bold'>{task.taskName}</div>
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
