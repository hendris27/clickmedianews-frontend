import logoBrand from "../assets/img/logo_brand.png"

const Footers = () => {
    return (
        <>
            {/* <div className='bg-[#4474ef] px-[145px] py-[150px] '> */}
            <div className='bg-[#4474ef] px-[145px] py-[100px] '>
                <div className='flex justify-between text-medium'>
                    <div className='flex flex-col gap-5 text-[22px] font-medium text-white'>
                        <div>Why Click News</div>
                        <div>Be an author</div>
                        <div>Community</div>
                        <div>FAQ</div>
                    </div>
                    <div className='flex flex-col gap-5 font-medium text-white'>
                        <div className='font-bold w-[190px] flex justify-center items-center ' >
                            <img src={logoBrand} alt='logo_footers' />
                        </div>
                        <div className='text-[22px]'>Jendral Sudirman Street No. 23 <br/>
                                Jakarta, Indonesia</div>
                        <div className='text-[22px] '>(621)989898934</div>
                        <div className='text-[22px] '>clicknews@mail.com</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default Footers