import axios from "axios";
import { useEffect, useState } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import UserRoutes from "./routes/UserRoutes";
import { AuthContext } from "./services/AuthContext";


import { ToastContainer, toast } from 'react-toastify';

// import 'react-toastify/dist/ReactToastify.css';
// minified version is also included
import 'react-toastify/dist/ReactToastify.min.css';
import { errorHandler } from "./helper/apiHelper";
import AdminRoutes from "./routes/AdminRoutes";



function App() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {

    axios.post('/api/token-is-valid')
      .then(res => {
        if (res.data.status) {
          setIsLoggedIn(true);
        }
      })
      .catch(err => { });

  }, [])

  return (
    <>

      <AuthContext.Provider value={isLoggedIn}>
        <BrowserRouter>

          <UserRoutes />
          <AdminRoutes />

          {/* <Routes>
            <Route path="*" element={<Navigate to="/" />} />

          </Routes> */}
        </BrowserRouter>
      </AuthContext.Provider>
      <ToastContainer />
    </>
  );
}

export default App;
