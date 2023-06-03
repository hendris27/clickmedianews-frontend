import Header from "../../components/Headers.jsx"
import Footer from "../../components/Footers.jsx"
import { IoIosArrowForward } from "react-icons/io"

import { Link, useNavigate } from "react-router-dom"
// import Picture from "../../assets/img/picture_login.png"

// import CategoryImage from "../../assets/img/category-image-3.png"
import { AiOutlineLike } from "react-icons/ai"
import { BiTime } from "react-icons/bi"

import { useSelector, useDispatch } from "react-redux"
import { useState, useEffect } from "react"
import http from "../../helpers/http"

import moment from "moment/moment.js"
import { logout as logoutAction } from "../../redux/reducers/auth.js"
import defaultPicture from "../../assets/img/default.jpg"
import { BsBookmarkFill } from "react-icons/bs"

function SavedArticle(){
    const [savePost, setSavePost] = useState([])
    const token = useSelector(state => state.auth.token)
    const [profile, setProfile] = useState([])
    const navigate = useNavigate()
    const dispatch = useDispatch()

    
    async function deleteSavePost(id){
        try {
            await http(token).delete(`/saved-article/${id}`)
            setSavePost(savePost.filter(post => post.id !== id))
        }catch(err) {
            console.log(err)
        }
    }

    useEffect(()=> {
        async function getSavePost(){
            const {data} = await http(token).get("/saved-article")
            setSavePost(data.results)
        }
        getSavePost()

        async function getProfile(){
            const { data } = await http(token).get("/profile")
            setProfile(data.results)
        }
        getProfile()
    }, [token, savePost])

    const doLogout = ()=> {
        window.localStorage.removeItem("token")
        dispatch(logoutAction())
        navigate("/signin")
    }
    return (
        <>
            <div>
                <Header />
                <div className='pt-20'>
                    <div className='flex h-auto'>
                        <div className='max-w-[500px] border-r-2 p-20 flex flex-col gap-10'>
                            <div>
                                <p className='text-2xl font-bold'>Profile</p>
                            </div>
                            <div>
                                <div className='mb-2 text-center w-[295px] text-slate-400'>
                  Click profile card to see profile
                                </div>
                                <div className='w-[295px] h-[284px] shadow-2xl rounded-2xl bg-white relative'>
                                    <div className='flex gap-5 items-center w-full h-[120px] px-10'>
                                        <div className='border-2 rounded-3xl border-blue-500 p-1'>
                                            <div className='rounded-3xl border-2 border-gray-50 overflow-hidden w-16 h-16'>
                                                {profile.picture === null ? (
                                                    <img
                                                        src={defaultPicture}
                                                        className='object-cover h-full w-full'
                                                        alt=''
                                                    />
                                                ) : (
                                                    <img
                                                        src={profile.picture}
                                                        className='object-cover h-full w-full'
                                                        alt=''
                                                    />
                                                )}
                                            </div>
                                        </div>
                                        <div className='flex flex-col flex-1'>
                                            <div>{profile.username}</div>
                                            <div className='font-bold'>{profile.fullName}</div>
                                            <div>Member</div>
                                        </div>
                                    </div>
                                    <div className='px-10'>
                                        <div className='font-bold'>About Me</div>
                                        <div>{profile.about}</div>
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
                            <div className='w-full flex justify-center'>
                                <Link to='/profile' className='text-blue-500'>
                  See Profile
                                </Link>
                            </div>
                            <div className='flex flex-col gap-5'>
                                <Link
                                    to='/edit-profile'
                                    className='flex w-full justify-between items-center border-2 p-3 rounded-2xl hover:bg-blue-100 hover:text-blue-600'
                                >
                                    <div className='font-bold'>Edit Profile</div>
                                    <div>
                                        <IoIosArrowForward />
                                    </div>
                                </Link>
                                <Link
                                    className='flex w-full justify-between items-center border-2 p-3 rounded-2xl hover:bg-blue-100 hover:text-blue-600'
                                >
                                    <div className='font-bold'>Saved Post</div>
                                    <div>
                                        <IoIosArrowForward />
                                    </div>
                                </Link>
                                <Link
                                    className='flex w-full justify-between items-center border-2 p-3 rounded-2xl hover:bg-blue-100 hover:text-blue-600'
                                >
                                    <div className='font-bold'>FAQ</div>
                                    <div>
                                        <IoIosArrowForward />
                                    </div>
                                </Link>
                                <Link
                                    className='flex w-full justify-between items-center border-2 p-3 rounded-2xl hover:bg-blue-100 hover:text-blue-600'
                                >
                                    <div className='font-bold'>Help</div>
                                    <div>
                                        <IoIosArrowForward />
                                    </div>
                                </Link>
                                <button
                                    onClick={doLogout}
                                    className='flex justify-center items-center border-none p-3 rounded-2xl bg-blue-600 text-white'
                                >
                                    <div className='font-bold'>Logout</div>
                                </button>
                            </div>
                        </div>
                        <div className='flex flex-col flex-1 items-center mt-20 gap-10'>
                            <div className='text-[#3366FF] text-2xl font-bold'>Saved Post</div>
                            <div className='w-full flex flex-wrap gap-5 justify-center'>
                                {savePost.map((savedArticle) => (
                                    <div
                                        key={`saved-article-${savedArticle.id}`}
                                        className='w-[380px] h-[200px] rounded-lg shadow-xl'
                                    >
                                        <div>
                                            <div className='flex gap-5'>
                                                <img src={savedArticle.picture} className='w-[126px] h-[200px] object-cover rounded-lg' alt='' />
                                                <div className='flex flex-col gap-3'>
                                                    <Link to={`/articleview/${savedArticle.id}`} className='font-bold text-md'>
                                                        {savedArticle.title}
                                                    </Link >
                                                    <Link to={`/articleview/${savedArticle.id}`} className='text-sm'>{savedArticle.descriptions}</Link >
                                                    <div className='flex gap-4 items-center'>
                                                        <div className='flex'>
                                                            <AiOutlineLike size={25} />
                                                            <p>2.1k</p>
                                                        </div>
                                                        <div className='flex'>
                                                            <BiTime size={25} />
                                                            <p>{moment(savedArticle.createdAt).fromNow("mm")} ago</p>
                                                        </div>
                                                        <button onClick={() => deleteSavePost(savedArticle.id)}>
                                                            <BsBookmarkFill className='text-primary'/>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
                <Footer />
            </div>
        </>

    )
}

export default SavedArticle