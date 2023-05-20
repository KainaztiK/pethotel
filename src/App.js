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
import Edit from "./Containers/EditProfileUser/Edit";
import Search from "./Containers/SearchHotel/Search";
import EditPost from "./Containers/Posts/EditPost/EditPost"
import {Layout} from "./Containers/Layout";
// import { useDispatch  } from "react-redux";
// import { useEffect } from "react";
// import { fetchAuthMe } from "../src/redux/actions/auth";


function App() {
  // const dispatch = useDispatch();
  // useEffect(() => {
  //   dispatch(fetchAuthMe());
  // }, [dispatch]);

  
  return (
    <>
      <Routes>
        <Route path={"/"} element={<Layout/>}>
          <Route index element={<MainWindow/>}/>
          <Route path={"autorization"} element={<Autorization/>}/>
          <Route path={"methodregistration"} element={<MethodRegistration/>}/>
          <Route path={"registration"} element={<Registration/>}/>
          <Route path={"registrationcompany"} element={<RegistrationCompany/>}/>
            
          <Route exact path={"hotels"} element={<Hotels/>}/>
          <Route exact path={"hotel/:id"} element={<Hotelid/>}/>
          <Route path={"edit-user"} element={<Edit/>}/>
          <Route path={"search"} element={<Search/>}/>

          <Route path={"profile"} element={<Profile/>}/>
          <Route path={"posts"} element={<Posts/>}/>
          <Route path={"posts/add-post"} element={<AddPost/>}/>
          <Route path={"posts/edit-post/:id"} element={<EditPost/>}/>
        </Route>
      </Routes>
    </>
  );
}

export default App;
