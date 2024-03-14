import React from 'react';

function SignUp() {
	return (
		<>
			<section>
				<div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
					<a
						href='#'
						className='flex items-center mb-6 text-3xl font-semibold'>
						
						BuyBusy
					</a>
					<div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
						<div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
							<h1 className='text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
								Create an account
							</h1>
							<form className='space-y-4 md:space-y-6' action='#'>
								<div>
									<label
										htmlFor='email'
										className='block mb-2 text-md font-medium text-gray-900 dark:text-white'>
										Your email
									</label>
									<input
										type='email'
										name='email'
										id='email'
										className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
										placeholder='name@company.com'
										required
									/>
								</div>
								<div>
									<label
										htmlFor='password'
										className='block mb-2 text-md font-medium text-gray-900 dark:text-white'>
										Password
									</label>
									<input
										type='password'
										name='password'
										id='password'
										placeholder='••••••••'
										className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
										required
									/>
								</div>
								<div>
									<label
										htmlFor='confirm-password'
										className='block mb-2 text-md font-medium text-gray-900 dark:text-white'>
										Confirm password
									</label>
									<input
										type='confirm-password'
										name='confirm-password'
										id='confirm-password'
										placeholder='••••••••'
										className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
										required
									/>
								</div>
								<div className='flex items-start'>
									<div className='flex items-center h-5'>
										<input
											id='terms'
											aria-describedby='terms'
											type='checkbox'
											className='w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-primary-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-gray-800'
											required
										/>
									</div>
									<div className='ml-3 text-md'>
										<label
											htmlFor='terms'
											className='font-light text-gray-500 dark:text-gray-300 '>
											I accept the{' '}
											<a
												className='font-medium text-blue-600 hover:underline dark:text-blue-500'
												href='#'>
												Terms and Conditions
											</a>
										</label>
									</div>
								</div>
								<button
									type='submit'
									className='w-full text-white bg-blue-600 hover:bg-blue-800 focus:ring-5 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-md px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-800 dark:focus:ring-primary-800'>
									Create an account
								</button>
								<p className='text-md font-light text-gray-200 dark:text-gray-200'>
									Already have an account?{' '}
									<a
										href='#'
										className='text-lg font-medium text-blue-600 hover:underline dark:text-blue-500'>
										Login here
									</a>
								</p>
							</form>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}
export default SignUp;