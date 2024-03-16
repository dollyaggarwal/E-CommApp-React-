import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function RouteErrorPage() {
    const navigate = useNavigate();
    useEffect(()=>{
        setTimeout(()=>navigate("/"),3000);
        // setTimeout(()=>navigate(-1),3000); //one hop to previous page
    },[]);
  return (
    <div className="flex w-full h-screen bg-gray-900 text-center align-middle justify-center">
    <div className=" my-72 font-bold text-3xl text-lime-400 ">
      OOPPSSS!!!Something went wrong
        </div>
    </div>
  );
}

export default RouteErrorPage;
