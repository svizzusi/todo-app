import logo from "../assets/images/logo.png"

const NavBar = () => {
  return (
    <nav className="flex justify-between items-center p-5 bg-black">
        <img className="ml-5" src={logo} alt="Logo" />
        <a className="text-[rgb(220,89,87)] hover:text-red-300  mr-5" href="#">Home</a>
    </nav>
  )
};

export default NavBar;

