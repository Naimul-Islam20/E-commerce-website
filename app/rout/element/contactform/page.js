'use client';

import { useState } from 'react';

export default function ProductFindForm() {
  const [user, setUser] = useState({ name: '', email: '', message: '' });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  

  const handleSubmit = (e) => {


   

      return;
    } // সব ঠিক থাকলে...
    
 

  return (
    <div className='bg-gray-100 pt-30 pb-30'>
      <div className="container  mx-auto px-10  pt-30 pb-30 md:px-15 lg:px-22 py-15 space-y-10 bg-gray-50">
      <form onSubmit={handleSubmit} className="flex flex-col md:flex-row gap-3">
        <input
          type="text"
          name="name"
          value={user.name}
          onChange={handleChange}
          placeholder="Found in your order confirmation email*"
          required
          className="w-full p-3 border rounded"
        />
        <input
          type="text"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Email you used during checkout*"
          required
          className="w-full p-3 border rounded"
        />
          <input
          type="text"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Email you used during checkout*"
          required
          className="w-full p-3 border rounded"
        />
          <input
          type="text"
          name="email"
          value={user.email}
          onChange={handleChange}
          placeholder="Email you used during checkout*"
          required
          className="w-full p-3 border rounded"
        />
        <button
          type="submit"
           className="bg-black text-white py-3 px-6 rounded hover:bg-amber-400 transition w-auto self-start"
        >
          Submit
        </button>
      </form>

      
   

   
    </div>
    </div>
  );
}
