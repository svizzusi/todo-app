const Login = () => {
  return (
    <form  
    className="mt-20 flex flex-col justify-center items-center gap-5 bg-blue-400 p-20 w-1/3 h-1/3 m-auto rounded-lg shadow-2xl"
  >
    <h1 
      className="text-2xl text-white font-bold text-center"
      >LOG IN
    </h1>

    <div className="flex flex-col justify-between items-center gap-2">
      <label className="text-lg text-black ">Email</label>
      <input
        className="bg-white rounded-lg w-96 p-2" 
        type="text" 
        placeholder="Email address" 
        required
      />
    </div>

    <div className="flex flex-col justify-between items-center gap-2">
      <label className="text-lg text-black ">Password</label>
      <input
        className="bg-white rounded-lg w-96 p-2"
        placeholder="Password" 
        type="text" 
        required
      />
    </div>

    <button 
      className="bg-[rgb(220,89,87)] p-2 text-white rounded-lg hover:bg-white hover:text-[rgb(220,89,87)] mt-5" 
      type="submit" 
      >Login
    </button>

  </form>
  )
};

export default Login;
