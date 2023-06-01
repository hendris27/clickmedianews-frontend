import Header from "../../components/Headers"
import { Link } from "react-router-dom"
import ScrollToTop from "../../components/ScrollToTop"
import { BiLike, BiTimeFive} from "react-icons/bi"
import { BsFillBookmarkFill } from "react-icons/bs"
import Articles from "../../assets/img/picture_articles.png"
import CategoryFade from "../../assets/img/category-image.png"
import Filter from "../../assets/img/filter.png"
import Footer from "../../components/Footers"
import http from "../../helpers/http"
import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { FiEdit2 } from "react-icons/fi"
import moment from "moment"



const ArticlesPage = () => {
    const [article, setArticles] = useState([])
    const [user, setUser] = useState([])
    const token = useSelector(state => state.auth.token)



    useEffect(() => {
        async function getDataArticles() {
            try {
                const { data } = await http ().get("/articles?limit=100")
                setArticles(data.results)
            } catch (error) {
                const message = error?.response?.data?.message
                if (message) {
                    console.log(message)
                }
            }
        }
        getDataArticles()

        async function getUser(){
            try {
                const {data} =  await http(token).get("/admin/users/detail")
                console.log(data.results)
                if(data.results.role === "superadmin"){
                    setUser(data.results.role)
                }
            } catch (error) {
                const message = error?.response?.data?.message
                if(message){
                    console.log(message)
                }
            }
        }
        getUser()


    },[token])
    return (
        <>
            <div>
                <nav>
                    <Header/>
                </nav>
                <div className='w-full relative'>
                    <div className='relative'>
                        <img src={Articles} className='w-full'/>
                        <img src={CategoryFade} className='absolute top-0 w-full'/>
                    </div>
                    <div className='absolute top-0 left-0 w-[668px] p-20'>
                        <p className='text-[65px]'>Start Writing an Article</p>
                        <div className='w-[497px] text-[20px] '>
                            <p>
                            You can be an author by being active in reading artciles in a month or you can request to be an author if you have been a member for three months.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='bg-white px-[60px] pt-[65px] pb-[90px]'>
                <div>
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
                <div className='flex flex-col gap-4'>
                    <div className='pt-8'>
                        <div className=''>
                            <div className='font-bold text-[24px]'>Sport</div>
                            <div className='grid grid-cols-3 gap-y-12 gap-x-12'>
                                {article.map(event=>{
                                    return (
                                        <Link to={`/articleView/${event.id}`} key={`articles${event.id}`}>
                                            {event.status === true && <div className='flex bg-white w-[396px] rounded-3xl gap-8 drop-shadow-2xl'>
                                                <div className='flex justify-between items-center' >
                                                    <div className='flex-0.8 w-[126px] h-[222px] rounded-3xl overflow-hidden bg-green-400'>
                                                        <img src={event.picture} className='w-[100%] h-full object-cover' alt='' />
                                                    </div>
                                                    <div className='flex-1 pl-8'>
                                                        <div className='flex flex-col gap-8' >
                                                            <div className='flex flex-col gap-4'>
                                                                <div className='text-[#19A7CE] text-[20px] leading-[20px] '>{event.title}</div>
                                                                <div className='text-[18px] leading-[20px] font-medium '>{event.descriptions}</div>
                                                            </div>
                                                            <div className='flex gap-4'>
                                                                {user !=="superadmin" && 
                                                            <div className='flex gap-2 items-center'>
                                                                <div><BiLike /></div>
                                                                <div>{event.likeCount}</div>
                                                            </div>}
                                                                <div className='flex gap-2 items-center'>
                                                                    <div><BiTimeFive /></div>
                                                                    <div>{moment(event.createdAt).fromNow("mm")} ago</div>
                                                                </div>
                                                                <div className='flex items-center'><BsFillBookmarkFill color='#19A7CE' /></div>
                                                            </div>
                                                            {user === "superadmin" && 
                                                            <div className='flex gap-3 justify-between items-center'>
                                                                <div className='flex items-center'>
                                                                    <button className='bg-primary h-10 px-4 text-white rounded-xl hover:bg-red-500'>Delete events</button>
                                                                </div>

                                                                <div className='bg-primary h-10 w-10 mr-2 flex items-center justify-center rounded-full hover:bg-green-500'>
                                                                    <Link to='/writearticles'>
                                                                        <button><FiEdit2 color='white' size={15} /></button>
                                                                    </Link>
                                                                </div>
                                                            </div> }
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>}
                                        </Link>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                   
                </div>
                <div className='flex items-center justify-center'>
                    <div className='pt-12 w-[816px] h-[118px] '>
                        <Link to='/categoryarticles'>
                            <button className='btn bg-blue-100 text-[#19A7CE] font-bold h-full w-full border-0  hover:bg-[#19A7CE] hover:text-white'>
                          Load another 30+ category
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
           
            <footer>
                <Footer/>
            </footer>
            <ScrollToTop/>
        </>
    )
}

export default ArticlesPage