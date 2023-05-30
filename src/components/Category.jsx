import { useState, useEffect } from "react"
import http from "../helpers/http"

const Category = () => {
    const [category, setCategory] = useState([])
    useEffect(()=> {
        async function getCategory(){
            const {data} = await http().get("/categories/all")
            setCategory(data.results)
        }
        getCategory()
    }, [])
    return (
        <div className='flex flex-col gap-8 pt-[20px]'>
            <div className='flex justify-between font-semibold'>
                <div>Category</div>
                <div className='text-[#444cd4] cursor-pointer'>More</div>
            </div>
            <div className=''>
                <div className='grid grid-cols-4 drop-shadow-3xl gap-y-12'>
                    {category.map(category => {
                        return (
                            <div key={`category-${category.id}`} className='flex flex-col items-center gap-2 drop-shadow-2xl' >
                                <div className='w-[202px] h-[222px] rounded-3xl overflow-hidden '>
                                    <img src={category.picture} className='w-full h-full object-cover' alt={category.category} />
                                </div>
                                <div className='text-[20px] font-bold hover:text-primary cursor-pointer'>{category.category}</div>
                           
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Category