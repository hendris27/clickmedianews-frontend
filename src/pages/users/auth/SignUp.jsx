import { Fragment } from "react"
import { Link } from "react-router-dom"
import { Formik } from "formik"
import * as Yup from "yup"
import {FcGoogle} from "react-icons/fc"
import {FaFacebook} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"

function SignIn() {
    const validationSchema = Yup.object({
        email: Yup.string().required("Email is empty !")
    })

    return (
        <Fragment>
            <div className='flex w-full h-full xl:h-screen'>
                <div className="hidden md:flex flex-1 bg-[url('/src/assets/img/picture_login.png')] bg-cover bg-bottom bg-no-repeat"></div>
                <div className='flex flex-col flex-1 bg-white gap-10 pt-10 h-screen md:h-full'>
                    <div className='flex items-center flex-col justify-center gap-10 h-screen'>
                        <div>
                            <div className="text-[36px] font-bold">Sign Up</div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input type="email" id="email" name="email" placeholder="Enter your email address" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div>
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" name="password" placeholder="Enter your password" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div>
                                <label htmlFor="phoneNumber">Phone Number</label>
                                <input type="text" placeholder="Enter your phone number" className="input input-bordered w-full max-w-xs" />
                            </div>
                            <div>
                                <button className="btn bg-primary text-white border-0 w-full normal-case">Sign Up</button>
                            </div>
                            <div className="flex flex-col items-center">
                                <p className="uppercase">Or sign up with</p>
                                <div className="flex gap-5">
                                    <div><FcGoogle size={35} color="3366ff"/></div>
                                    <div><FaFacebook size={35} color="#3366ff"/></div>
                                    <div><FaTwitter size={35} color="#3366ff"/></div>
                                </div>
                                <div>
                                    Already have an account ?
                                </div>
                                <div>
                                    <button className="btn text-white border-0 w-full normal-case">Login Here</button>
                                </div>
                                <div><Link>Back to homepage</Link></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
                <div className='h-full w-full bg-blue-700 p-4 lg:p-8 flex lg:flex-row flex-col lg:justify-between gap-5 lg:gap-0'>
                    <div className='flex flex-col gap-5 text-white'>
                        <Link to>Why News Today</Link>
                        <Link to>Community</Link>
                        <Link to>Be an author</Link>
                        <Link to>FAQ</Link>
                    </div>
                    <div className=' lg:w-2/5 lg:gap-5 flex flex-col text-white'>
                        <Link>News Today</Link>
                        <div>
                            <p>
                                Jendral Sudirman Street No. 23 Jakarta,
                                Indonesia
                            </p>
                            <p>(621)989898934</p>
                            <p>newstoday@mail.com</p>
                        </div>
                    </div>
                </div>
        </Fragment>
    )
}

export default SignIn
