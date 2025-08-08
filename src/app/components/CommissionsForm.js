"use client"
import React, { useState } from 'react'

const CommissionsForm = () => {

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [desc, setDesc] = useState("");
    const [price, setPrice] = useState("");

    function sub(e) {
        e.preventDefault();
        let data = {
            name,
            email,
            desc,
            price
        }

        console.log(JSON.stringify(data));

        setName("");
        setEmail("");
        setDesc("");
        setPrice("");

        // it would be very easy here to set up an automatic email service with something like emailJS, but I don't generally trust things with my email and such, so I'm not willing to do that for just a demo project that isn't real
    }

  return (
    <div id="commissions-intake-form-card">
        <form id="commissions-intake-form" onSubmit={(e) => sub(e)}>
            {/* <!-- could do to add labels here ... --> */}
            <label htmlFor="name">Full Name</label>
            <input type="text" name="name" placeholder="Jane Dew" value={name} onChange={(e) => setName(e.target.value)}/>

            <label htmlFor="email">Email</label>
            <input type="text" name="email" placeholder="email@example.com" value={email} onChange={(e) => setEmail(e.target.value)}/>

            <label htmlFor="product-desc">Product Description</label>
            <textarea placeholder="Describe the product you have in mind..." name="product-desc" value={desc} onChange={(e) => setDesc(e.target.value)}></textarea>

            <label htmlFor="payment">Price Range</label>
            <input type="number" name="payment" id="payment-input" placeholder="100" value={price} onChange={(e) => setPrice(e.target.value)}/>


            <button id="commissions-form-submit-button" type="submit">Submit</button>

        </form>
    </div>
  )
}

export default CommissionsForm
