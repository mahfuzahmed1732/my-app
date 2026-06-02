'use client'

import React, {useState} from 'react'

 type FormData = {
         title: string;
         href: string;
         parentId: string;
         order: number;
    }

const Dashboard = () => {
 const [ form, setForm] = useState<FormData>({
    title: "",
    href: "",
    parentId: "",
    order: 0
 })
   
   const handleChange = (e: React.ChangeEvent<HTMLInputElement>)=>{
        const { name, value } = e.target;
        setForm({...form, [name]: name === "order" ? Number(value) : value})
   }

   const handleSubmit = async (e: React.FormEvent<HTMLFormElement>)=>{
             e.preventDefault();

         const res = await fetch("/api/dashboard", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(form)
          })
    
        const data = await res.json();
        console.log(data)
        setForm({
           title: "",
           href: "",
           parentId: "",
           order: 0
         })
    }

  return (
    <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-6 mt-10">
      <h2 className="text-xl font-semibold mb-4">Create Menu</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={form.title}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          name="href"
          placeholder="Href"
          value={form.href}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="text"
          name="parentId"
          placeholder="Parent ID"
          value={form.parentId}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <input
          type="number"
          name="order"
          placeholder="Order"
          value={form.order}
          onChange={handleChange}
          className="w-full border p-2 rounded"
        />

        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  )
}

export default Dashboard