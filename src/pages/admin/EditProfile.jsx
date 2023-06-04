import Header from '../../components/Headers.jsx';
import divider from '../../assets/img/Divider.png';
import Picture from '../../assets/img/picture_login.png';
import Footer from '../../components/Footers.jsx';
import { IoIosArrowForward } from 'react-icons/io';
import { Link } from 'react-router-dom';

const EditProfile = () => {
  return (
    <>
      <div className="flex h-min-screen">
        <nav>
          <Header />
        </nav>
        <img className="mt-[90px] absolute" src={divider} />
        <div className="max-w-[500px] border-r-2 p-20 flex flex-col gap-10">
          <div>
            <p className="text-[24px] mt-[40px] font-bold">Profile</p>
          </div>
          <div>
            <div className="w-[295px] h-[284px] shadow-2xl rounded-2xl bg-white relative">
              <div className="flex gap-5 items-center w-full h-[120px] px-10">
                <div className="border-2 rounded-3xl border-blue-500 p-1">
                  <div className="rounded-3xl border-2 border-gray-50 overflow-hidden w-16 h-16">
                    <img src={Picture} className="object-cover" />
                  </div>
                </div>
                <div className="flex flex-col flex-1">
                  <div>@jonathan</div>
                  <div className="font-bold">Joe Daniel</div>
                  <div>Member</div>
                </div>
              </div>
              <div className="px-10">
                <div className="font-bold">About Me</div>
                <div>Madison Blackstone is a director of publisher, with experience managing global teams.</div>
              </div>
              <div className="w-[255px] rounded-2xl absolute bottom-[-20px] right-5 h-[50px] bg-blue-500 pr-5 flex justify-between text-white text-center">
                <div className="rounded-r-2xl border-1 pt-1 rounded-l-2xl w-[70px] justify-center bg-blue-600">
                  <div className="font-bold">52</div>
                  <div className="text-[10px]">Post</div>
                </div>
                <div className="flex flex-col pt-1 gap-1">
                  <div className="font-bold">250</div>
                  <div className="text-[10px]">Visitor</div>
                </div>
                <div className="flex flex-col gap-1 pt-1">
                  <div className="font-bold">4.5K</div>
                  <div className="text-[10px]">Comments</div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex justify-center">
            <Link className="text-blue-500">See Profile</Link>
          </div>
          <div className="flex flex-col gap-5 ">
            <Link className="flex w-full justify-between items-center border-2 p-3 rounded-2xl hover:bg-blue-100 hover:text-blue-600">
              <div className="font-bold">Edit Profile</div>
              <div>
                <IoIosArrowForward />
              </div>
            </Link>
            <Link className="flex w-full justify-between items-center border-2 p-3 rounded-2xl hover:bg-blue-100 hover:text-blue-600">
              <div className="font-bold">Saved Post</div>
              <div>
                <IoIosArrowForward />
              </div>
            </Link>
            <Link className="flex w-full justify-between items-center border-2 p-3 rounded-2xl hover:bg-blue-100 hover:text-blue-600">
              <div className="font-bold">FAQ</div>
              <div>
                <IoIosArrowForward />
              </div>
            </Link>
            <Link className="flex w-full justify-between items-center border-2 p-3 rounded-2xl hover:bg-blue-100 hover:text-blue-600">
              <div className="font-bold">Help</div>
              <div>
                <IoIosArrowForward />
              </div>
            </Link>
            <Link className="flex justify-center items-center border-none p-3 rounded-2xl bg-blue-600 text-white hover:bg-blue-400">
              <div className="font-bold">Logout</div>
            </Link>
          </div>
        </div>
        <div className="flex">
          <div className="border-2 rounded-3xl border-blue-500 h-[120px] w-[120px] mt-[120px] ml-[300px] p-1">
            <div className="rounded-3xl h-[110px] w-[110px] border-2 border-gray-50 overflow-hidden">
              <img src={Picture} className="object-cover" />
            </div>
          </div>
          <Link>
            <h1 className="text-[16px] mt-[110px] ml-[100px] text-[#376AED] font-semibold">save changes</h1>
          </Link>
          {/* <label className='text-[16px] mt-[250px] ml-[-340px] text-[#376AED]'>
                        <span>Choose profile picture</span>
                        <input 
                            className='hidden ' 
                            type='file'
                            name='picture'
                        />
                    </label> */}
          <div className="w-[342px] bg-accent hover:bg-[#19A7CE] rounded-xl flex justify-center items-center">
            <label className="btn btn-accent w-full h-full">
              <span>Choose Photo Cover</span>
              <input className="hidden " type="file" name="picture" />
            </label>
          </div>
        </div>
        <div className="mt-[300px] ml-[-700px]">
          <h1 className="text-[16px] mt-[25px] ml-[120px]">Username :</h1>
          <input
            type="text"
            name="username"
            placeholder="@jonathan"
            className="input mt-[10px] ml-[120px] p-3 border-2 border-slate-200 w-[300px] h-[50px] rounded-md max-w-xs"
          />
        </div>
        <div>
          <h1 className="text-[16px] mt-[430px] ml-[-300px]">Email :</h1>
          <input
            type="email"
            name="email"
            placeholder="joedaniel@mail.co"
            className="input mt-[10px] ml-[-300px] p-3 border-2 border-slate-200 w-[300px] h-[50px] rounded-md max-w-xs"
          />
        </div>
        <div>
          <h1 className="text-[16px] mt-[530px] ml-[-300px]">Job :</h1>
          <input
            type="text"
            name="job"
            placeholder="Reporter"
            className="input mt-[10px] ml-[-300px] p-3 border-2 border-slate-200 w-[300px] h-[50px] rounded-md max-w-xs"
          />
        </div>
        <div>
          <h1 className="text-[16px] font-semibold mt-[325px] ml-[120px]">Name :</h1>
          <input
            type="text"
            name="name"
            placeholder="Joe Daniel"
            className="input mt-[10px] ml-[120px] p-2 border-2 border-slate-200 w-[300px] h-[50px] rounded-md max-w-xs"
          />
        </div>
        <div>
          <h1 className="text-[16px] mt-[430px] ml-[-300px]">Password :</h1>
          <input
            type="password"
            name="password"
            placeholder=""
            className="input mt-[10px] ml-[-300px] p-3 border-2 border-slate-200 w-[300px] h-[50px] rounded-md max-w-xs"
          />
        </div>
        <div>
          <h1 className="text-[16px] mt-[530px] ml-[-300px]">About :</h1>
          <input
            type="text"
            name="about"
            placeholder="Madison Blackstone"
            className="input mt-[10px] ml-[-300px] border-2 border-slate-200 w-[300px] h-[130px] rounded-md max-w-xs"
          />
        </div>
        <button className="btn text-white bg-[#376AED] hover:bg-blue-500 mt-[800px] ml-[-500px]">
          Request to be an author
        </button>
      </div>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default EditProfile;
