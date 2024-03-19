import React, { useEffect, useState } from 'react';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import logo from '../assets/img/logo1.png';
import { FaHome } from 'react-icons/fa';
import { FaShoppingBag } from 'react-icons/fa';
import { FaShoppingCart } from 'react-icons/fa';
import { RiLoginBoxFill } from 'react-icons/ri';
import { RiLogoutBoxFill } from 'react-icons/ri';
import { useValue } from '../contextApi/context';
import { itemValue } from '../contextApi/itemContext';

function Navbar() {
	const { handleLogout, isLoggedIn } = useValue();
	const { searchItems } = itemValue();
	return (
		<>
			<nav>
				<div className='w-full h-22 shadow-inner-lg border border-b-2 flex items-center justify-between z-1 relative'>
					<div className='w-20 h-full mx-6'>
						<img src={logo} alt='logo' />
					</div>

					<div className='relative w-1/4 mx-auto text-gray-900 font-semibold lg:block hidden'>
						<input
							onChange={(e) => searchItems(e.target.value)}
							className='border-2 border-gray-400 bg-white w-full h-14 pl-2 pr-8 rounded-lg text-lg focus:outline-none'
							type='search'
							name='search'
							placeholder='Search for Brands,Products and more...'
						/>
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
