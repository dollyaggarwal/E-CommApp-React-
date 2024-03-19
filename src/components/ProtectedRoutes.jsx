import { Navigate } from "react-router-dom";
import { useValue } from "../contextApi/context";
import toast from 'react-hot-toast';
 // create high-level protected route below
 const ProtectedRoute = ({children})=>{
    const {isLoggedIn} = useValue();
    if(!isLoggedIn){
		toast.error("You must be logged in before accessing");
		return <Navigate to="/" replace={true}/>;
	}
    return children;
  }
  export default ProtectedRoute;