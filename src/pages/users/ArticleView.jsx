/* eslint-disable no-unused-vars */
import Header from '../../components/Headers';
import { Link, useNavigate, useParams } from 'react-router-dom';
import ArrowBack from '../../assets/img/arrow-back.svg';
import Footer from '../../components/Footers.jsx';
import { useEffect, useState } from 'react';
import http from '../../helpers/http';
import { useSelector } from 'react-redux';
import React from 'react';
import moment from 'moment';
import { Formik } from 'formik';
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs';
import { HiOutlineThumbUp, HiThumbUp } from 'react-icons/hi';
import axios from 'axios';
import ScrollToTop from '../../components/ScrollToTop';

const ArticleView = () => {
  const navigate = useNavigate();
  const [article, setArticle] = useState({});
  const [savePost, setSavePost] = useState(false);
  const [user, setUser] = useState({});
  const [category, setCategory] = useState([]);
  const [selectedCategoryId, setSelectedCategoryId] = useState('');
  const [edit, setEdit] = useState(false);
  const [descriptions, setDescriptions] = useState(article?.descriptions);
  const [comments, setComments] = useState([]);
  const [totalData, setTotalData] = useState(0);
  const [likeCount, setLikeCount] = useState(article?.likeCount || 0);
  const [isLike, setLike] = useState(false);
  const profile = useSelector((state) => state.profile.data);
  const { id } = useParams();
  const token = useSelector((state) => state.auth.token);

  function editButton() {
    setEdit(true);
  }

  function saveButton() {
    setEdit(false);
  }

  function publishButton() {
    const confirmed = window.confirm('Are you sure to Publish this Articles');
    if (confirmed) {
      setEdit(false);
      publishArticle(selectedCategoryId, descriptions);
    }
  }

  async function createSavePost(id) {
    try {
      if (savePost) {
        await http(token).delete(`/saved-article/${id}`);
        setSavePost(false);
      } else {
        await http(token).post(`/saved-article/${id}`);
        setSavePost(true);
      }
    } catch (err) {
      console.log(err);
    }
  }

  async function deleteArticle() {
    const confirmed = window.confirm('Are you sure to Deleted this Articles');
    if (confirmed) {
      try {
        const { data } = await http(token).delete(`/admin/article-view/${id}`);
        navigate('/categoryarticles');
      } catch (error) {
        const message = error?.response?.data?.message;
        if (message) {
          console.log(message);
        }
      }
    }
  }

  useEffect(() => {
    async function getArticle() {
      try {
        const { data } = await http().get(`/article-view/${id}`);
        setArticle(data.results);
        setDescriptions(data.results.descriptions);
      } catch (error) {
        const message = error?.response?.data?.message;
        if (message) {
          console.log(message);
        }
      }
    }
    getArticle();

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

    async function getCategory() {
      try {
        const { data } = await http().get('/categories?limit=10');
        setCategory(data.results);
      } catch (error) {
        const message = error?.response?.data?.message;
        if (message) {
          console.log(message);
        }
      }
    }
    getCategory();

    async function getComment() {
      try {
        const dataComment = await http().get(`/article-comments/${id}`);
        setComments(dataComment.data.results);
        setTotalData(dataComment.data.pageInfo.totalData);
      } catch (error) {
        const message = error?.response?.data?.message;
        if (message) {
          console.log(message);
        }
      }
    }
    getComment();
  }, [id, token]);

  async function publishArticle() {
    try {
      const formData = new FormData();
      formData.append('categoryId', selectedCategoryId);
      formData.append('descriptions', descriptions);
      await http(token).patch(`/admin/article-view/${id}`, formData);
    } catch (error) {
      const message = error?.response?.data?.message;
      if (message) {
        console.log(message);
      }
    }
  }

  async function createComments(values) {
    try {
      const formData = new URLSearchParams({
        articleId: id,
        commentText: values.commentText,
      }).toString();
      const { data } = await http(token).post('/article-comments', formData);
      if (!data.results) {
        console.log('create comment failed');
      }
      const dataComent = await http().get(`/article-comments/${id}`);
      setComments(dataComent.data.results);
    } catch (error) {
      const message = error?.response?.data?.message;
      if (message) {
        console.log(message);
      }
    }
  }

  const getArticleData = React.useCallback(async () => {
    let data = {};
    if (token) {
      const { data: res } = await http(token).get(`/articles/${id}/logged`);
      data = res;
      setLike(res.results.isLike);
    } else {
      const { data: res } = await axios.get(`http://localhost:8888/articles/${id}`);
      data = res;
    }
    setArticle(data.results);
    setLikeCount(data.results.likeCount);
  }, [token, id]);

  const toggleLike = React.useCallback(async () => {
    if (!token) {
      navigate('/signin');
    }
    await http(token).get(`/articles/${id}/likes`);
    if (isLike) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setLike(!isLike);
  }, [token, id, navigate, isLike, likeCount]);

  React.useEffect(() => {
    getArticleData();
  }, [getArticleData]);

  useEffect(() => {
    async function getSavePost(id) {
      const { data } = await http(token).get(`/saved-article/${id}`);
      if (!data) {
        setSavePost(false);
      } else {
        setSavePost(true);
      }
    }
    getSavePost(article.id);
  }, [id, article, token]);

  return (
    <>
      <div>
        <nav>
          <Header />
        </nav>
        <div className="pt-[150px]">
          <div className="flex w-full pl-20 gap-[450px]">
            <Link to="/articles" className="flex items-center">
              <div className="flex gap-4">
                <img src={ArrowBack} className="w-2" />
                <div className="font-bold">Back</div>
              </div>
            </Link>
            <div>
              <div className="font-bold text-[24px]">Article Viewer</div>
            </div>
          </div>
        </div>
        <div className="w-full flex flex-col px-20 justify-between mt-10">
          <div className="flex gap-20">
            <div className="flex-1 w-[595px] h-[370px] overflow-hidden">
              <img className="object-fit" src={article?.picture} alt="" />
            </div>
            <div className="flex flex-1 flex-col gap-14">
              <div className="text-[36px] font-bold">{article?.title}</div>
              <div>
                <div className="font-bold">{article?.fullName} - Author</div>
                <div>{moment(article?.createdAt).format('MMMM Do YYYY, h:mm')}</div>
              </div>
              <div className="flex gap-5 items-center">
                <button onClick={toggleLike} className="flex items-center gap-3">
                  {!isLike && <HiOutlineThumbUp size={35} />}
                  {isLike && <HiThumbUp color="#19A7CE" className="text-black" size={35} />}
                  <span className="text-lg font-bold">{likeCount}</span>
                </button>
                <button onClick={() => createSavePost(article.id)}>
                  {savePost ? <BsBookmarkFill size={35} className="text-primary" /> : <BsBookmark size={35} />}
                </button>
              </div>
              <div className="w-full flex flex-col gap-3">
                {user !== 'superadmin' && (
                  <button className="btn normal-case w-full font-bold max-w-full">Share Article Link</button>
                )}
                {user === 'superadmin' && (
                  <div className="flex flex-col gap-3">
                    {edit === true ? (
                      <button onClick={saveButton} className="btn normal-case w-full font-bold max-w-full">
                        Save article
                      </button>
                    ) : (
                      <button onClick={editButton} className="btn normal-case w-full font-bold max-w-full">
                        Edit article
                      </button>
                    )}
                    <select
                      name="categoryId"
                      className="h-12 rounded-md border-none bg-primary normal-case w-full font-bold max-w-full text-white"
                      defaultValue={category}
                      onChange={(e) => setSelectedCategoryId(e.target.value)}
                    >
                      <option className="text-center" disabled value="">
                        Add to category
                      </option>
                      {category.map((event) => {
                        return (
                          <option className="text-center" key={`citySearch${event.id}`} value={event.id}>
                            {event.name}
                          </option>
                        );
                      })}
                    </select>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
        <div className="w-full px-20 pt-20 pb-20 flex flex-col gap-10">
          <div>
            {user === 'superadmin' ? (
              <div className="flex flex-col gap-5">
                {edit === true ? (
                  <textarea
                    name="descriptions"
                    className="h-[300px]"
                    type="text"
                    value={descriptions}
                    onChange={(e) => setDescriptions(e.target.value)}
                  />
                ) : (
                  <div>{descriptions}</div>
                )}
              </div>
            ) : (
              <div className="flex flex-col gap-5">
                <div>{descriptions}</div>
              </div>
            )}
          </div>
          {user !== 'superadmin' ? (
            <div className="flex flex-col gap-8">
              <p className="font-bold text-[24px]">{totalData} Comments</p>
              <div className="flex gap-5">
                <div className="rounded-2xl border-2 border-gray-50 overflow-hidden w-12 h-12">
                  <img src={profile?.picture} className="object-cover" />
                </div>
                <Formik initialValues={{ commentText: '' }} onSubmit={createComments}>
                  {({ values, handleChange, handleBlur, handleSubmit }) => (
                    <form onSubmit={handleSubmit} className="flex flex-col gap-3 w-full">
                      <div className="font-bold">You</div>
                      <textarea
                        name="commentText"
                        placeholder="Comment"
                        defaultValue=""
                        onChange={handleChange}
                        onBlur={handleBlur}
                        className="textarea textarea-bordered textarea-lg w-full"
                        value={values.commentText}
                      ></textarea>
                      <button type="submit" className="btn bg-primary border-none normal-case text-white max-w-xs">
                        Submit
                      </button>
                    </form>
                  )}
                </Formik>
              </div>
              {comments.map((comment) => {
                return (
                  <div className="flex gap-5" key={`comments${comment.id}`}>
                    <div className="rounded-2xl border-2 border-gray-50 overflow-hidden w-12 h-12">
                      <img src={comment.picture} className="object-cover" />
                    </div>
                    <div>
                      <div className="font-bold">
                        {comment.fullName} - {moment(comment.createdAt).format('MMMM Do YYYY, h:mm')}
                      </div>
                      <div>{comment.commentText}</div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div className="flex gap-16">
              <button
                onClick={publishButton}
                className="h-16 btn btn-primary flex-1 normal-case text-white font-bold max-w-full"
              >
                Publish Article
              </button>
              <button
                onClick={deleteArticle}
                className="h-16 btn btn-secondary flex-1 normal-case text-primary font-bold max-w-full"
              >
                Decline Article Request{' '}
              </button>
            </div>
          )}
        </div>
      </div>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default ArticleView;
