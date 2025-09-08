import Image from "next/image"
import Login from "@/app/login/page"
import Register from "@/app/register/page"
import ChangePassword from "./changepassword/page"
import Link from "next/link";

export default function Home() {
  return (
    <script>
      window.location.replace("/login")
    </script>
   
    // <>
    //   {/* <Login/> */}
    //   <Register/>
    //   {/* <ChangePassword/> */}
      
    // </>
  );
}
