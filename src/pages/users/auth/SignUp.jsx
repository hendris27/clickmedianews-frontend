import { Fragment } from "react"
import { Link } from "react-router-dom"
import { Formik } from "formik"
import * as Yup from "yup"
import {FcGoogle} from "react-icons/fc"
import {FaFacebook} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"
import Footer from "../../../components/Footers"
import ScrollToTop from "../../../components/ScrollToTop"

function SignUp() {
    const validationSchema = Yup.object({
        email: Yup.string().required("Email is empty !"),
        password: Yup.string().required("Password is empty !"),
        phoneNumber: Yup.number().typeError("Phone number is invalid").required("Phone Number is empty !")
    })
    
    function doSignUp(values){
        alert(values)
    }
    
    return (
        <Fragment>
            <div className='flex w-full h-full'>
                <div className="hidden md:flex flex-1 bg-[url('/src/assets/img/picture_login.png')] bg-cover bg-bottom bg-no-repeat"></div>
                <div className='flex flex-col flex-1 bg-white gap-10 pt-10 pb-10 md:h-full'>
                    <div className='flex items-center flex-col justify-center gap-3'>
                        <Formik initialValues={{email: "", password: "", phoneNumber: ""}} onSubmit={doSignUp} validationSchema={validationSchema}>
                            {({values, errors, touched, handleBlur, handleSubmit, handleChange, isSubmitting}) => {
                                return (
                                    <form onSubmit={handleSubmit} className='flex flex-col gap-3'>
                                        <div className='text-[36px] font-bold'>Sign Up</div>
                                        <div>
                                            <label htmlFor='email' className='font-bold'>Email :</label>
                                            <input type='email' id='email' name='email' placeholder='Enter your email address' className='input input-bordered w-full max-w-xs mt-2 mb-2' onChange={handleChange} onBlur={handleBlur} value={values.email}/>
                                            {errors.email &&
                                                touched.email && (
                                                <label
                                                    htmlFor='email'
                                                    className='label p-0'
                                                >
                                                    <span className='label-text-alt font-bold text-md text-error'>
                                                        {errors.email}
                                                    </span>
                                                </label>
                                            )}
                                        </div>
                                        <div>
                                            <label htmlFor='password' className='font-bold'>Password</label>
                                            <input type='password' id='password' name='password' placeholder='Enter your password' className='input input-bordered w-full max-w-xs mt-2 mb-2' onChange={handleChange} onBlur={handleBlur} value={values.password}/>
                                            {errors.password &&
                                                touched.password && (
                                                <label
                                                    htmlFor='password'
                                                    className='label p-0'
                                                >
                                                    <span className='label-text-alt font-bold text-md text-error'>
                                                        {errors.password}
                                                    </span>
                                                </label>
                                            )}
                                        </div>
                                        <div>
                                            <label htmlFor='phoneNumber' className='font-bold'>Phone Number</label>
                                            <input type='text' placeholder='Enter your phone number' id='phoneNumber' name='phoneNumber' className='input input-bordered w-full max-w-xs mt-2 mb-2' onChange={handleChange} onBlur={handleBlur} value={values.phoneNumber}/>
                                            {errors.phoneNumber &&
                                                touched.email && (
                                                <label
                                                    htmlFor='phoneNumber'
                                                    className='label p-0'
                                                >
                                                    <span className='label-text-alt font-bold text-md text-error'>
                                                        {errors.phoneNumber}
                                                    </span>
                                                </label>
                                            )}
                                        </div>
                                        <div>
                                            <button disabled={isSubmitting} className='btn bg-primary text-white border-0 w-full normal-case'>Sign Up</button>
                                        </div>
                                    </form>
                                )
                            }}
                        </Formik>
                        <div className='flex flex-col items-center gap-3 w-[43%]'>
                            <p className='uppercase font-bold'>Or sign up with</p>
                            <div className='flex gap-5'>
                                <div><FcGoogle size={35} color='3366ff'/></div>
                                <div><FaFacebook size={35} color='#3366ff'/></div>
                                <div><FaTwitter size={35} color='#3366ff'/></div>
                            </div>
                            <div className='font-bold'>
                                Already have an account ?
                            </div>
                            <div className='w-full'>
                                <Link to='/signin' className='btn text-white border-0 w-full normal-case'>Login Here</Link>
                            </div>
                            <div className='font-bold'><Link to='/'>Back to homepage</Link></div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer/>
            <ScrollToTop/>
        </Fragment>
    )
}

export default SignUp