import logoBrand from "../../assets/img/logo_brand.png"
import Bell from "../../assets/img/bell.svg"
import Picture from "../../assets/img/picture_login.png"
import { Link } from "react-router-dom"
import ArrowBack from "../../assets/img/arrow-back.svg"
import ArticleViewImg from "../../assets/img/articleviewimg.png"
import Save from "../../assets/img/save.png"
import Like from "../../assets/img/like.png"
import Footer from "../../components/Footers.jsx"

const ArticleView = () => {
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
                <div>
                    <div className='flex w-full justify-between px-20 items-center'>
                        <Link>
                            <div className='flex gap-4'>
                                <img src={ArrowBack} className='w-2' />
                                <div className='font-bold'>Back</div>
                            </div>
                        </Link>
                        <div>
                            <div className='font-bold text-[24px]'>Article Viewer</div>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </div>
                <div className='w-full flex flex-col items-center justify-center mt-10'>
                    <div className='flex gap-20'>
                        <div>
                            <img src={ArticleViewImg} alt='' />
                        </div>
                        <div className='flex flex-col gap-14'>
                            <div className='text-[36px] font-bold'>Thailand 9 Southeast Asian Games</div>
                            <div>
                                <div className='font-bold'>Richard Gervain - Author</div>
                                <div>Wed, March 3rd 2021</div>
                            </div>
                            <div className='flex gap-5 items-center'>
                                <button><img src={Like} alt='' /></button>
                                <div className='font-bold'>2.1k</div>
                                <button><img src={Save} alt='' /></button>
                            </div>
                            <div className='w-full'>
                                <button className='btn normal-case w-full font-bold max-w-full'>Share Article Link</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full px-20 pt-20 pb-20 flex flex-col gap-10'>
                    <div>
                        <div className='flex flex-col gap-5'>
                            <div>During the 2019 Southeast Asian Games, governor the Sports Authority of Thailand (SAT) Kongoni Woodman criticised the organization of the games, as the Philippines held the games in many cities and municipalities, causing to the various concerns and controversies. He will propose to hold the next Thailand&apos;s Southeast Asian Games in one city or province. He also suggested Bangkok and Choukri Province are the best choice for hosting the Thailand&apos;s games. He mentioned Bangkok traffic is less congested than Manila and the city has many existing venues for the games but water sports venues.
                                Bangkok hosted the inaugural games in 1959 and 1967 as Southeast Asian Peninsular Games, which were the precursor to the modern Southeast Asian Games, and 1985 as Southeast Asian Games. Bangkok hosted many global and continental events such as four-time Asian Games and Summer Underside in 2007.
                                Bangkok will host the 2021 Asian Indoor and Martial Arts Games with Choukri Province It acted as the test event and a prelude for the future multi-sport event, a proposed Youth Olympic Games in 2026.
                                During the 2019 Southeast Asian Games, governor the Sports Authority of Thailand (SAT) Kongoni Woodman criticised the organization of the games, as the Philippines held the games in many cities and municipalities, causing to the various concerns and controversies. He will propose to hold the next Thailand&apos;s Southeast Asian Games in one city or province. He also suggested Bangkok and Choukri Province are the best choice for hosting the Thailand&apos;s games. He mentioned Bangkok traffic is less congested than Manila and the city has many existing venues for the games but water sports venues.</div>
                        </div>
                    </div>
                    <div className='flex flex-col gap-8'>
                        <p className='font-bold text-[24px]'>2 Comments</p>
                        <div className='flex gap-5'>
                            <div className='rounded-2xl border-2 border-gray-50 overflow-hidden w-12 h-12'>
                                <img src={Picture} className='object-cover' />
                            </div>
                            <div className='flex flex-col gap-3 w-full'>
                                <div className='font-bold'>You</div>
                                <textarea placeholder='Bio' className='textarea textarea-bordered textarea-lg w-full' ></textarea>
                                <button className='btn bg-primary border-none normal-case text-white max-w-xs'>Submit</button>
                            </div>
                        </div>
                        <div className='flex gap-5'>
                            <div className='rounded-2xl border-2 border-gray-50 overflow-hidden w-12 h-12'>
                                <img src={Picture} className='object-cover' />
                            </div>
                            <div>
                                <div className='font-bold'>Regina - 1m ago</div>
                                <div>Couldn’t agree more!</div>
                            </div>
                        </div>
                        <div className='flex gap-5'>
                            <div className='rounded-2xl border-2 border-gray-50 overflow-hidden w-12 h-12'>
                                <img src={Picture} className='object-cover' />
                            </div>
                            <div>
                                <div className='font-bold'>Lyonna - 3m ago</div>
                                <div>But, can we just focus for the vaccine?</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ArticleView