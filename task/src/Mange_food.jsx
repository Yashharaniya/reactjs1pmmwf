import React, { useState } from 'react'
import SidebaarApp from './SidebaarApp'
import NavbarApp from './NavbarApp'
import axios from 'axios';
import { FaEdit, FaTrash } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

export default function Mange_food() {
    const[data,setdata]= useState([]);
     const navigate = useNavigate();
    axios.get(`http://localhost:4000/Add_food`).then((res)=>{
           setdata(res.data)
    })
   const DeletData = (id)=>{
    axios.delete(`http://localhost:4000/Add_food/${id}`).then(()=>{
          setdata(data.filter(item=>{item.id !== id}))
 })
 alert(id)
   }

const EditData = (id)=>{
 axios.push(`http://localhost:4000/Add_food/${id}`).then(()=>{
       navigate('/addfood');
})
alert(id)
}
  return (
    <div className="flex">
    <SidebaarApp />
    <div className="flex-grow p-6">
     <NavbarApp/>
     <div className='ml-64 pt-10 p-2'>
      <h1 className='font-bold text-4xl p-3 '>Manage Food</h1>
      <hr className='w-60 border-spacing-2 h-2 ml-6 border-black' />

      <table cellPadding={20} >
        <thead>
            <tr>
                <td>Foodmenuname</td>
                <td>Image</td>
                <td>Qty</td>
                <td>Oldprice</td>
                <td>newprice</td>
                <td>Description</td>
                <td>AddedDate</td>
                <td>AddedDate</td>
                <td>Action</td>


            </tr>
        </thead>
        <tbody>
           
                {data && data.map((item)=>(
                    <tr>
                <td>{item.food_name}</td>
                <td className='h-36 w-36'><img src={item.Img_url} /></td>
                <td>{item.Qty}</td>
                <td>{item.Oldprice}</td>
                <td>{item.NewPrice}</td>
                <td>{item.Description}</td>
                <td>{item.addedDate}</td>
                <td><button className='text-right' onClick={()=>DeletData(item.id)}><FaTrash className='text-red-600'/></button></td>
                <td><button className='text-right' onClick={()=>EditData(item.id)}><FaEdit className='text-red-600'/></button></td>
              
                </tr>
                
            ))}
            

            
        </tbody>
      </table>
   </div>
    </div>
  </div>
   
  )
}
