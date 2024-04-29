import React, { useState } from 'react'
import "./Newsletter.css"
const Newsletter = () => {
    const [Email,setEmail]=useState('')
    const handleSubmit= async (e)=>{
        e.preventDefault()
        try {
            const user={
                Email
            }
            const jsonUser=JSON.stringify(user)
            await fetch(`http://localhost:4500/user/create`,{
                method:"POST",
                headers: { "Content-Type": "application/json" },
                body:jsonUser
            })
            setEmail("")
        }
        catch(error){

        }
    }
  return (
    <div className="newsletter-form">
    <h2>Subscribe to our Newsletter</h2>
    <form onSubmit={handleSubmit}>
      <input type="email" placeholder="Enter your email" value={Email} onChange={(e)=>setEmail(e.target.value)} />
      <button type="submit">Subscribe</button>
    </form>
  </div>
  )
}

export default Newsletter