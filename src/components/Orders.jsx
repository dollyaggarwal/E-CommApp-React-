import React from 'react';
import { itemValue } from '../contextApi/itemContext';
import { Link } from 'react-router-dom';
import { Button } from '@material-tailwind/react';
function Orders() {
	const { orders } = itemValue();

	return (
		<>
			<section className='py-1 bg-gray-100 h-screen'>
				<div className='w-full xl:w-8/12 mb-24 xl:mb-2 px-4 mx-auto mt-24'>
					<div className='rounded-t mb-0 px-4 py-3 border-0'>
						<div className='flex flex-wrap items-center justify-center'>
							<h3 className='font-bold text-3xl text-blueGray-700'>
								Your Orders
							</h3>
						</div>
					</div>
			{
				orders.length === 0 ?(
					<div className=' h-full'>
									<div className='w-full h-[50vh] flex items-center justify-around'>
										<p className='text-7xl text-red-800 text-bold text-center'>
										No Orders Placed Yet!!
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
				):(
					orders.map((order, index) => {
						const orderTotal = order.order
							.reduce((curr, item) => curr + item.price * item.qty, 0)
							.toLocaleString('en-IN');

						return (
							<>
								<div
									key={index}
									className='relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded '>
									<div className='block w-full overflow-x-auto'>
										<table className='items-center bg-transparent w-full border-collapse '>
											<thead>
												<tr>
													<th className='px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-lg uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'>
														Products Name
													</th>
													<th className='px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-lg uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'>
														Price
													</th>
													<th className='px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-lg uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'>
														Quantity
													</th>
													<th className='px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-lg uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left'>
														Sub Total
													</th>
												</tr>
											</thead>
											<tbody>
												{order.order.map((item, itemIndex) => (
													<tr key={itemIndex}>
														<th className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4 text-left text-blueGray-700'>
															{item.title}
														</th>
														<td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4'>
															&#8377;{item.price}
														</td>
														<td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4'>
															{item.qty}
														</td>
														<td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4'>
															&#8377;{item.price * item.qty}
														</td>
													</tr>
												))}

												<tr className='border-t-2'>
													<th className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4 text-left text-blueGray-700'>
														Ordered On:
													</th>
													<td
														className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4 font-bold '
														colSpan={2}>
														{order.date}
													</td>

													<td className='border-t-0 px-6 align-middle border-l-0 border-r-0 text-lg whitespace-nowrap p-4 font-bold'>
														&#8377;{orderTotal}
													</td>
												</tr>
											</tbody>
										</table>
									</div>
								</div>
							</>
						);
					})
				)
			}
					
				</div>
			</section>
		</>
	);
}
export default Orders;
