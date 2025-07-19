// import React from 'react';

// const About = () => {
//   return (
//     <div>
//        <div
//       className='relative h-96 bg-cover bg-center'
//       style={{ backgroundImage: "url('/images/background.jpg')" }}
//     >
//       <div className='absolute inset-0 bg-black opacity-50'></div>

//       <div className='absolute inset-0 bg-opacity-50 flex flex-col items-center justify-center text-white px-4 text-center z-10'>
//         <h3 className='text-4xl md:text-6xl font-bold mb-4'>About us </h3>
//         <p className='text-lg md:text-2xl mb-8'> Wanna know more about us !</p>
//       </div>
//     </div>

//     <div>
//         <div>
//             <img src="/image/background.jpg" alt="" />
    
//         </div>
//         <div> 
//             <h3>Who we are </h3>
//             <p>
//                 we're a passinate travel agency committed to providing the best travel experiences for our clients . Our team of dedication professionals works tirelessly to ensure your trips are seamless and unforgettable. 

//             </p>
//             <h3> Our Objective</h3>
//             <p>  our mission is to create amzing travel experiences that inspires and enrich the lives of our clients . we believe in personalized service ,attention to detail, and providing expectional value </p>

//         </div>
//     </div>
//     </div>
//   );
// }

// export default About;

import React from 'react';

const About = () => {
  return (
    <div className='bg-gray-100'>
      {/* Hero Section */}
      <div
        className='relative h-96 bg-cover bg-center'
        style={{ backgroundImage: "url('/images/background.jpg')" }}
      >
        <div className='absolute inset-0 bg-black opacity-60'></div>
        <div className='absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center z-10'>
          <h3 className='text-4xl md:text-6xl font-bold mb-4'>About Us</h3>
          <p className='text-lg md:text-2xl'>Wanna know more about us?</p>
        </div>
      </div>

      {/* About Section */}
      <div className='container mx-auto px-6 py-16'>
        <div className='grid md:grid-cols-2 gap-12 items-center'>
          {/* Image */}
          <div className='rounded-lg overflow-hidden shadow-lg'>
            <img
              src='/images/background.jpg'
              alt='Team'
              className='w-full h-full object-cover'
            />
          </div>

          {/* Text Content */}
          <div>
            <h3 className='text-3xl font-bold text-blue-600 mb-4'>Who We Are</h3>
            <p className='text-gray-700 mb-6 leading-relaxed'>
              We're a passionate travel agency committed to providing the best travel experiences for our clients. Our team of dedicated professionals works tirelessly to ensure your trips are seamless and unforgettable.
            </p>

            <h3 className='text-3xl font-bold text-blue-600 mb-4'>Our Objective</h3>
            <p className='text-gray-700 leading-relaxed'>
              Our mission is to create amazing travel experiences that inspire and enrich the lives of our clients. We believe in personalized service, attention to detail, and providing exceptional value.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;

