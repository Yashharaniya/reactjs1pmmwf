import React from 'react'

export default function Country() {
    const Countryname = [
        "I  ndia",
        "Pakistan",
         "Nepal",
         "Srilanka",
         "USA",
         "Brazil",
         "Italy"
        
    ]
  return (
    
    <>
       <label className='p-3 '> 
          Country:

       </label>
       <select className='p-2'>
        <option>select country</option>
        {Countryname.map((name)=>(
            <option>{name}</option>
        ))}
    
       </select>

       <label className='p-3 '> 
          Cityname

       </label>
       <select className='p-2'>
        <option>select Cityname</option>
        {Countryname.map((name)=>(
            <option>{name}</option>
        ))}
    
       </select>
    
     </>
  )
}
