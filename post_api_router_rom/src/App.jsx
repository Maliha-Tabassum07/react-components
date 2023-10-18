import { Route, Routes } from "react-router-dom";
import "./App.scss";
import HomePage from "./pages/homePage";
import RegistrationPage from "./pages/registrationPage";
import LoginPage from "./pages/loginPage";
import Header from "./components/header";
import PostPage from "./pages/postPage";
import NotFoundPage from "./pages/notFoundPage";
import AddPost from "./pages/addPost";
import UserDetailsPage from "./pages/userDetailsPage";
import UserList from "./components/UserList";
import Footer from "./components/footer";

function App() {
  return (
    <div>
      {/* <RegistrationForm /> */}
      {/* <UserList /> */}
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/user" element={<UserList />} />
        <Route path="/register" element={<RegistrationPage />} />
        <Route path="/post" element={<PostPage />} />
        <Route path="/postAdd" element={<AddPost />} />
        <Route path="/user/:userId" element={<UserDetailsPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
