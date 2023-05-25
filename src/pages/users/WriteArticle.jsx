import Header from "../../components/Headers"
import Footer from "../../components/Footers"

const articles = () => {
    return (
        <>
            <div className='h-screen'>
                <nav>
                    <Header/>
                </nav>
            </div>
           
            <footer>
                <Footer/>
            </footer>
        </>
    )
}

export default articles