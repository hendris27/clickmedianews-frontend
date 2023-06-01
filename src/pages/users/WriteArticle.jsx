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
    const [selectedPIcture, setSelectedPicture] = useState(null)
    const [warningMessage, setWarningMessage] = useState("")
    const profile = useSelector((state)=>state.profile.data)
    // const {id} = useParams()

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

    const createArticle = async (values)=>{
        if(profile.isAuthor === true ){
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
        }else{
            setWarningMessage("You are not an author yet")
        }
        
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
                    {warningMessage && (<div className='flex flex-row justify-center alert alert-warning shadow-lg text-white text-lg'><MdError size={30}/>{warningMessage}</div>)}
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
                                                <img
                                                    src={selectedPIcture}
                                                    alt='Selected Cover Photo'
                                                    className='w-full h-full object-cover'
                                                />
                                            ) : (
                                                <HiPlus color='#CDCDCD' size={50} />
                                            )}
                                        </div>
                                    </div>
                                    <div className='flex flex-col gap-8 w-full flex-1'>
                                        <div className='flex gap-8'>
                                            <div className='flex-1'>
                                                <input
                                                    type='text'
                                                    className='px-8 input input-bordered w-full'
                                                    placeholder='Article Title'
                                                    name='title'
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.title}
                                                />
                                            </div>
                                            <div className='w-[50%]'>
                                                <select
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
                                                </select>
                                            </div>
                                        </div>
                                        <div className='h-full flex justify-center items-center'>
                                            <textarea
                                                className='rounded-2xl h-full w-full p-8 outline-none border-2'
                                                placeholder='Type Here'
                                                name='descriptions'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.descriptions}
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-8 pt-6 text-white font-bold text-[20px]'>
                                    <div className='w-[342px] bg-accent hover:bg-[#19A7CE] rounded-xl flex justify-center items-center'>
                                        <label className='btn btn-accent normal-case w-full h-full'>
                                            <span className='text-white font-bold'>Choose Photo Cover</span>
                                            <input
                                                className='hidden'
                                                type='file'
                                                name='coverPhoto'
                                                onChange={(e)=> setSelectedPicture(e.target.files[0])}
                                                onBlur={handleBlur}
                                            />
                                        </label>
                                    </div>
                                    <button
                                        className='flex-1 bg-[#19A7CE] h-[75px] hover:bg-green-500 rounded-xl flex justify-center items-center'
                                        type='submit'
                                    >
                                    Request Publish Article
                                    </button>
                                </div>
                            </form>
                        )}
                    </Formik>
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
