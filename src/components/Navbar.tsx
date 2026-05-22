import React from 'react'
import { Button } from './ui/button'
import { NavLink, useNavigate } from 'react-router'
import useAuth from '@/auth/store';

function Navbar() {

const checkLogin = useAuth((state) => state.checkLogin);
const user = useAuth((state) => state.user);
const logout = useAuth((state) => state.logout);
const navigate = useNavigate();

  return (
    <nav className='py-5 dark:border-b border-gray-600 md:py-0 flex md:flex-row gap-4 md:gap-0 flex-col md:h-14 items-center justify-around p-4 dark:text-white'>
        {/* brand */}
        <div className='font-semibold items-center flex gap-2'>
            <span className='inline-block text-center h-6 w-6 rounded-md bg-gradient-to-r from-primary to-primary/40'>{"A"}</span>
            <span className='text-base tracking-tight'>Auth App</span>
        </div>

        <div className='flex  gap-4 items-center'> 

            {
                checkLogin() ? 
                (<>
                            <NavLink to={"/dashboard/profile"}>{user?.name}</NavLink>
                            
                            <Button onClick={()=>{logout(); navigate("/");}} size={"sm"} className='cursor-pointer' variant={'outline'}>Logout</Button>      
                </>) 
                : 
                (<>
                            <NavLink to={"/"} className={({isActive}) => isActive ? "text-primary" : ""}>
                                <a href="#">Home</a>
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