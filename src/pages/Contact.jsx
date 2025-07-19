


import React, { useRef, useState } from 'react';
import { FaEnvelope, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [sending, setSending] = useState(false);
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSending(true);

    const serviceId = 'service_ta193qs';
    const templateId = 'template_zb4bf2n';
    const publicKey = '2Fl8UjbdRPaK8b3Qt';

    const templateParams = {
      from_name: name,
      from_email: email,
      to_name: 'travel destination',
      message: message,
    };

    emailjs
      .send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        setName('');
        setEmail('');
        setMessage('');
        setMessageSent(true);
      })
      .catch((error) => {
        console.error('Error sending email:', error);
      })
      .finally(() => {
        setSending(false);
      });
  };

  return (
    <div className='bg-gray-100'>
      {/* Hero Section */}
      <div
        className='relative h-96 bg-cover bg-center'
        style={{ backgroundImage: "url('/images/background.jpg')" }}
      >
        <div className='absolute inset-0 bg-black opacity-60'></div>
        <div className='absolute inset-0 flex flex-col items-center justify-center text-white px-4 text-center z-10'>
          <h3 className='text-4xl md:text-6xl font-bold mb-4'>Contact</h3>
          <p className='text-lg md:text-2xl'>Interested and have any questions?</p>
        </div>
      </div>

      {/* Content Section */}
      <div className='container mx-auto px-6 py-12'>
        <div className='grid gap-10 md:grid-cols-2'>
          {/* Contact Details */}
          <div className='bg-white p-6 rounded-xl shadow-lg'>
            <h3 className='text-2xl font-bold mb-6 text-gray-800'>Contact Details</h3>
            <div className='flex items-center mb-4 text-gray-600'>
              <FaEnvelope className='text-blue-600 text-xl mr-3' />
              <span>Traveldestination66@gmail.com</span>
            </div>
            <div className='flex items-center mb-4 text-gray-600'>
              <FaPhone className='text-blue-600 text-xl mr-3' />
              <span>+977 9860454052</span>
            </div>
            <div className='flex items-center text-gray-600'>
              <FaMapMarkerAlt className='text-blue-600 text-xl mr-3' />
              <span>Battisputali, KTM, Nepal</span>
            </div>
          </div>

          {/* Contact Form */}
          <div className='bg-white p-6 rounded-xl shadow-lg'>
            <h3 className='text-2xl font-bold mb-6 text-gray-800'>Get In Touch</h3>
            <form onSubmit={handleSubmit}>
              <input
                type='text'
                placeholder='Your Name'
                className='w-full mb-4 px-4 py-2 border border-gray-300 rounded-md'
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type='email'
                placeholder='Your Email'
                className='w-full mb-4 px-4 py-2 border border-gray-300 rounded-md'
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <textarea
                cols='30'
                rows='6'
                placeholder='Your Message'
                className='w-full mb-4 px-4 py-2 border border-gray-300 rounded-md'
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              ></textarea>

              <button
                type='submit'
                className={`w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded-md transition duration-300 ${
                  sending ? 'opacity-70 cursor-not-allowed' : ''
                }`}
                disabled={sending}
              >
                {sending ? 'Sending...' : 'Send Message'}
              </button>
              {messageSent && (
                <p className='text-green-600 font-medium mt-3 text-center'>
                  ✅ Message sent successfully!
                </p>
              )}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
