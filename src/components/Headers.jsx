import { Link } from "react-router-dom"
import logoBrand from "../assets/img/logo_brand.png"
// import profile from "../assets/img/picture_login.png"
// import defaultProfile from "../assets/img/default_picture.jpg"
import defaultPicture from "../assets/img/default.jpg"
import { MdDensitySmall, MdNotificationsNone, MdOutlineClear} from "react-icons/md"
import { BsSearch } from "react-icons/bs"
import React from "react"
import http from "../helpers/http"
import { useNavigate } from "react-router-dom"
import { logout as logoutAction } from "../redux/reducers/auth"
import { useDispatch, useSelector } from "react-redux"
import { Formik } from "formik"


const Header = () =>{
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [profile, setProfile] = React.useState({})
    const token = useSelector((state) => state.auth.token)   


    React.useEffect(() => {
        async function getProfileData() {
            const { data } = await http(token).get("/profile")
            setProfile(data.results)
        }
        getProfileData()
    }, [])

    const doLogout = () => {
        const confirmed = window.confirm("Are you sure you want to logout?")
        if (confirmed) {
            dispatch(logoutAction())
            navigate("/signin")
        }
    }
    
    const onSearch = (values) => {
        const qs = new URLSearchParams(values).toString()
        navigate(`/searcharticles?${qs}`)
    }
 
    return (
        <>
            <header className='flex justify-between items-center bg-white px-[50px] w-full fixed z-10 border-b-4'>
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
                    <Formik 
                        initialValues={{
                            search: ""
                        }}
                        onSubmit={onSearch}>
                        {({
                            handleBlur,
                            handleChange,
                            handleSubmit,
                        }) =>
                            ( <form onSubmit={handleSubmit} className='bg-white flex border-2 rounded-xl px-6 items-center gap-2 h-12'>
                                <div>
                                    <button>  <BsSearch size={25} color='#19A7CE'/></button>
                                </div>
                                <div>
                                    <input 
                                        type='text' 
                                        name='search'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder='Search ...' 
                                        className='gap-3 h-11 w-full max-w-xs outline-none hover:outline-none hover:border-0' />
                                </div>
                                <div>
                                    <button type='reset'  >  <MdOutlineClear size={25} color='#19A7CE'/></button>
                                </div>
                            
                            </form>
                            )}
                    </Formik>
                </div>
                
               
                {/* <div className='flex items-center gap-8 font-bold hidden md:block md:flex'>
                    <div className='bg-[#19A7CE] rounded-[5px] w-24 h-8 flex items-center justify-center hover:bg-[#E5E5CB] '>
                        <button className='btn btn-primary normal-case text-white w-full h-[20px] '>
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
                

                {token ? (
                    
                    <div className='flex justify-center items-center'>
                        <div className='dropdown dropdown-bottom dropdown-end'>
                            <label tabIndex={0} className='btn m-1 bg-white outline-none border-0 hover:bg-white '> <MdNotificationsNone size={25} color='#19A7CE'/></label>
                            <ul tabIndex={0} className='dropdown-content menu p-2 shadow  bg-base-100 rounded-box w-[400px] px-2s flex flex-col items-center justify-between '>
                                <li><a className='hover:bg-white'>
                                    <div className='flex gap-8'>
                                        <div className='rounded-full overflow-hidden h-14 w-14 border-4 border-[#19A7CE]'>
                                            <img className='object-cover h-full w-full' src={profile.picture} alt='' />
                                        </div>
                                        <div className='flex flex-col'>
                                            <div className='hover:text-primary font-bold'>Ryann just liked your post</div>
                                            <div>2m ago</div>
                                        </div>
                                    </div>    
                                </a></li>
                                <li><a className='hover:bg-white'>
                                    <div className='flex gap-8'>
                                        <div className='rounded-full overflow-hidden h-14 w-14 border-4 border-[#19A7CE]'>
                                            <img className='obj ct-cover h-full w-full' src={profile} alt='' />
                                        </div>
                                        <div className='flex flex-col'>
                                            <div className='hover:text-primary font-bold'>Ryann just liked your post</div>
                                            <div>2m ago</div>
                                        </div>
                                    </div>    
                                </a></li>
                                <div className='border-b-2 w-full hover:bg-white'></div>
                                <Link to='/notificaton'>
                                    <li className='font-bold text-primary'><a className='hover:bg-white hover:text-black'>See More</a></li>
                                </Link> 
                            </ul>
                        </div>
                        <div>
                            <div className='dropdown dropdown-bottom dropdown-end'>
                                <label tabIndex={0} className='btn m-1 bg-white outline-none border-0 hover:bg-white '> 
                                    <div className='rounded-full overflow-hidden h-14 w-14 border-4 border-[#19A7CE]'>
                                        {profile.picture === null ? (
                                            <img src={defaultPicture} className='object-cover h-full w-full'/>
                                        ) : <img src={profile.picture} className='object-cover h-full w-full'/>}
                                    </div>
                                </label>
                                <ul tabIndex={0} className='dropdown-content menu p-2 shadow  bg-base-100 rounded-box w-[250px] px-2s flex flex-col items-center justify-between '>
                                    <li><a className='hover:bg-white'>
                                        <Link to='/edit-profile'>
                                            <div className='font-bold text-medium hover:text-primary'> See Profile</div> 
                                        </Link>   
                                    </a></li>
                                    <div className='border-b-2 w-full hover:bg-white'></div>
                                    <li className='font-bold text-primary'><a className='hover:bg-white hover:text-red-500'>
                                        <div onClick={doLogout} className='text-[#ff0000] font-bold'>Logout</div></a></li>
                                </ul>
                            </div>
                            <div></div>
                        </div>
                    </div>
                  
                ) : (
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
                )}
                
                 
                <div className='dropdown dropdown-end md:hidden'>
                    <label tabIndex={0} className='btn m-1 bg-[#0E8388]'> <MdDensitySmall size={25} /></label>
                    
                </div>
                
            </header>
        </>
    )
}
export default Header