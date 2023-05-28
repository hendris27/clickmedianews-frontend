import Header from "../../components/Headers.jsx"
import Footer from "../../components/Footers.jsx"
import { IoIosArrowForward } from "react-icons/io"
import { Link } from "react-router-dom"
import Picture from "../../assets/img/picture_login.png"
// import CategoryImage from "../../assets/img/category-image-3.png"
import { AiOutlineLike } from "react-icons/ai"
import { BiTime } from "react-icons/bi"
import Save from "../../assets/img/save.png"
import { useState, useEffect } from "react"
import http from "../../helpers/http.js"
import { useSelector } from "react-redux"
import moment from "moment/moment.js"

function SavedArticle(){
    const [savePost, setSavePost] = useState([])
    const token = useSelector(state => state.auth.token)
    useEffect(()=> {
        async function getSavePost(){
            const {data} = await http(token).get("/saved-article")
            setSavePost(data.results)
        }
        getSavePost()
    }, [token])
    const handleDelete = async (savepostId) => {
        try {
            await http().delete(`/saved-article/${savepostId}`)
            setSavePost((prevCategories) => 
                prevCategories.filter((savePost) => savePost.id !== savepostId))
        }catch (err) {
            console.log(err)
        }
    }
    return (
        <>
            <div>
                <Header/>
                <div className='pt-20'>
                    <div className='flex h-auto'>
                        <div className='max-w-[500px] border-r-2 p-20 flex flex-col gap-10'>
                            <div>
                                <p className='text-[24px] font-bold'>Profile</p>
                            </div>
                            <div>
                                <div className='mb-2 text-center w-[295px]'>Click profile card to see profile</div>
                                <div className='w-[295px] h-[284px] shadow-2xl rounded-2xl bg-white relative'>
                                    <div className='flex gap-5 items-center w-full h-[120px] px-10'>
                                        <div className='border-2 rounded-3xl border-blue-500 p-1'>
                                            <div className='rounded-3xl border-2 border-gray-50 overflow-hidden w-16 h-16'>
                                                <img src={Picture} className='object-cover' />
                                            </div>
                                        </div>
                                        <div className='flex flex-col flex-1'>
                                            <div>@jonathan</div>
                                            <div className='font-bold'>Joe Daniel</div>
                                            <div>Member</div>
                                        </div>
                                    </div>
                                    <div className='px-10'>
                                        <div className='font-bold'>About Me</div>
                                        <div>Madison Blackstone is a director of publisher, with experience managing global teams.</div>
                                    </div>
                                    <div className='w-[255px] rounded-2xl absolute bottom-[-20px] right-5 h-[50px] bg-blue-500 pr-5 flex justify-between text-white text-center'>
                                        <div className='rounded-r-2xl border-1 rounded-l-2xl w-[70px] justify-center bg-blue-600'>
                                            <div className='font-bold'>52</div>
                                            <div className='text-[10px]'>Post</div>
                                        </div>
                                        <div className='flex flex-col gap-1'>
                                            <div className='font-bold'>250</div>
                                            <div className='text-[10px]'>Visitor</div>
                                        </div>
                                        <div className='flex flex-col gap-1'>
                                            <div className='font-bold'>4.5K</div>
                                            <div className='text-[10px]'>Comments</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='w-full flex justify-center'><Link className='text-blue-500'>See Profile</Link></div>
                            <div className='flex flex-col gap-5 '>
                                <Link className='flex w-full justify-between items-center border-2 p-3 rounded-2xl hover:bg-blue-100 hover:text-blue-600'>
                                    <div className='font-bold'>Edit Profile</div>
                                    <div><IoIosArrowForward/></div>
                                </Link>
                                <Link className='flex w-full justify-between items-center border-2 p-3 rounded-2xl hover:bg-blue-100 hover:text-blue-600'>
                                    <div className='font-bold'>Saved Post</div>
                                    <div><IoIosArrowForward/></div>
                                </Link>
                                <Link className='flex w-full justify-between items-center border-2 p-3 rounded-2xl hover:bg-blue-100 hover:text-blue-600'>
                                    <div className='font-bold'>FAQ</div>
                                    <div><IoIosArrowForward/></div>
                                </Link>
                                <Link className='flex w-full justify-between items-center border-2 p-3 rounded-2xl hover:bg-blue-100 hover:text-blue-600'>
                                    <div className='font-bold'>Help</div>
                                    <div><IoIosArrowForward/></div>
                                </Link>
                                <Link className='flex justify-center items-center border-none p-3 rounded-2xl bg-blue-600 text-white'>
                                    <div className='font-bold'>Logout</div>
                                </Link>
                            </div>
                        </div>
                        <div className='flex flex-col flex-1 items-center mt-20 gap-10'>
                            <div className='text-[#3366FF] text-2xl font-bold'>Saved Post</div>
                            <div className='w-full flex flex-wrap gap-5 justify-center'>
                                {savePost.map(savedArticle => {
                                    return (
                                        <div key={`saved-article-${savedArticle.id}`} className='w-[366px] h-[146px] rounded-lg shadow-2xl'>
                                            <div>
                                                <div className='flex gap-5'>
                                                    <img src={savedArticle.picture} className='w-28'/>
                                                    <div className='flex flex-col gap-4'>
                                                        <div className='font-bold text-[20px]'>{savedArticle.title}</div>
                                                        <div>{savedArticle.descriptions}</div>
                                                        <div className='flex gap-2 items-center'>
                                                            <div className='flex'>
                                                                <AiOutlineLike size={25}/>
                                                                <p>2.1k</p>
                                                            </div>
                                                            <div className='flex'>
                                                                <BiTime size={25}/>
                                                                <p>{moment(savedArticle.createdAt).format("DD-MM-YYYY")}</p>
                                                            </div>
                                                            <button onClick={() => handleDelete(savedArticle.id)} >
                                                                <img src={Save} className='w-4' alt='' />
                                                            </button>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                })}
                                {/* <div className='w-[366px] h-[146px] rounded-lg shadow-2xl'>
                                    <div>
                                        <div className='flex gap-5'>
                                            <img src={CategoryImage} className='w-28'/>
                                            <div className='flex flex-col gap-4'>
                                                <div className='font-bold text-[20px]'>COVID-19</div>
                                                <div>Why corona never ends? Let’s see how its facts</div>
                                                <div className='flex gap-2 items-center'>
                                                    <div className='flex'>
                                                        <AiOutlineLike size={25}/>
                                                        <p>2.1k</p>
                                                    </div>
                                                    <div className='flex'>
                                                        <BiTime size={25}/>
                                                        <p>4m ago</p>
                                                    </div>
                                                    <div>
                                                        <img src={Save} className='w-4' alt='' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-[366px] h-[146px] rounded-lg shadow-2xl'>
                                    <div>
                                        <div className='flex gap-5'>
                                            <img src={CategoryImage} className='w-28'/>
                                            <div className='flex flex-col gap-4'>
                                                <div className='font-bold text-[20px]'>COVID-19</div>
                                                <div>Why corona never ends? Let’s see how its facts</div>
                                                <div className='flex gap-2 items-center'>
                                                    <div className='flex'>
                                                        <AiOutlineLike size={25}/>
                                                        <p>2.1k</p>
                                                    </div>
                                                    <div className='flex'>
                                                        <BiTime size={25}/>
                                                        <p>4m ago</p>
                                                    </div>
                                                    <div>
                                                        <img src={Save} className='w-4' alt='' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-[366px] h-[146px] rounded-lg shadow-2xl'>
                                    <div>
                                        <div className='flex gap-5'>
                                            <img src={CategoryImage} className='w-28'/>
                                            <div className='flex flex-col gap-4'>
                                                <div className='font-bold text-[20px]'>COVID-19</div>
                                                <div>Why corona never ends? Let’s see how its facts</div>
                                                <div className='flex gap-2 items-center'>
                                                    <div className='flex'>
                                                        <AiOutlineLike size={25}/>
                                                        <p>2.1k</p>
                                                    </div>
                                                    <div className='flex'>
                                                        <BiTime size={25}/>
                                                        <p>4m ago</p>
                                                    </div>
                                                    <div>
                                                        <img src={Save} className='w-4' alt='' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-[366px] h-[146px] rounded-lg shadow-2xl'>
                                    <div>
                                        <div className='flex gap-5'>
                                            <img src={CategoryImage} className='w-28'/>
                                            <div className='flex flex-col gap-4'>
                                                <div className='font-bold text-[20px]'>COVID-19</div>
                                                <div>Why corona never ends? Let’s see how its facts</div>
                                                <div className='flex gap-2 items-center'>
                                                    <div className='flex'>
                                                        <AiOutlineLike size={25}/>
                                                        <p>2.1k</p>
                                                    </div>
                                                    <div className='flex'>
                                                        <BiTime size={25}/>
                                                        <p>4m ago</p>
                                                    </div>
                                                    <div>
                                                        <img src={Save} className='w-4' alt='' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-[366px] h-[146px] rounded-lg shadow-2xl'>
                                    <div>
                                        <div className='flex gap-5'>
                                            <img src={CategoryImage} className='w-28'/>
                                            <div className='flex flex-col gap-4'>
                                                <div className='font-bold text-[20px]'>COVID-19</div>
                                                <div>Why corona never ends? Let’s see how its facts</div>
                                                <div className='flex gap-2 items-center'>
                                                    <div className='flex'>
                                                        <AiOutlineLike size={25}/>
                                                        <p>2.1k</p>
                                                    </div>
                                                    <div className='flex'>
                                                        <BiTime size={25}/>
                                                        <p>4m ago</p>
                                                    </div>
                                                    <div>
                                                        <img src={Save} className='w-4' alt='' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-[366px] h-[146px] rounded-lg shadow-2xl'>
                                    <div>
                                        <div className='flex gap-5'>
                                            <img src={CategoryImage} className='w-28'/>
                                            <div className='flex flex-col gap-4'>
                                                <div className='font-bold text-[20px]'>COVID-19</div>
                                                <div>Why corona never ends? Let’s see how its facts</div>
                                                <div className='flex gap-2 items-center'>
                                                    <div className='flex'>
                                                        <AiOutlineLike size={25}/>
                                                        <p>2.1k</p>
                                                    </div>
                                                    <div className='flex'>
                                                        <BiTime size={25}/>
                                                        <p>4m ago</p>
                                                    </div>
                                                    <div>
                                                        <img src={Save} className='w-4' alt='' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='w-[366px] h-[146px] rounded-lg shadow-2xl'>
                                    <div>
                                        <div className='flex gap-5'>
                                            <img src={CategoryImage} className='w-28'/>
                                            <div className='flex flex-col gap-4'>
                                                <div className='font-bold text-[20px]'>COVID-19</div>
                                                <div>Why corona never ends? Let’s see how its facts</div>
                                                <div className='flex gap-2 items-center'>
                                                    <div className='flex'>
                                                        <AiOutlineLike size={25}/>
                                                        <p>2.1k</p>
                                                    </div>
                                                    <div className='flex'>
                                                        <BiTime size={25}/>
                                                        <p>4m ago</p>
                                                    </div>
                                                    <div>
                                                        <img src={Save} className='w-4' alt='' />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> */}
                            </div>
                        </div>
                    </div>
                </div>
                <Footer/>
            </div>
        </>
    )
}

export default SavedArticle