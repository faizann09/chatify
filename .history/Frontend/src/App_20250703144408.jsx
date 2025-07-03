import { useState } from 'react';
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
  const [selectedUser, setSelectedUser] = useState(null);

  return (
    <>
      <Routes>
        <Route
          path="/"
          element={
            authUser ? (
              <div className="h-screen w-full">
                {/* Desktop View */}
                <div className="hidden md:flex h-full">
                  {/* Left Panel: Logout + User List */}
                  <div className="w-[30%] flex flex-col border-r">
                    <Logout />
                    <Left onUserSelect={setSelectedUser} />
                  </div>
                  {/* Right Panel: Chat */}
                  <div className="w-[70%]">
                    <Right selectedUser={selectedUser} onBack={() => setSelectedUser(null)} />
                  </div>
                </div>

                {/* Mobile View */}
                <div className="flex flex-col md:hidden h-full">
                  {!selectedUser ? (
                    <>
                      <Logout />
                      <Left onUserSelect={setSelectedUser} />
                    </>
                  ) : (
                    <Right selectedUser={selectedUser} onBack={() => setSelectedUser(null)} />
                  )}
                </div>
              </div>
            ) : (
              <Navigate to={"/login"} />
            )
          }
        />
        <Route path="/login" element={authUser ? <Navigate to={"/"} /> : <Login />} />
        <Route path="/signup" element={authUser ? <Navigate to={"/"} /> : <Signup />} />
      </Routes>
      <Toaster />
    </>
  );
}

export default App;

