import logoBrand from '../assets/img/logo_brand.png';

const Footers = () => {
  return (
    <>
      <div className="bg-secondary">
        <div className="flex flex-col-reverse gap-10 md:flex-row py-10">
          <div className="flex justify-center text-left items-center w-full flex-col gap-5">
            <div>Why News Today</div>
            <div>Be an author</div>
            <div>Community</div>
            <div>FAQ</div>
          </div>
          <div className="flex justify-center text-left items-center w-full flex-col font-medium">
            <div className="font-bold w-[150px] flex justify-center items-center">
              <img src={logoBrand} alt="logo_footers" />
            </div>
            <div>
              Jendral Sudirman Street No. 23 <br />
              Jakarta, Indonesia
            </div>
            <div>(621)989898934</div>
            <div>newstoday@mail.com</div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Footers;
