import React from 'react'


const Contact = () => {
    return (
        <div>
        
            <div className='m-auto text-center bg-gray-100 py-10 px-6 mx-4 rounded-lg sm:mx-20 md:mx-28'>
                <h1 className='text-3xl lg:text-5xl font-semibold' style={{color: '#39d285'}}>Get in touch</h1>

                <div className="rounded w-10/12 h-96 mx-auto my-8">
    <iframe
        className="rounded w-full h-full"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3916.000224465505!2d76.95111801480067!3d11.01684469215257!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859ca0198ffb3%3A0x36edc1b97eb3f867!2sCoimbatore%2C%20Tamil%20Nadu%2C%20India!5e0!3m2!1sen!2sin!4v1694259649153!5m2!1sen!2sin"
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
    ></iframe>
</div>
                <div className='lg:flex lg:justify-between mx-2 md:mx-9 xl:mx-24'>
                    <form action='' className='lg:w-6/12'>
                        <input className='w-full outline-none my-3 py-4 px-4 rounded-lg' type="text" placeholder='Your Name'/>
                        <input className='w-full outline-none my-3 py-4 px-4 rounded-lg' type="text" placeholder='Your Email'/>
                        <textarea className='w-full outline-none my-3 py-4 px-4 rounded-lg' cols="30" rows="5" placeholder='Your Message'></textarea>
                        <input className='w-full outline-none my-3 py-4 px-4 font-semibold border border-orange-300 rounded-lg bg-white duration-500 input-contact' type="submit" />
                    </form>
                    <div className='lg:w-5/12'>
                        <div className='bg-white my-4 rounded-lg flex items-center py-6 px-2'>
                            <span className='text-3xl ml-4' style={{color: '#39d285'}}><i className='fa fa-location-dot'></i></span>
                            <div className='flex flex-col items-start justify-start ml-6'>
                                <h2 className='text-xl font-semibold' style={{color: '#45595b'}}>Address</h2>
                                <span className='w-fit' style={{color: '#45595b'}}>Coimbatore, TamilNadu , India</span>
                            </div>
                        </div>
                        <div className='bg-white my-4 rounded-lg flex items-center py-6 px-2'>
                            <span className='text-3xl ml-4' style={{color: '#39d285'}}><i className='fa fa-envelope'></i></span>
                            <div className='flex flex-col items-start justify-start ml-6'>
                                <h2 className='text-xl font-semibold' style={{color: '#45595b'}}>Mail Us</h2>
                                <span className='w-fit' style={{color: '#45595b'}}>farmbox@gmail.com</span>
                            </div>
                        </div>
                        <div className='bg-white my-4 rounded-lg flex items-center py-6 px-2'>
                            <span className='text-3xl ml-4' style={{color: '#39d285'}}><i className='fa fa-phone'></i></span>
                            <div className='flex flex-col items-start justify-start ml-6'>
                                <h2 className='text-xl font-semibold' style={{color: '#45595b'}}>Telephone</h2>
                                <span className='w-fit' style={{color: '#45595b'}}>+91 9999x 9xxxx</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact
