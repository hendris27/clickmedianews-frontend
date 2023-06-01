/* eslint-disable no-unused-vars */
import Header from "../../components/Headers"

import { BiLike, BiTimeFive} from "react-icons/bi"
import { BsFillBookmarkFill } from "react-icons/bs"
import Filter from "../../assets/img/filter.png"
import Footer from "../../components/Footers"
import { Link, useSearchParams } from "react-router-dom"
import React from "react"
import http from "../../helpers/http"

const SearchArticles = () => {
    const [article, setArticle] = React.useState([])
    const [searchParams] = useSearchParams()

    React.useEffect(()=>{
        async function searchResults(){
            const {data} = await http().get("/articles?limit=100", {params: searchParams})
            console.log(data)
            if(!data.results){
                console.log("data not found")
            }
            if(data.results){
                setArticle(data.results)
                console.log(data)
            }
        }searchResults()
    },[searchParams])
    

    return (
        <>
            <div>
                <nav>
                    <Header onSearch = {searchParams}></Header>
                </nav>
               
            </div>
            
            <div className='bg-white px-[60px] pt-[125px] pb-[90px]'>
                <div className='flex flex-col gap-8'>
                    {setArticle.length > 0 && (
                        <div className='text-2xl font-bold'> Search results for &quot;{searchParams.get("search")}&quot;
                        </div>
                    )}
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
                {article.length < 1 && (
                    <div className='text-2xl font-bold text-red-700'>
       Article &quot;{searchParams.get("search")}&quot;Not Found!
                    </div>
                )}
                <div>
                </div>
                <div className='flex flex-col gap-4'>
                    <div className='grid grid-cols-3 gap-y-12 gap-x-12'>
                        {article.map(event=>{
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
                                                        <div className='flex gap-4'>
                                                            <div className='flex gap-2 items-center'>
                                                                <div><BiLike /></div>
                                                                <div>{event.likeCount}</div>
                                                            </div>
                                                            <div className='flex gap-2 items-center'>
                                                                <div><BiTimeFive /></div>
                                                                <div>3m ago</div>
                                                            </div>
                                                            <div className='flex items-center'><BsFillBookmarkFill color='#19A7CE' /></div>
                                                            {/* <div className='flex gap-3 justify-start items-center'>
                                                            <div className='flex items-center'>
                                                                <button type='button' onClick={() => deleteArticle(event.id)} className='bg-primary h-10 px-4 text-white rounded-xl hover:bg-red-500'>Delete Article</button>
                                                            </div>

                                                            <div className='bg-primary h-10 w-10 mr-2 flex items-center justify-center rounded-full hover:bg-green-500'>
                                                                <Link to='/writearticles'>
                                                                    <button><FiEdit2 color='white' className='pt-[4px]' size={25} /></button>
                                                                </Link>
                                                            </div>*/}
                                                        </div> 
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
           
            <footer>
                <Footer/>
            </footer>
        </>
    )
}

export default SearchArticles