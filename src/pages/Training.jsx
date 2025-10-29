import React from 'react';
import styles from '../style';
import Footer from '../components/Footer';

const categorizedVideos = {
  Gas: [
    {
      id: 1,
      title: 'How to fix and assemble oxygen pipes',
      description: 'Learn how to operate, calibrate, and troubleshoot a standard hospital oxygen pipes and gas tanks.',
      videoUrl: 'https://www.youtube.com/embed/5SGqzus1cpY',
    },
    {
        id:1.1,
        title: 'Medical Gas Overview',
        videoUrl: 'https://www.youtube.com/embed/wubd22ETd7I'
    },
    {
        id:1.2,
        title: 'Medical Gas Supply System',
        videoUrl: 'https://www.youtube.com/embed/Abz1fvCBA1k'
    },
    {
        id:1.3,
        title: 'How to braze medical gas pipe',
        videoUrl: 'https://www.youtube.com/embed/xn04V9yTvN4'
    },

  ],
  Monitoring: [
    {
      id: 2,
      title: 'Assembling an ECG Machine',
      description: 'Step-by-step guide on assembling and testing an ECG machine safely.',
      videoUrl: 'https://www.youtube.com/embed/eVJsVnGXvnQ',
    },
    {
      id: 3,
      title: 'Maintaining an Infusion Pump',
      description: 'Best practices for regular maintenance and repair of infusion pumps.',
      videoUrl: 'https://www.youtube.com/embed/-3ihF7EltEk',
    },
  ],
  Dental: [
    {
      id: 4,
      title: 'Dental Mobile Carts',
      description: 'These carts can be equipped with a range of dental equipment, including handpieces, suction, and other necessary tools, allowing for a wide range of procedures to be performed on the go.',
      videoUrl: 'https://www.youtube.com/embed/SEWaLwHMvR4',
    },
  ],
};

const Training = () => {
  return (
    <section className={`flex flex-col ${styles.paddingY}`}>
      <div className="w-full flex flex-col items-center justify-center text-center px-6 py-14 bg-white">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6">
          Medical Engineering Technical Training
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl leading-relaxed">
          Access hands-on training resources on how to use, assemble, and maintain a wide range of medical equipment. Learn at your own pace with our expert-led video tutorials.
        </p>
      </div>

      <div className="px-6 sm:px-16 py-10 bg-gray-50">
        {Object.entries(categorizedVideos).map(([category, videos]) => (
          <div key={category} className="mb-16">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6 border-b pb-2">{category} Equipment Videos</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {videos.map((video) => (
                <div key={video.id} className="bg-white shadow-lg rounded-xl p-4">
                  <div className="aspect-w-16 aspect-h-9 mb-4">
                    <iframe
                      src={video.videoUrl}
                      title={video.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      allowFullScreen
                      className="w-full h-60 rounded"
                    />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">{video.title}</h3>
                  <p className="text-gray-600 mt-2 text-sm">{video.description}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>

      <Footer />
    </section>
  );
};

export default Training;
