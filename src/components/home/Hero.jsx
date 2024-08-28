import React from 'react'

const Hero = () => {
    return (
        <>
            <div>
                <div className='overlay'>
                    <div className='md:container md:mx-auto flex flex-col justify-between items-center'>
                        <div className='ml-5 my-20 flex flex-col lg:grid-cols-7 mx-auto md:mx-auto lg:my-32 lg:w-7/12 '>
                            <h4 className='text-xl lg:text-2xl font-semibold' style={{color: '#ffb524'}}>100% Organic Foods</h4>
                            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold mt-4 mb-10 lg:w-9/12' style={{color: '#39d285'}}>Organic Veggies & Fruits Foods</h1>
                            <div className='relative box-border w-full'>
                                <input className='border border-orange-300 relative w-8/12 rounded-full  pl-4 py-4 ' type="text" placeholder='Search'/>
                                <button className='text-white absolute py-4 right-1/3 top-0 px-6 border border-orange-300 rounded-full font-semibold text-md' style={{backgroundColor: '#39d285'}} type="submit">Submit Now</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Hero
