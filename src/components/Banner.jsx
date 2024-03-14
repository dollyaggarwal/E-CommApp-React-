import React from 'react';
import banner from '../assets/img/b1.jpeg';
function Banner() {
	return (
		<>
		<div className="relative top-1 font-[sans-serif] before:absolute before:w-full before:h-full before:inset-0 before:bg-black before:opacity-60 before:z-10">
    <img src={banner} alt="Banner Image" className="absolute inset-0 w-full h-full object-fill" />
  <div className="min-h-[580px] relative z-50 h-full max-w-5xl mx-auto flex flex-col justify-center items-center text-center text-white p-6">
    <h2 className="sm:text-4xl text-2xl font-bold mb-6">
      Discover Our New <br /> Collection
    </h2>
    <p className="text-lg text-center text-gray-200">
      Elevate your style with our latest arrivals.
      <br />
      Shop now and enjoy exclusive discounts!!
    </p>
  </div>
</div>

		</>
	);
}
export default Banner;
