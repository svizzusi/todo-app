import logo from "../assets/images/logo.png"
import { Link, useNavigate } from 'react-router-dom'



const NavBar = () => {

    const navigate = useNavigate()

  return (
    <nav className="flex justify-between items-center p-5 bg-black">
        <img 
            className="ml-5" 
            src={logo} 
            alt="Logo" 
        />
        <div className="flex gap-5 items-center justify-around">
            <button 
                onClick={() => navigate('/createtask')} 
                className="text-white p-1 bg-blue-400 rounded-lg hover:bg-white hover:text-blue-400"
                >Add New Task
            </button>
            <Link 
                to={'/'} 
                className="text-[rgb(220,89,87)] hover:text-red-300  mr-5"
                >Home
            </Link>
        </div>
    </nav>
  )
};

export default NavBar;

