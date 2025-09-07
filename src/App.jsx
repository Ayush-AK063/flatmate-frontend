import { useEffect } from "react";
import "./App.css";
import Nav from "./components/header/Nav";
import AOS from 'aos';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/home/Home";
import Test from "./Test";
import Footer from "./components/footer/Footer";
import Login from "./components/login/Login";
import SignUp from "./components/signUp/SignUp";
import { useDispatch, useSelector } from "react-redux";
import { LoadUser } from "./store/action/userAction";
import Logout from "./components/Logout/Logout";
import { getAllStateCity } from "./store/action/otherAction";
import SearchPage from "./components/searchPage/SearchPage";
import Dashboard from "./components/Admin/Dashboard";
import UserDashboard from "./components/Dashboard/UserDashboard";
import CreateProperty from "./components/Admin/Create/CreateProperty";
import UpdateProperty from "./components/Admin/UpdateProperty/UpdateProperty";
import Contact from "./components/Contact/Contact";
import EditPage from "./components/Admin/UpdateProperty/EditPage";
import ManageOrder from "./components/Admin/ManageOrders/ManageOrder";
import ManageState from "./components/Admin/ManageStateCity/ManageState";
import Feedback from "./components/Admin/Feedback/Feedback";
import ContactMessages from "./components/Admin/Contact-messages/ContactMessages";
import About from "./components/AboutUs/About";
import Loader from "./components/Loader/Loader";
import Featured from "./components/Featured/Featured";

function App() {
  const dispatch = useDispatch();
  AOS.init();
  const { isAuthenticated } = useSelector((state) => state.user);



  useEffect(  () => {
    dispatch(LoadUser())
    dispatch(getAllStateCity())
  }, [dispatch]);

  return (
    <>
      <Router>
        <Nav isAuthenticated={isAuthenticated} />
        <Routes>
          {/* <Slider /> */}
          <Route element={<Home />} path="/" />
          <Route element={<Test />} path="/test" />
          <Route element={<Contact />} path="/contact" />
          <Route element={<SearchPage />} path="/search" />
          <Route element={<Login isAuthenticated={isAuthenticated} />} path="/login" />
          <Route element={<Logout />} path="/logout" />
          <Route element={<Dashboard />} path="/admin/dashboard" />
          <Route element={<CreateProperty  />} path="/admin/create" />
          <Route element={<UpdateProperty  />} path="/admin/updateProperty" />
          <Route element={<ManageOrder  />} path="/admin/manageOrders" />
          <Route element={<EditPage  />} path="/admin/editProperty" />
          <Route element={<Feedback  />} path="/admin/allFeedback" />     
          <Route element={<ContactMessages  />} path="/admin/contact-messages" />     
          <Route element={<ManageState  />} path="/admin/manageStateCIty" />
          <Route element={<SearchPage isAdmin={true} />} path="/admin/search" />
          <Route element={<UserDashboard />} path="/dashboard" />
          <Route element={<About />} path="/about" />
          <Route element={<Loader />} path="/load" />
          <Route element={<Featured />} path="/featured/:category" />
          <Route element={<SignUp isAuthenticated={isAuthenticated} />} path="/register" />
        </Routes>
        <Footer/>
      </Router>
    </>
  );
}

export default App;
