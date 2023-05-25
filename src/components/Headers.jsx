import { Link } from "react-router-dom"
import logoBrand from "../assets/img/logo_brand.png"
// import defaultProfile from "../assets/img/default_picture.jpg"

import { MdDensitySmall } from "react-icons/md"

import { FiUser, FiUnlock, FiLogOut } from "react-icons/fi"
import {
    AiFillCreditCard,
    AiFillEdit,
    AiOutlinePlusCircle,
    AiOutlineUnorderedList,
    AiOutlineHeart,
    AiOutlineSetting,
    
}from "react-icons/ai"

const Header = () =>{

    return (
        <>
            <header className='flex justify-between items-center bg-white px-[50px] w-full fixed z-10'>
                <div className='h-[60px] w-[140px] flex items-center justify-center'>
                    <Link to='/' className='hover:text-[#19A7CE] font-bold h-full w-full'>
                        <img src={logoBrand} alt='logo' />
                    </Link>
                </div>
             
                <div className='flex font-bold gap-12 hidden md:flex md:block'>
                    <Link to='/' className='hover:text-[#19A7CE] font-bold'>
                        Home
                    </Link>
                    <Link
                        to=''
                        className='hover:text-[#19A7CE] font-bold'
                    >
                       Articles
                    </Link>

                    <a
                        href=''
                        className='hover:text-[#19A7CE] font-bold'
                    >
                        Category
                    </a>
                    <a
                        href=''
                        className='hover:text-[#19A7CE] font-bold'
                    >
                       About
                    </a>
                </div>
                <div className='flex items-center gap-8 font-bold hidden md:block md:flex'>
                    <div className='bg-[#19A7CE] rounded-[5px] w-20 h-8 flex items-center justify-center hover:bg-[#E5E5CB] '>
                        <button className='btn btn-primary text-white w-full h-[20px] '>
                            <Link
                                to='/signUp'
                                className='font-bold'
                            >
                                    Sign Up
                            </Link>
                        </button>
                    </div>
                    <div>
                        <Link
                            to='/login'
                            className='hover:text-[#19A7CE] font-bold'
                        >
                                Log In
                        </Link>
                    </div>
                </div>
                

                {/* {token ? (
                    
                    <div className='hidden md:block flex justify-center items-center'>
                        <button
                            className='flex justify-center items-center'
                        >
                            {profile?.picture && (
                                <img
                                    className='object-cover w-full h-full' src={
                                        profile?.picture?.startsWith("https") ? 
                                            profile.picture : (profile?.picture === null ?
                                                defaultProfile : `http://${import.meta.env.VITE_BACKEND_URL}/uploads/${profile?.
                                                    picture}`)} alt='profile'/>
                            )}
                            <div className='flex dropdown dropdown-bottom dropdown-end bg-white hover:bg-white'>
                 
                                <label tabIndex={0} className='hover:bg-white border-0 btn m-1 bg-transparent gap-2 flex justify-center items-center text-black'>
                                    <div> {profile?.fullName}</div>
                                    <AiFillCaretDown color='red'/>

                                </label>
                                <ul tabIndex={0} className='dropdown-content menu p-2 shadow bg-base-200 rounded-box w-52'>
                                    <Link to='/Profil'>
                                        <li><a className='font-bold'>See Profil</a></li>
                                    </Link>
                                    <li><a>
                                        <div className='flex'>
                                            <div>
                                                <FiLogOut color='red' size={25} />
                                            </div>
                                            <div onClick={doLogout} className='text-[#ff0000] font-bold'>Logout</div>
                                        </div> 
                                    </a></li>
                                </ul>
                            </div>
                        </button>

                    </div>
                  
                ) : ( */}
                {/* <div className='flex items-center gap-8 font-bold hidden md:block md:flex'>
                        <div>
                            <Link
                                to='/Login'
                                className='hover:text-[#19A7CE] font-bold'
                            >
                                Log In
                            </Link>
                        </div>
                        <div>
                            <button className='btn btn-primary text-white w-full h-[20px]'>
                                <Link
                                    to='/Register'
                                    className='hover:text-[#19A7CE] font-bold'
                                >
                                    Sign Up
                                </Link>
                            </button>
                        </div>
                    </div>
                )} */}

                
                 
                <div className='dropdown dropdown-end md:hidden'>
                    <label tabIndex={0} className='btn m-1 bg-[#0E8388]'> <MdDensitySmall size={25} /></label>
                    <ul tabIndex={0} className='dropdown-content menu p-2 shadow bg-gray-300 rounded-box w-52'>
                        <li><a>
                            <div className='flex gap-4'>
                                <div>
                                    <FiUser color='#0E8388' size={25} />
                                </div>
                                <div>
                                    <Link to='/Profil'className='font-bold hover:text-[#0E8388]'>
                                    Profile
                                    </Link>
                                </div>
                            </div>    
                        </a></li>
                        <li><a>
                            <div className='flex gap-4'>
                                <div>
                                    <AiFillCreditCard color='#19A7CE' size={25} />
                                </div>
                                <div>Card</div>
                            </div>
                        </a></li>
                        <li><a>
                            <div className='flex gap-4'>
                                <div>
                                    <AiFillEdit color='#19A7CE' size={25} />
                                </div>
                                <div>
                                    <Link to='/Profil'className='hover:text-[#0E8388] hover:text-[17px]'
                                    > Edit Profile </Link>
                                </div>
                            </div>
                        </a></li>
                        <li><a>
                            <div className='flex gap-4'>
                                <div>
                                    <FiUnlock color='#19A7CE' size={25} />
                                </div>
                                <div>
                                    <Link to='/ChangePassword' className='hover:text-[#0E8388] hover:text-[17px]'>
                                     Change Password
                                    </Link>
                                </div>
                            </div>
                        </a></li>
                        <li><a>
                            <div className='flex gap-4'>
                                <div>
                                    <AiOutlinePlusCircle color='#19A7CE' size={25} />
                                </div>
                                <Link
                                    to='/ManageEvent'
                                    className='hover:text-[#0E8388] hover:text-[17px]' >
                                 Create Event
                                </Link>
                            </div>
                        </a></li>
                        <li><a>
                            <div>
                                <AiOutlineUnorderedList color='#19A7CE' size={25} />
                            </div>
                            <Link
                                to='/MyBooking'
                                className='hover:text-[#0E8388] hover:text-[17px]' >
                                 My Booking
                            </Link>
                        </a></li>
                        <li><a>
                            <div>
                                <AiOutlineHeart color='#19A7CE' size={25} />
                            </div>
                            <Link
                                to='/MyWishlist'
                                className='hover:text-[#0E8388] hover:text-[17px]'
                            >
                        My Wishlist
                            </Link>
                        </a></li>
                        <li><a>
                            <div>
                                <AiOutlineSetting color='#19A7CE' size={25} />
                            </div>
                            <Link
                                to='/MyWishlist'
                                className='hover:text-[#0E8388] hover:text-[17px]'
                            >
                       Settings
                            </Link>
                        </a></li>
                        <li><a>
                            <div className='flex'>
                                <div>
                                    <FiLogOut color='red' size={25} />
                                </div>
                                <div  className='text-[#ff0000] font-bold'>Logout</div>
                            </div> 
                        </a></li>
                    </ul>
                </div>
                
            </header>
        </>
    )
}
export default Header