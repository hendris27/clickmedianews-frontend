import Header from "../../components/Headers.jsx"
import Footer from "../../components/Footers.jsx"
import { IoIosArrowForward } from "react-icons/io"
import { Link, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { useState, useEffect } from "react"
import http from "../../helpers/http.js"
import { Formik } from "formik"
import { FaEye } from "react-icons/fa"
import { FaEyeSlash } from "react-icons/fa"
import { AiOutlineLoading3Quarters } from "react-icons/ai"
import { logout as logoutAction } from "../../redux/reducers/auth.js"
import defaultPicture from "../../assets/img/default.jpg"
import * as Yup from "yup"

const EditProfile = () => {
    const token = useSelector((state) => state.auth.token)
    const [profile, setProfile] = useState([])
    const [selectedPicture, setSelectedPicture] = useState(false)
    const [pictureURI, setPictureURI] = useState("")
    const [open, setOpen] = useState(false)
    const [openModal, setOpenModal] = useState(false)
    const [successMessage, setSuccessMessage] = useState("")
    const [errorMessage, setErrorMessage] = useState("")
    const dispatch = useDispatch()
    const navigate = useNavigate()

    useEffect(() => { 
        async function getProfile(){
            const { data } = await http(token).get("/profile")
            setProfile(data.results)
            console.log(data)
        }

        getProfile()
    }, [token])

    const fileToDataUrl = (file) => {
        const reader = new FileReader()
        reader.addEventListener("load", () => {
            setPictureURI(reader.result)
        })
        reader.readAsDataURL(file)
    }
    
    const changePicture = (e) => {
        const file = e.target.files[0]
        setSelectedPicture(file)
        fileToDataUrl(file)
    }

    const editProfile = async (values) => {
        setOpenModal(true)
        const form = new FormData()
        Object.keys(values).forEach((key) => {
            if (values[key]) {
                form.append(key, values[key])
            }
        })

        if (selectedPicture) {
            form.append("picture", selectedPicture)
        }

        const getProfile = async () => {
            const { data } = await http(token).get("/profile")
            setProfile(data.results)
        }

        try {
            const { data } = await http(token).patch("/profile", form, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            
            const email = values.email
            const password = values.password
            const body = new URLSearchParams({email: email, password: password})
            await http(token).patch("/auth/change-password", body)
      
            setProfile(data.results)
            setSuccessMessage(data.message)
            setTimeout(()=>{setSuccessMessage(false)}, 2000)
        } catch (err) {
            const message = err.response.data.message
            if (message) {
                setErrorMessage(message)
            }
        }

        getProfile()
        setOpenModal(false)
    }

    const validationSchema = Yup.object({
        username: Yup.string().optional(),
        fullName: Yup.string().optional(),
        email: Yup.string().email().optional(),
        password: Yup.string().optional(),
        profession: Yup.string().optional(),
        about: Yup.string().optional(),
    })

    const doLogout = ()=> {
        window.localStorage.removeItem("token")
        dispatch(logoutAction())
        navigate("/signin")
    }

    return(
        <>
            <div className='h-min-screen'>
                <nav>
                    <Header/>
                </nav>
                <div className='flex'>
                    <div className='w-[500px] p-24  flex flex-col gap-10'>
                        <div>
                            <p className='text-[24px] mt-[40px] font-bold'>Profile</p>
                        </div>
                        <div>
                            <div className='w-[295px] h-[284px] shadow-2xl rounded-2xl bg-secondary relative'>
                                <div className='flex gap-5 items-center w-full h-[120px] px-10'>
                                    <div className='border-2 rounded-3xl border-blue-500 p-1'>
                                        <div className='rounded-3xl border-2 border-gray-50 overflow-hidden w-16 h-16'>
                                            
                                            {profile.picture === null ? (
                                                <img src={defaultPicture} className='object-cover h-full w-full'/>
                                            ) : <img src={profile.picture} className='object-cover h-full w-full'/>}
                                        </div>
                                    </div>
                                    <div className='flex flex-col flex-1'>
                                        <div>{profile?.username === null ? "Not set" : profile?.username}</div>
                                        <div className='font-bold'>{profile?.fullName === null ? "Name is not set" : profile?.fullName}</div>
                                        <div>Member</div>
                                    </div>
                                </div>
                                <div className='px-10'>
                                    <div className='font-bold'>About Me</div>
                                    <div>{profile?.about === null ? "About is not set" : profile?.about}</div>
                                </div>
                                <div className='w-[255px] rounded-2xl absolute bottom-[-20px] right-5 h-[50px] bg-blue-500 pr-5 flex justify-between text-white text-center'>
                                    <div className='rounded-r-2xl border-1 pt-1 rounded-l-2xl w-[70px] justify-center bg-blue-600'>
                                        <div className='font-bold'>52</div>
                                        <div className='text-[10px]'>Post</div>
                                    </div>
                                    <div className='flex flex-col pt-1 gap-1'>
                                        <div className='font-bold'>250</div>
                                        <div className='text-[10px]'>Visitor</div>
                                    </div>
                                    <div className='flex flex-col gap-1 pt-1'>
                                        <div className='font-bold'>4.5K</div>
                                        <div className='text-[10px]'>Comments</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full flex justify-center'><Link to='/profile' className='text-primary font-bold hover:text-[17px] '>See Profile</Link></div>
                        <div className='flex flex-col gap-5 '>
                            <Link to='/edit-profile' className='flex w-full justify-between items-center border-2 p-3 rounded-2xl hover:bg-blue-100 hover:text-blue-600'>
                                <div className='font-bold'>Edit Profile</div>
                                <div><IoIosArrowForward/></div>
                            </Link>
                            <Link to='/savedarticle' className='flex w-full justify-between items-center border-2 p-3 rounded-2xl hover:bg-blue-100 hover:text-blue-600'>
                                <div className='font-bold'>Saved Post</div>
                                <div><IoIosArrowForward/></div>
                            </Link>
                            <Link className='flex w-full justify-between items-center border-2 p-3 rounded-2xl hover:bg-blue-100 hover:text-blue-600'>
                                <div className='font-bold'>FAQ</div>
                                <div><IoIosArrowForward/></div>
                            </Link>
                            <Link className='flex w-full justify-between items-center border-2 p-3 rounded-2xl hover:bg-blue-100 hover:text-blue-600'>
                                <div className='font-bold'>Help</div>
                                <div><IoIosArrowForward/></div>
                            </Link>
                            <button onClick={doLogout} className='flex w-full justify-between items-center border-2 p-3 rounded-2xl hover:bg-blue-100 hover:text-blue-600'>
                                <div className='font-bold'><button>Logout</button></div>
                                <div><IoIosArrowForward/></div>
                            </button>
                       
                        </div>
                    </div>
                    <div className=' pt-28 flex-1'>
                        <Formik initialValues={{username: "", fullName: "", email: "", password: "", profession: "", about: ""}} onSubmit={editProfile} enableReinitialize={true} validationSchema={validationSchema}>
                            {({values, touched, errors, handleBlur, handleChange, handleSubmit, isSubmitting}) => {
                                function showEye(){
                                    setOpen(!open)
                                }
                                return (
                                    
                                    <form className='pb-24' onSubmit={handleSubmit}>
                                        <div className='flex justify-between px-[60px]'>
                                            <div></div>
                                            <div>
                                                <div className='border-2 rounded-3xl border-blue-500 p-2 flex justify-center items-center'>
                                                    <div className='rounded-3xl border-2 border-gray-50 overflow-hidden w-[144px] h-[150px] '>
                                                        {selectedPicture && (
                                                            <img src={pictureURI} className='object-cover h-full w-full'/>
                                                        )
                                                        }
                                                        {profile.picture === null ? (
                                                            <img src={defaultPicture} className='object-cover h-full w-full'/>
                                                        ) : <img src={profile.picture} className='object-cover h-full w-full'/>}
                                                        
                                                    </div>
                                                </div>
                                                {
                                                    successMessage && <div className='alert alert-success flex items-center justify-center mt-5'>{successMessage}</div>
                                                }
                                                {
                                                    errorMessage && <div className='alert alert-error flex items-center justify-center mt-5'>{errorMessage}</div>
                                                }
                                                <div className='pt-4'>
                                                    <div className=' rounded-xl'>
                                                        <label className='btn bg-transparent hover:bg-transparent w-full h-full border-0'>
                                                            <span className='text-black normal-case'>Choose profile picture</span>
                                                            <input 
                                                                className='hidden ' 
                                                                type='file'
                                                                name='picture'
                                                                onChange={changePicture}

                                                            />
                                                        </label>
                                                    </div>
                                    
                                                </div>
                                            </div>
                                            <div>
                                                <button type='submit' className='text-[18px] font-bold text-primary hover:text-black' disabled={isSubmitting}>Save Change</button>
                                            </div>
                                        </div>  
                                        <div className='flex justify-between px-[60px] '>
                                            <div className='form-control w-full max-w-xs'>
                                                <label className='label' htmlFor='username'>
                                                    <span className='label-text'>Username:</span>
                                                </label>
                                                <input name='username' onChange={handleChange} onBlur={handleBlur} value={values.username} placeholder='Username' type='text' className='input input-bordered w-full max-w-xs'
                                                />
                                                <label className='label'>
                                                </label>
                                                {errors.username && touched.username && (
                                                    <label htmlFor='username' className='label'>
                                                        <span className='label-text-alt text-error'>{errors.username}</span>
                                                    </label>
                                                )}
                                            </div>
                                            <div className='form-control w-full max-w-xs'>
                                                <label className='label'>
                                                    <span className='label-text'>Name:</span>
                                                </label>
                                                <input type='text' placeholder='Type here' name='fullName' className='input input-bordered w-full max-w-xs' onChange={handleChange} onBlur={handleBlur} value={values.fullName} />
                                                <label className='label'>
                                                </label>
                                                {errors.fullName && touched.fullName && (
                                                    <label htmlFor='fullName' className='label'>
                                                        <span className='label-text-alt text-error'>{errors.fullName}</span>
                                                    </label>
                                                )}
                                            </div>
                                        </div>
                                        <div className='flex justify-between px-[60px] '>
                                            <div className='form-control w-full max-w-xs'>
                                                <label className='label'>
                                                    <span className='label-text'>Email:</span>
                                                </label>
                                                <input type='email' name='email' placeholder='Type here' className='input input-bordered w-full max-w-xs' onChange={handleChange} onBlur={handleBlur} value={values.email}/>
                                                <label className='label'>
                                                </label>
                                                {errors.email && touched.email && (
                                                    <label htmlFor='email' className='label'>
                                                        <span className='label-text-alt text-error'>{errors.email}</span>
                                                    </label>
                                                )}
                                            </div>
                                            <div className='form-control w-full max-w-xs'>
                                                <label className='label'>
                                                    <span className='label-text'>Password:</span>
                                                </label>
                                                <div className='relative'>
                                                    <input type={open ? "text" : "password"} id='password' name='password' placeholder='Enter your password' className='input input-bordered w-full max-w-md mt-2 mb-2' onChange={handleChange} onBlur={handleBlur} value={values.password}/>
                                                    <button type='button' onClick={showEye}>
                                                        {open ? <FaEye size={25} className='absolute top-5 right-5'/> : <FaEyeSlash size={25} className='absolute top-5 right-5'/>}
                                                    </button>
                                                </div>
                                                <label className='label'>
                                                </label>
                                                {errors.password && touched.password && (
                                                    <label htmlFor='password' className='label'>
                                                        <span className='label-text-alt text-error'>{errors.password}</span>
                                                    </label>
                                                )}
                                            </div>
                                        </div>
                                        <div className='flex justify-between px-[60px] '>
                                            <div className='form-control w-full max-w-xs'>
                                                <label className='label'>
                                                    <span className='label-text'>Job:</span>
                                                </label>
                                                <input type='text' name='profession' placeholder='Type here' className='input input-bordered w-full max-w-xs' onChange={handleChange} onBlur={handleBlur} value={values.profession}/>
                                                <label className='label'>
                                                </label>
                                                {errors.profession && touched.profession && (
                                                    <label htmlFor='profession' className='label'>
                                                        <span className='label-text-alt text-error'>{errors.profession}</span>
                                                    </label>
                                                )}
                                            </div>
                                            <div className='form-control w-full max-w-xs'>
                                                <label className='label'>
                                                    <span className='label-text'>About:</span>
                                                </label>
                                                <input type='text' name='about' placeholder='About' className='input input-bordered w-full  h-[115px] max-w-xs' onChange={handleChange} onBlur={handleBlur} value={values.about}/>
                                                <label className='label'>
                                                </label>
                                                {errors.about && touched.about && (
                                                    <label htmlFor='about' className='label'>
                                                        <span className='label-text-alt text-error'>{errors.about}</span>
                                                    </label>
                                                )}
                                            </div>
                            
                                        </div>
                                        <div className='flex justify-center mt-32'>
                                            <div className='mb-24'><button type='button' className='btn btn-primary normal-case text-white'>Request to be an author </button></div>
                                        </div>
                                    </form>
                                )
                            }}
                        </Formik> 
                    </div>
                    <input type='checkbox' id='loading' className='modal-toggle' checked={openModal} />
                    <div className='modal'>
                        <div className='modal-box bg-transparent h-40 shadow-none overflow-hidden'>
                            <div className='flex flex-col justify-center items-center'>
                                <AiOutlineLoading3Quarters className='animate-spin' size={70} color='white' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default EditProfile