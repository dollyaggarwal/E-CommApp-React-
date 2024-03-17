import React from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import logo from '../assets/img/logo1.png';
import { FaHome } from 'react-icons/fa';
import { FaShoppingBag } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { RiLoginBoxFill } from 'react-icons/ri';
import { RiLogoutBoxFill } from 'react-icons/ri';
import { signOut } from 'firebase/auth';
import { useValue } from '../contextApi/context';

function Navbar() {
	const { handleLogout, isLoggedIn } = useValue();
	return (
		<>
			<nav>
				<div className='w-full h-22 shadow-inner-lg border border-b-2 flex items-center justify-between z-1 relative'>
					<div className='w-20 h-full mx-6'>
						<img src={logo} alt='logo' />
					</div>

					<div className='relative w-1/4 mx-auto text-gray-800 lg:block hidden'>
						<input
							className='border-2 border-gray-400 bg-white w-full h-11 pl-2 pr-8 rounded-lg text-sm focus:outline-none'
							type='search'
							name='search'
							placeholder='Search for Brands,Products and more'
						/>
						<button type='submit' className='absolute right-0 top-0 mt-3 mr-2'>
							<svg
								className='text-gray-900 h-5 w-5 fill-current'
								xmlns='http://www.w3.org/2000/svg'
								version='1.1'
								id='Capa_1'
								x='0px'
								y='0px'
								viewBox='0 0 56.966 56.966'
								style={{ enableBackground: 'new 0 0 56.966 56.966' }}
								xmlSpace='preserve'
								width='512px'
								height='512px'>
								<path d='M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z' />
							</svg>
						</button>
					</div>

					<div className='flex justify-end space-x-14 items-center py-5 px-14 mx-12 '>
						<div className='flex justify-between gap-2 items-center cursor-pointer hover:text-blue-800 font-semibold text-3xl'>
							<span>
								<FaHome />
							</span>
							<Link to='/'>
								<span>Home</span>
							</Link>
						</div>
						<div className='flex justify-between gap-2 items-center cursor-pointer hover:text-blue-800 font-semibold text-3xl'>
							<span>
								<FaShoppingBag />
							</span>
							<Link to='/orders'>
								<span>Orders</span>
							</Link>
						</div>
						<div className='flex justify-between gap-2 items-center cursor-pointer hover:text-blue-800 font-semibold text-3xl'>
							<span>
								{' '}
								<FaShoppingCart />
							</span>
							<Link to='/cart'>
								{' '}
								<span>Cart</span>
							</Link>
						</div>
						<div className='flex justify-between gap-2 items-center cursor-pointer hover:text-blue-800 font-semibold text-3xl'>
							{isLoggedIn ? (
								<>
									<span>
										<RiLogoutBoxFill />
									</span>
									<Link to='/' onClick={handleLogout}>
										<span>Logout</span>
									</Link>
								</>
							) : (
								<>
									<span>
										<RiLoginBoxFill />
									</span>

									<Link to='/login'>
										<span>Login</span>
									</Link>
								</>
							)}
						</div>
					</div>
				</div>
			</nav>
			<Outlet />
		</>
	);
}
export default Navbar;
