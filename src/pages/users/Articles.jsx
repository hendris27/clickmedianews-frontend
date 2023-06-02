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
import moment from "moment"
import { Formik } from "formik"

const ArticlesPage = () => {
    const [article, setArticles] = useState([])
    const [, setUser] = useState([])
    const token = useSelector(state => state.auth.token)
    const [category, setCategory] = useState([])

    useEffect(() => {
        async function getDataArticles() {
            try {
                const { data } = await http().get("/articles?limit=100")
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

        async function getCategory(){
            try {
                const {data} = await http().get("/categories?limit=20")
                setCategory(data.results)
            } catch (error) {
                const message = error?.response?.data?.message
                if(message){
                    console.log(message)
                }
            }
        }
        getCategory()

    },[token])

    async function filterArticles(values, setArticles) {
        try {
            console.log(values)
            const { data } = await http().get(`/articles?limit=100&sortBy=${values.sortBy}`)
            setArticles(data.results)
        } catch (error) {
            const message = error?.response?.data?.message
            if (message) {
                console.log(message)
            }
        }
    }

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
                    <Formik
                        initialValues={{ sortBy: "ASC"}}
                        onSubmit={(values) => filterArticles(values, setArticles)}>

                        {({
                            values,
                            handleChange,
                            handleBlur,
                            handleSubmit

                        }) => (
                            <form onSubmit={handleSubmit} className='flex gap-5'>
                                <div><img src={Filter} className='w-6'/></div>
                                <div>Filter Article : sort by 
                                    <select 
                                        className='border-0 outline-none font-bold px-6'
                                        name='sortBy'
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        value={values.sortBy}
                                    >
                                        <option value={"ASC"}>Name (A-Z)</option>
                                        <option value={"DSC"}>Name (Z-A)</option>
                                        <option value=''>Category</option>
                                        <option value=''>Last Added</option>
                                        <option value=''>Last Modified</option>
                                    </select>

                                </div>
                                <button type='submit' className='bg-white text-white'>submit</button>
                            </form>
                        )}
                    </Formik>
                </div>
                <div className='flex flex-col gap-8'>
                    {category.map(category => {
                        return (
                            <div type='submit' key={`category-article-${category.id}`} className=' p-2 rounded-xl text-black text-[28px] font-bold'>{category.name}
                                <div className='grid grid-cols-3 gap-y-12 gap-x-12 mt-8'>
                                    {article.filter((items)=>items.status === true).map(event=>{
                                        return (
                                            <Link to={`/articleView/${event.id}`} key={`articles${event.id}`}>
                                                {event.status === true && <div className='flex bg-white w-[396px] rounded-3xl gap-8 drop-shadow-2xl'>
                                                    <div className='flex justify-between items-center cursor-pointer' >
                                                        <div className='flex-0.8 w-[126px] h-[222px] rounded-3xl overflow-hidden bg-green-400'>
                                                            <img src={event.picture} className='w-[100%] h-full object-cover' alt='' />
                                                        </div>
                                                        <div className='flex-1 pl-8'>
                                                            <div className='flex flex-col gap-8' >
                                                                <div className='flex flex-col gap-4'>
                                                                    <div className='text-[#19A7CE] text-[20px] leading-[20px] '>{event.title}</div>
                                                                    <div className='text-[18px] leading-[20px] font-medium '>{event.descriptions}</div>
                                                                </div>
                                                                <div className='flex gap-4 text-[16px]'>
                                                                    <div className='flex gap-4'>
                                                                        <div className='flex gap-2 items-center'>
                                                                            <div><button><BiLike /></button></div>
                                                                            <div>{event.likeCount}</div>
                                                                        </div>
                                                                        <div className='flex gap-2 items-center'>
                                                                            <div><BiTimeFive /></div>
                                                                            <div>{moment(event.createdAt).fromNow("mm-hh")}&nbsp; ago</div>
                                                                        </div>
                                                                        <div className='flex items-center'><button><BsFillBookmarkFill color='#19A7CE'/></button></div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>}
                                            </Link>
                                        )
                                    })}
                                </div>
                            </div>
                        )
                    })}    
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='pt-8'>
                        <div className=''>
                            <div className='font-bold text-[24px]'>Sport</div>
                           
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