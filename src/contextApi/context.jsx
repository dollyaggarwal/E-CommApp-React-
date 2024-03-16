import { createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext,useContext,useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "../firebase/firebaseConfig";

const userContext = createContext();

function useValue(){
    const value = useContext(userContext);
    return value;
}

function CustomContextProvider({children}){
    const [name,setName] = useState('');
	const [email,setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleSubmitForRegister = async (e) =>{
		e.preventDefault();
		try{
			const userCredentails = await createUserWithEmailAndPassword(auth,email,password);
		
			const user = userCredentails.user;
			localStorage.setItem('token', user.accessToken);
			localStorage.setItem('user',JSON.stringify(user));
			setIsLoggedIn(true);
		}catch(err){
			alert(err.message);
		}
	}
    const handleSubmitForLogin = async (e) =>{
		e.preventDefault();
		try{
			const userCredentails = await signInWithEmailAndPassword(auth,email,password);
			console.log(userCredentails);
			const user = userCredentails.user;
			localStorage.setItem('token', user.accessToken);
			localStorage.setItem('user',JSON.stringify(user));
			setIsLoggedIn(true);
		}catch(err){
			alert(err.message);
		}
	}
	const handleLogout = async(e)=>{
		await signOut(auth);
		localStorage.removeItem('token');
		localStorage.removeItem('user');
		setIsLoggedIn(false);	
	  }

    return(
        <userContext.Provider value={{name,setName,email,setEmail,password,setPassword,handleSubmitForRegister,handleSubmitForLogin,handleLogout,isLoggedIn}}>
            {children}
        </userContext.Provider>
    )
}
export default CustomContextProvider;
export {useValue};