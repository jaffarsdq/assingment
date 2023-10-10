import { Route, Routes } from "react-router-dom"
import UserDetails from "../UserDetails"
import App from "../App"

function MainRoutes() {
  return (
    <Routes>
        <Route path="/" element={<App/>}/>
        <Route path="/friend/:id" element={<UserDetails/>}/>
        <Route path="*" element={<App/>}/>
    </Routes>
  )
}

export default MainRoutes