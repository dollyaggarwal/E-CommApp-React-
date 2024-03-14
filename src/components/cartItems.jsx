import React from "react";

function CartItems(){
    return(
        <>
   <div className="bg-gray-100 h-screen py-8">
  <div className="container mx-auto px-4">
    <h1 className="text-3xl font-semibold mb-4">Shopping Cart</h1>
    <div className="flex flex-col md:flex-row gap-4">
      <div className="md:w-3/4">
        <div className="bg-white rounded-lg shadow-md p-6 mb-4">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left text-lg font-bold">Product</th>
                <th className="text-left text-lg  font-bold">Price</th>
                <th className="text-left text-lg  font-bold">Quantity</th>
                <th className="text-left text-lg  font-bold">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-4">
                  <div className="flex items-center">
                    <img className="h-20 w-28 mr-6" src="https://via.placeholder.com/150" alt="Product image" />
                    <span className="font-semibold text-lg">Product name</span>
                  </div>
                </td>
                <td className="py-4 text-lg ">$19.99</td>
                <td className="py-4 text-lg">
                  <div className="flex items-center">
                    <button className="border rounded-md py-2 px-4 mr-2">-</button>
                    <span className="text-center w-8">1</span>
                    <button className="border rounded-md py-2 px-4 ml-2">+</button>
                  </div>
                </td>
                <td className="py-4 text-lg">$19.99</td>
              </tr>
              {/* More product rows */}
            </tbody>
          </table>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 mb-4">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left text-lg font-bold">Product</th>
                <th className="text-left text-lg  font-bold">Price</th>
                <th className="text-left text-lg  font-bold">Quantity</th>
                <th className="text-left text-lg  font-bold">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-4">
                  <div className="flex items-center">
                    <img className="h-20 w-28 mr-6" src="https://via.placeholder.com/150" alt="Product image" />
                    <span className="font-semibold text-lg">Product name</span>
                  </div>
                </td>
                <td className="py-4 text-lg ">$19.99</td>
                <td className="py-4 text-lg">
                  <div className="flex items-center">
                    <button className="border rounded-md py-2 px-4 mr-2">-</button>
                    <span className="text-center w-8">1</span>
                    <button className="border rounded-md py-2 px-4 ml-2">+</button>
                  </div>
                </td>
                <td className="py-4 text-lg">$19.99</td>
              </tr>
              {/* More product rows */}
            </tbody>
          </table>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6 mb-4">
          <table className="w-full">
            <thead>
              <tr>
                <th className="text-left text-lg font-bold">Product</th>
                <th className="text-left text-lg  font-bold">Price</th>
                <th className="text-left text-lg  font-bold">Quantity</th>
                <th className="text-left text-lg  font-bold">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="py-4">
                  <div className="flex items-center">
                    <img className="h-20 w-28 mr-6" src="https://via.placeholder.com/150" alt="Product image" />
                    <span className="font-semibold text-lg">Product name</span>
                  </div>
                </td>
                <td className="py-4 text-lg ">$19.99</td>
                <td className="py-4 text-lg">
                  <div className="flex items-center">
                    <button className="border rounded-md py-2 px-4 mr-2">-</button>
                    <span className="text-center w-8">1</span>
                    <button className="border rounded-md py-2 px-4 ml-2">+</button>
                  </div>
                </td>
                <td className="py-4 text-lg">$19.99</td>
              </tr>
              {/* More product rows */}
            </tbody>
          </table>
        </div>
      </div>
      <div className="md:w-1/4">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h2 className="text-lg font-bold mb-4">Summary</h2>
          <div className="flex justify-between mb-2 text-lg">
            <span>Subtotal</span>
            <span>$19.99</span>
          </div>
          <div className="flex justify-between mb-2 text-lg ">
            <span>Taxes</span>
            <span>$1.99</span>
          </div>
          <div className="flex justify-between mb-2 text-lg ">
            <span>Shipping</span>
            <span>$0.00</span>
          </div>
          <hr className="my-2" />
          <div className="flex justify-between mb-2 text-lg ">
            <span className="font-bold">Total</span>
            <span className="font-bold">$21.98</span>
          </div>
          <button className="bg-blue-500 text-white font-bold text-lg py-2 px-4 rounded-lg mt-4 w-full">Checkout</button>
        </div>
      </div>
    </div>
    
  </div>
</div>

        </>
    )
}

export default CartItems;