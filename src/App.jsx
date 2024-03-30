import { Routes, Route, Navigate } from "react-router-dom";
import { Dashboard, Auth } from "@/layouts";
import { useSelector } from "react-redux";
import axios from "axios";
import { useEffect } from "react";
import { keepLoggedIn, loggedOut } from "./features/authslice/authslice";
import { useDispatch } from "react-redux";



function App() {
  const dispatch = useDispatch();
  const { isLoggedIn } = useSelector((state) => state.auth);
  axios.defaults.baseURL = 'https://healthcare.reebaprogrammer.online/api';
  useEffect(()=>{
    const token = localStorage.getItem("token")
    if(token){
      dispatch(keepLoggedIn())
    }else{
      dispatch(loggedOut())
    }
  },[])
  return (
    <Routes>
      {/* Dashboard Route */}
      <Route
        path="/dashboard/*"
        element={isLoggedIn ? <Dashboard /> : <Navigate to="/auth/sign-in" />}
      />
      
      {/* Auth Route */}
      <Route 
        path="/auth/*" 
        element={<Auth />} 
      />
      
      {/* Catch-All Route */}
      <Route path="*" element={<Navigate to="/dashboard/home" replace />} />
    </Routes>
  );
}

export default App;
