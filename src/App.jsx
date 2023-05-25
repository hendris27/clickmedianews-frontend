import {  BrowserRouter, Routes, Route} from "react-router-dom"

import Home from "./pages/users/Home"
import ForgotPassword from "./pages/users/auth/forgot-password"


// import { Provider } from "react-redux"
// import { store, persistor } from "./redux/store"
// import PrivateRoute from "./components/PrivateRouter"
// import { PersistGate } from "redux-persist/integration/react"

const App = () => {
    return (
        
         
               
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Home/>} />
                <Route path='/forgot-password' element={<ForgotPassword/>} />
            </Routes>
        </BrowserRouter>
    
    )
}
export default App
