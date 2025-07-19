// import React from 'react';

// const Home = () => {
//   return (
//     <div
//       className='relative h-screen bg-cover bg-center'
//       style={{ backgroundImage: "url('/images/background.jpg')" }}
//     >
//       <div className='absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center'>
//         <h1 className='text-4xl font-bold'>Explore the Nepal with Us</h1>
//         <p className='text-lg'>Discover amazing places at exclusive deals</p>
//         <button className='mt-4 px-6 py-2 bg-blue-500 text-white rounded'>GET STARTED</button>
//       </div>
//     </div>
//   );
// };

// export default Home;
import React from 'react';
import PopularDestination from '../component/PopularDestination';
import Services from '../component/Services';
import Clients from '../component/Clients';

const Home = () => {
  return (
    <>
    <div
      className='relative h-screen bg-cover bg-center'
      style={{ backgroundImage: "url('/images/background.jpg')" }}
    >

      <div className='absolute inset-0 bg-black opacity-50'></div>


      <div className='absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center z-10'>
        <h1 className='text-4xl md:text-6xl font-bold text-white mb-4'>Explore the Nepal with Us</h1>
        <p className='text-lg md:text-2xl text-white mb-8'>Discover amazing places at exclusive deals</p>
        <button className='border text-white px-6 py-2 rounded-full text-lg md:text-xl hover:bg-blue-500 transform transition duration-300 hover:scale-105'>
          GET STARTED
        </button>
      </div>
    </div>
    <PopularDestination />
    <Services />
    <Clients />
    </>
  );
};

export default Home;

