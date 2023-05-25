import {  BrowserRouter, Routes, Route} from "react-router-dom"

import Home from "./pages/users/Home"
import SearchArticles from "./pages/users/SearchArticles"
import Articles from "./pages/users/Articles"
import ForgotPassword from "./pages/users/auth/ForgotPassword"
import SignIn from "./pages/users/auth/SignIn"
import SignUp from "./pages/users/auth/SignUp"


// import { Provider } from "react-redux"
// import { store, persistor } from "./redux/store"
// import PrivateRoute from "./components/PrivateRouter"
// import { PersistGate } from "redux-persist/integration/react"

const App = () => {
    return (
        
         
               
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
            </Routes>
            <Routes>
                <Route path='/searcharticles' element={<SearchArticles/>} />
            </Routes>
            <Routes>
                <Route path='/articles' element={<Articles/>} />
            </Routes>
            <Routes>
                <Route path='/forgotpassword' element={<ForgotPassword/>} />
            </Routes>
            <Routes>
                <Route path='/signin' element={<SignIn/>} />
            </Routes>
            <Routes>
                <Route path='/signup' element={<SignUp/>} />
            </Routes>
        </BrowserRouter>
    
    )
}
export default App
