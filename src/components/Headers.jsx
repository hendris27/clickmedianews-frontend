import { Link } from "react-router-dom"
import logoBrand from "../assets/img/logo_brand.png"
import profile from "../assets/img/picture_login.png"
// import defaultProfile from "../assets/img/default_picture.jpg"

import { MdDensitySmall, MdNotificationsNone, MdOutlineClear} from "react-icons/md"
import { BsSearch } from "react-icons/bs"


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
                        to='/articles'
                        className='hover:text-[#19A7CE] font-bold'
                    >
                       Articles
                    </Link>
                    <Link
                        to='/categories'
                        className='hover:text-[#19A7CE] font-bold'
                    >
                       Category
                    </Link>

                  
                    <a
                        href=''
                        className='hover:text-[#19A7CE] font-bold'
                    >
                       About
                    </a>
                </div>
                <div className='flex gap-4 items-center'>
                    <div className='bg-white flex border-2 rounded-xl px-6 items-center gap-2 h-12'>
                        <div>
                            <BsSearch size={25} color='#19A7CE'/>
                        </div>
                        <div>
                            <input type='text' placeholder='Search ...' className='gap-3 h-11 w-full max-w-xs outline-none hover:outline-none hover:border-0' />
                        </div>
                        <div>
                            <button>  <MdOutlineClear size={25} color='#19A7CE'/></button>
                        </div>
                        
                    </div>
                    <div className='flex items-center'>
                        <MdNotificationsNone size={25} color='#19A7CE'/>
                    </div>
                    <div className='p-2'><div className='rounded-full overflow-hidden h-14 w-14 border-4 border-[#19A7CE]'>
                        <img className='objcet-cover h-full w-full' src={profile} alt='' />
                    </div></div>
                </div>
                <div className='flex items-center gap-8 font-bold hidden md:block md:flex'>
                    <div className='bg-[#19A7CE] rounded-[5px] w-24 h-8 flex items-center justify-center hover:bg-[#E5E5CB] '>
                        <button className='btn btn-primary text-white w-full h-[20px] '>
                            <Link
                                to='/signup'
                                className='font-bold'
                            >
                                    Sign Up
                            </Link>
                        </button>
                    </div>
                    <div>
                        <Link
                            to='/signin'
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
                    <div className='bg-[#19A7CE] rounded-[5px] w-24 h-8 flex items-center justify-center hover:bg-[#E5E5CB] '>
                        <button className='btn btn-primary text-white w-full h-[20px] '>
                            <Link
                                to='/signup'
                                className='font-bold'
                            >
                                    Sign Up
                            </Link>
                        </button>
                    </div>
                    <div>
                        <Link
                            to='/signin'
                            className='hover:text-[#19A7CE] font-bold'
                        >
                                Log In
                        </Link>
                    </div>
                </div> */}

                
                 
                <div className='dropdown dropdown-end md:hidden'>
                    <label tabIndex={0} className='btn m-1 bg-[#0E8388]'> <MdDensitySmall size={25} /></label>
                    
                </div>
                
            </header>
        </>
    )
}
export default Header