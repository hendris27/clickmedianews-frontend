import arrowLeft from "../../../assets/img/arrow-white.png"
import check from "../../../assets/img/check.png"
import { Link } from "react-router-dom"

const resetSuccess = () => {
    return (
        <>
            <div className='flex w-full h-full xl:h-screen'>
                <section className='flex w-[600px] h-[100vh] md:flex max-sm:hidden bg-[#376AED]'>
                    <div className='flex gap-5 w-4/5'>
                        <Link className='flex gap-5'>
                            <img className='w-3 h-5 mt-6 ml-6' src={arrowLeft} alt='' />
                        </Link>
                    </div>
                    <div>
                        <h1 className='text-[50px] text-center mt-[150px] mr-[250px] text-white font-bold'>Click</h1>
                        <h1 className='text-[50px] text-center mt-[-15px] mr-[250px] text-white font-bold'>News</h1>
                        <h1 className='text-[18px] text-center mb-[-10px] mr-[250px] text-white'>clicknews@mail.com</h1>
                        <Link><h1 className='text-white mt-[150px] ml-[-150px]'>Why Click News</h1></Link>
                        <Link><h1 className='text-white mt-[20px] ml-[-150px]'>Community</h1></Link>
                        <Link><h1 className='text-white mt-[-70px] ml-[200px]'>Be an Author</h1></Link>
                        <Link><h1 className='text-white mt-[20px] ml-[200px]'>FAQ</h1></Link>
                    </div>
                </section>
                <section>
                    <div className='flex'>
                        <img className='mt-[140px] ml-[250px]' src={check} />
                    </div>
                    <div className='flex'>
                        <h1 className='text-black text-[30px] mt-[20px] ml-[140px]'>Reset Password is success !</h1>
                    </div>
                    <div className='flex'>
                        <h1 className='text-slate-400 text-[18px] mt-[10px] ml-[200px]'>Please go back to sign in</h1>
                    </div>
                    <button className='btn mt-[40px] ml-[140px] rounded-xl w-[370px] h-[40px] bg-[#376AED] hover:bg-[#5c86f0] text-white'>
                            back to sign in
                    </button>
                </section>
            </div>
        </>
    )
}

export default resetSuccess