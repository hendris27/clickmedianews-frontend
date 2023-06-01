import Header from "../../components/Headers"
import Footer from "../../components/Footers"
import ScrollToTop from "../../components/ScrollToTop"
import home_main from "../../assets/img/picture_main_content.png"
import picture_video from "../../assets/img/Video.png"
import image from "../../assets/img/Image.png"
import card from "../../assets/img/Card.png"
import picture_category from "../../assets/img/articel.jpg"
import { BiLike, BiTimeFive} from "react-icons/bi"
import { BsFillBookmarkFill } from "react-icons/bs"
// import Category from "../../components/Category"
import { Link } from "react-router-dom"
import { useState, useEffect } from "react"
import http from "../../helpers/http"
import moment from "moment"

const Home = ()=> {
    const [article, setArticle] = useState([])
    const [category, setCategory] = useState([])

    useEffect(()=> {

        async function getCategory(id){
            const {data} = await http().get(`/articles/home/${id}`)

            setCategory(data.results)
        }
        getCategory()
    }, [])
    useEffect(()=> {
        async function getArticle(){
            const {data} = await http().get("/articles?limit=5")
            setArticle(data.results)
        }
        getArticle()
    }, [])
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
                                <div className='mt-8 bg-[#444cd4] hover:bg-[#6261df] w-[172px] h-16 rounded-xl text-[20px] flex items-center justify-center '>
                                    <Link to='/writearticles'>
                                        <button className='text-white'>Start Writing</button>

                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='flex flex-col bg-white px-[60px] pt-[60px] pb-[101px]  '>
                        <div className='flex flex-col gap-8'>
                            <div className='flex justify-between font-semibold'>
                                <div>Popular</div>
                                <div className='text-[#444cd4] cursor-pointer'>More</div>
                            </div>
                            <div className='flex gap-16 font-semibold text-[#444cd4] cursor-pointer '>
                                <div className='hover:text-black'>#ladygaga</div>
                                <div className='hover:text-black'>#jokowidodo</div>
                                <div className='hover:text-black'>#dayniki</div>
                                <div className='hover:text-black'>#ladygaga</div>
                                <div className='hover:text-black'>##dayniki</div>
                                <div className='hover:text-black'>#jokowidodo</div>
                                <div className='hover:text-black'>#dayniki</div>
                                <div className='hover:text-black'>#jokowidodo</div>
                                <div className='hover:text-black'>#ladygaga</div>
                            </div>
                            <div className='flex flex-col gap-8 pt-[60px]'>
                                <div className='flex justify-between font-semibold'>
                                    <div>Category</div>
                                    <Link to='/categoryarticles'>
                                        <div className='text-[#444cd4] cursor-pointer'>More</div>
                                    </Link>
                                </div>
                                <div className=''>
                                    <div className='grid grid-cols-4 drop-shadow-3xl gap-y-12'>
                                        {category.map(category => {
                                            return (
                                                <div key={`category-${category.id}`} >
                                                    <div className='flex flex-col items-center gap-4 drop-shadow-2xl' >
                                                        <div className='w-[202px] h-[222px] rounded-3xl overflow-hidden relative '>
                                                            <Link to='/categoryarticles'>
                                                                <img src={category.picture} className='w-full h-full object-cover' alt={category.category} />
                                                            </Link>
                                                        </div>
                                                        <div className='text-[20px] font-bold hover:text-primary cursor-pointer'>{category.category}</div>
                                                    </div>
                                                </div>
                                            )
                                        })}
                                    </div>
                                </div>
                            </div>
                            <div className='flex flex-col gap-8 pt-[20px]'>
                                <div className='flex justify-between font-semibold'>
                                    <div>Recomended</div>
                                    <div className='text-[#444cd4] cursor-pointer'>More</div>
                                </div>
                                {article.map(article => {
                                    return (
                                        <Link to={`/articleView/${article.id}`} key={article.id} className='flex bg-white w-[396px] rounded-3xl gap-8 drop-shadow-2xl '>
                                            <div className='flex justify-between items-center' >
                                                <div className='w-[126px] h-[222px] rounded-3xl overflow-hidden bg-green-400'>
                                                    <img src={article.picture} className='w-[100%] h-full object-cover' alt='' />
                                                </div>
                                                <div className='pl-8'>
                                                    <div className='flex flex-col gap-8' >
                                                        <div className='flex flex-col gap-4'>
                                                            <div className='text-[#444cd4] text-[20px] leading-[20px] '>{article.title}</div>
                                                            <div className='text-[18px] leading-[20px] font-medium '>{article.descriptions}</div>
                                                        </div>
                                                        <div className='flex gap-4'>
                                                            <div className='flex gap-2 items-center'>
                                                                <div><BiLike/></div>
                                                                <div>2.1k</div>
                                                            </div>
                                                            <div className='flex gap-2 items-center'>
                                                                <div><BiTimeFive/></div>
                                                                <div>{moment(article.createdAt).fromNow("mm")} ago</div>
                                                            </div>
                                                            <div className='flex items-center'><BsFillBookmarkFill color='#444cd4'/></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#D7DDEC] pl-[155px] pt-[135px] pb-[175px]'>
                        <div className='flex gap-16'>
                            <div className='flex flex-col gap-8'>
                                <div className='flex flex-col gap-4'>
                                    <div className='font-bold text-[36px] leading-[56px]  '>Let&apos;s hear about <br/> Kayla&apos;s success story</div>
                                    <div className='font-medium'>See how well News Today works in a <br/> real user&apos; life. </div>
                                </div>
                                <div className='bg-[#444cd4] hover:bg-[#6261df] text-white w-[180px] h-16 flex items-center justify-center rounded-xl'>
                                    <button>Let’s get started</button>
                                </div>
                            </div>
                            <div>
                                <img src={picture_video} alt='picture' />
                            </div>
                        </div>
                    </div>
                    <div className='bg-[#ffffff] pl-[155px] pt-[135px] pb-[175px]'>
                        <div className='flex gap-16'>
                            <div className='flex relative'>
                                <img src={image} />
                                <div className='absolute -inset-x-20 -bottom-20'>
                                    <img src= {card} alt='picture' />
                                </div>
                            </div>
                            <div className='flex flex-col gap-8'>
                                <div className='flex flex-col gap-4'>
                                    <div className='font-medium'>Our Product</div>
                                    <div className='font-bold text-[36px] leading-[56px]  '>
                                        You tell us some facts, <br/> We help you to make your <br/> article
                                    </div>
                                    <div className='font-medium'>
                                        Everyone has their own facts, and in different ways. <br/>
                                        Let Click News helps you to be a good author to <br/>
                                        educate people just by reading your article.
                                    </div>
                                </div>
                                <div className='bg-[#444cd4] hover:bg-[#6261df] text-white w-[180px] h-16 flex items-center justify-center rounded-xl'>
                                    <button className='text-white'>Start Exploring</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='bg-white px-[60px] pt-[65px] pb-[150px]'>
                        <div className='flex flex-col gap-8'>
                            <div className='font-bold text-[24px]'>Latest News</div>
                            <div className='flex gap-8'>
                                {article.map(article => {
                                    return (
                                        <Link to={`/articleView/${article.id}`} key={`article-${article.id}`} className='flex bg-white w-[396px] rounded-3xl gap-8 drop-shadow-2xl'>
                                            <div className='flex justify-between items-center' >
                                                <div className='w-[126px] h-[222px] rounded-3xl overflow-hidden bg-green-400'>
                                                    <img src={article.picture} className='w-[100%] h-full object-cover' alt='' />
                                                </div>
                                                <div className='pl-8'>
                                                    <div className='flex flex-col gap-8' >
                                                        <div className='flex flex-col gap-4'>
                                                            <div className='text-[#444cd4] text-[20px] leading-[20px] '>{article.title}</div>
                                                            <div className='text-[18px] leading-[20px] font-medium '>{article.descriptions}</div>
                                                        </div>
                                                        <div className='flex gap-4'>
                                                            <div className='flex gap-2 items-center'>
                                                                <div><BiLike/></div>
                                                                <div>2.1k</div>
                                                            </div>
                                                            <div className='flex gap-2 items-center'>
                                                                <div><BiTimeFive/></div>
                                                                <div>{moment(article.createdAt).fromNow("mm")} ago</div>
                                                            </div>
                                                            <div className='flex items-center'><BsFillBookmarkFill color='#444cd4'/></div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </Link>
                                    )
                                })}
                                <div className='flex bg-white w-[396px] rounded-3xl gap-8 drop-shadow-2xl'>
                                    <div className='flex justify-between items-center' >
                                        <div className='w-[126px] h-[222px] rounded-3xl overflow-hidden'>
                                            <img src={picture_category} className='w-[100%] h-full object-cover' alt='' />
                                        </div>
                                        <div className='pl-8'>
                                            <div className='flex flex-col gap-8' >
                                                <div className='flex flex-col gap-4'>
                                                    <div className='text-[#444cd4] text-[20px] leading-[20px] '>COVID-19</div>
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
                                                    <div className='flex items-center'><BsFillBookmarkFill color='#444cd4'/></div>
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
                                                    <div className='text-[#444cd4] text-[20px] leading-[20px] '>COVID-19</div>
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
                                                    <div className='flex items-center'><BsFillBookmarkFill color='#444cd4'/></div>
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
