import Header from "../../components/Headers"
import Picture from "../../assets/img/picture_login.png"

import Filter from "../../assets/img/filter.png"
import Footer from "../../components/Footers"
import { FaChevronLeft } from "react-icons/fa"
import { Link } from "react-router-dom"



const notification = () => {
    return (
        <>
            <div>
                <nav>
                    <Header/>
                </nav>
               
            </div>
            <div className='flex flex-col gap-10 pt-20 pb-12'>
                <div className='flex w-full justify-between px-20 items-center'>
                    <Link to='/'>
                        <div className='flex gap-4 items-center'>
                            <FaChevronLeft size={20} />
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
                <div className='flex self-center '>
                    <button className='btn btn-primary w-[400px] '>Delete Selected Items</button>
                </div>
            </div>
           
            <footer>
                <Footer/>
            </footer>
        </>
    )
}

export default notification