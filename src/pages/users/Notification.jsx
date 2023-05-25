import logoBrand from "../../assets/img/logo_brand.png"
import Footers from "../../components/Footers.jsx"
import Bell from "../../assets/img/bell.svg"
import { Link } from "react-router-dom"
import Filter from "../../assets/img/filter.png"
import Picture from "../../assets/img/picture_login.png"
import ArrowBack from "../../assets/img/arrow-back.svg"

const Notification = () => {
    return (
        <>
            <div>
                <div className='flex w-full justify-between items-center h-[112px] px-10'>
                    <div><img src={logoBrand} className='w-32'/></div>
                    <div>
                        <nav>
                            <ul className='flex gap-10 text-[20px] font-medium'>
                                <li className='hover:text-black text-gray-500 cursor-pointer'>Home</li>
                                <li className='hover:text-black text-gray-500 cursor-pointer'>Articles</li>
                                <li className='hover:text-black text-gray-500 cursor-pointer'>Category</li>
                                <li className='hover:text-black text-gray-500 cursor-pointer'>About</li>
                            </ul>
                        </nav>
                    </div>
                    <div>
                        <div className='flex items-center gap-5'>
                            <div>
                                <img src={Bell} className='w-6'/>
                            </div>
                            <div>
                                <div className='rounded-full border-2 border-black overflow-hidden w-12 h-12'>
                                    <img src={Picture} className='object-cover' />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex flex-col gap-10'>
                    <div className='flex w-full justify-between px-20 items-center'>
                        <Link>
                            <div className='flex gap-4'>
                                <img src={ArrowBack} className='w-2' />
                                <div className='font-bold'>Home Page</div>
                            </div>
                        </Link>
                        <div>
                            <div className='font-bold text-[24px]'>Notification</div>
                        </div>
                        <div>
                            <div className='font-bold'>Select</div>
                        </div>
                    </div>
                    <div>
                        <div className='flex gap-5 px-20'>
                            <img src={Filter} alt='' className='w-6'/>
                            <p className='font-bold'>Filter</p>
                        </div>
                    </div>
                    <div className='flex flex-col gap-16 pb-20'>
                        <div className='w-full flex justify-between items-center px-20'>
                            <div className='flex gap-5 justify-center items-center'>
                                <div className='rounded-full border-2 border-black overflow-hidden w-12 h-12'>
                                    <img src={Picture} className='object-cover' />
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor='notification' className='font-bold'>Ryan just liked your post</label>
                                    <label htmlFor='notification' className='text-gray-500'>2m ago</label>
                                </div>
                            </div>
                            <div>
                                <input type='checkbox' name='notification' id='notification' className='w-6 h-6 border-primary' />
                            </div> 
                        </div>
                        <div className='w-full flex justify-between items-center px-20'>
                            <div className='flex gap-5 justify-center items-center'>
                                <div className='rounded-full border-2 border-black overflow-hidden w-12 h-12'>
                                    <img src={Picture} className='object-cover' />
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor='notification1' className='font-bold'>Ryan just liked your post</label>
                                    <label htmlFor='notification1' className='text-gray-500'>2m ago</label>
                                </div>
                            </div>
                            <div>
                                <input type='checkbox' name='notification1' id='notification1' className='w-6 h-6 border-primary' />
                            </div>
                        </div>
                        <div className='w-full flex justify-between items-center px-20'>
                            <div className='flex gap-5 justify-center items-center'>
                                <div className='rounded-full border-2 border-black overflow-hidden w-12 h-12'>
                                    <img src={Picture} className='object-cover' />
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor='notification2' className='font-bold'>Ryan just liked your post</label>
                                    <label htmlFor='notification2' className='text-gray-500'>2m ago</label>
                                </div>
                            </div>
                            <div>
                                <input type='checkbox' name='notification2' id='notification2' className='w-6 h-6 border-primary' />
                            </div>
                        </div>
                        <div className='w-full flex justify-between items-center px-20'>
                            <div className='flex gap-5 justify-center items-center'>
                                <div className='rounded-full border-2 border-black overflow-hidden w-12 h-12'>
                                    <img src={Picture} className='object-cover' />
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor='notification3' className='font-bold'>Ryan just liked your post</label>
                                    <label htmlFor='notification3' className='text-gray-500'>2m ago</label>
                                </div>
                            </div>
                            <div>
                                <input type='checkbox' name='notification3' id='notification3' className='w-6 h-6 border-primary' />
                            </div>
                        </div>
                        <div className='w-full flex justify-between items-center px-20'>
                            <div className='flex gap-5 justify-center items-center'>
                                <div className='rounded-full border-2 border-black overflow-hidden w-12 h-12'>
                                    <img src={Picture} className='object-cover' />
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor='notification4' className='font-bold'>Ryan just liked your post</label>
                                    <label htmlFor='notification4' className='text-gray-500'>2m ago</label>
                                </div>
                            </div>
                            <div>
                                <input type='checkbox' name='notification4' id='notification4' className='w-6 h-6 border-primary' />
                            </div>
                        </div>
                        <div className='w-full flex justify-between items-center px-20'>
                            <div className='flex gap-5 justify-center items-center'>
                                <div className='rounded-full border-2 border-black overflow-hidden w-12 h-12'>
                                    <img src={Picture} className='object-cover' />
                                </div>
                                <div className='flex flex-col'>
                                    <label htmlFor='notification5' className='font-bold'>Ryan just liked your post</label>
                                    <label htmlFor='notification5' className='text-gray-500'>2m ago</label>
                                </div>
                            </div>
                            <div>
                                <input type='checkbox' name='notification5' id='notification5' className='w-6 h-6 border-primary' />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footers/>
        </>
    )
}

export default Notification