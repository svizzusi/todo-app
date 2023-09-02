import { Link, useNavigate } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'
import { toast,ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Signup = () => {

  const navigate = useNavigate()

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');

  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (password !== confirmPassword) {
      toast('Passwords did not match, Please retry')
      setPassword('');
      setConfirmPassword('');
      return;
    } 

    setLoading(true);

    try {
      const response = await axios.post('http://localhost:3000/signup', { name, email, password });
      console.log(response);
      console.log(response.data);
      console.log(response.data.message)
      console.log(response.data.success)
      if (response.data.success === false) {
        toast(response.data.message)
      } else {
        navigate('/home');
        // Redirect or show success message
      }
      setLoading(false);
    } catch (err) {
      console.error(err);
      setLoading(false);
      // Handle error, show error message, etc.
    }
  };

    return (
      <>
        <ToastContainer 
          position="top-center"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        />  
        <form
          onSubmit={handleSubmit}
          className="mt-20 flex flex-col justify-center items-center gap-5 bg-blue-400 p-20 w-1/3 h-1/3 m-auto rounded-lg shadow-2xl"
        >
    
        <h1 
          className="text-2xl text-white font-bold text-center"
          >SIGN UP
        </h1>
    
        <div className="flex flex-col justify-between items-center gap-2">
          <label className="text-lg text-black ">Name</label>
          <input
            className="bg-white rounded-lg p-2 w-full" 
            type="text" 
            placeholder="Name"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </div>
        
        <div className="flex flex-col justify-between items-center gap-2">
          <label className="text-lg text-black "> Email</label>
          <input
            className="bg-white rounded-lg p-2 w-full" 
            type="text" 
            placeholder="Email Address"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
          />
        </div>
    
        <div className="flex flex-col justify-between items-center gap-2">
          <label className="text-lg text-black ">Password</label>
          <input
            className="bg-white rounded-lg p-2 w-full"
            type="text"
            placeholder="Password" 
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
          />
        </div>

        <div className="flex flex-col justify-between items-center gap-2">
          <label className="text-lg text-black "> Confirm Password</label>
          <input
            className="bg-white rounded-lg p-2 w-full"
            type="text"
            placeholder="Comfirm Password" 
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
            required
          />
        </div>

        <button 
          className="bg-[rgb(220,89,87)] p-2 text-white rounded-lg hover:bg-white hover:text-[rgb(220,89,87)] mt-5" 
          type="submit"
          disabled={loading} // Disable the button when loading 
          >
            {loading ? 'Signing Up...' : 'Sign Up'}
        </button>

        <p>Do you have an existing account? <Link to='/login'>Log In</Link></p>
    
      </form>
      </>
      )
    };

export default Signup;
