import React from 'react';
import { shop_feature } from '../data/Data';

const ShopDetail = () => {


  return (
    <div className="container mx-auto px-4 py-8">
      <div className="sm:mx-20 lg:flex 2xl:mx-40">
        {/* Main Content */}
        <div className="grid grid-cols-1 gap-6 mx-5 lg:mr-10">
          {/* Company Info Section */}
          <div className="mb-6 lg:mb-0">
            <div className="lg:flex">
              <div>
                <h2 className="text-xl font-bold my-4 text-primary">Farmbox</h2>
                <p className="my-5 text-primary">
                  Farmbox is dedicated to delivering high-quality organic fruits and vegetables.
                </p>
                <p className="text-primary">
                  We source our produce directly from local farms to ensure freshness and quality.
                </p>
                <div className="border rounded-full border-orange-400 w-44 text-center py-2 px-4 lg:px-2 mt-4">
                  <span className="pr-4 lg:pr-1 text-green">
                    <i className="fa fa-leaf"></i>
                  </span>
                  <button className="font-semibold text-green">Learn More</button>
                </div>
              </div>
            </div>
            {/* About Us Section */}
            <div className="my-6">
              <h3 className="text-lg font-bold text-primary">About Us</h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
                Farmbox brings fresh, organic produce to your doorstep. We focus on sustainability and supporting local farmers.
              </p>
              <div className="relative overflow-x-auto my-4">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                  <tbody>
                    <tr className="bg-white dark:bg-gray-800">
                      <th className="px-6 py-4 font-medium whitespace-nowrap dark:text-white">Founded:</th>
                      <td className="px-6 py-4">2020</td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800">
                      <th className="px-6 py-4 font-medium whitespace-nowrap dark:text-white">Location:</th>
                      <td className="px-6 py-4">Agro Farm, USA</td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800">
                      <th className="px-6 py-4 font-medium whitespace-nowrap dark:text-white">Products:</th>
                      <td className="px-6 py-4">Organic Fruits & Vegetables</td>
                    </tr>
                    <tr className="bg-white dark:bg-gray-800">
                      <th className="px-6 py-4 font-medium whitespace-nowrap dark:text-white">Quality:</th>
                      <td className="px-6 py-4">Certified Organic</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
          {/* Leave a Reply Section */}
          <div className="w-full lg:w-1/2">
            <h2 className="text-2xl font-bold my-6 text-primary">Leave a Reply</h2>
            <form>
              <div className="mt-8 flex flex-col lg:flex-row lg:space-x-4">
                <input className="border-b-2 outline-none border-gray-200 w-full px-2 py-2" type="text" placeholder="Your Name" />
                <input className="border-b-2 outline-none border-gray-200 w-full px-2 py-2 mt-4 lg:mt-0" type="email" placeholder="Your Email" />
              </div>
              <textarea className="w-full mt-4 border-b-2 outline-none border-gray-200 px-2 py-2" placeholder="Your Review" cols="30" rows="5"></textarea>
            </form>
            <div className="my-10">
              <div className="flex justify-between items-center">
                <span className="text-lg text-primary">Please rate:</span>
                <ul className="flex">
                  {[...Array(5)].map((_, i) => (
                    <li key={i} className="fa fa-star text-sm text-primary"></li>
                  ))}
                </ul>
              </div>
              <div className="border rounded-full border-orange-400 w-44 text-center mt-4 py-2 px-4">
                <button className="font-semibold text-primary">Post Comment</button>
              </div>
            </div>
          </div>
        </div>

        {/* Sidebar Section */}
        <div className="mx-6 mt-10 lg:mt-0 lg:w-1/3">
          {/* Search Section */}
          <div className="relative mb-6">
            <input className="w-full py-3 px-3 border border-gray-200 rounded-lg outline-none" type="text" placeholder="Keywords" />
            <span className="py-3 px-4 border absolute top-0 right-0 bg-gray-200 rounded-lg text-primary">
              <i className="fa fa-search"></i>
            </span>
          </div>
          {/* Categories Section */}
          <div>
            <h2 className="text-xl font-semibold mb-4 text-primary">Categories</h2>
            <ul className="flex flex-col space-y-2">
              {['Apples', 'Oranges', 'Strawberry', 'Banana', 'Pumpkin'].map((item, index) => (
                <div className="flex justify-between items-center" key={index}>
                  <li className="apple duration-500 flex items-center">
                    <i className="fas fa-apple-alt"></i>
                    <span className="ml-2">{item}</span>
                  </li>
                  <span>({Math.floor(Math.random() * 10) + 1})</span>
                </div>
              ))}
            </ul>

            {/* Featured Products Section */}
            <h2 className="text-xl font-semibold mt-6 text-primary">Featured products</h2>
            <div>
              {shop_feature.map((val) => (
                <div className="flex items-center my-3" key={val.id}>
                  <img className="w-28 h-24 rounded-md" src={val.img} alt="" />
                  <div className="ml-4">
                    <h4 className="text-md font-semibold text-primary">{val.name}</h4>
                    <ul className="flex">
                      {[...Array(5)].map((_, i) => (
                        <li key={i} className={`fa fa-star ${i < val.star ? 'text-yellow-500' : 'text-gray-400'}`}></li>
                      ))}
                    </ul>
                    <div className="flex items-center mt-2">
                      <span className="text-xl font-bold text-primary">{val.price}</span>
                      {val.delete && (
                        <span className="text-xl font-bold ml-2 line-through text-red-500">{val.delete}</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="text-lg font-medium py-3 w-full mt-4 mb-10 duration-500 border border-orange-400 rounded-full btn-view">View More</button>
          </div>
        </div>
      </div>

 
    </div>
  );
};

export default ShopDetail;
