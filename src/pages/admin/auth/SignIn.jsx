import arrowLeft from "../../../assets/img/arrow-left.png"
import facebook from "../../../assets/img/Facebook.png"
import google from "../../../assets/img/iconGoogle.png"
import twitter from "../../../assets/img/Twitter.png"
import { Link } from "react-router-dom"

const signIn = () => {
    return (
        <>
            <div className='flex w-full h-full xl:h-screen'>
                <section className='flex w-[600px] h-[100vh] md:flex max-sm:hidden bg-[#376AED]'>
                    <div className='flex gap-5 w-4/5'>
                        <Link to='/' className='flex gap-5'>
                            <img className='w-3 h-5 mt-6 ml-6' src={arrowLeft} alt='' />
                            <div className='font-bold mt-5 text-lg text-white'>Home Page</div>
                        </Link>
                    </div>
                    <div>
                        <h1 className='text-[50px] text-center mt-[80px] mr-[250px] text-white font-bold'>Click</h1>
                        <h1 className='text-[50px] text-center mt-[-15px] mr-[250px] text-white font-bold'>News</h1>
                        <h1 className='text-[18px] text-center mb-[-10px] mr-[250px] text-white'>clicknews@mail.com</h1>
                        <h1 className='text-[14px] text-center mt-[70px] mr-[250px] text-white'>Forgot your password ?</h1>
                        <Link to='/forgot-password'><button className='btn mt-[40px] ml-[-50px] rounded-md w-[300px] h-[40px] bg-[#0D253C] hover:bg-[#1c4e7d] text-white'>
                            Forgot Password
                        </button></Link>
                        <Link><h1 className='text-white mt-[70px] ml-[-150px]'>Why Click News</h1></Link>
                        <Link><h1 className='text-white mt-[20px] ml-[-150px]'>Community</h1></Link>
                        <Link><h1 className='text-white mt-[-70px] ml-[200px]'>Be an Author</h1></Link>
                        <Link><h1 className='text-white mt-[20px] ml-[200px]'>FAQ</h1></Link>
                    </div>
                </section>
                <section>
                    <div className='flex'>
                        <h1 className='text-black text-[30px] font-bold mt-[20px] ml-[120px]'>Sign In</h1>
                    </div>
                    <h1 className='text-slate-400 text-[14px] mt-[10px] ml-[120px]'>
                        Hey, welcome back to Click News !
                    </h1>
                    <div>
                        <h1 className='text-[16px] font-semibold mt-[25px] ml-[120px]'>Email Address :</h1>
                        <input type='email' name='email' placeholder='enter your email address' className='input mt-[10px] ml-[120px] p-2 border-2 border-slate-200 w-[320px] h-[40px] rounded-md max-w-xs' />
                    </div>
                    <div>
                        <h1 className='text-[16px] font-semibold mt-[15px] ml-[120px]'>Password :</h1>
                        <input type='password' name='password' placeholder='enter your password' className='input mt-[10px] ml-[120px] p-2 border-2 border-slate-200 w-[320px] h-[40px] rounded-md max-w-xs' />
                    </div>
                    <Link to='/'><button className='btn mt-[40px] ml-[100px] rounded-xl w-[370px] h-[40px] bg-[#376AED] hover:bg-[#5c86f0] text-white'>
                            Sign In
                    </button></Link>
                    <h1 className='font-semibold mt-[20px] ml-[210px]'>OR SIGN IN WITH</h1>
                    <Link><img className='w-[35px] mt-[20px] ml-[180px]' src={google} /></Link>
                    <Link><img className='w-[35px] mt-[-35px] ml-[260px]' src={facebook} /></Link>
                    <Link><img className='w-[35px] mt-[-35px] ml-[340px]' src={twitter} /></Link>
                </section>
            </div>
        </>
    )
}

export default signIn