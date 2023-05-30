import Header from "../../components/Headers"

import { BiLike, BiTimeFive } from "react-icons/bi"
import { BsFillBookmarkFill } from "react-icons/bs"
import Filter from "../../assets/img/filter.png"
import Footer from "../../components/Footers"
import { Link} from "react-router-dom"
import { useState, useEffect } from "react"
import http from "../../helpers/http"
import { useSelector } from "react-redux"

const CategoryArticles = () => {
    const [user, setUser] = useState([])
    const token = useSelector(state => state.auth.token)
    const [article, setArticle] = useState([])

    useEffect(()=> {
       
        

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
    }, [])


   
    return (
        <>
            <div>
                <nav>
                    <Header />
                </nav>
            </div>
           
            <div className='bg-white-300 px-[60px] pt-[95px] pb-[90px]'>
                <div>
                    <div className='flex justify-between px-[50px]'> 
                        <div className='flex gap-4 items-center'>
                            <div className='text-xl'>Back to Home</div>
                        </div>
                        <div className='font-bold text-2xl'>Waiting List</div>

                        <div></div>
                    </div>
                    <div className='w-full flex justify-between pt-16'>
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
                    </div>
                 
                </div>
                <div className=''>
                    <div className='grid grid-cols-3'>
                        {article.map(event=>{
                            return(
                                <div key={`article${event.id}`}>
                                    <Link to={`/articleview/${event.id}`}>
                                        { event.status === false && <div className='flex bg-white w-[396px] rounded-3xl mt-8 drop-shadow-2xl'>
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
                                                            <div className='flex gap-3 justify-between items-center'>
                                                                <div className='flex items-center'>
                                                                    <button type='submit'  className='bg-primary h-10 px-4 text-white rounded-xl hover:bg-green-500'>Accept</button>
                                                                </div>

                                                                <div>
                                                                    <button type='submit'  className='bg-[#C7CBD4] h-10 px-4 text-white rounded-xl hover:bg-red-500'>Decline</button>
                                                                    
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