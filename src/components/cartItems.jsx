import React from 'react';
import { MdDelete } from 'react-icons/md';
import { itemValue } from '../contextApi/itemContext';
import { Button } from '@material-tailwind/react';
import { Link } from 'react-router-dom';

function CartItems() {
	const {
		cart,
		removeFromCart,
		increaseQuantity,
		decreaseQuantity,
		checkoutToOrders,
	} = itemValue();
	const cartTotal = cart
		.reduce((curr, item) => curr + item.price * item.qty, 0)
		.toLocaleString('en-IN');

	const finalTotal =
		cartTotal !== 0 && cartTotal < 500 ? parseInt(cartTotal) + 75 : cartTotal;

	return (
		<>
			<div className='bg-gray-100 h-screen py-8'>
				<div className='container mx-auto px-4'>
					<h1 className='text-3xl font-semibold mb-4'>Shopping Cart</h1>
					<div className='flex flex-col md:flex-row gap-6'>
						<div className={`${cart.length === 0 ? "md:w-full": "md:w-3/4"}`}>
							{cart.length > 0 ? (
								<div className='bg-white rounded-lg shadow-md p-6 mb-4'>
									<table className='w-full '>
										<thead>
											<tr>
												<th className='text-left text-lg font-bold'>Product</th>
												<th className='text-left text-lg  font-bold'>Price</th>
												<th className='text-left text-lg font-bold'>
													Quantity
												</th>
												<th className='text-left text-lg  font-bold'>Total</th>
												<th className='text-left text-lg  font-bold'>Action</th>
											</tr>
										</thead>

										<tbody>
											{cart.map((item) => {
												return (
													<tr key={item.id}>
														<td className='py-4'>
															<div className='flex items-center object-cover  h-22 w-24'>
																<img
																	className=' w-full h-full mr-10 '
																	src={item.img}
																	alt='Product image'
																/>
																<span className='font-semibold text-lg'>
																	{item.title}
																</span>
															</div>
														</td>
														<td className='py-4 text-lg '>
															&#8377;{item.price}
														</td>
														<td className='py-4 text-lg'>
															<div className='flex items-center'>
																<button
																	className='border rounded-md py-2 px-4 mr-2 '
																	onClick={() => decreaseQuantity(item.id)}>
																	-
																</button>
																<span className='text-center w-8'>
																	{item.qty}
																</span>
																<button
																	className='border rounded-md py-2 px-4 ml-2'
																	onClick={() => increaseQuantity(item.id)}>
																	+
																</button>
															</div>
														</td>
														<td className='py-4 text-lg'>
															&#8377;{item.qty * item.price}
														</td>
														<td className='py-4 text-lg'>
															<MdDelete
																onClick={() => removeFromCart(item.id)}
																className='size-8 cursor-pointer hover:text-red-700'
															/>
														</td>
													</tr>
												);
											})}
											{/* More product rows */}
										</tbody>
									</table>
								</div>
							) : (
								<div className=' h-full'>
									<div className='w-full h-[50vh] flex items-center justify-around'>
										<p className='text-7xl text-red-800 text-bold text-center'>
											Your Cart is empty!!
										</p>
									</div>
									<div className='w-full flex justify-around group'>
										<Link to='/'>
											<Button className='px-10 py-5 text-2xl bg-black hover:bg-red-800'>
												Shop Now
											</Button>
										</Link>
									</div>
								</div>
							)}
						</div>

						{cart.length > 0 && (
							<div className='md:w-1/4'>
								<div className='bg-white rounded-lg shadow-md p-6'>
									<h2 className='text-lg font-bold mb-4'>Summary</h2>
									<div className='flex justify-between mb-2 text-lg'>
										<span>Subtotal</span>
										<span>&#8377;{cartTotal}</span>
									</div>

									<div className='flex justify-between mb-2 text-lg '>
										<span>Shipping</span>
										<span>
											&#8377;{cartTotal < 500 && cartTotal != 0 ? 75 : 0.0}
										</span>
									</div>
									<hr className='my-2' />
									<div className='flex justify-between mb-2 text-lg '>
										<span className='font-bold'>Total</span>
										<span className='font-bold'>
											&#8377;{finalTotal.toLocaleString('en-IN')}
										</span>
									</div>
									<Link to='/orders'>
										<button
											className='bg-blue-500 text-white font-bold text-lg py-2 px-4 rounded-lg mt-4 w-full'
											onClick={checkoutToOrders}>
											Checkout
										</button>
									</Link>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</>
	);
}

export default CartItems;
