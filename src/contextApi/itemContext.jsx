import { createContext,useContext,useEffect,useState } from "react";
import { auth, db } from "../firebase/firebaseConfig";

import { onAuthStateChanged } from "firebase/auth";

const itemContext = createContext();

function ItemContextProvider({children}){
    const [total, setTotal] = useState(0);
    const [item, setItem] = useState(0);
    const [showCart, setShowCart] = useState(false);
    const [cart,setCart] = useState([]);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, async (user) => {
            if (user) {
                setIsLoggedIn(true);
                const userId = user.uid;
                const cartItems = await fetchCartItems(userId);
                setCart(cartItems);
            } else {
                setIsLoggedIn(false);
                setCart([]);
            }
        });
        return () => unsubscribe(); // Clean up the observer on component unmount
    }, []);

    const fetchCartItems = async (userId) => {
        const cartItemsRef = collection(firestore, 'carts');
        const q = query(cartItemsRef, where("userId", "==", userId));
        const querySnapshot = await getDocs(q);
        const cartItems = querySnapshot.docs.map(doc => doc.data());
        return cartItems;
    }
  
    const handleAdd = async (product,isLoggedIn)=>{
        if(isLoggedIn){
        const userId = auth.currentUser.uid;
        const index = cart.findIndex((item)=> item.id === product.id);
        if(index === -1){
          
            const docRef = await addDoc(collection(db,"cart"),{
                userId,product
            }) 
            setCart([...cart,{...product, qty:1}])
            setTotal(total + product.price);
          }
          else{
            cart[index].qty++;
            setCart(cart);
            setTotal(total+cart[index].price);
          }
          setItem(item+1);
        }
    }
    return (
        <itemContext.Provider value={{handleAdd,total,cart}}>
            {children}
        </itemContext.Provider>
    );
}
function itemValue(){
    const value = useContext(itemContext);
    return value;
}

export {itemValue};
export default ItemContextProvider;