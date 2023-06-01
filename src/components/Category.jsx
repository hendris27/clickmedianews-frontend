import { useState, useEffect } from "react"
import http from "../helpers/http"
import { useNavigate } from "react-router-dom"

const Category = () => {
    const [category, setCategory] = useState([])
    const navigate = useNavigate()
    useEffect(()=> {
        async function getCategory(id){
            const {data} = await http().get(`/articles/home/${id}`)
            setCategory(data.results)
        }
        getCategory()
    }, [])



    const handleClick = (category) => {
        const state = { categories: category}
        navigate("/categoryarticles", { state })
    }

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
                            <button onClick={() => handleClick(category.category)} key={`category-${category.id}`} >
                                <div className='flex flex-col items-center gap-4 drop-shadow-2xl' >
                                    <div className='w-[202px] h-[222px] rounded-3xl overflow-hidden '>
                                        <img src={category.picture} className='w-full h-full object-cover' alt={category.category} />
                                    </div>
                                    <div className='text-[20px] font-bold hover:text-primary cursor-pointer'>{category.category}</div>
                                </div>
                            </button>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Category