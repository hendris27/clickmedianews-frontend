import Header from "../../components/Headers"
import ScrollToTop from "../../components/ScrollToTop"
import { BiLike, BiTimeFive } from "react-icons/bi"
import { BsFillBookmarkFill } from "react-icons/bs"
import { FiEdit2 } from "react-icons/fi"
import Filter from "../../assets/img/filter.png"
import Footer from "../../components/Footers"
import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import http from "../../helpers/http"
import { useSelector } from "react-redux"   
import { useLocation } from "react-router-dom"

const CategoryArticles = () => {
    const navigate = useNavigate()
    const [category, setCategory] = useState([])
    const [user, setUser] = useState([])
    const token = useSelector(state => state.auth.token)
    const [article, setArticle] = useState([])
    const { state } = useLocation()

    useEffect(()=> {
        async function getCategory(){
            try {
                const {data} = await http().get("/categories?limit=9")
                setCategory(data.results)
            } catch (error) {
                const message = error?.response?.data?.message
                if(message){
                    console.log(message)
                }
            }
        }
        getCategory()

        async function getArticle(){
            try {
                const {data} = await http().get("/articles?limit=100")
                console.log(data.results)
                if(data.results){
                    setArticle(data.results)
                }
            } catch (error) {
                const message = error?.response?.data?.message
                if(message){
                    console.log(message)
                }
            }
        }getArticle()

        async function getUser(){
            try {
                const {data} =  await http(token).get("/admin/users/detail")
                console.log(data.results.role)
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
    }, [token])

    async function deleteArticle(id){
        const confirmed = window.confirm("Are you sure to deleted this Articles")
        if (confirmed) {
            try {
                const {data} = await http(token).delete(`/admin/articles/${id}`)
                console.log(data.results)
                if(data.results){
                    navigate("/categoryarticles")
                }
            } catch (error) {
                const message = error?.response?.data?.message
                if(message){
                    console.log(message)
                }
            }
        } 
    }

    useEffect(()=> {
        async function getArticleCategory(name){
            try {
                const {data} = await http().get("/articles", {params: {category: name}})
                if(state.categories){
                    await http().get("/articles", {params: {category: state.categories}})
                }
                setArticle(data.results)
            } catch (error) {
                const message = error?.response?.data?.message
                if(message){
                    console.log(message)
                }
            }
        }

        let data
        if (state?.categories){
            data = state.categories
        }

        getArticleCategory(data)

    }, [])

    async function getArticleCategory(name){
        try {
            const {data} = await http().get("/articles", {params: {category: name}})
            setArticle(data.results)
        } catch (error) {
            const message = error?.response?.data?.message
            if(message){
                console.log(message)
            }
        }
    }
    return (
        <>
            <div>
                <nav>
                    <Header />
                </nav>
            </div>
            <div className='pt-[100px] px-[60px]'>
                <div className='flex gap-8 justify-between cursor-pointer'>
                    {category.map(category => {
                        return (
                            <button  onClick={()=>getArticleCategory(category.name)} type='submit' key={`category-article-${category.id}`} className='hover:bg-blue-200 p-2 rounded-xl text-[#19A7CE] text-[18px] font-bold'>{category.name}</button>
                        )
                    })}    
                </div>
            </div>
            <div className='bg-white px-[60px] pt-[65px] pb-[90px]'>
                <div>
                    <div className='w-full flex justify-between'>
                        <div className='flex gap-5'>
                            <img src={Filter} className='w-6' />
                            <div className='dropdown'>
                                <label tabIndex={0} className='m-1 cursor-pointer font-bold'>Filter Article : sort by</label>
                                <ul tabIndex={0} className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'>
                                    <li><a>Name</a></li>
                                    <li><a>Category</a></li>
                                    <li><a>Last Added</a></li>
                                    <li><a>Last Modified</a></li>
                                </ul>
                            </div>
                        </div>
                        <p className='font-bold'>18 Categories</p>
                    </div>
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='pt-8'>
                        <div className='flex flex-col'>
                            <div className='grid grid-cols-3 gap-y-12 gap-x-16'>
                                {article.filter(items => items.status === true).map(event=>{
                                    return(
                                        <div key={`article${event.id}`}>
                                            <Link to={`/articleview/${event.id}`}>
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
                                                                {user !== "superadmin" && <div className='flex gap-4'>
                                                                    <div className='flex gap-2 items-center'>
                                                                        <div><BiLike /></div>
                                                                        <div>{event.likeCount}</div>
                                                                    </div>
                                                                    <div className='flex gap-2 items-center'>
                                                                        <div><BiTimeFive /></div>
                                                                        <div>3m ago</div>
                                                                    </div>
                                                                    <div className='flex items-center'><BsFillBookmarkFill color='#19A7CE' /></div>
                                                                </div>}
                                                                {user === "superadmin" && 
                                                            <div className='flex gap-3 justify-start items-center'>
                                                                <div className='flex items-center'>
                                                                    <button type='button' onClick={() => deleteArticle(event.id)} className='bg-primary h-10 px-4 text-white rounded-xl hover:bg-red-500'>Delete Article</button>
                                                                </div>

                                                                <div className='bg-primary h-10 w-10 mr-2 flex items-center justify-center rounded-full hover:bg-green-500'>
                                                                    <Link to='/writearticles'>
                                                                        <button><FiEdit2 color='white' className='pt-[4px]' size={25} /></button>
                                                                    </Link>
                                                                </div>
                                                            </div> }
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>}
                                            </Link>
                                        </div>
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='flex items-center justify-center'>
                    <div className='pt-12'>
                        End of result
                    </div>
                </div>
            </div>

            <footer>
                <Footer />
            </footer>
            <ScrollToTop/>
        </>
    )
}

export default CategoryArticles