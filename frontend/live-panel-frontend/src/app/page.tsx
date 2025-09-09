import Image from "next/image"
import Login from "$/login/page"
import Register from "$/register/page"
import Dashboard from "$/dashboard/page"
import ChangePassword from "./changepassword/page"
import Link from "next/link";
import { MantineProvider } from '@mantine/core';
// import { BrowserRouter, Routes, Route } from 'react-router-dom';
// import RequireAuth from 'react-auth-kit'

export default function Home() {
  return (

    <script>
      window.location.replace("/login")
    </script>
   
    // <BrowserRouter>
    //   <Routes>
    //     <Route 
    //       path="/dashboard" 
    //       element={
    //       <RequireAuth fallbackPath={'/login'}>
    //         <Dashboard/>
    //       </RequireAuth>
    //       }>
          
    //     </Route>
    //     <Route path="/login" element={<Login/>}></Route>
    //   </Routes>
    // </BrowserRouter>

    // <>
    //   {/* <Login/> */}
    //   <Register/>
    //   {/* <ChangePassword/> */}
      
    // </>
  );
}
