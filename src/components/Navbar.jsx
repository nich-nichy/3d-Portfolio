import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <header className='header flex justify-between px-20 py-1 bg-gray-700 text-white'>
      <NavLink to='/'>
        <img src="" alt='logo' className='w-18 h-18 object-contain' />
      </NavLink>
      <nav className='flex text-lg gap-7 font-medium'>
        <NavLink to='/about' className={({ isActive }) => isActive ? "text-blue-600" : "text-white"}>
          About
        </NavLink>
        <NavLink to='/projects' className={({ isActive }) => isActive ? "text-blue-600" : "text-white"}>
          Projects
        </NavLink>
      </nav>
    </header>
  );
};

export default Navbar;
