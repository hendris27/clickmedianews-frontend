import Header from "../../components/Headers"
import picture_category from "../../assets/img/articel.jpg"

import { BiLike, BiTimeFive } from "react-icons/bi"
import { BsFillBookmarkFill } from "react-icons/bs"
import { FiEdit2 } from "react-icons/fi"
import Filter from "../../assets/img/filter.png"
import Footer from "../../components/Footers"
import { Link } from "react-router-dom"
import React, { useState} from "react"
import http from "../../helpers/http"
import { useSelector } from "react-redux"


const CategoryArticles = () => {
    const [category, setCategory] = useState([])
    const [article, setArticle] = useState([])
    const [user, setUser] = useState({})
    const token = useSelector(state => state.auth.token)

    React.useEffect(()=> {
        async function getCategory(){
            const {data} = await http().get("/categories/all")
            setCategory(data.results)
        }
        getCategory()

        async function getArticle(){
            try {
                const {data} = await http().get("/articles")
                console.log(data.results)
                if(data.results.status === true){
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
                const {data} = await http(token).get("/users")
                console.log(data)
                if(data.results.role === "superadmin"){
                    setUser(data.results.role)
                }
            } catch (error) {
                const message = error?.response?.data?.message
                if(message){
                    console.log(message)
                }
            }
        }getUser()
    
    }, [])
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
                            <div key={`category-article-${category.id}`} className='hover:bg-blue-200 p-2 rounded-xl text-[#19A7CE] text-[18px] font-bold'>{category.name}</div>
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
                    {/* <div className='flex gap-5'>
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
                    </div> */}
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='pt-8'>
                        <div className='flex flex-col'>
                            <div className='flex gap-8'>
                                {article.map(article=>{
                                    return(
                                        <div className='flex bg-white w-[396px] rounded-3xl gap-8 drop-shadow-2xl'key={`article${article.id}`}>
                                            <div className='flex justify-between items-center' >
                                                <div className='w-[126px] h-[222px] rounded-3xl overflow-hidden bg-green-400'>
                                                    <img src={article.picture} className='w-[100%] h-full object-cover' alt='' />
                                                </div>
                                                <div className='pl-8'>
                                                    <div className='flex flex-col gap-8' >
                                                        <div className='flex flex-col gap-4'>
                                                            <div className='text-[#19A7CE] text-[20px] leading-[20px] '>{article.title}</div>
                                                            <div className='text-[18px] leading-[20px] font-medium '>{article.description}</div>
                                                        </div>
                                                        <div className='flex gap-4'>
                                                            <div className='flex gap-2 items-center'>
                                                                <div><BiLike /></div>
                                                                {user !=="superadmin" && <div>{article.likeCount}</div>}
                                                            </div>
                                                            <div className='flex gap-2 items-center'>
                                                                <div><BiTimeFive /></div>
                                                                <div>3m ago</div>
                                                            </div>
                                                            <div className='flex items-center'><BsFillBookmarkFill color='#19A7CE' /></div>
                                                        </div>

                                                        <div className='flex justify-between items-center'>
                                                            <div className='flex items-center'>
                                                                {user === "superadmin" && <button className='bg-primary h-10 px-4 text-white rounded-xl hover:bg-red-500'>Delete Articles</button>}
                                                            </div>

                                                            <div className='bg-primary h-10 w-10 mr-2  flex items-center justify-center rounded-full hover:bg-green-500'>
                                                                <Link to='/writearticles'>
                                                                    <button><FiEdit2 color='white' /></button>
                                                                </Link>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
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
                                                    <div className='text-[#19A7CE] text-[20px] leading-[20px] '>COVID-19</div>
                                                    <div className='text-[18px] leading-[20px] font-medium '>Why corona never ends? <br /> Let’s see how its facts</div>
                                                </div>
                                                <div className='flex gap-4'>
                                                    <div className='flex gap-2 items-center'>
                                                        <div><BiLike /></div>
                                                        <div>2.1k</div>
                                                    </div>
                                                    <div className='flex gap-2 items-center'>
                                                        <div><BiTimeFive /></div>
                                                        <div>3m ago</div>
                                                    </div>
                                                    <div className='flex items-center'><BsFillBookmarkFill color='#19A7CE' /></div>
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
                                                    <div className='text-[18px] leading-[20px] font-medium '>Why corona never ends? <br /> Let’s see how its facts</div>
                                                </div>
                                                <div className='flex gap-4'>
                                                    <div className='flex gap-2 items-center'>
                                                        <div><BiLike /></div>
                                                        <div>2.1k</div>
                                                    </div>
                                                    <div className='flex gap-2 items-center'>
                                                        <div><BiTimeFive /></div>
                                                        <div>3m ago</div>
                                                    </div>
                                                    <div className='flex items-center'><BsFillBookmarkFill color='#19A7CE' /></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='pt-8'>
                        <div className='flex flex-col'>
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
                                                    <div className='text-[18px] leading-[20px] font-medium '>Why corona never ends? <br /> Let’s see how its facts</div>
                                                </div>
                                                <div className='flex gap-4'>
                                                    <div className='flex gap-2 items-center'>
                                                        <div><BiLike /></div>
                                                        <div>2.1k</div>
                                                    </div>
                                                    <div className='flex gap-2 items-center'>
                                                        <div><BiTimeFive /></div>
                                                        <div>3m ago</div>
                                                    </div>
                                                    <div className='flex items-center'><BsFillBookmarkFill color='#19A7CE' /></div>
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
                                                    <div className='text-[18px] leading-[20px] font-medium '>Why corona never ends? <br /> Let’s see how its facts</div>
                                                </div>
                                                <div className='flex gap-4'>
                                                    <div className='flex gap-2 items-center'>
                                                        <div><BiLike /></div>
                                                        <div>2.1k</div>
                                                    </div>
                                                    <div className='flex gap-2 items-center'>
                                                        <div><BiTimeFive /></div>
                                                        <div>3m ago</div>
                                                    </div>
                                                    <div className='flex items-center'><BsFillBookmarkFill color='#19A7CE' /></div>
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
                                                    <div className='text-[18px] leading-[20px] font-medium '>Why corona never ends? <br /> Let’s see how its facts</div>
                                                </div>
                                                <div className='flex gap-4'>
                                                    <div className='flex gap-2 items-center'>
                                                        <div><BiLike /></div>
                                                        <div>2.1k</div>
                                                    </div>
                                                    <div className='flex gap-2 items-center'>
                                                        <div><BiTimeFive /></div>
                                                        <div>3m ago</div>
                                                    </div>
                                                    <div className='flex items-center'><BsFillBookmarkFill color='#19A7CE' /></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className='pt-8'>
                        <div className='flex flex-col'>
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
                                                    <div className='text-[18px] leading-[20px] font-medium '>Why corona never ends? <br /> Let’s see how its facts</div>
                                                </div>
                                                <div className='flex gap-4'>
                                                    <div className='flex gap-2 items-center'>
                                                        <div><BiLike /></div>
                                                        <div>2.1k</div>
                                                    </div>
                                                    <div className='flex gap-2 items-center'>
                                                        <div><BiTimeFive /></div>
                                                        <div>3m ago</div>
                                                    </div>
                                                    <div className='flex items-center'><BsFillBookmarkFill color='#19A7CE' /></div>
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
                                                    <div className='text-[18px] leading-[20px] font-medium '>Why corona never ends? <br /> Let’s see how its facts</div>
                                                </div>
                                                <div className='flex gap-4'>
                                                    <div className='flex gap-2 items-center'>
                                                        <div><BiLike /></div>
                                                        <div>2.1k</div>
                                                    </div>
                                                    <div className='flex gap-2 items-center'>
                                                        <div><BiTimeFive /></div>
                                                        <div>3m ago</div>
                                                    </div>
                                                    <div className='flex items-center'><BsFillBookmarkFill color='#19A7CE' /></div>
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
                                                    <div className='text-[18px] leading-[20px] font-medium '>Why corona never ends? <br /> Let’s see how its facts</div>
                                                </div>
                                                <div className='flex gap-4'>
                                                    <div className='flex gap-2 items-center'>
                                                        <div><BiLike /></div>
                                                        <div>2.1k</div>
                                                    </div>
                                                    <div className='flex gap-2 items-center'>
                                                        <div><BiTimeFive /></div>
                                                        <div>3m ago</div>
                                                    </div>
                                                    <div className='flex items-center'><BsFillBookmarkFill color='#19A7CE' /></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
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
        </>
    )
}

export default CategoryArticles