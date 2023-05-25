import Header from "../../components/Headers"
import picture_category from "../../assets/img/articel.jpg"


import Category from "../../assets/img/category-image-2.png"
import CategoryFade from "../../assets/img/category-image.png"
import Filter from "../../assets/img/filter.png"
import CategoryImage from  "../../assets/img/category-image-3.png"
import Footer from "../../components/Footers"

const Categories = () => {
    return (
        <>
            <div>
                <nav>
                    <Header/>
                </nav>
                <div className='w-full relative'>
                    <div className='relative'>
                        <img src={Category} className='w-full'/>
                        <img src={CategoryFade} className='absolute top-0 w-full'/>
                    </div>
                    <div className='absolute top-0 left-0 w-[668px] p-20'>
                        <p className='text-[65px]'> Choose Article by Category</p>
                        <div className='w-[497px]'>
                            <p>Category helps you to read another article that you havent thought before. You able to read all articles for free. Enjoy the reading!</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='p-20'>
                <div className='w-full flex justify-between'>
                    <div className='flex gap-5'>
                        <img src={Filter} className='w-6'/>
                        <div className='dropdown'>
                            <label tabIndex={0} className='m-1 cursor-pointer font-bold'>Sort By Last Category</label>
                            <ul tabIndex={0} className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'>
                                <li><a>Name</a></li>
                                <li><a>Category</a></li>
                                <li><a>Last Added</a></li>
                                <li><a>Last Modified</a></li>
                            </ul>
                        </div>
                    </div>
                    <p className='font-bold'>18 Categories</p>
                </div>
            </div>
            <div className='w-full flex justify-center text-gray-500'>
                <p>Click the category to explore articles</p>
            </div>
            <div className='p-24 flex flex-wrap gap-16'>
                <div className='w-[165px] h-[217px] bg-blue-400 rounded-2xl'>
                    <img src={CategoryImage} />
                </div>
                <div className='w-[165px] h-[217px] bg-blue-400 rounded-2xl'>
                    <img src={CategoryImage} />
                </div>
                <div className='w-[165px] h-[217px] bg-blue-400 rounded-2xl'>
                    <img src={CategoryImage} />
                </div>
                <div className='w-[165px] h-[217px] bg-blue-400 rounded-2xl'>
                    <img src={CategoryImage} /> 
                </div>
                <div className='w-[165px] h-[217px] bg-blue-400 rounded-2xl'>
                    <img src={CategoryImage} />
                </div>
                <div className='w-[165px] h-[217px] bg-blue-400 rounded-2xl'>
                    <img src={CategoryImage} />
                </div>
                <div className='w-[165px] h-[217px] bg-blue-400 rounded-2xl'>
                    <img src={CategoryImage} />
                </div>
                <div className='w-[165px] h-[217px] bg-blue-400 rounded-2xl'>
                    <img src={CategoryImage} />
                </div>
                <div className='w-[165px] h-[217px] bg-blue-400 rounded-2xl'>
                    <img src={CategoryImage} />
                </div>
                <div className='w-[165px] h-[217px] bg-blue-400 rounded-2xl'>
                    <img src={CategoryImage} />
                </div>
                <div className='w-[165px] h-[217px] bg-blue-400 rounded-2xl'>
                    <img src={CategoryImage} />
                </div>
                <div className='w-[165px] h-[217px] bg-blue-400 rounded-2xl'>
                    <img src={CategoryImage} />
                </div>
            </div>
            <div className='w-full flex justify-center text-gray-500 mb-8'>
                <p>We have no category left</p>
            </div>
            <Footer/>
        </>
    )
}

export default Categories