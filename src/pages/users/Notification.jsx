import Header from '../../components/Headers';
import Filter from '../../assets/img/filter.png';
import Footer from '../../components/Footers';
import { FaChevronLeft } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import http from '../../helpers/http';
import { useEffect, useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { getProfileAction } from '../../redux/actions/profile';
import moment from 'moment';
import ScrollToTop from '../../components/ScrollToTop';
import { toast } from 'react-toastify';

const Notification = () => {
  const [requestAuthor, setRequestAuthor] = useState([]);
  const [messageRequest, setMessageRequest] = useState('');
  const [notif, setNotif] = useState([]);
  const [user, setUser] = useState({});
  const token = useSelector((state) => state.auth.token);
  const dispatch = useDispatch();
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectAll, setSelectAll] = useState(false);
  const [modal, setCheckModal] = useState(false);
  const [checkSelected, setCheckSelected] = useState(true);
  const getDataNotif = useCallback(async () => {
    const { data } = await http(token).get('/notifications');
    setNotif(data.results);
  }, [token]);

  const handleSelectAll = () => {
    if (!selectAll) {
      const allItemIds = notif.map((item) => item.id);
      setSelectedItems(allItemIds);
      setCheckSelected(false);
      console.log(20);
    } else {
      setSelectedItems([]);
      setCheckSelected(true);
      console.log(30);
    }
    setSelectAll(!selectAll);
  };

  function checkModal() {
    setCheckModal(!modal);
  }

  const handleCheckboxChange = (itemId) => {
    if (checkSelected) {
      setCheckSelected(!checkSelected);
    }
    if (itemId === 'all') {
      setSelectAll(!selectAll);
      setSelectedItems(selectAll ? [] : notif.map((item) => item.id));
    } else {
      const newSelectedItems = [...selectedItems];
      const index = newSelectedItems.indexOf(itemId);
      if (index > -1) {
        newSelectedItems.splice(index, 1);
      } else {
        newSelectedItems.push(itemId);
      }

      setSelectedItems(newSelectedItems);
      setSelectAll(newSelectedItems.length === notif.length);
    }
  };

  const handleDeleteSelectedItems = async () => {
    try {
      const selectedItemsArray = selectedItems.map(Number);
      for (const itemId of selectedItemsArray) {
        await http(token).delete(`/notifications/${itemId}`);
      }
    } catch (error) {
      toast.error(error);
    }

    getDataNotif();
    setCheckModal(!modal);
  };

  useEffect(() => {
    async function getRequestAuthor() {
      try {
        const { data } = await http(token).get('/request-author');
        setRequestAuthor(data.results.reqAuthor);
        setMessageRequest(data.results.message);
      } catch (error) {
        const message = error?.response?.data?.message;
        if (message) {
          console.log(message);
        }
      }
    }
    getRequestAuthor();

    async function getUser() {
      try {
        const { data } = await http(token).get('/admin/users/detail');
        if (data.results.role === 'superadmin') {
          setUser(data.results.role);
        }
      } catch (error) {
        const message = error?.response?.data?.message;
        if (message) {
          console.log(message);
        }
      }
    }
    getUser();

    getDataNotif();
    dispatch(getProfileAction(token));
  }, [token, getDataNotif, dispatch]);

  async function doAccAuthor(userId, id) {
    try {
      const { data } = await http(token).patch(`/request-author/${userId}`);
      if (data.results) {
        await http(token).delete(`/request-author/${id}`);
      }
      location.reload();
    } catch (error) {
      const message = error?.response?.data?.message;
      if (message) {
        console.log(message);
      }
    }
  }

  async function doIgnoreAuthor(id) {
    try {
      await http(token).delete(`/request-author/${id}`);
      location.reload();
    } catch (error) {
      const message = error?.response?.data?.message;
      if (message) {
        console.log(message);
      }
    }
  }

  return (
    <>
      <div>
        <nav>
          <Header />
        </nav>
      </div>
      <div className="flex flex-col gap-10 pt-20 pb-12">
        <div className="flex w-full justify-between px-20 items-center py-10">
          <Link to="/">
            <div className="flex gap-4 items-center">
              <FaChevronLeft size={20} />
              <div className="font-bold">Home Page</div>
            </div>
          </Link>
          <div>
            <div className="font-bold text-[24px]">Notification</div>
          </div>
          <div>
            <button onClick={handleSelectAll} className="font-bold">
              {selectAll ? 'Unselect All' : 'Select All'}
            </button>
          </div>
        </div>
        <div>
          <div className="flex gap-5 px-20">
            <img src={Filter} alt="" className="w-6" />
            <p className="font-bold">Filter</p>
          </div>
        </div>
        <div className="flex flex-col gap-16 pb-20">
          {user === 'superadmin' && (
            <div className="flex flex-col gap-6">
              {requestAuthor.map((author) => {
                return (
                  <div className="w-full flex justify-between items-center px-20" key={`author${author.id}`}>
                    <div className="flex gap-5 justify-center items-center">
                      <div className="rounded-full border-2 border-black overflow-hidden w-12 h-12">
                        <img src={author.picture} className="object-cover h-full w-full" />
                      </div>
                      <div className="flex flex-col">
                        <label htmlFor="notification" className="font-bold">
                          {messageRequest}
                        </label>
                        <label htmlFor="notification" className="text-gray-500">
                          {moment(author.createdAt).fromNow('mm-hh')}
                        </label>
                      </div>
                    </div>
                    <div className="flex gap-11">
                      <div className="flex justify-between gap-3">
                        <div>
                          <button
                            onClick={() => doAccAuthor(author.userId, author.id)}
                            className="bg-primary p-2 px-6 hover:bg-green-500 rounded-xl"
                          >
                            Accept
                          </button>
                        </div>
                        <div>
                          <button
                            onClick={() => doIgnoreAuthor(author.id)}
                            className="bg-blue-200 p-2 px-6 hover:bg-red-300 rounded-xl"
                          >
                            Ignore
                          </button>
                        </div>
                      </div>
                      <div className="flex items-center">
                        <input
                          type="checkbox"
                          name="notification"
                          id="notification"
                          className="w-6 h-6 border-primary"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          )}
          {notif.length > 1 ? (
            notif.map((item) => {
              return (
                <>
                  <div className="w-full flex justify-between items-center px-20">
                    <div className="flex gap-5 justify-center items-center">
                      <div className="rounded-full border-2 border-gray-200 overflow-hidden w-12 h-12">
                        <img src={item.picture} className="object-cover w-full h-full" />
                      </div>
                      <div className="flex flex-col">
                        <label htmlFor={item.id} className="font-bold">
                          {item.text}
                        </label>
                      </div>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        name={item.id}
                        onChange={() => handleCheckboxChange(item.id)}
                        id={item.id}
                        checked={selectedItems.includes(item.id)}
                        className="checkbox"
                      />
                    </div>
                  </div>
                </>
              );
            })
          ) : (
            <div className="w-full text-center text-2xl">No Notification</div>
          )}
        </div>
        <div className="flex self-center">
          <button
            disabled={checkSelected}
            onClick={checkModal}
            className="btn btn-primary w-[400px] text-white normal-case"
          >
            Delete Selected Items
          </button>
        </div>
      </div>
      <input type="checkbox" id="my_modal_6" className="modal-toggle" checked={modal} />
      <div className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Attention !</h3>
          <p className="py-4">Are you sure to delete that items?</p>
          <div className="modal-action">
            <button onClick={handleDeleteSelectedItems} className="btn btn-error text-white normal-case">
              Yes
            </button>
            <button onClick={checkModal} className="btn btn-success text-white normal-case">
              No
            </button>
          </div>
        </div>
      </div>
      <footer>
        <Footer />
      </footer>
      <ScrollToTop />
    </>
  );
};

export default Notification;
