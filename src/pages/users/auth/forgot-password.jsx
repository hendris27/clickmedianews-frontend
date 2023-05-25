import { Fragment } from "react"
import { Link } from "react-router-dom"
import { Formik } from "formik"
import * as Yup from "yup"

function ForgotPassword() {
    const validationSchema = Yup.object({
        email: Yup.string().required("Email is empty !")
    })

    return (
        <Fragment>
            <div className='flex w-full h-full xl:h-screen'>
                <div className="hidden md:flex flex-1 bg-[url('/src/assets/img/forgot-image.png')] bg-cover bg-bottom bg-no-repeat"></div>
                <div className='flex flex-col flex-1 bg-white gap-10 pt-10 h-screen md:h-full'>
                    <div className='flex items-center flex-col justify-center gap-10 h-screen'>
                        <div className='flex gap-4 w-4/5'>
                            <Link className='flex gap-5'>
                                <img
                                    src='/src/assets/img/arrow-back.svg'
                                    className='w-2'
                                />
                                <div className='font-bold text-lg text-black'>
                                    Back
                                </div>
                            </Link>
                        </div>
                        <div className='flex flex-col w-4/5 gap-10 items-center'>
                            <div>
                                <div className='text-[36px] uppercase font-bold text-black'>
                                    Don&apos;t worry
                                </div>
                                <div className='text-black'>
                                    We are here to help you to recover your
                                    password. Enter your email adress that you
                                    used to register and we’ll give you
                                    instructions to reset your password.
                                </div>
                            </div>
                            <Formik
                                initialValues={{ email: "" }}
                                validationSchema={validationSchema}
                            >
                                {({
                                    values,
                                    errors,
                                    touched,
                                    handleChange,
                                    handleBlur,
                                    handleSubmit,
                                    isSubmitting
                                }) => (
                                    <>
                                        <form
                                            onSubmit={handleSubmit}
                                            className='flex flex-col gap-4 w-3/4'
                                        >
                                            <div>
                                                <input
                                                    type='email'
                                                    placeholder='Enter your email address'
                                                    name='email'
                                                    className={`input input-bordered w-full bg-white border-2 mb-2 border-gray-400 text-black max-w-2xl border' ${
                                                        errors.email &&
                                                        touched.email &&
                                                        "input-error border-red-700"
                                                    }`}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.email}
                                                />
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
                                                <button
                                                    className='btn w-full uppercase bg-primary border-0 text-white'
                                                    disabled={isSubmitting}
                                                    type='submit'
                                                >
                                                    Send Link
                                                </button>
                                            </div>
                                            <div>
                                                <button
                                                    className='btn w-full uppercase bg-primary border-0 text-white'
                                                    type='submit'
                                                >
                                                    Resend Link
                                                </button>
                                            </div>
                                        </form>
                                    </>
                                )}
                            </Formik>
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
                </div>
            </div>
        </Fragment>
    )
}

export default ForgotPassword
