import { createContext, useContext, useEffect, useState } from 'react';
import { auth, db } from '../firebase/firebaseConfig';
import { Items } from '../data/itemsData';
import {
	addDoc,
	collection,
	deleteDoc,
	doc,
	getDoc,
	getDocs,
	query,
	setDoc,
	updateDoc,
	where,
} from 'firebase/firestore';
import { onAuthStateChanged } from 'firebase/auth';
import { useValue } from './context';
import toast from 'react-hot-toast';

const itemContext = createContext();

function ItemContextProvider({ children }) {
	const { isLoggedIn } = useValue();
	const [total, setTotal] = useState(0);
	const [cart, setCart] = useState([]);
	const [orders, setOrders] = useState([]);
	const [searchProducts,setSearchProducts] = useState([]);

	const searchItems = (value) => {
	
		const searchedItems = Items.filter((item) => {		
			return item.title.toLowerCase().includes(value.toLowerCase());
		});
		
		setSearchProducts(searchedItems);
		console.log(searchProducts)
	}
	

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, async (user) => {
			if (user) {
				const userId = user.uid;
				try {
					const cartItems = await fetchCartItems(userId);
				} catch (error) {
					console.error('Error fetching cart items:', error);
				}
			} else {
				setCart([]);
			}
		});
		return () => unsubscribe();
	}, []);

	useEffect(() => {
		const unsubscribe = onAuthStateChanged(auth, async (user) => {
			if (user) {
				const userId = user.uid;
				try {
					const orders = await fetchOrders(userId);
				} catch (error) {
					console.error('Error fetching orders:', error);
				}
			} else {
				setOrders([]);
			}
		});
		return () => unsubscribe();
	}, []);

	const fetchCartItems = async (userId) => {
		try{
			const cartRef = await getDoc(doc(db, 'cart', userId));
		if (cartRef.exists()) {
			setCart(cartRef.data().products);
			return cartRef.data().products;
		} else {
			return [];
		}
		}catch (error) {
			console.error('Error fetching cart: ', error);
		}
	};

	const handleAdd = async (product) => {
		if (isLoggedIn) {
			const userId = auth.currentUser.uid;

			const item = cart.find((item) => item.id === product.id);

			if (!item) {
				try {
					const updatedCart = [...cart, { ...product, qty: 1 }];
					await setDoc(doc(db, 'cart', userId), {
						userId,
						products: updatedCart,
					});
					fetchCartItems(userId);
					toast.success('Item added to cart successfully');
				} catch (error) {
					console.error('Error adding document: ', error);
				}
			} else {
				try {
					const updatedCart = cart.map((item) =>
						item.id === product.id ? { ...item, qty: item.qty + 1 } : item
					);

					await updateDoc(doc(db, 'cart', userId), {
						products: updatedCart,
					});
					fetchCartItems(userId);
					toast.success('Item added to cart successfully');
				} catch (error) {
					console.error('Error updating document: ', error);
				}
			}
		} else {
			alert('Please log in to add items to your cart.');
		}
	};

	const removeFromCart = async (itemId) => {
		if (isLoggedIn) {
			try {
				const userId = auth.currentUser.uid;
				const cartItem = cart.find((item) => item.id === itemId);
				if (cartItem) {
					const updatedCart = cart.filter((item) => item.id !== itemId);
					await updateDoc(doc(db, 'cart', userId), {
						products: updatedCart,
					});
					fetchCartItems(userId);
				}
			} catch (error) {
				console.error('Error removing document: ', error);
			}
		} else {
			alert('Please log in to remove items from your cart.');
		}
	};

	const increaseQuantity = async (itemId) => {
		try {
			const userId = auth.currentUser.uid;
			const updatedCart = cart.map((item) =>
				item.id === itemId ? { ...item, qty: item.qty + 1 } : item
			);

			await updateDoc(doc(db, 'cart', userId), {
				products: updatedCart,
			});
			fetchCartItems(userId);
		} catch (error) {
			console.error(error.message);
		}
	};
	const decreaseQuantity = async (itemId) => {
		try {
			const userId = auth.currentUser.uid;
			const updatedCart = cart.map((item) => {
				if (item.id === itemId) {
					return item.qty > 1
						? { ...item, qty: item.qty - 1 }
						: removeFromCart(itemId);
				} else {
					return item;
				}
			});
			await updateDoc(doc(db, 'cart', userId), {
				products: updatedCart,
			});
			fetchCartItems(userId);
		} catch (error) {
			console.error(error.message);
		}
	};

	const checkoutToOrders = async () => {
		try{
			if (isLoggedIn) {
				const userId = auth.currentUser.uid;
				const orderRef = await getDoc(doc(db, 'cart', userId));
				const myCreatedDate = new Date().toLocaleDateString(); 
				const orderedItems={date:myCreatedDate, order: [...cart]};
				const updatedOrders = [...orders,orderedItems];
				console.log(updatedOrders)
				console.log(orders)
				if (orderRef.exists()) {
					
					await setDoc(doc(db, 'orders', userId), {
						userId,
						orders: updatedOrders,
					});
					await updateDoc(doc(db, 'cart', userId), {
						products: [],
					});
					fetchCartItems(userId);
					fetchOrders(userId);
					toast.success('Order placed successfully');
					
				} else {
					return [];
				}
			}
		}catch (error) {
			console.error('Error placing orders: ', error);
		}
	};
	const fetchOrders = async (userId) => {
		try{
			const orderRef = await getDoc(doc(db, 'orders', userId));
		if (orderRef.exists()) {
			setOrders(orderRef.data().orders);
			return orderRef.data().orders;
		} else {
			return [];
		}
		}catch (error) {
			console.error('Error fetching orders: ', error);
		}
	};

	return (
		<itemContext.Provider
			value={{
				handleAdd,
				removeFromCart,
				total,
				cart,
				orders,
                checkoutToOrders,
                increaseQuantity,
                decreaseQuantity,
				increaseQuantity,
				decreaseQuantity,
				checkoutToOrders,
				searchItems,
				searchProducts,
			}}>
			{children}
		</itemContext.Provider>
	);
}
function itemValue() {
	const value = useContext(itemContext);
	return value;
}

export { itemValue };
export default ItemContextProvider;
