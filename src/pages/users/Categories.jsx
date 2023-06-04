import Category from '../../assets/img/category-image-2.png'
import CategoryFade from '../../assets/img/category-image.png'
import Filter from '../../assets/img/filter.png'
// import CategoryImage from  "../../assets/img/category-image-3.png"
// import { BsFillPlusSquareFill } from "react-icons/bs"
import Footer from '../../components/Footers'
import Header from '../../components/Headers'
import ScrollToTop from '../../components/ScrollToTop'
import { Link } from 'react-router-dom'
import CategoryPage from '../../components/Category'

const Categories = () => {
    return (
        <>
            <div>
                <nav>
                    <Header />
                </nav>
                <div className="w-full relative">
                    <div className="relative">
                        <img src={Category} className="w-full" />
                        <img
                            src={CategoryFade}
                            className="absolute top-0 w-full h-full"
                        />
                    </div>
                    <div className="absolute top-0 left-0 w-[668px] p-20">
                        <p className="text-[65px]">
                            {' '}
                            Choose Article by Category
                        </p>
                        <div className="w-[497px]">
                            <p>
                                Category helps you to read another article that
                                you havent thought before. You able to read all
                                articles for free. Enjoy the reading!
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="p-20">
                <div className="w-full h-full flex justify-end pb-3 cursor-pointer">
                    <button className="bg-[#376AED] rounded-md w-6 text-[20px] text-white">
                        +
                    </button>
                    <p className="ml-3 text-[18px]">Add Categories</p>
                </div>
                <div className="w-full flex justify-between">
                    <div className="flex gap-5">
                        <img src={Filter} className="w-6" />
                        <div className="dropdown">
                            <label
                                tabIndex={0}
                                className="m-1 cursor-pointer font-bold"
                            >
                                Sort By Last Category
                            </label>
                            <ul
                                tabIndex={0}
                                className="dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52"
                            >
                                <li>
                                    <a>Name</a>
                                </li>
                                <li>
                                    <a>Category</a>
                                </li>
                                <li>
                                    <a>Last Added</a>
                                </li>
                                <li>
                                    <a>Last Modified</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full flex justify-center text-gray-500">
                <Link to="/categoryarticles">
                    <button className="hover:bg-blue-100">
                        Click the category to explore articles
                    </button>
                </Link>
            </div>
            <div className="px-[80px] ">
                <CategoryPage />
            </div>
            <div className="w-full flex justify-center text-gray-500 p-6">
                <p>We have no category left</p>
            </div>
            <Footer />
            <ScrollToTop />
        </>
    )
}

export default Categories
