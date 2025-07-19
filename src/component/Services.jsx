

// import React from 'react';
// import { FaPlane, FaHotel, FaUmbrellabeach, FaConciergeBell } from 'react-icons/fa';

// const services = [
//   {
//     icon: <FaHotel className='text-4xl text-blue-500' />,
//     title: 'Hotel Booking',
//     description: 'BBok hotels at the best price with our exclusive deals and discounts',
//   },
//   {
//     icon: <FaPlane className="text-4xl text-blue-500" />,
//     title: 'Flight + Roadway Booking',
//     description: 'We provide easy and quick flight booking service plus we do have roadway access',
//   },
//   {
//     icon: <FaConciergeBell className='text-4xl text-blue-500' />,
//     title: 'Conciege Services',
//     description: ' Get personalized concierge services for a seamless travel experience',
//   },
//   {
//     icon: <FaUmbrellabeach className='text-4xl text-blur-500' />,
//     title: 'Natural View',
//     description: 'We make sure you vist plus see everything possible with your own eyes',

//   },
// ];

// const Services = () => {
//   return (
//     <div className='py-12 bg-gray-100'>
//       <div className='container mx-auto px-4'>
//         <h2 className='text-3xl font-bold text-center mb-8'>Our Services</h2>

//         <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
//           {services.map((service, index) => (
//             <div
//               key={index}
//               className='bg-white rounded-lg shadow-md overflow-hidden cursor-pointer'>
//                 <div className='mb-4'>{service.icon}

//                   </div>

             
//               <div className='p-4'>
//                 <h3 className='text-xl font-bold mb-2'>{service.title}</h3>
//                 <p className='text-gray-600'>{service.description}</p>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Services;

import React from 'react';
import { FaPlane, FaHotel, FaUmbrellaBeach, FaConciergeBell } from 'react-icons/fa';

const services = [
  {
    icon: <FaHotel className='text-4xl text-blue-500' />,
    title: 'Hotel Booking',
    description: 'Book hotels at the best price with our exclusive deals and discounts',
  },
  {
    icon: <FaPlane className="text-4xl text-blue-500" />,
    title: 'Flight + Roadway Booking',
    description: 'We provide easy and quick flight booking service plus we do have roadway access',
  },
  {
    icon: <FaConciergeBell className='text-4xl text-blue-500' />,
    title: 'Concierge Services',
    description: 'Get personalized concierge services for a seamless travel experience',
  },
  {
    icon: <FaUmbrellaBeach className='text-4xl text-blue-500' />,
    title: 'Natural View',
    description: 'We make sure you visit plus see everything possible with your own eyes',
  },
];

const Services = () => {
  return (
    <div className='py-12 bg-gray-100'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold text-center mb-8'>Our Services</h2>

        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {services.map((service, index) => (
            <div
              key={index}
              className='bg-white rounded-lg shadow-md flex flex-col p-8 items-center cursor-pointer transform transition duration-300 hover:scale-110'>
              <div className='mb-4'>{service.icon}</div>

              <div className='p-4'>
                <h3 className='text-xl font-bold mb-2'>{service.title}</h3>
                <p className='text-gray-600'>{service.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
