import { Button } from './ui/button'
import { NavLink, useNavigate } from 'react-router'
import useAuth from '@/auth/store';
import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";

function Navbar() {

const checkLogin = useAuth((state) => state.checkLogin);
const user = useAuth((state) => state.user);
const logout = useAuth((state) => state.logout);
const navigate = useNavigate();

const [darkMode, setDarkMode] = useState(
  localStorage.getItem("theme") !== "light"
);

useEffect(() => {

  const storedTheme = localStorage.getItem("theme");

  if (storedTheme === "light") {
    document.documentElement.classList.remove("dark");
    setDarkMode(false);
  } else {
    document.documentElement.classList.add("dark");
    setDarkMode(true);
  }

}, []);


const toggleTheme = () => {

  if (darkMode) {
    document.documentElement.classList.remove("dark");
    localStorage.setItem("theme", "light");
  } else {
    document.documentElement.classList.add("dark");
    localStorage.setItem("theme", "dark");
  }

  setDarkMode(!darkMode);
};

  return (
    <nav className='py-5 dark:border-b border-gray-600 sm:py-0 flex sm:flex-row gap-4 sm:gap-0 flex-col sm:h-14 items-center justify-around p-4 dark:text-white'>
        {/* brand */}
        <div className='font-semibold items-center flex gap-2'>
            <span className='inline-block text-center h-6 w-6 rounded-md bg-gradient-to-r from-primary to-primary/40'>{"A"}</span>
            <span className='text-base tracking-tight'>Auth App</span>
        </div>

        <div className='flex  gap-4 items-center'> 

                                        <Button
                                        onClick={toggleTheme}
                                        variant="outline"
                                        className="rounded-xl"
                                        >
                                        {darkMode ? (
                                            <Sun className="h-5 w-5" />
                                        ) : (
                                            <Moon className="h-5 w-5" />
                                        )}
                                        </Button>

            {
                
                checkLogin() ? 
                (<>
                            <NavLink to={"/dashboard/profile"}>{user?.name}</NavLink>
                            
                            <Button onClick={()=>{logout(); navigate("/");}} size={"sm"} className='cursor-pointer' variant={'outline'}>Logout</Button>      
                </>) 
                : 
                (<>
                            <NavLink to={"/"} className={({isActive}) => isActive ? "text-primary" : ""}>
                                Home
                            </NavLink>
                            <NavLink to={"/login"} className={({isActive}) => isActive ? "text-primary" : ""}>
                                <Button size={"sm"} className='cursor-pointer'>Login</Button>      
                            </NavLink>
                            <NavLink to={"/signup"} className={({isActive}) => isActive ? "text-primary" : ""}>
                                <Button size={"sm"} variant={"outline"}>Sign Up</Button>
                            </NavLink>
                </>)
            }

        </div>
    </nav>
  )
}

export default Navbar