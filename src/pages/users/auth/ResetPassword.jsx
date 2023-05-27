import { Fragment } from "react"
import { Link } from "react-router-dom"
import { Formik } from "formik"
import * as Yup from "yup"

function ResetPassword() {
    const validationSchema = Yup.object({
        code: Yup.number().typeError("Must be a number").required("Code shouldn't be empty"),
        email: Yup.string().email().typeError("Must be an email").required("Email is empty !"),
        password: Yup.string().required("Password is empty !"),
        confirmPassword: Yup.string()
            .required("Confirm password is empty !")
            .oneOf([Yup.ref("password"), null], "Passwords must match"),
    })

    return (
        <Fragment>
            <div className='flex w-full h-full xl:h-screen'>
                <div className="hidden md:flex flex-1 bg-[url('/src/assets/img/forgot-image.png')] bg-cover bg-bottom bg-no-repeat"></div>
                <div className='flex flex-col flex-1 bg-white gap-10 pt-10 h-screen md:h-full'>
                    <div className='flex items-center flex-col justify-center gap-10 h-screen'>
                        <div className='flex flex-col w-4/5 gap-10 items-center'>
                            <div className='w-full flex items-start'>
                                <p className='text-[36px] font-bold'>Reset Password</p>
                            </div>
                            <Formik
                                initialValues={{ code: "", email: "", password: "", confirmPassword: "" }}
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
                                                    type='text'
                                                    placeholder='Code'
                                                    name='code'
                                                    className={`input input-bordered w-full bg-white border-2 mb-2 border-gray-400 text-black max-w-2xl border' ${
                                                        errors.code &&
                                                        touched.code &&
                                                        "input-error border-red-700"
                                                    }`}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.code}
                                                />
                                                {errors.code &&
                                                    touched.code && (
                                                    <label
                                                        htmlFor='code'
                                                        className='label p-0'
                                                    >
                                                        <span className='label-text-alt font-bold text-md text-error'>
                                                            {errors.code}
                                                        </span>
                                                    </label>
                                                )}
                                            </div>
                                            <div>
                                                <input
                                                    type='email'
                                                    placeholder='Email'
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
                                                <input
                                                    type='password'
                                                    placeholder='Password'
                                                    name='password'
                                                    className={`input input-bordered w-full bg-white border-2 mb-2 border-gray-400 text-black max-w-2xl border' ${
                                                        errors.password &&
                                                        touched.password &&
                                                        "input-error border-red-700"
                                                    }`}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.password}
                                                />
                                                {errors.password &&
                                                    touched.password && (
                                                    <label
                                                        htmlFor='email'
                                                        className='label p-0'
                                                    >
                                                        <span className='label-text-alt font-bold text-md text-error'>
                                                            {errors.password}
                                                        </span>
                                                    </label>
                                                )}
                                            </div>
                                            <div>
                                                <input
                                                    type='password'
                                                    placeholder='Confirm Password'
                                                    name='confirmPassword'
                                                    className={`input input-bordered w-full bg-white border-2 mb-2 border-gray-400 text-black max-w-2xl border' ${
                                                        errors.confirmPassword &&
                                                        touched.confirmPassword &&
                                                        "input-error border-red-700"
                                                    }`}
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.confirmPassword}
                                                />
                                                {errors.confirmPassword &&
                                                    touched.confirmPassword && (
                                                    <label
                                                        htmlFor='confirmPassword'
                                                        className='label p-0'
                                                    >
                                                        <span className='label-text-alt font-bold text-md text-error'>
                                                            {errors.confirmPassword}
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
                                        </form>
                                    </>
                                )}
                            </Formik>
                        </div>
                    </div>
                    <div className='h-full w-full bg-primary p-4 lg:p-8 flex lg:flex-row flex-col lg:justify-between gap-5 lg:gap-0'>
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

export default ResetPassword
