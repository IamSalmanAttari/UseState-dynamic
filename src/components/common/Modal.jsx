/* eslint-disable no-unused-vars */

import { useState } from "react";

/* eslint-disable react/prop-types */
const Modal = ({ modal,setModal, data }) => {
  const { id, image1, image2, image3, newPrice, oldPrice, description, foodName } = data;
  const [image,setImage] = useState(image1);


  return (
    <>
    {modal && <>
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          {/* Main Card Container */}
          <div className="bg-white rounded-lg shadow-lg p-6 max-w-4xl mx-auto flex flex-col md:flex-row">
            {/* Left Section - Main Image */}
            <div className="md:w-1/2">
              <img
                src={image}
                alt=""
                className="rounded-lg w-full h-full object-cover"
              />
            </div>
            {/* Right Section - Content */}
            <div className="md:w-1/2 mt-4 md:mt-0 md:ml-6">
              {/* Close Button */}
              <button onClick={()=>setModal(false)} className=" float-end border rounded-full py-1 px-2 hover:bg-green-600 bg-green-800 text-white hover:text-white">
                &#x2715;
              </button>
              {/* Title */}
              <h2 className="text-2xl font-semibold mb-2">{foodName}</h2>
              {/* Price Details */}
              <div className="flex items-center space-x-4 mb-2">
                <span className="text-xl font-bold text-green-800">
                  Rs.{newPrice}
                </span>
                <span className="text-lg text-gray-500 line-through">
                  Rs.{oldPrice}
                </span>
              </div>
              {/* Description */}
              <p className="text-gray-700 mb-4">{description}</p>
              {/* Additional Images */}
              <div className="flex space-x-2 mb-4">
                <img onClick={()=> setImage(image1)}
                  className="w-24 h-24 object-cover rounded-lg border border-gray-200"
                  src={image1}
                  alt=""
                />
                <img onClick={()=> setImage(image2)}
                  className="w-24 h-24 object-cover rounded-lg border border-gray-200"
                  src={image2}
                //   src="https://t3.ftcdn.net/jpg/06/08/84/24/360_F_608842413_hdYadp6uSC7c7pq6LJew9s8gPnRSgjln.jpg"
                  alt=""
                />
                <img onClick={()=> setImage(image3)}
                  className="w-24 h-24 object-cover rounded-lg border border-gray-200"
                  src={image3}
                //   src="https://t3.ftcdn.net/jpg/06/08/84/24/360_F_608842413_hdYadp6uSC7c7pq6LJew9s8gPnRSgjln.jpg"
                  alt=""
                />
                {/* {additionalImages.map((img, index) => (
              <img
                key={index}
                src={img}
                alt={`${title} additional ${index}`}
                className="w-24 h-24 object-cover rounded-lg border border-gray-200"
              />
            ))} */}
              </div>

              {/* Add to Cart Button */}
              <button className="bg-green-800 hover:bg-green-600 text-white font-semibold py-2 px-6 rounded-lg transition duration-300">
                Add to Cart
              </button>
            </div>
          </div>
        </div>
        </>}
        </>
      )}
  

// Default props for demonstration purposes
// FoodCardModal.defaultProps = {
//   imageUrl: "https://via.placeholder.com/500x300.png",
//   title: "Mutton Madfoon",
//   oldPrice: "2450",
//   newPrice: "2205",
//   description: "Succulent meat marinated and seasoned in aromatic herbs and spices",
//   additionalImages: [
//     "https://via.placeholder.com/100x100.png",
//     "https://via.placeholder.com/100x100.png",
//     "https://via.placeholder.com/100x100.png",
//   ],
// };

export default Modal;
