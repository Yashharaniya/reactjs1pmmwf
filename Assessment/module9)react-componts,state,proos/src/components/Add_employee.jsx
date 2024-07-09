import React, { useRef } from 'react'
import {} from 'react-icons'
import { FaFacebook, FaInbox, FaPhone, FaPhoneAlt } from 'react-icons/fa'
import { FaPhoneFlip } from 'react-icons/fa6'
import { Link } from 'react-router-dom'
import Navbar from './Navbar'
import axios from 'axios'
export default function AddEmployee() {
    const Id = useRef();
    const Name = useRef();
    const Email  = useRef();
    const Address = useRef();
    const Salary = useRef();

    const HandelFormSubmit = (e)=>{
       e.preventDefault();
       let ins = {
        Id:Id.current.value,
        Name:Name.current.value,
        Email:Email.current.value,
        Address:Address.current.value,
        Salary:Salary.current.value

       }
       e.target.reset();
       
       axios.post(`http://localhost:5000/FOrmData`,ins).then(()=>{
        //passed a message
       })
    }




  return (
    <>
    <Navbar/>
       <h1 className='font-bold text-5xl text-center'>About me </h1>
       <hr className='bg-black w-48 mx-auto h-1'/>

       <section className='flex mt-5'>
               <div className=' mt-12 ml-14'>
                   <h1 className='text-4xl '>Contact Us</h1>
                    <div className='flex items-center space-x-2 p-2'>
                        <FaPhoneAlt className='text-2xl'/>
                        <p className='text-2xl'><b>Phone :</b> <span >(+91)8849290014</span></p>

                    </div>
                    <div className='flex items-center space-x-2 p-2'>
                        <FaInbox className='text-2xl'/>
                        <p className='text-2xl'><b>Email : &nbsp;</b><span >vishalsinhparmar@gmail.com</span></p>

                    </div>
                    <div className='flex items-center space-x-2 p-2'>
                        <FaFacebook className='text-2xl'/>
                        <p className='text-2xl'><b>Facebook : &nbsp;</b><span >vishalsinhparmar</span></p>

                    </div>
               </div>

               <div className='ml-10 w-128'>
                <h1  className='text-4xl '> Add detail about Employee</h1>


                    <form onSubmit={HandelFormSubmit}>
                       
                          <input  className=' p-3 border-3   bg-transparent rounded w-full mt-5 border-cyan-950 placeholder:text-gray'
                           placeholder='Id' type='number' ref={Id}/>

                          <input  className=' p-3 border-3   bg-transparent rounded w-full mt-5 border-cyan-950 placeholder:text-gray' 
                          placeholder='Name' type='text' ref={Name}/>

                          <input  className=' p-3 border-3   bg-transparent rounded w-full mt-5 border-cyan-950 placeholder:text-gray'
                           placeholder='Email address' type='email' ref={Email}/> 

                         <textarea className=' p-3 border-3   bg-transparent rounded w-full mt-5 border-cyan-950 placeholder:text-gray' 
                         rows={3} placeholder='fill the Adress' ref={Address}> </textarea> 

                          <input  className=' p-3 border-3   bg-transparent rounded w-full mt-5 border-cyan-950 placeholder:text-gray' 
                          placeholder='Salary' type='number' ref={Salary}/>

                          <input  className=' p-3 border-spacing-6  bg-black text-white rounded w-full mt-5 cursor-pointer' 
                           placeholder='Salary' value='Add Detail' type='submit'/>
                          
                    </form>
               
               </div>
       </section>
    </>
  )
}
