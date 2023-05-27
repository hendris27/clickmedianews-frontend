import Header from "../../components/Headers"
import Footer from "../../components/Footers"
import ScrollToTop from "../../components/ScrollToTop"
import home_main from "../../assets/img/picture_main_content.png"
import picture_video from "../../assets/img/Video.png"
import picture_category from "../../assets/img/articel.jpg"
import { BiLike, BiTimeFive} from "react-icons/bi"
import { BsFillBookmarkFill } from "react-icons/bs"


const Home = ()=> {
    return (
        <>
       
            <div className='h-min-screen'>
                <nav>
                    <Header/>
                </nav>
                <main>
                    <div className='w-full relative '>
                        <div className='relative'>
                            <img src={home_main} className='w-full'/>
                        </div>
                        <div className='absolute top-0 left-0 flex flex-col  md:flex md:flex-row  bg-no-repeat bg-cover '>
                            <div className='flex flex-col h-full  gap-12 pl-[136px] pt-[100px] pb-[70px] '>
                                <div className='flex flex-col'>
                                    <div className='text-[65px] md:w-[668px] lg:w-[800px] leading-[74px] '>Share Information</div>
                                    <div className='text-[65px] md:w-[668px] lg:w-[800px] leading-[74px] '>and Educate People</div>
                                </div>
                                <div className='text-[20px] w-[608px] leading-[32px] '>Everyone has their point of view of something, but just don’t 
                            be afraid to express the facts. Be an author and share you 
                            prespective of something to the world.</div>
                                <div className='mt-8 bg-[#19A7CE] w-[172px] h-16 rounded-xl text-[20px] flex items-center justify-center hover:bg-[#E5E5CB] '>
                                    <button>Start Exploring</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col bg-white px-[60px] pt-[60px] pb-[101px]  '>
                        <div className='flex flex-col gap-8'>
                            <div className='flex justify-between font-semibold'>
                                <div>Popular</div>
                                <div className='text-[#19A7CE]'>More</div>
                            </div>
                            <div className='flex gap-16 font-semibold text-[#19A7CE] cursor-pointer '>
                                <div className='hover:text-black'>#ladygaga</div>
                                <div className='hover:text-black'>#jokowidodo</div>
                                <div className='hover:text-black'>#dayniki</div>
                                <div className='hover:text-black'>#ladygaga</div>
                                <div className='hover:text-black'>#ladygaga</div>
                                <div className='hover:text-black'>#jokowidodo</div>
                                <div className='hover:text-black'>#dayniki</div>
                                <div className='hover:text-black'>#jokowidodo</div>
                                <div className='hover:text-black'>#ladygaga</div>
                            </div>
                            <div className='flex flex-col gap-8 pt-[20px]'>
                                <div className='flex justify-between font-semibold'>
                                    <div>Category</div>
                                    <div className='text-[#19A7CE]'>More</div>
                                </div>
                                <div className='flex gap-8'>
                                    <div className='flex flex-col items-center gap-4 drop-shadow-2xl' >
                                        <div className='w-[202px] h-[222px] rounded-3xl overflow-hidden '>
                                            <img src={picture_category} className='w-full h-full object-cover' alt='' />
                                        </div>
                                        <div>Government</div>
                                    </div>
                                    <div className='flex flex-col items-center gap-4 drop-shadow-2xl' >
                                        <div className='w-[202px] h-[222px] rounded-3xl overflow-hidden '>
                                            <img src={picture_category} className='w-full h-full object-cover' alt='' />
                                        </div>
                                        <div>Government</div>
                                    </div>
                                    <div className='flex flex-col items-center gap-4 drop-shadow-2xl' >
                                        <div className='w-[202px] h-[222px] rounded-3xl overflow-hidden '>
                                            <img src={picture_category} className='w-full h-full object-cover' alt='' />
                                        </div>
                                        <div>Government</div>
                                    </div>
                                    <div className='flex flex-col items-center gap-4 drop-shadow-2xl' >
                                        <div className='w-[202px] h-[222px] rounded-3xl overflow-hidden '>
                                            <img src={picture_category} className='w-full h-full object-cover' alt='' />
                                        </div>
                                        <div>Government</div>
                                    </div>
                                    <div className='flex flex-col items-center gap-4 drop-shadow-2xl' >
                                        <div className='w-[202px] h-[222px] rounded-3xl overflow-hidden '>
                                            <img src={picture_category} className='w-full h-full object-cover' alt='' />
                                        </div>
                                        <div>Government</div>
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-8 pt-[20px]'>
                                <div className='flex justify-between font-semibold'>
                                    <div>Recomended</div>
                                    <div className='text-[#19A7CE]'>More</div>
                                </div>
                                <div className='flex bg-white w-[396px] rounded-3xl gap-8 drop-shadow-2xl '>
                                    <div className='flex justify-between items-center' >
                                        <div className='w-[126px] h-[222px] rounded-3xl overflow-hidden bg-green-400'>
                                            <img src={picture_category} className='w-[100%] h-full object-cover' alt='' />
                                        </div>
                                        <div className='pl-8'>
                                            <div className='flex flex-col gap-8' >
                                                <div className='flex flex-col gap-4'>
                                                    <div className='text-[#19A7CE] text-[20px] leading-[20px] '>COVID-19</div>
                                                    <div className='text-[18px] leading-[20px] font-medium '>Why corona never ends? <br/> Let’s see how its facts</div>
                                                </div>
                                                <div className='flex gap-4'>
                                                    <div className='flex gap-2 items-center'>
                                                        <div><BiLike/></div>
                                                        <div>2.1k</div>
                                                    </div>
                                                    <div className='flex gap-2 items-center'>
                                                        <div><BiTimeFive/></div>
                                                        <div>3m ago</div>
                                                    </div>
                                                    <div className='flex items-center'><BsFillBookmarkFill color='#19A7CE'/></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#E5E5CB] pl-[155px] pt-[135px] pb-[175px]'>
                        <div className='flex gap-16'>
                            <div className='flex flex-col gap-8'>
                                <div className='flex flex-col gap-4'>
                                    <div className='font-bold text-[36px] leading-[56px]  '>Let&apos;s hear about <br/> Kayla&apos;s success story</div>
                                    <div className='font-medium'>See how well News Today works in a <br/> real user&apos; life. </div>
                                </div>
                                <div className='bg-[#19A7CE] w-[180px] h-16 flex items-center justify-center rounded-xl'>
                                    <button>Let’s get started</button>
                                </div>
                            </div>
                            <div>
                                <img src={picture_video} alt='picture' />
                            </div>
                        </div>
                    </div>
                    <div className='bg-white px-[60px] pt-[65px] pb-[150px]'>
                        <div className='flex flex-col gap-8'>
                            <div className='font-bold text-[24px]'>Latest News</div>
                            <div className='flex gap-8'>
                                <div className='flex bg-white w-[396px] rounded-3xl gap-8 drop-shadow-2xl'>
                                    <div className='flex justify-between items-center' >
                                        <div className='w-[126px] h-[222px] rounded-3xl overflow-hidden bg-green-400'>
                                            <img src={picture_category} className='w-[100%] h-full object-cover' alt='' />
                                        </div>
                                        <div className='pl-8'>
                                            <div className='flex flex-col gap-8' >
                                                <div className='flex flex-col gap-4'>
                                                    <div className='text-[#19A7CE] text-[20px] leading-[20px] '>COVID-19</div>
                                                    <div className='text-[18px] leading-[20px] font-medium '>Why corona never ends? <br/> Let’s see how its facts</div>
                                                </div>
                                                <div className='flex gap-4'>
                                                    <div className='flex gap-2 items-center'>
                                                        <div><BiLike/></div>
                                                        <div>2.1k</div>
                                                    </div>
                                                    <div className='flex gap-2 items-center'>
                                                        <div><BiTimeFive/></div>
                                                        <div>3m ago</div>
                                                    </div>
                                                    <div className='flex items-center'><BsFillBookmarkFill color='#19A7CE'/></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex bg-white w-[396px] rounded-3xl gap-8 drop-shadow-2xl'>
                                    <div className='flex justify-between items-center' >
                                        <div className='w-[126px] h-[222px] rounded-3xl overflow-hidden'>
                                            <img src={picture_category} className='w-[100%] h-full object-cover' alt='' />
                                        </div>
                                        <div className='pl-8'>
                                            <div className='flex flex-col gap-8' >
                                                <div className='flex flex-col gap-4'>
                                                    <div className='text-[#19A7CE] text-[20px] leading-[20px] '>COVID-19</div>
                                                    <div className='text-[18px] leading-[20px] font-medium '>Why corona never ends? <br/> Let’s see how its facts</div>
                                                </div>
                                                <div className='flex gap-4'>
                                                    <div className='flex gap-2 items-center'>
                                                        <div><BiLike/></div>
                                                        <div>2.1k</div>
                                                    </div>
                                                    <div className='flex gap-2 items-center'>
                                                        <div><BiTimeFive/></div>
                                                        <div>3m ago</div>
                                                    </div>
                                                    <div className='flex items-center'><BsFillBookmarkFill color='#19A7CE'/></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex bg-white w-[396px] rounded-3xl gap-8 drop-shadow-3xl drop-shadow-2xl '>
                                    <div className='flex justify-between items-center' >
                                        <div className='w-[126px] h-[222px] rounded-3xl overflow-hidden'>
                                            <img src={picture_category} className='w-[100%] h-full object-cover' alt='' />
                                        </div>
                                        <div className='pl-8'>
                                            <div className='flex flex-col gap-8' >
                                                <div className='flex flex-col gap-4'>
                                                    <div className='text-[#19A7CE] text-[20px] leading-[20px] '>COVID-19</div>
                                                    <div className='text-[18px] leading-[20px] font-medium '>Why corona never ends? <br/> Let’s see how its facts</div>
                                                </div>
                                                <div className='flex gap-4'>
                                                    <div className='flex gap-2 items-center'>
                                                        <div><BiLike/></div>
                                                        <div>2.1k</div>
                                                    </div>
                                                    <div className='flex gap-2 items-center'>
                                                        <div><BiTimeFive/></div>
                                                        <div>3m ago</div>
                                                    </div>
                                                    <div className='flex items-center'><BsFillBookmarkFill color='#19A7CE'/></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
                <footer>
                    <Footer/>
                </footer>
            </div>
            <ScrollToTop/>
        </> 
    )
    
}

export default Home
