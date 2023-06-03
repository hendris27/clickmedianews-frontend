import { Link } from "react-router-dom"
import logoBrand from "../assets/img/logo_brand.png"
import defaultPicture from "../assets/img/default.jpg"
import { MdDensitySmall, MdNotificationsNone, MdOutlineClear } from "react-icons/md"
import { BsSearch } from "react-icons/bs"
import React from "react"
import  { useState } from "react"
import http from "../helpers/http"
import { useNavigate } from "react-router-dom"
import { logout as logoutAction } from "../redux/reducers/auth"
import { useDispatch, useSelector } from "react-redux"
import { Formik } from "formik"
import PropTypes from "prop-types"
import { useLocation } from "react-router-dom"
import {getProfileAction} from "../redux/actions/profile"
import moment from "moment"
import { toast } from "react-toastify"


const Header = (props) => {
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const [requestAuthor, setRequestAuthor] = useState([])
    const [messageRequest, setMessageRequest] = useState("")
    const [user, setUser] = useState({})
    const [notif, setNotif] = useState([])
    const token = useSelector((state) => state.auth.token)
    const [search, setSearch] = React.useState("")
    const location = useLocation()
    const profile = useSelector((state) =>state.profile.data)

    const getDataNotif = React.useCallback(async () => {
        const { data } = await http(token).get("/notifications")
        setNotif(data.results)
    }, [token])

    React.useEffect(()=>{
        async function getRequestAuthor(){
            try {
                const {data} = await http(token).get("/request-author")
                setRequestAuthor(data.results.reqAuthor)
                setMessageRequest(data.results.message)
            } catch (error) {
                const message = error?.response?.data?.message
                if(message){
                    console.log(message)
                }
            }
        }getRequestAuthor()

        async function getUser(){
            try {
                const {data} =  await http(token).get("/admin/users/detail")
                if(data.results.role === "superadmin"){
                    setUser(data.results.role)
                }
            } catch (error) {
                const message = error?.response?.data?.message
                if(message){
                    console.log(message)
                }
            }
        }
        getUser()
        dispatch(getProfileAction(token))
        getDataNotif()
    },[dispatch, token, getDataNotif])

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

    async function doAccAuthor(userId, id){
        try {
            console.log(id)
            const {data} = await http(token).patch(`/request-author/${userId}`)
            if(data.results){
                await http(token).delete(`/request-author/${id}`)
            }
            location.reload()
            toast.success("Author Accepting", {
                toastId: "custom-id"
            })

        } catch (error) {
            const message = error?.response?.data?.message
            if(message){
                console.log(message)
            }
        }
    }

    async function doIgnoreAuthor(id){
        try {
            console.log(id)
            await http(token).delete(`/request-author/${id}`)
            location.reload()
            toast.success("Data is deleted", {
                toastId: "custom-id"
            })
            
        } catch (error) {
            const message = error?.response?.data?.message
            if(message){
                console.log(message)
            }
        }
    }

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

                {token ? (

                    <div className='flex justify-center items-center'>
                        <div className='dropdown dropdown-bottom dropdown-end'>
                            <label tabIndex={0} onClick={getDataNotif} className='btn m-1 bg-white outline-none border-0 hover:bg-white '> <MdNotificationsNone size={25} color='#444cd4' /></label>
                            <ul tabIndex={0} className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-[500px] px-2 flex flex-col items-center justify-between'>
                                <div className='h-[400px] overflow-y-scroll'>
                                    {user === "superadmin" && 
                                    <div className='flex justify-start p-5 w-full'>
                                        {requestAuthor.map(author =>{
                                            return(
                                                <div className='w-full flex flex-col justify-start' key={`author${author.id}`}>
                                                    <div className='flex gap-5 justify-start'>
                                                        <div className='rounded-full border-2 border-black overflow-hidden w-12 h-12'>
                                                            <img src={author.picture} className='object-cover h-full w-full' />
                                                        </div>
                                                        <div className='flex flex-col gap-2'>
                                                            <div className='flex flex-col'>
                                                                <label htmlFor='notification' className='flex gap-2 font-bold'>{author.fullName} sent you an {messageRequest}</label>
                                                                <label htmlFor='notification' className='text-gray-500'>{moment(author.createdAt).fromNow("mm-hh")}</label>
                                                            </div>
                                                            <div className='flex justify-start gap-3'>
                                                                <div><button onClick={()=> doAccAuthor(author.userId, author.id)} className='bg-primary p-2 px-6 hover:bg-green-500 rounded-xl'>Accept</button></div>
                                                                <div><button onClick={()=> doIgnoreAuthor(author.id)} className='bg-blue-200 p-2 px-6 hover:bg-red-300 rounded-xl' >Ignore</button></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>}
                                    <div>
                                        {notif.map(item => {
                                            return (
                                                <>
                                                    <li key={`notif-list-${item.id}`}>
                                                        <a className='hover:bg-white'>
                                                            <div className='flex gap-5 items-center'>
                                                                <div className='rounded-full border-2 border-gray-200 overflow-hidden w-12 h-12'>
                                                                    <img src={item.picture} className='object-cover w-full h-full' />
                                                                </div>
                                                                <div className='flex flex-1 flex-col'>
                                                                    <div className='hover:text-primary font-bold'>{item.fullName}</div>
                                                                    <div className='hover:text-primary font-bold'>{item.text}</div>
                                                                </div>
                                                            </div>
                                                        </a>
                                                    </li>
                                                </>
                                            )
                                        })}
                                    </div>
                                </div>
                                <div className='border-b-2 w-full hover:bg-white'></div>
                                <Link to='/notification'>
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
                                    <li>
                                        <Link to='/edit-profile' className='hover:bg-white'>
                                            <div className='font-bold text-medium hover:text-primary'>See My Profile</div>
                                        </Link>
                                    </li>
                                    {user === "superadmin" && <li>
                                        <Link to='/waitinglist' className='hover:bg-white'>
                                            <div className='font-bold text-medium hover:text-primary'>Waiting Lists</div>
                                        </Link>
                                    </li>}
                                    <div className='border-b-2 w-full hover:bg-white'></div>
                                    <li className='font-bold text-primary'>
                                        <a className='hover:bg-white'>
                                            <div onClick={doLogout} className='text-[#ff0000] font-bold'>
                                                Logout
                                            </div>
                                        </a>
                                    </li>
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