import { Navigate } from "react-router-dom";
import { useValue } from "../contextApi/context";
 // create high-level protected route below
 const ProtectedRoute = ({children})=>{
    const {isLoggedIn} = useValue();
    if(!isLoggedIn)
    return <Navigate to="/login" replace={true}/>;
    return children;
  }
  export default ProtectedRoute;