import React, { useRef } from 'react'
import NavbarApp from './NavbarApp'
import SidebaarApp from './SidebaarApp'
import axios from 'axios';

export default function Add_Food() {
    const food_name = useRef();
    const Img_url = useRef();
    const Qty = useRef();
    const  Oldprice = useRef();
    const NewPrice = useRef();
    const Description = useRef();
    const addedDate = useRef();
   
    //  const [data, setData] = useRef([]);

    const handelData = (e)=>{
         e.preventDefault();

         let ins ={
            food_name:food_name.current.value,
            Img_url:Img_url.current.value,
            Qty:Qty.current.value,
            Oldprice:Oldprice.current.value,
            NewPrice:NewPrice.current.value,
            Description:Description.current.value,
            addedDate:addedDate .current.value
         }

         axios.post(`http://localhost:4000/Add_food`,ins).then(()=>{
           //passed a message 
         })
         e.target.reset();
    }
  



  return (



    <>
     <div className="flex ">
     <SidebaarApp/>
     <div className="flex-grow p-6">
        <NavbarApp/>
    <div className="max-w-2xl mx-auto p-6 bg-white shadow-md rounded-md mt-10">
    <h1 className="text-2xl font-bold mb-6">Add Food</h1>
    <form onSubmit={handelData}>
      <div className="mb-4">
        <label className="block text-gray-700">Enter Food Menu</label>
        <select className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
          <option>-select Food Menu-</option>
        </select>
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Enter Food Menu</label>
        <input
          ref={food_name}
          type="text"
          placeholder="Name"
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Enter food image URL *</label>
        <input
         ref={Img_url}
          type="text"
          placeholder="Name"
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Select qty</label>
        <input
         ref={Qty}
          type="text"
          placeholder="Name"
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Enter Old Price</label>
        <input
          ref={Oldprice}
          type="text"
          placeholder="Name"
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Enter New Price</label>
        <input
          ref={NewPrice}

          type="text"
          placeholder="Name"
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Descriptions</label>
        <input
         ref={Description}
         type="text"
          placeholder="Name"
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Added date</label>
        <input
        ref={addedDate}
          type="date"
          placeholder="dd-mm-yyyy"
          className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
        />
      </div>

      <div className="flex space-x-4">
        <button
          type="submit"
          className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          AddFood
        </button>
        <button
          type="reset"
          className="px-4 py-2 bg-red-600 text-white rounded-md shadow-sm hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
        >
          Reset
        </button>
      </div>
    </form>
  </div>
  </div>
  </div>
  </>
  )
}
