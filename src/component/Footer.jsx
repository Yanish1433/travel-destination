// import React from 'react';
// import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa';
// import { Link } from 'react-router-dom';
// const Footer = () => {
//   return (
//     <div className='bg-gray-800 p-4 text-white py-8'>
//         <div className='container mx-auto px-4'>
//              <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
//         <h2 className='text 2-xl font-bold mb-4'>  Travel Agency</h2>
//         <p className='mb-4'>Your trusted partner for unforgettable travel experiences. Explore nepal with us .</p>
//          </div>
//         <div className='flex flex-col md:items-center'>   
//             <h4 className='text-lg font-semibold' > Quick Links </h4>
//             <div className='flex flex-col mt-4 space-y-2'> 
//                 <Link to="/">Home</Link>
//                 <Link to="/gallery">Gallery</Link>
//                 <Link to="/contact">Contact</Link>
//                 <Link to="/about">About</Link>
//             </div> 
//         </div>
//          <div>  
//             <h2 className='text-xl font-bold mb-4'> Follow Us </h2>
//             <div className='flex space-x-4 mb-4'>
//                 <FaFacebookF />
//                 <FaInstagram />
//                 <FaTwitter />
//                 <FaYoutube />
//                 <FaTiktok />
//             </div>
//             <form className='w-full p-2 rounded-1-lg bg-gray-800 border border-gray-600'>
//                 <input type="email" placeholder='Enter your Email' className='w-full p-2 rounded-1-lg bg-gray-800 border border-gray-600' />
//                 <button type="submit" className='bg-blur-600 text-white px-4 py-2 rounded-r-lg border border-blue-600'
//                 > Subscribe </button>
//             </form>
//          </div>
//          </div>
//          <div className='flex justify-between mt-8 border-t border-gray-700 pt-4'>
//             <p>&copy; 2025 All right reserved. </p>
//             <div className='flex space-x-4 mt-4 md:mt-0'>
//                 <Link to=""> Privacy Policy</Link>
//                  <Link to=""> Terms Of Service </Link>
                
//             </div>
//          </div>
     
//     </div>
//   );
// }

// export default Footer;

import React from 'react';
import { FaFacebookF, FaInstagram, FaTiktok, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <div className="bg-gradient-to-b from-gray-900 to-gray-800 text-white py-10 px-6">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Brand Info */}
        <div className="backdrop-blur-sm bg-white/5 p-6 rounded-xl border border-gray-700">
          <h2 className="text-2xl font-extrabold mb-3 tracking-wide">Travel Agency</h2>
          <p className="text-sm text-gray-300">
            Your trusted partner for unforgettable travel experiences. Explore Nepal with us.
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-col md:items-center backdrop-blur-sm bg-white/5 p-6 rounded-xl border border-gray-700">
          <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
          <div className="flex flex-col gap-2 text-sm">
            <Link to="/" className="hover:text-blue-400 transition">Home</Link>
            <Link to="/gallery" className="hover:text-blue-400 transition">Gallery</Link>
            <Link to="/contact" className="hover:text-blue-400 transition">Contact</Link>
            <Link to="/about" className="hover:text-blue-400 transition">About</Link>
          </div>
        </div>

        {/* Social & Subscribe */}
        <div className="backdrop-blur-sm bg-white/5 p-6 rounded-xl border border-gray-700">
          <h2 className="text-xl font-semibold mb-4">Follow Us</h2>
          <div className="flex space-x-4 mb-4 text-xl text-gray-300">
            <FaFacebookF className="hover:text-blue-500 transition" />
            <FaInstagram className="hover:text-pink-500 transition" />
            <FaTwitter className="hover:text-blue-400 transition" />
            <FaYoutube className="hover:text-red-500 transition" />
            <FaTiktok className="hover:text-white transition" />
          </div>
          <form className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              placeholder="Enter your Email"
              className="w-full px-3 py-2 rounded-md bg-gray-700 placeholder:text-gray-400 text-white focus:outline-none"
            />
            <button
              type="submit"
              className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-md transition"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="mt-12 border-t border-gray-700 pt-6 text-sm flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-gray-400">&copy; 2025 All rights reserved.</p>
        <div className="flex space-x-4">
          <Link to="" className="hover:text-blue-400 transition">Privacy Policy</Link>
          <Link to="" className="hover:text-blue-400 transition">Terms Of Service</Link>
        </div>
      </div>
    </div>
  );
};

export default Footer;
