import { Fragment } from "react"
import { Link } from "react-router-dom"
import { Formik } from "formik"
import * as Yup from "yup"
import {FcGoogle} from "react-icons/fc"
import {FaFacebook} from "react-icons/fa"
import {FaTwitter} from "react-icons/fa"

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
<div>1<div>
                            </div>
                            <div className='font-bold'><Link>Back to homepage</Link></div>
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

export default SignUp
