import Header from "../../components/Headers.jsx"
import Picture from "../../assets/img/picture_login.png"
import Footer from "../../components/Footers.jsx"
import { IoIosArrowForward } from "react-icons/io"
import { Link } from "react-router-dom"

const editProfile = () => {
    return(
        <>
            <div className='h-min-screen'>
                <nav>
                    <Header/>
                </nav>
                <div className='flex'>
                    <div className='w-[500px] border-r-2 p-24 flex flex-col gap-10 '>
                        <div>
                            <p className='text-[24px] mt-[40px] font-bold'>Profile</p>
                        </div>
                        <div>
                            <div className='w-[295px] h-[284px] shadow-2xl rounded-2xl bg-white relative'>
                                <div className='flex gap-5 items-center w-full h-[120px] px-10'>
                                    <div className='border-2 rounded-3xl border-blue-500 p-1'>
                                        <div className='rounded-3xl border-2 border-gray-50 overflow-hidden w-16 h-16'>
                                            <img src={Picture} className='object-cover' />
                                        </div>
                                    </div>
                                    <div className='flex flex-col flex-1'>
                                        <div>@jonathan</div>
                                        <div className='font-bold'>Joe Daniel</div>
                                        <div>Member</div>
                                    </div>
                                </div>
                                <div className='px-10'>
                                    <div className='font-bold'>About Me</div>
                                    <div>Madison Blackstone is a director of publisher, with experience managing global teams.</div>
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
                            <Link className='flex w-full justify-between items-center border-2 p-3 rounded-2xl hover:bg-blue-100 hover:text-blue-600'>
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
                            <Link className='flex w-full justify-between items-center border-2 p-3 rounded-2xl hover:bg-blue-100 hover:text-blue-600'>
                                <div className='font-bold'>Logout</div>
                                <div><IoIosArrowForward/></div>
                            </Link>
                       
                        </div>
                    </div>
                    <div className=' pt-28 flex-1 '>
                        <form className='pb-24'>
                            <div className='flex justify-between px-[60px] '>
                                <div></div>
                                <div>
                                    <div className='border-2 rounded-3xl border-blue-500 p-2 flex justify-center items-center'>
                                        <div className='rounded-3xl border-2 border-gray-50 overflow-hidden w-[144px] h-[150px] '>
                                            <img src={Picture} className='object-cover' />
                                        </div>
                                    </div>
                                    <div className='pt-4'>
                                        <div className=' rounded-xl'>
                                            <label className='btn bg-transparent hover:bg-transparent w-full h-full border-0'>
                                                <span className='text-black normal-case'>Choose profile picture</span>
                                                <input 
                                                    className='hidden ' 
                                                    type='file'
                                                    name='picture'

                                                />
                                            </label>
                                        </div>
                                    
                                    </div>
                                </div>
                                <div>
                                    <button className='text-[18px] font-bold text-primary '>Save Change</button>
                                </div>
                            </div>  
                            <div className='flex justify-between px-[60px] '>
                                <div className='form-control w-full max-w-xs'>
                                    <label className='label'>
                                        <span className='label-text'>Username:</span>
                                    </label>
                                    <input type='text' placeholder='Type here' className='input input-bordered w-full max-w-xs' />
                                    <label className='label'>
                                    </label>
                                </div>
                                <div className='form-control w-full max-w-xs'>
                                    <label className='label'>
                                        <span className='label-text'>Name:</span>
                                    </label>
                                    <input type='text' placeholder='Type here' className='input input-bordered w-full max-w-xs' />
                                    <label className='label'>
                                    </label>
                                </div>
                            </div>
                            <div className='flex justify-between px-[60px] '>
                                <div className='form-control w-full max-w-xs'>
                                    <label className='label'>
                                        <span className='label-text'>Email:</span>
                                    </label>
                                    <input type='text' placeholder='Type here' className='input input-bordered w-full max-w-xs' />
                                    <label className='label'>
                                    </label>
                                </div>
                                <div className='form-control w-full max-w-xs'>
                                    <label className='label'>
                                        <span className='label-text'>Password:</span>
                                    </label>
                                    <input type='text' placeholder='Type here' className='input input-bordered w-full max-w-xs' />
                                    <label className='label'>
                                    </label>
                                </div>
                            </div>
                            <div className='flex justify-between px-[60px] '>
                                <div className='form-control w-full max-w-xs'>
                                    <label className='label'>
                                        <span className='label-text'>Job:</span>
                                    </label>
                                    <input type='text' placeholder='Type here' className='input input-bordered w-full max-w-xs' />
                                    <label className='label'>
                                    </label>
                                </div>
                                <div className='form-control w-full max-w-xs'>
                                    <label className='label'>
                                        <span className='label-text'>About:</span>
                                    </label>
                                    <input type='text' placeholder='Type here' className='input input-bordered w-full  h-[115px] max-w-xs' />
                                    <label className='label'>
                                    </label>
                                </div>
                            
                            </div>
                            <div className='flex justify-center mt-32'>
                                <div className='mb-24'><button className='btn btn-primary'>Request to be an author </button></div>
                            </div>
                        </form>
                  
                    </div>
                   
                </div>
                
            </div>
            <footer>
                <Footer />
            </footer>
        </>
    )
}

export default editProfile