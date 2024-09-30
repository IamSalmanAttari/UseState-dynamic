/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
// import { useState } from "react";
const Card = ({ data , setModal}) => {
  const {
    id,foodName,description,oldPrice,newPrice,image1,image2,image3,image4} = data;
//   const [modal, setModal] = useState(false);
  return (
    <div className="  max-w-xs rounded-lg overflow-hidden shadow-lg bg-teal-950">
      {/* Image section */}
      <img className=" w-72 h-72 object-cover " src={image1} alt="" />
      {/* Content section */}
      <div className="p-4  text-white">
        {/* Food name */}
        <h3 className="text-lg font-semibold mb-2">{foodName}</h3>
        <div className=" flex justify-between items-end ">
          <div>
            {/* New price */}
            <div className="text-xl font-bold text-lime-600 mb-1">
              Rs. {newPrice}
            </div>
            {/* Old price */}
            <div className="text-lg text-red-500 line-through mb-3">
              Rs. {oldPrice}
            </div>
          </div>
          <div>
            {/* Add to cart button */}
            <button onClick={() => setModal(true)}
              className=" bg-lime-600 hover:bg-lime-800 text-white py-1 px-4 rounded-full flex items-center justify-center transition duration-300"> 
              <span className=" rounded">+</span>
            </button>
          </div>
        </div>
      </div>
    </div>

    // <div className="max-w-xs rounded-lg overflow-hidden shadow-lg relative bg-gray-800">
    //   {/* Background image */}
    //   <div
    //     className="w-full h-72 bg-cover bg-center"
    //     style={{ backgroundImage: `url(${image1})` }}
    //   ></div>

    //   {/* Overlay with text */}
    //   <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
    //     {/* Food name */}
    //     <h3 className="text-lg font-semibold mb-2">{foodName}</h3>

    //     {/* Prices */}
    //     <div className="text-xl font-bold text-green-400 mb-1">
    //       Rs. {newPrice}
    //     </div>
    //     <div className="text-lg text-red-500 line-through mb-3">
    //       Rs. {oldPrice}
    //     </div>

    //     {/* Add to cart button */}
    //     <button className="bg-green-600 hover:bg-green-500 text-white py-1 px-4 rounded-full flex items-center justify-center transition duration-300">
    //       <span className="mr-2">+</span>
    //     </button>
    //   </div>
    // </div>
  );
};

export default Card;
//-----------------

// const Card = ({ data }) => {
//   const {
//     id,
//     foodName,
//     description,
//     oldPrice,
//     newPrice,
//     image1,
//     image2,
//     image3,
//     image4,
//   } = data;

//   return (
//     <div className="max-w-xs rounded-lg overflow-hidden shadow-lg relative bg-gray-800">
//       {/* Background image */}
//       <div
//         className="w-full h-72 bg-cover bg-center"
//         style={{ backgroundImage: `url(${image1})` }}
//       ></div>

//       {/* Overlay with text */}
//       <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/70 to-transparent text-white">
//         {/* Food name */}
//         <h3 className="text-lg font-semibold mb-2">{foodName}</h3>

//         {/* Prices */}
//         <div className="text-xl font-bold text-green-400 mb-1">
//           Rs. {newPrice}
//         </div>
//         <div className="text-lg text-red-500 line-through mb-3">
//           Rs. {oldPrice}
//         </div>

//         {/* Add to cart button */}
//         <button className="bg-green-600 hover:bg-green-500 text-white py-1 px-4 rounded-full flex items-center justify-center transition duration-300">
//           <span className="mr-2">+</span>
//         </button>
//       </div>
//     </div>
//   );
// };
