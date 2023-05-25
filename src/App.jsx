import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/users/Home"
import SearchArticles from "./pages/users/SearchArticles"
import Articles from "./pages/users/Articles"
import ForgotPassword from "./pages/users/auth/ForgotPassword"
import ResetPassword from "./pages/users/auth/ResetPassword.jsx"
import Notification from "./pages/users/Notification.jsx"
import Categories from "./pages/users/Categories"
import SignIn from "./pages/users/auth/SignIn"
import SignUp from "./pages/users/auth/SignUp"

{/*Admin*/}
import HomeAdmin from "./pages/admin/HomeAdmin"
import AdminSignUp from "./pages/admin/auth/SignUp"
import AdminSignIn from "./pages/admin/auth/SignIn"
import AdminForgotPassword from "./pages/admin/auth/ForgotPassword"
import AdminResetPassword from "./pages/admin/auth/ResetPassword"
import AdminResetSuccess from "./pages/admin/auth/ResetSuccess"


// import { Provider } from "react-redux"
// import { store, persistor } from "./redux/store"
// import PrivateRoute from "./components/PrivateRouter"
// import { PersistGate } from "redux-persist/integration/react"

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
            <Routes>
                <Route path='/searcharticles' element={<SearchArticles />} />
            </Routes>
            <Routes>
                <Route path='/articles' element={<Articles />} />
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
                <Route path='/notification' element={<Notification />} />
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
                <Route path='/categories' element={<Categories/>} />
            </Routes>
        </BrowserRouter>

    )
}
export default App
