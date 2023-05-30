import { useState, useEffect } from "react"
import { Formik } from "formik"
import Header from "../../components/Headers"
import Footer from "../../components/Footers"
import ScrollToTop from "../../components/ScrollToTop"
import { FaChevronLeft } from "react-icons/fa"
import { HiPlus } from "react-icons/hi"
import http from "../../helpers/http"
import { Link, useParams } from "react-router-dom"
import { useSelector } from "react-redux"

const WriteArticles = () => {
    const token = useSelector((state) => state.auth.token)
    const [category, setCategory] = useState([])
    const [selectedCoverPhoto, setSelectedCoverPhoto] = useState(null)
    const {id} = useParams()

    useEffect(() => {
        getCategory()
    }, [])

    async function getCategory() {
        try {
            const { data } = await http().get("/categories", {
                params: {limit: 1000}
            })
            setCategory(data.results)
        } catch (error) {
            console.log("Error fetching categories: ", error)
        }
    }

    const handleCoverPhotoChange = (e) => {
        setSelectedCoverPhoto(URL.createObjectURL(e.target.files[0]))
    }

    useEffect(() => {
        console.log(selectedCoverPhoto)
    }, [selectedCoverPhoto])

    const addArticle = async () => {
        try {
            const form = new URLSearchParams({
                createdBy: id,
                status: false
            })
            if (selectedCoverPhoto) {
                form.append("picture", selectedCoverPhoto)
            }
            const {data} = await http(token).post("/articles/manage", form)
            console.log(data.results)
        } catch (err) {
            const message = err?.response?.data?.message
            if (message) {
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
                    <Formik 
                        initialValues={{
                            title: "",
                            selectedCategory: "",
                            content: "",
                        }}
                        onSubmit={addArticle}
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
                                            {selectedCoverPhoto ? (
                                                <img
                                                    src={selectedCoverPhoto}
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
                                                    name='selectedCategory'
                                                    onChange={handleChange}
                                                    onBlur={handleBlur}
                                                    value={values.selectedCategory}
                                                >
                                                    <option disabled value=''>
                                                    Articles Category
                                                    </option>
                                                    {category.map((category) => {
                                                        return (
                                                            <option key={category.id} value={category.name}>
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
                                                name='content'
                                                onChange={handleChange}
                                                onBlur={handleBlur}
                                                value={values.content}
                                            ></textarea>
                                        </div>
                                    </div>
                                </div>
                                <div className='flex gap-8 text-white font-bold text-[20px]'>
                                    <div className='w-[342px] bg-accent hover:bg-[#19A7CE] rounded-xl flex justify-center items-center'>
                                        <label className='btn btn-accent w-full h-full'>
                                            <span>Choose Photo Cover</span>
                                            <input
                                                className='hidden'
                                                type='file'
                                                name='coverPhoto'
                                                onChange={handleCoverPhotoChange}
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
