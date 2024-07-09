    import axios from 'axios'
    import React, { useEffect, useState } from 'react'
    import {} from 'react-icons'
    import { FaDelicious, FaEdit, FaFacebook, FaInbox, FaPhone, FaPhoneAlt, FaTrash } from 'react-icons/fa'
    import { FaPhoneFlip } from 'react-icons/fa6'
    import { Link, Navigate, useNavigate, useParams } from 'react-router-dom'
    export default function MyContent() {

        const [data,setdata] = useState([]);
        const {id} = useParams();
        const navigation = useNavigate();
        useEffect(()=>{
            axios.get(`http://localhost:5000/FOrmData`).then((response)=>{
            setdata(response.data)
            });
        
            
        
        },[])
    
      const deleteData = (id) =>{

               axios.delete(`http://localhost:5000/FOrmData/${id}`).then(()=>{
        
               window.location.reload();
            
        // navigation('/Content')
        //  alert(id)
            })
        }  
      

      const UpdateData = (id) =>{
                axios.put(`http://localhost:5000/FOrmData/${id}`).then((response)=>{
                   navigation(`/add-employee`)
                   window.location.reload();
                 setdata(response.data)
                })

                alert(id)
      }
       

    

    return (
        <>
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

                <div className='w-auto ml-10'>

                    <Link to='add-employee'><button className='bg-black text-white p-3 ml-96 rounded m-3'>Add employee +</button></Link>
                        <table cellPadding={15} width={700}>
                            <thead className='bg-black text-white'>
                                <tr >
                                    <td>No.</td>
                                    <td>Name</td>
                                    <td>Email</td>
                                    <td>Full Adress</td>
                                    <td>Salary</td>
                                    <td>Action</td>
                                    <td>edit</td>

                                </tr>
                            </thead>
                            <tbody className='bg-amber-300'>
                                
                                { data.map((items)=>(
                                    <>
                                    <tr>
                                    {/* <td>{items.Id}</td> */}
                            <td>{items.Id}</td>
                            <td>{items.Name}</td>
                            <td>{items.Email}</td>
                            <td>{items.Address}</td>
                            <td>{items.Salary}</td>
                            <td className='text-center'><button onClick={()=>deleteData(items.id) }><FaTrash className='text-red-600'   /></button></td>
                            <td className='text-center'><button onClick={()=> UpdateData(items.id)}><FaEdit className='text-red-600'   /></button></td>
                            
                            </tr>

                            
                                    </>
                                ))}
                            
                            </tbody>
                        </table>
                </div>
        </section>
        </>
    )
    }
