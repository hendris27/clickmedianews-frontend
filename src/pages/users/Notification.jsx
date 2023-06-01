import Header from "../../components/Headers"
import Filter from "../../assets/img/filter.png"
import Footer from "../../components/Footers"
import { FaChevronLeft } from "react-icons/fa"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"
import http from "../../helpers/http"
import { useEffect, useState } from "react"
import moment from "moment"


const Notification = () => {

    const [requestAuthor, setRequestAuthor] = useState([])
    const [messageRequest, setMessageRequest] = useState("")
    const [user, setUser] = useState({})
    const token = useSelector((state) => state.auth.token)

    useEffect(()=>{
        async function getRequestAuthor(){
            try {
                const {data} = await http(token).get("/request-author")
                setRequestAuthor(data.results.reqAuthor)
                setMessageRequest(data.results.message)
            } catch (error) {
                const message = error?.response?.data?.message
                if(message){
                    console.log(message)
                }
            }
        }getRequestAuthor()

        async function getUser(){
            try {
                const {data} =  await http(token).get("/admin/users/detail")
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
    },[token])

    async function doAccAuthor(userId, id){
        try {
            console.log(id)
            const {data} = await http(token).patch(`/request-author/${userId}`)
            if(data.results){
                await http(token).delete(`/request-author/${id}`)
            }
            location.reload()

        } catch (error) {
            const message = error?.response?.data?.message
            if(message){
                console.log(message)
            }
        }
    }

    async function doIgnoreAuthor(id){
        try {
            console.log(id)
            await http(token).delete(`/request-author/${id}`)
            location.reload()
            
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
               
            </div>
            <div className='flex flex-col gap-10 pt-20 pb-12'>
                <div className='flex w-full justify-between px-20 items-center'>
                    <Link to='/'>
                        <div className='flex gap-4 items-center'>
                            <FaChevronLeft size={20} />
                            <div className='font-bold'>Home Page</div>
                        </div>
                    </Link>
                    <div>
                        <div className='font-bold text-[24px]'>Notification</div>
                    </div>
                    <div>
                        <div className='font-bold'>Select</div>
                    </div>
                </div>
                <div>
                    <div className='flex gap-5 px-20'>
                        <img src={Filter} alt='' className='w-6'/>
                        <p className='font-bold'>Filter</p>
                    </div>
                </div>
                <div className='flex flex-col gap-16 pb-20'>
                    {user === "superadmin" && 
                    <div className='flex flex-col gap-6'>
                        {requestAuthor.map(author =>{
                            return(
                                <div className='w-full flex justify-between items-center px-20' key={`author${author.id}`}>
                                    <div className='flex gap-5 justify-center items-center'>
                                        <div className='rounded-full border-2 border-black overflow-hidden w-12 h-12'>
                                            <img src={author.picture} className='object-cover' />
                                        </div>
                                        <div className='flex flex-col'>
                                            <label htmlFor='notification' className='font-bold'>{messageRequest}</label>
                                            <label htmlFor='notification' className='text-gray-500'>{moment(author.createdAt).fromNow("dd")}</label>
                                        </div>
                                    </div>
                                    <div className='flex gap-11'>
                                        <div className='flex justify-between gap-3'>
                                            <div><button onClick={()=> doAccAuthor(author.userId, author.id)} className='bg-primary p-2 px-6 hover:bg-green-500 rounded-xl'>Accept</button></div>
                                            <div><button onClick={()=> doIgnoreAuthor(author.id)} className='bg-blue-200 p-2 px-6 hover:bg-red-300 rounded-xl' >Ignore</button></div>
                                        </div>
                                        <div className='flex items-center'>
                                            <input type='checkbox' name='notification' id='notification' className='w-6 h-6 border-primary' />
                                        </div> 
                                    </div>
                                </div>
                            )
                        })}</div>}
                    {/* <div className='w-full flex justify-between items-center px-20'>
                        <div className='flex gap-5 justify-center items-center'>
                            <div className='rounded-full border-2 border-black overflow-hidden w-12 h-12'>
                                <img src={Picture} className='object-cover' />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor='notification2' className='font-bold'>Ryan just liked your post</label>
                                <label htmlFor='notification2' className='text-gray-500'>2m ago</label>
                            </div>
                        </div>
                        <div>
                            <input type='checkbox' name='notification2' id='notification2' className='w-6 h-6 border-primary' />
                        </div>
                    </div>
                    <div className='w-full flex justify-between items-center px-20'>
                        <div className='flex gap-5 justify-center items-center'>
                            <div className='rounded-full border-2 border-black overflow-hidden w-12 h-12'>
                                <img src={Picture} className='object-cover' />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor='notification3' className='font-bold'>Ryan just liked your post</label>
                                <label htmlFor='notification3' className='text-gray-500'>2m ago</label>
                            </div>
                        </div>
                        <div>
                            <input type='checkbox' name='notification3' id='notification3' className='w-6 h-6 border-primary' />
                        </div>
                    </div>
                    <div className='w-full flex justify-between items-center px-20'>
                        <div className='flex gap-5 justify-center items-center'>
                            <div className='rounded-full border-2 border-black overflow-hidden w-12 h-12'>
                                <img src={Picture} className='object-cover' />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor='notification4' className='font-bold'>Ryan just liked your post</label>
                                <label htmlFor='notification4' className='text-gray-500'>2m ago</label>
                            </div>
                        </div>
                        <div>
                            <input type='checkbox' name='notification4' id='notification4' className='w-6 h-6 border-primary' />
                        </div>
                    </div>
                    <div className='w-full flex justify-between items-center px-20'>
                        <div className='flex gap-5 justify-center items-center'>
                            <div className='rounded-full border-2 border-black overflow-hidden w-12 h-12'>
                                <img src={Picture} className='object-cover' />
                            </div>
                            <div className='flex flex-col'>
                                <label htmlFor='notification5' className='font-bold'>Ryan just liked your post</label>
                                <label htmlFor='notification5' className='text-gray-500'>2m ago</label>
                            </div>
                        </div>
                        <div>
                            <input type='checkbox' name='notification5' id='notification5' className='w-6 h-6 border-primary' />
                        </div>
                    </div> */}
                </div>
                <div className='flex self-center '>
                    <button className='btn btn-primary w-[400px] '>Delete Selected Items</button>
                </div>
            </div>
           
            <footer>
                <Footer/>
            </footer>
        </>
    )
}

export default Notification