import Header from "../../components/Headers"
import Picture from "../../assets/img/picture_login.png"
import { Link, useNavigate, useParams } from "react-router-dom"
import ArrowBack from "../../assets/img/arrow-back.svg"
import Save from "../../assets/img/save.png"
import Like from "../../assets/img/like.png"
import Footer from "../../components/Footers.jsx"
import { useEffect, useState } from "react"
import http from "../../helpers/http"
import { useSelector } from "react-redux"
import moment from "moment"

const ArticleView = () => {
    const navigate = useNavigate()
    const [article, setArticle] = useState([])
    const [savePost, setSavePost] = useState([])
    const [user, setUser] = useState({})
    const [category, setCategory] = useState([])
    const [selectedCategoryId, setSelectedCategoryId] = useState("")
    const [edit, setEdit] = useState(false)
    const [descriptions, setDescriptions] = useState(article?.descriptions)

    const {id} = useParams()
    const token = useSelector(state => state.auth.token)

    function editButton(){
        setEdit(true)
    }

    function saveButton(){
        setEdit(false)
    }

    function publishButton(){
        setEdit(false)
        publishArticle(selectedCategoryId, descriptions )
    }

    async function createSavePost() {
        try {
            const {data} = await http(token).post("/saved-article");
            setSavePost(data.results);
        } catch (err) {
            console.log(err);
        }
    }

    async function deleteArticle(){
        try {
            const {data} = await http(token).delete(`/admin/articles/${id}`)
            console.log(data.results)
            navigate("/categoryarticles")
        } catch (error) {
            const message = error?.response?.data?.message
            if(message){
                console.log(message)
            }
        }
    }

    useEffect(()=>{
        async function getArticle(){
            try {
                const {data} = await http().get(`/article-view/${id}`)
                console.log(data.results)
                setArticle(data.results)
                setDescriptions(data.results.descriptions)
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
                const {data} = await http().get("/categories?limit=10")
                setCategory(data.results)
                console.log(data.results)
            } catch (error) {
                const message = error?.response?.data?.message
                if(message){
                    console.log(message)
                }
            }
        }
        getCategory()
    },[])
    async function publishArticle(){
        try {
            const formData = new FormData()
            formData.append("categoryId", selectedCategoryId)
            formData.append("descriptions", descriptions)

            const {data} = await http(token).patch(`/admin/waiting-lists/${id}`, formData)
            console.log(data.results)
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
                    <Header/>
                </nav>
                <div className='pt-[150px]'>
                    <div className='flex w-full px-20 justify-between'>
                        <Link>
                            <div className='flex gap-4'>
                                <img src={ArrowBack} className='w-2' />
                                <div className='font-bold'>Back</div>
                            </div>
                        </Link>
                        <div>
                            <div className='font-bold text-[24px]'>Article Viewer</div>
                        </div>
                        <div>
                            
                        </div>
                    </div>
                </div>
                <div className='w-full flex flex-col px-20 justify-between mt-10'>
                    <div className='flex gap-20'>
                        <div className='flex-1 w-[595px] h-[370px] overflow-hidden'>
                            <img className='object-fit' src={article?.articlePicture} alt='' />
                        </div>
                        <div className='flex flex-1 flex-col gap-14'>
                            <div className='text-[36px] font-bold'>{article?.title}</div>
                            <div>
                                <div className='font-bold'>{article?.fullName} - Author</div>
                                <div>{moment(article?.createdAt).format("MMMM Do YYYY, h:mm")}</div>
                            </div>
                            <div className='flex gap-5 items-center'>
                                <button><img src={Like} alt='' /></button>
                                <div className='font-bold'>{article?.likeCount}</div>
                                <button onClick={createSavePost}><img src={Save} alt='' /></button>
                            </div>
                            <div className='w-full flex flex-col gap-3'>
                                {user !== "superadmin" && <button className='btn normal-case w-full font-bold max-w-full'>Share Article Link</button>}
                                {user === "superadmin" && <div className='flex flex-col gap-3'>
                                    {edit=== true ? (<button onClick={saveButton} className='btn normal-case w-full font-bold max-w-full'>Save article</button>) : (<button onClick={editButton} className='btn normal-case w-full font-bold max-w-full'>Edit article</button>)}
                                    <select 
                                        name='categoryId' 
                                        className='h-12 rounded-md border-none bg-primary normal-case w-full font-bold max-w-full text-white'
                                        defaultValue={category}
                                        onChange={(e) => setSelectedCategoryId(e.target.value)}>
                                        <option className='text-center' disabled value=''>Add to category</option>
                                        {category.map(event =>{
                                            return(
                                                <option className='text-center' key={`citySearch${event.id}`} value={event.id}>{event.name}</option>
                                            )
                                        })}   
                                    </select>
                                </div>}
                            </div>
                        </div>
                    </div>
                </div>
                <div className='w-full px-20 pt-20 pb-20 flex flex-col gap-10'>
                    <div>
                        {user === "superadmin" ? (<div className='flex flex-col gap-5'>
                            {edit === true ? <textarea name='descriptions' className='h-[300px]' type='text' value={descriptions} onChange={(e) => setDescriptions(e.target.value)}/> : <div>{descriptions}</div> }
                        </div>) : 
                            <div className='flex flex-col gap-5'>
                                <div>{descriptions}</div>
                            </div>}
                    </div>
                    {user !== "superadmin" ? (<div className='flex flex-col gap-8'>
                        <p className='font-bold text-[24px]'>2 Comments</p>
                        <div className='flex gap-5'>
                            <div className='rounded-2xl border-2 border-gray-50 overflow-hidden w-12 h-12'>
                                <img src={Picture} className='object-cover' />
                            </div>
                            <div className='flex flex-col gap-3 w-full'>
                                <div className='font-bold'>You</div>
                                <textarea placeholder='Bio' className='textarea textarea-bordered textarea-lg w-full' ></textarea>
                                <button className='btn bg-primary border-none normal-case text-white max-w-xs'>Submit</button>
                            </div>
                        </div>
                        <div className='flex gap-5'>
                            <div className='rounded-2xl border-2 border-gray-50 overflow-hidden w-12 h-12'>
                                <img src={Picture} className='object-cover' />
                            </div>
                            <div>
                                <div className='font-bold'>Regina - 1m ago</div>
                                <div>Couldn’t agree more!</div>
                            </div>
                        </div>
                        <div className='flex gap-5'>
                            <div className='rounded-2xl border-2 border-gray-50 overflow-hidden w-12 h-12'>
                                <img src={Picture} className='object-cover' />
                            </div>
                            <div>
                                <div className='font-bold'>Lyonna - 3m ago</div>
                                <div>But, can we just focus for the vaccine?</div>
                            </div>
                        </div>
                    </div>) : (
                        <div className='flex gap-16'>
                            <button onClick={publishButton} className='h-16 btn btn-primary flex-1 normal-case text-white font-bold max-w-full'>Publish Article</button>
                            <button onClick={deleteArticle} className='h-16 btn btn-secondary flex-1 normal-case text-primary font-bold max-w-full'>Decline Article Request </button>
                        </div>
                    )}
                </div>
            </div>
            <Footer />
        </>
    )
}

export default ArticleView