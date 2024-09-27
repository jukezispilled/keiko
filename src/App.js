import React from 'react';
import { motion } from 'framer-motion';
import './App.css';
import Marquee from "react-fast-marquee";

const BlingText = ({ text }) => (
  <h1 className="text-6xl md:text-8xl font-bold mb-2 z-10 font-custom">
    {text.split('').map((char, index) => (
      <motion.span
        key={index}
        className="inline-block bling-letter"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{
          duration: 0.8,
          delay: index * 0.08,
        }}
      >
        {char}
      </motion.span>
    ))}
  </h1>
);

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <div 
        className="flex-grow relative flex flex-col justify-center items-center bg-cover bg-center min-h-screen" 
        style={{ backgroundImage: 'url(/b.png)' }}
      >
        {/* Updated Background video with playsinline attribute */}
        <video 
          autoPlay 
          muted 
          loop 
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover -z-10"
        >
          <source src="/vid.mp4" type="video/mp4" />
        </video>

        <style>
          {`
            @keyframes bling {
              0%, 100% { color: #FFD700; text-shadow: 0 0 5px #FFD700; }
              50% { color: #FFFACD; text-shadow: 0 0 10px #FFD700; }
            }
            .bling-letter {
              animation: bling 6s infinite;
              filter: drop-shadow(0 0 3px rgba(255, 215, 0, 0.5));
            }
          `}
        </style>

        <div className='absolute top-3 text-center text-xs font-custom text-yellow-300 z-10'>CA: updating...</div>

        <div className='absolute bottom-3 right-3 flex items-center z-10'>
            <a href="https://x.com/KeikoSolana" className='transition ease-in-out duration-150'>
              <svg xmlns="http://www.w3.org/2000/svg" className='size-8 md:size-10 md:hover:scale-105 transition ease-in-out duration-150 cursor-pointer' fill="#fde047" viewBox="0 0 50 50">
                <path d="M 6.9199219 6 L 21.136719 26.726562 L 6.2285156 44 L 9.40625 44 L 22.544922 28.777344 L 32.986328 44 L 43 44 L 28.123047 22.3125 L 42.203125 6 L 39.027344 6 L 26.716797 20.261719 L 16.933594 6 L 6.9199219 6 z"></path>
              </svg>
            </a>
            <a href="https://t.me/Keikoportalsol" className='transition ease-in-out duration-150'>
              <svg xmlns="http://www.w3.org/2000/svg" className='size-8 md:size-10 md:hover:scale-105 transition ease-in-out duration-150 cursor-pointer' fill="#fde047" viewBox="0 0 50 50">
                <path d="M46.137,6.552c-0.75-0.636-1.928-0.727-3.146-0.238l-0.002,0C41.708,6.828,6.728,21.832,5.304,22.445	c-0.259,0.09-2.521,0.934-2.288,2.814c0.208,1.695,2.026,2.397,2.248,2.478l8.893,3.045c0.59,1.964,2.765,9.21,3.246,10.758	c0.3,0.965,0.789,2.233,1.646,2.494c0.752,0.29,1.5,0.025,1.984-0.355l5.437-5.043l8.777,6.845l0.209,0.125	c0.596,0.264,1.167,0.396,1.712,0.396c0.421,0,0.825-0.079,1.211-0.237c1.315-0.54,1.841-1.793,1.896-1.935l6.556-34.077	C47.231,7.933,46.675,7.007,46.137,6.552z M22,32l-3,8l-3-10l23-17L22,32z"></path>
              </svg>
            </a>
        </div>

        <BlingText text="keiko" />
        <p className='font-custom text-yellow-300 text-sm z-10'>star of free willy</p>
        <h2 className="text-2xl z-10 font-custom text-yellow-300">"lucky child"</h2>
        
        <motion.img 
          src="/k.png" 
          alt="Keiko"
          className="w-[50%] md:w-[35%] mt-5 z-10 md:max-w-[350px]"
          animate={{ y: [0, -20, 0] }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      </div>

      <div className='font-custom text-black bg-yellow-300 py-1 text-lg'>
        <Marquee>$Keiko $Keiko $Keiko $Keiko $Keiko $Keiko $Keiko $Keiko $Keiko $Keiko $Keiko $Keiko $Keiko $Keiko $Keiko $Keiko $Keiko $Keiko $Keiko $Keiko&nbsp;</Marquee>
      </div>

      <div className="w-full bg-black p-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-bold mb-4 text-center font-custom text-yellow-300">Keiko's Story</h2>
          <div className="bg-gray-100 rounded-lg shadow-md">
            <iframe
              src="https://www.worldanimalprotection.us/latest/blogs/story-keiko-first-captive-orca-returned-wild/"
              title="Keiko's Story"
              className="w-full h-[600px] border-0"
              sandbox="allow-scripts allow-same-origin"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;