import Header from "../../components/Headers"
import Footer from "../../components/Footers"

import { FaChevronLeft } from "react-icons/fa"
import { HiPlus } from "react-icons/hi"
import { useState} from "react"
import http from "../../helpers/http"

const WriteArticles = () => {
    const [category, setCategory] = useState([])
    async function getCategory(){
        const {data} = await http().get("/categories/all")
        setCategory(data.results)
    }
    getCategory()
    return (
        <>
            <div>
                <nav>
                    <Header/>
                </nav>
               
            </div>
            <div className='pt-36 px-32 pb-24'>
                <div className='flex flex-col gap-8'>
                    <div className='flex justify-between font-bold text-[18px]'>
                        <div className='flex justify-center items-center '>
                            <div><FaChevronLeft/></div>
                            <div>Back</div>
                        </div>
                        <div>Write Article</div>
                        <div>Save as draft</div>
                    </div>
                    <div className='flex gap-8'>
                        <div className='w-[342px] h-[535px]  border-4 p-4 rounded-xl '>
                            <div className='w-full h-full border-4 border-dashed flex justify-center items-center rounded-xl'>
                                <img src='' alt='' /><HiPlus color='#CDCDCD' size={50}/></div>
                        </div>
                        <div className='flex flex-col gap-8 w-full flex-1'>
                            <div className='flex gap-8'>
                                <div className='flex-1'>
                                    <input type='text' className='px-8 input input-bordered w-full' placeholder='Articel Title'/>
                                </div>
                                <div className='w-[50%]'>
                                    <select className='select w-full max-w-xs'>
                                        <option disabled selected>Aticles Category</option>
                                        {category.map(category => {
                                            return (
                                                <option key={category.id}>{category.name}</option>
                                            )
                                        })}
                                    </select>

                                </div>
                            </div>
                            <div className='h-full flex justify-center items-center'>
                                <input type='text' className='rounded-2xl h-full w-full pl-[300px] outline-none border-2' placeholder='Type Here'/>
                            </div>
                          
                        </div>
                       
                    </div>
                    <div className='flex gap-8 text-white font-bold text-[20px]'>
                        <div className='w-[342px] bg-accent hover:bg-[#19A7CE] rounded-xl flex justify-center items-center'>
                            <label className='btn btn-accent w-full h-full'>
                                <span>Choose Photo Cover</span>
                                <input 
                                    className='hidden ' 
                                    type='file'
                                    name='picture'

                                />
                            </label>
                        </div>
                        <div className='flex-1 bg-[#19A7CE] h-[75px] hover:bg-green-500 rounded-xl flex justify-center items-center'>Request Publish Article</div>
                    </div>
                </div>
                
            </div>
           
            <footer>
                <Footer/>
            </footer>
        </>
    )
}

export default WriteArticles