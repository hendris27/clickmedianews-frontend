import Header from "../../components/Headers"
import picture_category from "../../assets/img/articel.jpg"

import { BiLike, BiTimeFive} from "react-icons/bi"
import { BsFillBookmarkFill } from "react-icons/bs"
import Filter from "../../assets/img/filter.png"
import Footer from "../../components/Footers"

const SearchArticles = () => {
    return (
        <>
            <div>
                <nav>
                    <Header/>
                </nav>
               
            </div>
            
            <div className='bg-white px-[60px] pt-[125px] pb-[90px]'>
                <div className='flex flex-col gap-8'>
                    <div className='font-bold'>Search result for &quot;COVID 19 &quot;</div>
                    <div className='font-bold'>Related Tags</div>
                    <div className='font-bold flex gap-20'>
                        <div className='bg-blue-100 text-[#19A7CE] px-2'>#ladygaga</div>
                        <div className='bg-blue-100 text-[#19A7CE] px-2'>#ladygaga</div>
                        <div className='bg-blue-100 text-[#19A7CE] px-2'>#jokowidodo</div>        
                        <div className='bg-blue-100 text-[#19A7CE] px-2'>#ladygaga</div>
                        <div className='bg-blue-100 text-[#19A7CE] px-2'>#ladygaga</div>
                        <div className='bg-blue-100 text-[#19A7CE] px-2'>#dayniki</div>
                    </div>
                    
                    <div className='flex gap-5'>
                        <div><img src={Filter} className='w-6'/></div>
                        <div>Filter Article : sort by 
                            <select className='border-0 outline-none font-bold'>
                                <option className='w-[420px]' value=''>Name (A-Z)</option>
                                <option value=''>Name (Z-A)</option>
                                <option value=''>Category</option>
                                <option value=''>Last Added</option>
                                <option value=''>Last Modified</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div>
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='pt-8'>
                        <div className='flex flex-col gap-8'>
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
                    <div className='pt-8'>
                        <div className='flex flex-col gap-8'>
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
                    <div className='pt-8'>
                        <div className='flex flex-col gap-8'>
                            <div className='font-bold text-[24px]'>Today’s Popular</div>
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
                    
                </div>
            </div>
           
            <footer>
                <Footer/>
            </footer>
        </>
    )
}

export default SearchArticles