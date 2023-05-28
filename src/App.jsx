import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Provider } from "react-redux"
import { store, persistor } from "./redux/store"
import { PersistGate } from "redux-persist/lib/integration/react"
import Home from "./pages/users/Home"
import SearchArticles from "./pages/users/SearchArticles"
import Articles from "./pages/users/Articles"
import CategoryArticles from "./pages/users/CategoryArticles"
import ArticleView from "./pages/users/ArticleView.jsx"
import WriteArticles from "./pages/users/WriteArticle"
import ForgotPassword from "./pages/users/auth/ForgotPassword"
import SavedArticle from "./pages/users/SavedArticle.jsx"
import ResetPassword from "./pages/users/auth/ResetPassword.jsx"
import Notification from "./pages/users/Notification.jsx"
import Categories from "./pages/users/Categories"
import Profile from "./pages/users/Profile"
import SignIn from "./pages/users/auth/SignIn"
import SignUp from "./pages/users/auth/SignUp"

/*Admin*/
import HomeAdmin from "./pages/admin/HomeAdmin"
import AdminSignUp from "./pages/admin/auth/SignUp"
import AdminSignIn from "./pages/admin/auth/SignIn"
import AdminForgotPassword from "./pages/admin/auth/ForgotPassword"
import AdminResetPassword from "./pages/admin/auth/ResetPassword"
import AdminResetSuccess from "./pages/admin/auth/ResetSuccess"
import EditProfil from "./pages/users/EditProfil"

const App = () => {
    return (
        <Provider store={store}>
            <PersistGate persistor={persistor}>
                <BrowserRouter>
                    <Routes>
                        <Route path='/' element={<Home />} />
                    </Routes>
                    <Routes>
                        <Route path='/searcharticles' element={<SearchArticles />} />
                    </Routes>
                    <Routes>
                        <Route path='/profile' element={<Profile />} />
                    </Routes>
                    <Routes>
                        <Route path='/articles' element={<Articles />} />
                    </Routes>
                    <Routes>
                        <Route path='/categoryarticles' element={<CategoryArticles />} />
                    </Routes>
                    <Routes>
                        <Route path='/savedarticle' element={<SavedArticle />} />
                    </Routes>
                    <Routes>
                        <Route path='/articleview' element={<ArticleView />} />
                    </Routes>
                    <Routes>
                        <Route path='/writearticles' element={<WriteArticles />} />
                    </Routes>
                    <Routes>
                        <Route path='/forgotpassword' element={<ForgotPassword />} />
                    </Routes>
                    <Routes>
                        <Route path='/resetpassword' element={<ResetPassword />} />
                    </Routes>
                    <Routes>
                        <Route path='/signin' element={<SignIn />} />
                    </Routes>
                    <Routes>
                        <Route path='/signup' element={<SignUp />} />
                    </Routes>
                    <Routes>
                        <Route path='/notificaton' element={<Notification />} />
                    </Routes>
                    <Routes>
                        <Route path='/categories' element={<Categories />} />
                    </Routes>

                    {/*Admin*/}
                    <Routes>
                        <Route path='/home-admin' element={<HomeAdmin />} />
                    </Routes>
                    <Routes>
                        <Route path='/sign-up' element={<AdminSignUp />} />
                    </Routes>
                    <Routes>
                        <Route path='/sign-in' element={<AdminSignIn />} />
                    </Routes>
                    <Routes>
                        <Route path='/forgot-password' element={<AdminForgotPassword />} />
                    </Routes>
                    <Routes>
                        <Route path='/reset-password' element={<AdminResetPassword />} />
                    </Routes>
                    <Routes>
                        <Route path='/reset-success' element={<AdminResetSuccess />} />
                    </Routes>
                    <Routes>
                        <Route path='/edit-profile' element={<EditProfil />} />
                    </Routes>
                </BrowserRouter>
            </PersistGate>
        </Provider>

    )
}
export default App
