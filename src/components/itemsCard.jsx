import React, { useEffect } from 'react';
import { itemValue } from '../contextApi/itemContext';
import { FcCancel } from 'react-icons/fc';

function ItemsContainer() {
	const { handleAdd, searchProducts } = itemValue();

	const truncateDescription = (description) => {
		const words = description.split(' ');
		if (words.length > 13) {
			return words.slice(0, 10).join(' ') + '...';
		}
		return description;
	};

	return (
		<>
			<div className='flex flex-row flex-wrap items-center justify-evenly space-x-6 space-y-10 mb-14'>
				{searchProducts.length === 0 ? (
					<div className='w-full h-full flex items-center pt-36 justify-center'>
						<FcCancel className='size-14' />
						<span className='text-red-700 font-bold text-5xl '>
							No product found for this search
						</span>
					</div>
				) : (
					searchProducts.map((item) => (
						<div
							key={item.id}
							className='relative flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-96'>
							<div className='relative mx-4 mt-4 overflow-hidden text-gray-700 bg-white bg-clip-border rounded-xl h-96'>
								<img
									src={item.img}
									alt='card-image'
									className='object-contain max-w-full max-h-full'
								/>
							</div>
							<div className='p-6'>
								<div className='flex items-center justify-between mb-2'>
									<p className='block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900'>
										{item.title}
									</p>
									<p className='block font-sans text-base antialiased font-medium leading-relaxed text-blue-gray-900'>
										&#8377;{item.price}
									</p>
								</div>
								<p className='block font-sans text-sm antialiased font-normal leading-normal text-gray-700 opacity-75'>
									{truncateDescription(item.description)}
								</p>
							</div>
							<div className='p-6 pt-0'>
								<button
									onClick={() => handleAdd(item)}
									className='align-middle select-none font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 rounded-lg shadow-gray-900/10 hover:shadow-gray-900/20 focus:opacity-[0.85] active:opacity-[0.85] active:shadow-none block w-full bg-gray-900/10 text-blue-gray-900 shadow-none hover:scale-105 hover:shadow-none focus:scale-105 focus:shadow-none active:scale-100'
									type='button'>
									Add to Cart
								</button>
							</div>
						</div>
					))
				)}
			</div>
		</>
	);
}
export default ItemsContainer;
