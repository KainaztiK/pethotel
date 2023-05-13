import {Routes, Route} from "react-router-dom";
import MainWindow from "./Containers/MainWin/MainWindow";
import Autorization from "./Containers/Authorization/Authorization";
import MethodRegistration from "./Containers/MethodRegistration/MethodRegistration"
import Registration from "./Containers/Registration/Registration";
import Hotels from "./Containers/Hotels/Hotels";
import Hotelid from "./Containers/Hotelid/Hotelid";
import RegistrationCompany from "./Containers/RegistrationCompany/Registration";
import Profile from "./Containers/Profile/Profile";
import Posts from "./Containers/Posts/Posts";
import AddPost from "./Containers/Posts/AddPost/AddPost";
import CheckPost from "./Containers/CheckPost/Checkpost";
import Edit from "./Containers/EditProfileUser/Edit";
import Search from "./Containers/Search Hotel/Search";
import {Layout} from "./Containers/Layout";
import { useDispatch, useSelector  } from "react-redux";
import { useEffect } from "react";
import { fetchAuthMe } from "../src/redux/actions/auth";
import { isAuth } from "../src/redux/slices/authSlice";

function App() {
  const dispatch = useDispatch();
  const isUserAuth = useSelector(isAuth);
  useEffect(() => {
    dispatch(fetchAuthMe());
  }, [dispatch]);


  return (
    <>
      <Routes>
        <Route path={"/"} element={<Layout/>}>
          <Route index element={<MainWindow/>}/>
          <Route path={"autorization"} element={<Autorization/>}/>
          <Route path={"methodregistration"} element={<MethodRegistration/>}/>
          <Route path={"registration"} element={<Registration/>}/>
          <Route exact path={"hotels"} element={<Hotels/>}/>
          <Route exact path={"hotel/:id"} element={<Hotelid/>}/>
          <Route path={"registrationcompany"} element={<RegistrationCompany/>}/>
          <Route path={"profile"} element={<Profile/>}/>
          <Route path={"posts"} element={<Posts/>}/>
          <Route path={"posts/add-post"} element={<AddPost/>}/>
          <Route path={"posts/post"} element={<CheckPost/>}/>
          <Route path={"edit-user"} element={<Edit/>}/>
          <Route path={"search"} element={<Search/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;