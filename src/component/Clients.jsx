 

import React from 'react';


const testimonials = [
  {
    name:'Ameera rai',
    image: 'images/review2.avif',
    text: 'This travel agency provided excellentt service and helped us plan the perfect vacation',
    location: 'Pokhara, Nepal'
  },
  {
    name:'Yubraj puri',
    image: 'images/review1.avif',
    text: 'Amazing experience ! the tour guide were experienced and the price were affordable for us',
    location: 'Kathmandu, Nepal'
  },
  {
    name:'Misty Moore',
    image: 'images/review3.avif',
    text: 'Great customer service I came by my own to explore nepal and this agency was my best choice',
    location: 'Texas , USA'
  },
  
];

const Clients = () => {
  return (
    <div className='py-12 bg-gray-100'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold text-center mb-8'> Reviews </h2>

        <div className='grid gap-6 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-3'>
          {testimonials.map((testimonials, index) => (
            <div
              key={index}
              className='bg-white rounded-lg shadow-md p-6 text-center cursor-pointer transform transition duration-300 hover:scale-110'>
              <img src={testimonials.image} alt="" className='w-24 h-24 rounded-full mx-auto mb-4'/>
              <div className='p-4'>
                <h3 className='text-xl font-bold mb-2'>{testimonials.name}</h3>
                <p className='text-gray-600'>{testimonials.location}</p>
                 <p className='text-gray-600 italic'>{testimonials.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Clients;
