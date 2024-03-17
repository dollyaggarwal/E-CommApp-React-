import {
	createUserWithEmailAndPassword,
	onAuthStateChanged,
	signInWithEmailAndPassword,
	signOut,
} from 'firebase/auth';
import { createContext, useContext, useEffect, useState } from 'react';
import { auth,db } from '../firebase/firebaseConfig';
import { addDoc, collection, deleteDoc, doc, getDocs, query, setDoc, updateDoc, where } from "firebase/firestore";

const userContext = createContext();

function useValue() {
	const value = useContext(userContext);
	return value;
}

function CustomContextProvider({ children }) {
	const [name, setName] = useState('');
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [isLoggedIn, setIsLoggedIn] = useState(false);

	const [total, setTotal] = useState(0);
	const [item, setItem] = useState(0);
	const [showCart, setShowCart] = useState(false);
	const [cart, setCart] = useState([]);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, async (user) => {
			if (user) {
				setIsLoggedIn(true);
				const userId = user.uid;
				try {
					const cartItems = await fetchCartItems(userId);
					setCart(cartItems);
				} catch (error) {
					console.error('Error fetching cart items:', error);
					// Handle error if needed
				}
			} else {
				setIsLoggedIn(false);
				setCart([]);
			}
		});
		return () => unsubscribe(); // Clean up the observer on component unmount
	}, []);
	
	const fetchCartItems = async (userId) => {
		const cartItemsRef = collection(db, 'cart');
		const q = query(cartItemsRef, where('userId', '==', userId));
		const querySnapshot = await getDocs(q);
		const cartItems = querySnapshot.docs.map((doc) => ({
			docId: doc.id, // Include the document ID
			...doc.data()
		}));
		
		return cartItems;
	};
	
	
	const handleAdd = async (product) => {
		if (isLoggedIn) {
			const userId = auth.currentUser.uid;
	
			const index = cart.findIndex((item) => item.id === product.id);
			
			if (index === -1) {
				
				try {
					const docRef = await addDoc(collection(db, 'cart'), {
						userId,
						...product,
						qty: 1, 
						
					});
					
					const updatedCart = [...cart, { ...product, qty: 1}];
					setCart(updatedCart);
					setTotal(total + product.price);
					setItem(item + 1);
				} catch (error) {
					console.error('Error adding document: ', error);
				}
			} else {
				
				try {
					
					const itemQuerySnapshot = await getDocs(collection(db, 'cart'));
					let docItemId, item;
					itemQuerySnapshot.forEach((doc) => {
						item = doc.data();
						console.log(item)
						console.log(cart[index].id,item.id);
						if(cart[index].id === item.id)
					   {
						docItemId = doc.id;
					   }
					});
					const updatedQty =  item.qty + 1;
					
					await updateDoc(doc(db, 'cart', docItemId), {
						qty: updatedQty
					});                    
					const updatedCart = cart.map((item, idx) => {
						if (idx === index) {
							return { ...item, qty: updatedQty };
						}
						return item;
					});
					setCart(updatedCart);
					setTotal(total + item.product.price);
					setItem(item + 1);
				} catch (error) {
					console.error('Error updating document: ', error);
				}
			}
		} else {
			alert("Please log in to add items to your cart.");
			return;
		}
	};
	
	const removeFromCart = async (itemId) => {
		if (isLoggedIn) {
			try {
				const userId = auth.currentUser.uid;
				const cartItem = cart.find(item => item.id === itemId);
				if (cartItem) {
					await deleteDoc(doc(db, 'cart', cartItem.docId));
					const updatedCart = cart.filter(item => item.id !== itemId);
					setCart(updatedCart);
					setTotal(total - (cartItem.qty * cartItem.price));
					setItem(item - cartItem.qty);
				}
			} catch (error) {
				console.error('Error removing document: ', error);
			}
		} else {
			
			alert("Please log in to remove items from your cart.");
			return;
		}
	};
	

	const handleSubmitForRegister = async (e) => {
		e.preventDefault();
		try {
			const userCredentails = await createUserWithEmailAndPassword(
				auth,
				email,
				password
			);

			const user = userCredentails.user;
			localStorage.setItem('token', user.accessToken);
			localStorage.setItem('user', JSON.stringify(user));
			setIsLoggedIn(true);
		} catch (err) {
			alert(err.message);
		}
	};
	const handleSubmitForLogin = async (e) => {
		e.preventDefault();
		try {
			const userCredentails = await signInWithEmailAndPassword(
				auth,
				email,
				password
			);

			const user = userCredentails.user;
			localStorage.setItem('token', user.accessToken);
			localStorage.setItem('user', JSON.stringify(user));
			setIsLoggedIn(true);
		} catch (err) {
			alert(err.message);
		}
	};
	const handleLogout = async (e) => {
		await signOut(auth);
		localStorage.removeItem('token');
		localStorage.removeItem('user');
		setIsLoggedIn(false);
	};

	return (
		<userContext.Provider
			value={{
				name,
				setName,
				email,
				setEmail,
				password,
				setPassword,
				handleSubmitForRegister,
				handleSubmitForLogin,
				handleLogout,
				isLoggedIn,
				handleAdd,
				removeFromCart,
				total,
				cart
			}}>
			{children}
		</userContext.Provider>
	);
}
export default CustomContextProvider;
export { useValue };
