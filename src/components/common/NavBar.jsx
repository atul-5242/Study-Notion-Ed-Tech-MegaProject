import React, { useState } from 'react'
import ImageLogo from '../../assets/Logo/Logo-Full-Light.png'
import {NavbarLinks} from '../../data/navbar-links';
import { Link, matchPath, useLocation } from 'react-router-dom';
import {AiOutlineShoppingCart} from "react-icons/ai"
import {IoIosArrowDropdownCircle} from "react-icons/io"
import ProfileDropdown from '../cores/Auth/ProfileDropDown'
import {apiConnector} from '../../services/apiconnector';
import {catogories} from '../../services/apis';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import {  useNavigate } from "react-router-dom"
// import { logout } from '../../services/operations/authAPI';
import { setUser } from '../../slices/profileSlice';


const NavBar = () => {
    const dispatch = useDispatch()
    // const navigate = useNavigate()

    // const {token} = useSelector((state)=>state.auth);
    // const {user} = useSelector((state)=>state.user);
    // const {totalItems} = useSelector((state)=>state.cart);

    const {token} = useSelector( (state) => state.auth );
    const {user} = useSelector( (state) => state.profile );
    const {totalItems} = useSelector( (state) => state.cart )
    console.log("USER...................",user)
    const location = useLocation();
    const matchRoute = (route)=>{
        return matchPath({path:route},location.pathname)
    }
    


    const [subLinks,setSubLinks] = useState([]);

    const fetchSubLinks =async ()=>{
        try {
            const result = await apiConnector("GET",catogories?.CATEGORIES_API);
            console.log("printing SubLinks Result :",result);
            setSubLinks(result.data.Category)
            // console.log(result.data.data);
        } catch (error) {
            console.log("Error Hai",error)
        }
    }
    
    useEffect(() => {
        fetchSubLinks();
        if (!user && localStorage.getItem('user')) {
            const storedUser = JSON.parse(localStorage.getItem('user'));
            dispatch(setUser(storedUser));
        }
    }, [dispatch, user]); // Include fetchSubLinks in the dependency array




    return (
        <div className='flex items-center pt-2 pb-2 gap-42 text-white justify-evenly border-b-[1px] border-richblack-700'>
            {/* Image */}
            {console.log("Length----------",subLinks.length)}
            {
            console.log("4252:",subLinks)}
            <div>
                <Link to={"/"}>
                
                    <img loading='lazy' src={ImageLogo} alt="" className='w-[80%] flex items-center ' />
                </Link>
                    
            </div>
            {/* Mid */}
            <div >
                <li  className='flex flex-row'>
                    <ul className='flex gap-6 text-[1rem] '>
                        {
                            NavbarLinks.map((element,index)=>{
                                return (
                                    <div className='text-base  font-normal' key={index}>
                                            {element.title==="Catalog"?(
                            <div className='relative flex items-center gap-2 group hover:cursor-pointer'>
                                <p>{element.title}</p>
                                <IoIosArrowDropdownCircle/>

                                <div className='invisible absolute left-[50%]
                                    translate-x-[-50%] translate-y-[40%]
                                 top-[50%] 
                                flex flex-col rounded-md bg-richblack-5  text-richblack-900
                                opacity-0 transition-all duration-200 group-hover:visible
                                group-hover:opacity-100 lg:w-[300px]'>

                                <div className='absolute left-[50%] top-0
                                translate-x-[80%]
                                translate-y-[-45%] h-6 w-6 rotate-45 rounded bg-richblack-5'>
                                </div>

                                {
                                    subLinks.length ? (
                                            subLinks.map( (subLink, index) => (
                                                <Link to={`/${subLink.name}`} key={index}>
                                                    <p>{subLink.name}</p>
                                                </Link>
                                            ) )
                                    ): (<div></div>)
                                }

                                </div>
                                                </div>
                                            ):
                                            (<Link to={element?.path} className={`${matchRoute(element?.path)?"text-yellow-5":"text-richblack-50"} `}>
                                                {
                                                    element?.title
                                                }
                                            </Link>)}
                                            
                                    </div>
                                )
                            })
                        }
                    </ul>
                </li>
            </div>
                    {/* Login/SignUp/Dashboard */}
        <div className='flex gap-x-4 items-center'>
            

{
    user && user?.accountType !== "Instructor" && (
        <div>
            <Link to="/dashboard/cart" className='relative'>
                <AiOutlineShoppingCart />
                {
                    totalItems > 0 && (
                        <span>
                            {totalItems}
                        </span>
                    )
                }
            </Link>
        </div>
       
    )
}
{
    token === null && (
        <div>
            <Link to="/login">
                <button className='border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md'>
                    Log in
                </button>
            </Link>
        </div>
        
    )
}
{
    token === null && (
        <div>
            <Link to="/signup">
                <button  className='border border-richblack-700 bg-richblack-800 px-[12px] py-[8px] text-richblack-100 rounded-md'>
                    Sign Up
                </button>
            </Link>
        </div>
        
    )
}
{/* <div onClick={()=>dispatch(logout(navigate))}>Hello</div> */}

{console.log("Profile---------------------------------",token)}

{
    token !== null && <ProfileDropdown/>
}

</div>
        </div>
    )
}

export default NavBar;