

import React from 'react';

const destination = [
  {
    image: 'images/img1.jpg',
    title: 'Everest Base Camp (EBC)',
    description:
      'Located in the Khumbu region of eastern Nepal, Everest Base Camp is a dream destination for adventurers. Standing at an altitude of 5,364 meters, it offers panoramic views of Everest, Lhotse, and Nuptse. Along the trail, you’ll experience Sherpa culture, high-altitude monasteries, and glacier-fed rivers.',
  },
  {
    image: 'images/img2.jpg',
    title: 'Pokhara',
    description:
      'Pokhara is a lakeside paradise surrounded by the Annapurna range. Phewa Lake reflects the snow-capped peaks, while adventure lovers enjoy paragliding, ziplining, and boating. With peaceful cafes, cozy hotels, and nearby treks, Pokhara suits all travelers.',
  },
  {
    image: 'images/img3.jpg',
    title: 'Annapurna Circuit',
    description:
      'The Annapurna Circuit is one of the world’s most beautiful long-distance treks. It winds through lush valleys, ancient villages, and barren highlands. Crossing Thorong La Pass (5,416m) is a highlight, as is visiting Muktinath — a sacred site for Hindus and Buddhists.',
  },
  {
    image: 'images/img4.jpg',
    title: 'Chitwan National Park',
    description:
      'Home to Bengal tigers, one-horned rhinos, elephants, and exotic birds, Chitwan offers an unforgettable wildlife experience. Go on a jeep safari, take a canoe ride on the Rapti River, or enjoy Tharu cultural shows in nearby villages.',
  },
  {
    image: 'images/img5.jpg',
    title: 'Rara Lake',
    description:
      'Located in the far-west, Rara Lake is Nepal’s largest lake and one of the most stunning natural sites. Surrounded by alpine meadows and pine forests, it’s perfect for trekking, stargazing, and finding inner peace away from crowds.',
  },
  {
    image: 'images/img6.jpg',
    title: 'Lumbini',
    description:
      'A UNESCO World Heritage Site, Lumbini is a sacred destination for millions. Visit the Maya Devi Temple where Buddha was born, explore global monasteries, and experience calm in the serene gardens. It’s a spiritual heart of Nepal.',
  },
];

const PopularDestination = () => {
  return (
    <div className='py-12 bg-gray-100'>
      <div className='container mx-auto px-4'>
        <h2 className='text-3xl font-bold text-center mb-8'>Popular Destination</h2>

        <div className='grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {destination.map((city, index) => (
            <div
              key={index}
              className='bg-white rounded-lg shadow-md overflow-hidden cursor-pointer'
            >
              
              <img
                src={city.image}
                alt={city.title}
                className='w-full h-48 object-cover transform transition duration-300 hover:scale-110'
              />
              <div className='p-4'>
                <h3 className='text-xl font-bold mb-2'>{city.title}</h3>
                <p className='text-gray-600'>{city.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularDestination;

