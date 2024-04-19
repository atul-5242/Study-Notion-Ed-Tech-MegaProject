import "./App.css";
import { Route,Routes } from "react-router-dom";
import Home from "../src/pages/Home";
import NavBar from "./components/common/NavBar";
// import ErrorBoundary from './ErrorBoundary';
import OpenRoute from "../src/components/cores/Auth/OpenRoute"
import UpdatePassword from "./pages/UpdatePassword";
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import ForgetPassword from "./pages/ForgetPassword";
import VerifyEmail from "./pages/VerifyEmail";
import About from "./pages/About";
function App() {
  return (
    // <ErrorBoundary>
    <div className="  w-screen  min-h-screen bg-richblack-900 ">
        <NavBar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route
          path="signup"
          element={
            <OpenRoute>
              <Signup />
            </OpenRoute>
          }
        />
    <Route
          path="login"
          element={
            <OpenRoute>
              <Login />
            </OpenRoute>
          }
        />
    <Route
          path="forgot-password"
          element={
            <OpenRoute>
              <ForgetPassword />
            </OpenRoute>
          }
        />
    <Route
          path="reset-password/:id"
          element={
            <OpenRoute>
              <UpdatePassword />
            </OpenRoute>
          }
        />
          <Route
          path="verify-email"
          element={
            <OpenRoute>
              <VerifyEmail />
            </OpenRoute>
          }/>
          <Route
          path="about"
          element={
            <OpenRoute>
              <About />
            </OpenRoute>
          }/>
      </Routes>

    </div>
    // </ErrorBoundary>
  );
}

export default App;
