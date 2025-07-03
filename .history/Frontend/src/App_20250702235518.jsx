import './App.css';
import Left from './home/Left/Left.jsx';
import Right from './home/Right/Right.jsx';
import Logout from './home/left1/Logout.jsx';
import Signup from './component/signup.jsx';
import Login from './component/login.jsx';
import { useAuth } from './context/AuthProvider.jsx';
import { Routes, Route, Navigate } from "react-router-dom";
import { Toaster } from "react-hot-toast";

function App() {
  const { authUser } = useAuth();
  console.log(authUser);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            authUser ? (
              <div className="h-screen w-full bg-slate-950 text-white flex">
                {/* Drawer Layout */}
                <div className="drawer lg:drawer-open w-full">
                  <input id="my-drawer" type="checkbox" className="drawer-toggle" />
                  
                  {/* Main Chat Area */}
                  <div className="drawer-content flex flex-col">
                    <div className="lg:hidden p-4">
                      <label htmlFor="my-drawer" className="btn btn-primary drawer-button">
                        Open Menu
                      </label>
                    </div>
                    <Right />
                  </div>

                  {/* Sidebar Drawer */}
                  <div className="drawer-side">
                    <label htmlFor="my-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80 min-h-full bg-slate-900 text-white space-y-4">
                      <li><Logout /></li>
                      <li><Left /></li>
                    </ul>
                  </div>
                </div>
              </div>
            ) : (
              <Navigate to="/login" />
            )
          }
        />
        <Route path="/login" element={!authUser ? <Login /> : <Navigate to="/" />} />
        <Route path="/signup" element={!authUser ? <Signup /> : <Navigate to="/" />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;


