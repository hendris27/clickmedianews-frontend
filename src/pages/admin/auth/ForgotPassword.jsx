import bg from '../../../assets/img/bg.png';
import arrowLeft from '../../../assets/img/arrow-left.png';
import { Link } from 'react-router-dom';
import { Formik } from 'formik';
import * as Yup from 'yup';

const forgotPassword = () => {
  const validationSchema = Yup.object({
    email: Yup.string().required('Email required !'),
  });
  return (
    <>
      <div className="flex w-full h-full xl:h-screen">
        <div className="md:flex flex">
          <section className="flex w-[100%] max-sm:hidden">
            <img className="w-[600px] h-[601px]" src={bg} />
          </section>
        </div>
        <div className="flex flex-col flex-1 bg-white gap-10 pt-10 h-screen md:h-full">
          <div className="flex items-center flex-col justify-center gap-10 h-screen">
            <div className="flex gap-5 w-4/5">
              <Link className="flex gap-5" to>
                <img className="w-3 h-5" src={arrowLeft} />
                <div className="font-bold mt-[-5px] text-lg text-black">Back</div>
              </Link>
            </div>
            <div className="flex flex-col w-4/5 gap-8 items-center">
              <div>
                <div className="text-[36px] mt-[-20px] uppercase font-bold text-black">Don`t Worry</div>
                <div className="text-gray-500">
                  We are here to help you to recover your password. Enter your email address that you used to register
                  and we`ll give you instructions to reset your password
                </div>
              </div>
              <Formik initialValues={{ email: '' }} validationSchema={validationSchema}>
                {({ values, errors, touched, handleChange, handleBlur, handleSubmit, isSubmitting }) => (
                  <form onSubmit={handleSubmit} className="flex flex-col gap-4 w-3/4">
                    <div>
                      <input
                        type="email"
                        placeholder="Enter your email address"
                        name="email"
                        className={`w-full rounded-md h-[30px] p-2 bg-white border-2 border-gray-300 text-black max-w-2xl' 
                                                ${errors.email && touched.email && 'input-error text-red-500'}`}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                      />
                      {errors.email && touched.email && (
                        <label htmlFor="email" className="label p-0">
                          <span className="label-text-alt font-bold text-md text-error"> {errors.email} </span>
                        </label>
                      )}
                    </div>
                    <div>
                      <Link to="/reset-password">
                        <button
                          className="btn bg-[#2d63eb] hover:bg-[#5c86f0] rounded-md w-full h-[30px] uppercase border-0 text-white"
                          disabled={isSubmitting}
                          type="submit"
                        >
                          Send Link
                        </button>
                      </Link>
                      <button
                        className="btn mt-3 bg-[#b9cbf8] rounded-md w-full h-[30px] uppercase border-0 text-white"
                        type="submit"
                      >
                        Resend Link
                      </button>
                    </div>
                  </form>
                )}
              </Formik>
            </div>
          </div>
          <div className="w-full h-[300px] bg-blue-600 lg:p-5 flex lg:flex-row flex-col lg:justify-between gap-5 lg:gap-0">
            <div className="flex font-semibold ml-10 mt-2 flex-col gap-5 text-white">
              <Link to>Why Click News</Link>
              <Link to>Community</Link>
              <Link to>Be an Author</Link>
              <Link to>FAQ</Link>
            </div>
            <div className="lg:w-2/5 font-semibold text-white text-right mr-8 mt-4 lg:gap-5 flex flex-col">
              <Link to>Click News</Link>
              <div>
                <span>Jendral Sudirman Street No. 23 Jakarta, Indonesia</span>
              </div>
              <div>
                <span>(+62) 21-989898934</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default forgotPassword;
