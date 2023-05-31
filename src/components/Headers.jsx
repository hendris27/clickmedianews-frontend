import { Link } from "react-router-dom"
import logoBrand from "../assets/img/logo_brand.png"
import defaultPicture from "../assets/img/default.jpg"
import { MdDensitySmall, MdNotificationsNone, MdOutlineClear } from "react-icons/md"
import { BsSearch } from "react-icons/bs"

import { useNavigate } from "react-router-dom"
import { logout as logoutAction } from "../redux/reducers/auth"
import { useDispatch, useSelector } from "react-redux"
import { Formik } from "formik"
import PropTypes from "prop-types"
import { useLocation } from "react-router-dom"
import {getProfileAction} from "../redux/actions/profile"

const Header = (props) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const token = useSelector((state) => state.auth.token)
    const [search, setSearch] = React.useState("")
    const location = useLocation()
    const  profile =useSelector((state) =>state.profile.data)


    const doLogout = () => {
        const confirmed = window.confirm("Are you sure you want to logout?")
        if (confirmed) {
            dispatch(logoutAction())
            navigate("/signin")
        }
    }

    const doSearch = async (values) => {
        const qs = new URLSearchParams(values).toString()
        navigate(`/searcharticles?${qs}`)
        setSearch(qs)
    }


    const {onSearch} = props

    React.useEffect(()=>{
        function searchResults(articelData){
            if(typeof onSearch === "function"){
                onSearch(articelData)
            }
        }
        searchResults(search)
    },[search, onSearch])

    return (
        <>
            <header className='flex justify-between items-center bg-white px-[50px] w-full fixed z-10 border-b-4'>
                <div className='h-[60px] w-[140px] flex items-center justify-center'>
                    <Link to='/' className='text-[#CDCDCD] hover:text-[#3738dc] font-bold h-full w-full'>
                        <img src={logoBrand} alt='logo' />
                    </Link>
                </div>

                <div className='font-bold gap-12 hidden md:flex'>
                    <Link to='/' className={location.pathname === "/" ? "active" : "text-[#CDCDCD] hover:text-[#3738dc] font-bold"}>
                        Home
                    </Link>
                    <Link to='/articles' className={location.pathname === "/articles" ? "active" : "text-[#CDCDCD] hover:text-[#3738dc] font-bold"}>
                        Articles
                    </Link>
                    <Link to='/categories' className={location.pathname === "/categories" ? "active" : "text-[#CDCDCD] hover:text-[#3738dc] font-bold"}>
                        Category
                    </Link>
                    <Link to='/' className={location.pathname === "/about" ? "active" : "text-[#CDCDCD] hover:text-[#3738dc] font-bold"}>
                        About
                    </Link>
                </div>
                <div className='flex gap-4 items-center'>
                    <Formik
                        initialValues={{
                            search: ""
                        }}
                        onSubmit={doSearch}>
                        {({
                            values,
                            handleBlur,
                            handleChange,
                            handleSubmit,
                            resetForm
                            
                        }) =>
                            (<form onSubmit={handleSubmit} className='bg-white flex border-2 rounded-xl px-6 items-center gap-2 h-12'>
                                <div>
                                    <button type='submit'><BsSearch size={25} color='#444cd4' className='pt-2' /></button>
                                </div>
                                <div>
                                    <input
                                        type='text'
                                        name='search'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        placeholder='Search ...'
                                        value={values.search} 
                                        className='gap-3 h-11 w-full max-w-xs outline-none hover:outline-none hover:border-0' />
                                </div>
                                <div>
                                    <button type='reset' onClick={() => resetForm()}><MdOutlineClear size={25} color='#444cd4' className='pt-2'/></button>
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
                            <label tabIndex={0} className='btn m-1 bg-white outline-none border-0 hover:bg-white '> <MdNotificationsNone size={25} color='#444cd4' /></label>
                            <ul tabIndex={0} className='dropdown-content menu p-2 shadow  bg-base-100 rounded-box w-[400px] px-2s flex flex-col items-center justify-between '>
                                <li><a className='hover:bg-white'>
                                    <div className='flex gap-8'>
                                        <div className='rounded-full overflow-hidden h-14 w-14 border-4 border-[#444cd4]'>
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
                                        <div className='rounded-full overflow-hidden h-14 w-14 border-4 border-[#444cd4]'>
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
                                    <li className='font-bold text-primary'><a className='hover:bg-white text-[#444cd4] hover:text-black'>See More</a></li>
                                </Link>
                            </ul>
                        </div>
                        <div>
                            <div className='dropdown dropdown-bottom dropdown-end'>
                                <label tabIndex={0} className='btn m-1 bg-white outline-none border-0 hover:bg-white '>
                                    <div className='rounded-full overflow-hidden h-14 w-14 border-4 border-[#444cd4]'>
                                        {profile.picture === null ? (
                                            <img src={defaultPicture} className='object-cover h-full w-full' />
                                        ) : <img src={profile?.picture} className='object-cover h-full w-full' />}
                                    </div>
                                </label>
                                <ul tabIndex={0} className='dropdown-content menu p-2 shadow  bg-base-100 rounded-box w-[250px] px-2s flex flex-col items-center justify-between '>
                                    {user === "superadmin" && <li><a className='hover:bg-white'>
                                        <Link to='/waitinglist'>
                                            <div className='font-bold text-medium hover:text-primary'> Waiiting list</div>
                                        </Link>
                                    </a></li>}
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
                    <div className=' items-center gap-8 font-bold hidden md:flex'>
                        <div className='bg-[#444cd4] rounded-[5px] w-24 h-8 flex items-center justify-center hover:bg-[#E5E5CB] '>
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
                                className='hover:text-[#444cd4] font-bold'
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

Header.propTypes = {
    onSearch: PropTypes.func
}

export default Header