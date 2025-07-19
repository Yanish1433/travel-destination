
import React from 'react';
 const images =[
  '/images/gallery3.avif',
  '/images/gallery4.jpg',
  '/images/gallery5.png',
  '/images/gallery6.jpg',
  '/images/gallery7.jpg',
  '/images/gallery8.jpg',




 ]
const Gallery = () => {
  return (
    <div>
    <div
      className='relative h-96 bg-cover bg-center'
      style={{ backgroundImage: "url('/images/background.jpg')" }}
    >
      <div className='absolute inset-0 bg-black opacity-50'></div>

      <div className='absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center text-white px-4 text-center z-10'>
        <h3 className='text-4xl md:text-6xl font-bold mb-4'>Gallery</h3>
        <p className='text-lg md:text-2xl mb-8'>Some glimpses of our Travel Agency</p>
      </div>
    </div>
    <div className='container mx-auto px-4 py-12' >
      <div className='grid gap-6 grid-cols-1 md:grid-cols-3 lg:grid-cols-4'>
        {images.map(image =>(
          <div className='rounded-lg overflow-hidden shadow-md transform transition duration-300 hover:scale-105'>
            <img src={image} alt="" className='w-full h-full object-cover'/>
            </div>

        

        ))}
      </div>
    </div>
    </div>
  );
};

export default Gallery;


