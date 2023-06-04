import { useState, useEffect } from "react"
import { Formik } from "formik"
import Header from "../../components/Headers"
import Footer from "../../components/Footers"
import ScrollToTop from "../../components/ScrollToTop"
import { FaChevronLeft } from "react-icons/fa"
import { HiPlus } from "react-icons/hi"
import http from "../../helpers/http"
import { Link, } from "react-router-dom"
import { useSelector } from "react-redux"
import { BsCheckCircleFill } from "react-icons/bs"
import {MdError} from "react-icons/md"

const WriteArticles = () => {
    const token = useSelector((state) => state.auth.token)
    const [categories, setCategory] = useState([])
    // const [selectedCoverPhoto, setSelectedCoverPhoto] = useState(null)
    const [successMessage, setSuccessMessage] = useState("")
    const [selectedPIcture, setSelectedPicture] = useState(false)
    const [pictureURI, setPictureURI] = useState("")
    const [openModal, setOpenModal] = useState(false)
    const profile = useSelector((state)=>state.profile.data)
    const [user, setUser] = useState({})
    // const {id} = useParams()

    useEffect(() => { 
        async function getUser() {
            try {
                const { data } = await http(token).get("/admin/users/detail")
                console.log(data.results)
                if (data.results.role === "superadmin") {
                    setUser(data.results)
                }
            } catch (error) {
                const message = error?.response?.data?.message
                if (message) {
                    console.log(message)
                }
            }
        }
        getUser()

    }, [token])

    useEffect(() => {
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
    }, [])

    const fileToDataUrl = (file) => {
        const reader = new FileReader()
        reader.addEventListener("load", () => {
            setPictureURI(reader.result)
        })
        reader.readAsDataURL(file)
    }
    
    const changePicture = (e) => {
        const file = e.target.files[0]
        setSelectedPicture(file)
        fileToDataUrl(file)
    }

    const createArticle = async (values)=>{
        if(profile.isAuthor === true ){
            setOpenModal(true)
            const form = new FormData()
            Object.keys(values).forEach((key) => {
                if(values[key]){
                    form.append(key, values[key])
                }
            
            })
            if(selectedPIcture){
                form.append("picture", selectedPIcture)
            }
            console.log(form)
            if(token){
                const {data} = await http(token).post("/write-article", form, {
                    headers: {
                        "Content-Type" : "multipart/form-data"
                    }
                })
                console.log(data.message)
                setSuccessMessage(data.message)
            }
        }
        setOpenModal(false)
    }

    return (
        <>
            <div>
                <nav>
                    <Header />
                </nav>
            </div>
            <div className='pt-36 px-32 pb-24'>
                <div className='flex flex-col gap-8'>
                    <div className='flex justify-between font-bold text-[18px]'>
                        <Link to='/articles' className='flex justify-center items-center'>
                            <div>
                                <FaChevronLeft />
                            </div>
                            <div>Back</div>
                        </Link>
                        <div>Write Article</div>
                        <Link>
                            <div>Save as draft</div>
                        </Link>
                    </div>
                    {successMessage && (<div className='flex flex-row justify-center alert alert-info shadow-lg text-white text-lg my-3'><BsCheckCircleFill size={30}/>{successMessage}</div>)}
                    {profile?.isAuthor === false && (<div className='flex flex-row justify-center alert alert-warning shadow-lg text-white text-lg'><MdError size={30}/>You are not an author yet</div>)}
                    <Formik 
                        initialValues={{
                            title: "",
                            categoryId: "",
                            descriptions: "",
                        }}
                        onSubmit={createArticle}
                    >
                        {({
                            handleChange,
                            handleBlur,
                            handleSubmit,
                            values,
                        }) => (
                            <form onSubmit={handleSubmit}>
                                <div className='flex gap-8'>
                                    <div className='w-[342px] h-[535px]  border-4 p-4 rounded-xl '>
                                        <div className='w-full h-full border-4 border-dashed flex justify-center items-center rounded-xl'>
                                            {selectedPIcture ? (
                                                <img src={pictureURI} alt='Selected Cover Photo'
                                                    className='w-full h-full object-cover'/>
                                            )
                                                : (
                                                    <HiPlus color='#CDCDCD' size={50} />
                                                )}
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-8 w-full flex-1'>
                                        <div className='flex gap-8'>
                                            <div className='flex-1'>
                                                {profile?.isAuthor === true ? (<input
                                                    type='text'
                                                    className='px-8 input input-bordered w-full'
                                                    placeholder='Article Title'
                                                    name='title'
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.title}
                                                />): (<input
                                                    type='text'
                                                    className='px-8 input input-bordered w-full'
                                                    placeholder='Article Title'
                                                    name='title'
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.title}
                                                    disabled
                                                />)}
                                            </div>
                                            <div className='w-[50%]'>
                                                {profile?.isAuthor === true ? (<select
                                                    className='select w-full max-w-xs'
                                                    name='categoryId'
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.categoryId}
                                                >
                                                    <option disabled value=''>
                                                    Articles Category
                                                    </option>
                                                    {categories.map((category) => {
                                                        return (
                                                            <option key={`category${category.id}`} value={category.id}>
                                                                {category.name}
                                                            </option>
                                                        )
                                                    })}
                                                </select>) : (<select
                                                    className='select w-full max-w-xs'
                                                    name='categoryId'
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.categoryId}
                                                    disabled
                                                >
                                                    <option disabled value=''>
                                                    Articles Category
                                                    </option>
                                                    {categories.map((category) => {
                                                        return (
                                                            <option key={`category${category.id}`} value={category.id}>
                                                                {category.name}
                                                            </option>
                                                        )
                                                    })}
                                                </select>)}
                                            </div>
                                        </div>
                                        <div className='h-full flex justify-center items-center'>
                                            {profile?.isAuthor === true ? (<textarea
                                                className='rounded-2xl h-full w-full p-8 outline-none border-2'
                                                placeholder='Type Here'
                                                name='descriptions'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.descriptions}
                                            ></textarea>) : (<textarea
                                                className='rounded-2xl h-full w-full p-8 outline-none border-2'
                                                placeholder='Type Here'
                                                name='descriptions'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.descriptions}
                                                disabled
                                            ></textarea>) }
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-8 pt-6 text-white font-bold text-[20px]'>
                                    <div className='w-[342px] bg-accent hover:bg-[#19A7CE] rounded-xl flex justify-center items-center'>
                                        {profile?.isAuthor ? (<label className='btn btn-accent normal-case w-full h-full'>
                                            <span className='text-white font-bold'>Choose Photo Cover</span>
                                            <input
                                                className='hidden'
                                                type='file'
                                                name='picture'
                                                onChange={changePicture}
                                                onBlur={handleBlur}
                                            />
                                        </label>) : (<label className='btn btn-accent normal-case w-full h-full'>
                                            <span className='text-white font-bold'>Choose Photo Cover</span>
                                            <input
                                                className='hidden'
                                                type='file'
                                                name='picture'
                                                onChange={changePicture}
                                                onBlur={handleBlur}
                                                disabled
                                            />
                                        </label>)}
                                    </div>
                                    {user === "superadmin" ?( <button
                                        className='flex-1 bg-[#19A7CE] h-[75px] hover:bg-green-500 rounded-xl flex justify-center items-center'
                                        type='submit'
                                    >
                                    Request Publish Article
                                    </button>) :
                                        ( <button
                                            className='flex-1 bg-[#19A7CE] h-[75px] hover:bg-green-500 rounded-xl flex justify-center items-center'
                                            type='submit'
                                        >Publish Article
                                        </button>) }
                                </div>
                            </form>
                        )}
                    </Formik>
                    <input type='checkbox' id='loading' className='modal-toggle' checked={openModal} />
                </div>
            </div>
            <footer>
                <Footer />
            </footer>
            <ScrollToTop />
        </>
    )
}

export default WriteArticles
