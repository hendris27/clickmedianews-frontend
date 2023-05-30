
import logoBrand from "../assets/img/logo_brand.png"

const Footers = () => {
    return (
        <>
            <div className='bg-secondary px-[145px] py-[150px] '>
                <div className='flex justify-between text-medium'>
                    <div className='flex flex-col gap-7 text-[24px] font-medium text-black'>
                        <div>Why News Today</div>
                        <div>Be an author</div>
                        <div>Community</div>
                        <div>FAQ</div>
                    </div>
                    <div className='flex flex-col gap-7 font-medium text-black'>
                        <div className='font-bold text-[36px] w-[190px] flex justify-center items-center ' >
                            <img  src={logoBrand} alt='logo_footers' />
                        </div>
                        <div className='text-[24px] '>Jendral Sudirman Street No. 23 <br/>
                                Jakarta, Indonesia</div>
                        <div className='text-[24px] '>(621)989898934</div>
                        <div className='text-[24px] '>newstoday@mail.com</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footers