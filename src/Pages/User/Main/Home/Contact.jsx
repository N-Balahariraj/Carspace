import React from 'react'

export default function Contact() {
    return (
        <div className='w-[90%] flex justify-between m-10 font-Nunito'>
            <div className="w-[50%] flex flex-col">
                <h1 className='my-2 border-l-[0.5rem] border-[#dc3545] px-2 text-3xl font-bold font-poppins'>Get in Touch</h1>
                <p className='m-2'>We’re here to help! Whether you’re interested in booking a tour, learning more about our memberships, or have general inquiries, feel free to reach out. We’ll get back to you as soon as possible.</p>
                <form action="" className='flex flex-col m-2 gap-5'>
                    <div className="w-[80%] flex justify-between">
                        <input type="text" placeholder='Name' className=' w-[45%] outline-none border-2 rounded-xl p-2 ' />
                        <input type="tel" placeholder='Phone number' pattern='[0-9]{10}' className=' w-[45%] outline-none border-2 rounded-xl p-2 ' />
                    </div>
                    <textarea name="desc" id="desc" rows={7} className='w-[80%] border-2 rounded-xl p-2' placeholder='Description'></textarea>
                    <button className='button w-[40%]'>Send My Inquiry</button>
                </form>
            </div>
            <img src="/Pics/Contact.jpeg" alt="" className='w-[50%]' />
        </div>
    )
}
