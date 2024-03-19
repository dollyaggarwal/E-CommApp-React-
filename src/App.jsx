import React from 'react';
import {
	RouterProvider,
	BrowserRouter,
	Outlet,
	Route,
	createBrowserRouter,
} from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar';
import Banner from './components/Banner';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import CartItems from './components/cartItems';
import Orders from './components/Orders';
import CustomContextProvider from './contextApi/context';
import RouteErrorPage from './errorHandles/RouteErrorPage';
import ProtectedRoute from './components/ProtectedRoutes';
import ItemContextProvider from './contextApi/itemContext';
import ItemsContainer from './components/itemsCard';

function App() {
	const router = createBrowserRouter([
		{
			path: '/',
			element: <Navbar />,
			errorElement: <RouteErrorPage />,
			children: [
				{
					index: true,
					element: <Banner />,
				},
				{
					path: 'orders',
					element: (
						<ProtectedRoute>
							<Orders />
						</ProtectedRoute>
					),
				},
				{
					path: 'cart',
					element: (
						<ProtectedRoute>
							<CartItems />
						</ProtectedRoute>
					),
				},
				{ path: 'login', element: <SignIn /> },
				{ path: 'signup', element: <SignUp /> },
			],
		},
	]);

	return (
		<CustomContextProvider>
			<ItemContextProvider>
				<RouterProvider router={router} />
			</ItemContextProvider>
		</CustomContextProvider>
	);
}

export default App;

// import React from 'react';
// import {
//   createBrowserRouter,
//   Outlet,
//   Route,
//   Routes,
//   RouterProvider,
//   Router,
//   BrowserRouter,
// } from 'react-router-dom';
// import './App.css';
// import Navbar from './components/Navbar';
// import Banner from './components/Banner';
// import SignUp from './components/SignUp';
// import SignIn from './components/SignIn';
// import CartItems from './components/cartItems';
// import Orders from './components/Orders';
// import RouteErrorPage from './errorHandles/RouteErrorPage';
// import CustomContextProvider, { useValue } from './contextApi/context';
// import ItemContextProvider from './contextApi/itemContext';

// function App() {
//   // const ProtectedRoute = ({children})=>{
//   //   if(!isLoggedIn)
//   //   return <Navigate to="/login" replace={true}/>;
//   //   return children;
//   // }
//   return (

//     <CustomContextProvider>

//     <BrowserRouter>
//       <Routes>
//         <Route
//           path="/"
//           element={(
//             <Navbar>
//         <Route index element={ <Banner />} />

//         <Route path="/orders" element={<Orders />} />
//         <Route path="/cart" element={<CartItems />} />
//         <Route path="/login" element={<SignIn />} />
//         <Route path="/signup" element={<SignUp />} />
//         </Navbar>
//           )}
//         />
//       </Routes>
//     </BrowserRouter>

//   </CustomContextProvider>

//   );
// }

// export default App;
