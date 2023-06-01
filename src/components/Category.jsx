import { useState, useEffect } from "react"
import http from "../helpers/http"
import { useNavigate } from "react-router-dom"
import { Link } from "react-router-dom"
import { useSelector } from "react-redux"   




const Category = () => {
    const [category, setCategory] = useState([])
    const navigate = useNavigate()
    const token = useSelector(state => state.auth.token)

    useEffect(()=> {

        async function getCategory(id){
            const {data} = await http().get(`/articles/home/${id}`)

            setCategory(data.results)
        }
        getCategory()
    }, [])



   
    async function deleteCategory(id) {
        const confirmed = window.confirm("Are you sure to Deleted this Category")
        if (confirmed) {  
            try {
                const { data } = await http(token).delete(`/categories/${id}`)
                console.log(data.results)
                if(data.results){
                    navigate("/categories")
                }


            } catch (error) {
                const message = error?.response?.data?.message
                if (message) {
                    console.log(message)
                }
            }
        } 
    }
   

    return (
        <div className='flex flex-col gap-8 pt-[60px]'>
            <div className='flex justify-between font-semibold'>
                <div>Category</div>
                <Link to='/categoryarticles'>
                    <div className='text-[#444cd4] cursor-pointer'>More</div>
                </Link>
            </div>
            <div className=''>
                <div className='grid grid-cols-4 drop-shadow-3xl gap-y-12'>
                    {category.map(category => {
                        return (
<div key={`category-${category.id}`} >

                            <button onClick={() => handleClick(category.category)} key={`category-${category.id}`} >

                           
                            
                              

                                <div className='flex flex-col items-center gap-4 drop-shadow-2xl' >
                                    <div className='w-[202px] h-[222px] rounded-3xl overflow-hidden relative '>
                                        <Link to='/categoryarticles'>

                                            <img src={category.picture} className='w-full h-full object-cover' alt={category.category} />
                                        </Link>

                                        <div className='absolute bottom-10 right-14'><button onClick={()=>deleteCategory(category.id)} className='btn btn-primary text-white hover:bg-red-300 bg-[#E5E5CB]  border-0'>Delete</button></div>
                                    </div>
                                    <div className='text-[20px] font-bold hover:text-primary cursor-pointer'>{category.category}</div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </div>
    )
}

export default Category