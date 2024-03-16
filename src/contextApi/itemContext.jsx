import { createContext,useContext,useState } from "react";

const itemContext = createContext();

function ItemContextProvider({children}){
    const [total, setTotal] = useState(0);
    const [item, setItem] = useState(0);
    const [showCart, setShowCart] = useState(false);
    const [cart,setCart] = useState([]);

  const handleAdd = (product)=>{
        const index = cart.findIndex((item)=> item.id === product.id);
        if(index === -1){
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
    return (
        <itemContext.Provider value={{handleAdd}}>
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