import Home from "./component/Home"
import MySwiper from "./component/MySwiper"
import Signup from "./component/Signup"
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements
} from "react-router-dom"


function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/">
        <Route index element={<Home />} />
        <Route path="swiper" element={<MySwiper />} />
        <Route path="signup" element={<Signup issignup={true} />} />
        <Route path="signin" element={<Signup issignup={false} />} />
      </Route>
    )
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App
