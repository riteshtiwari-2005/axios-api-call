import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Spinner from './Spinner';

export default function Random() {
  const [image, setImage] = useState(
    'https://media3.giphy.com/media/v1.Y2lkPThjZjgwZDI4aGQ0MTV6aHR2eXZ1ZjBwYXhmY3BnNTV4cXE2YWZ6NXpqcThiZ2wxdSZlcD12MV9naWZzX3JhbmRvbSZjdD1n/l2YWeSI2UTcmHjML6/giphy.gif'
  );
  const [change, setChange] = useState(true);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function fetchData() {
      setLoading(true);
      try {
        const url = `https://api.giphy.com/v1/gifs/random?api_key=${process.env.REACT_APP_APIKEY}`;
        const { data } = await axios.get(url);
        const imageURL = data.data.images.downsized_large.url;
        setImage(imageURL);
      } catch (err) {
        console.error('Failed to fetch gif', err);
      }
      setLoading(false);
    }
    fetchData();
  }, [change]);

  return (
    <div className="bg-gradient-to-br from-green-300 to-green-500 min-h-[600px] w-full lg:w-1/2 border border-black flex flex-col items-center justify-between p-6 rounded-xl shadow-xl transition-all duration-300">
      <h1 className="text-3xl font-bold text-white underline uppercase mb-4 text-center">Random Gif</h1>

      <div className="flex justify-center items-center min-h-[300px] w-full">
        {loading ? (
          <Spinner />
        ) : (
          <img
            src={image}
            alt="Random GIF"
            className="rounded-xl shadow-lg object-contain max-w-full h-[300px] transition-all duration-300"
          />
        )}
      </div>

      <button
        className="uppercase w-4/5 max-w-xs py-3 bg-white/80 hover:bg-white text-green-700 font-semibold rounded-lg mt-6 transition-all duration-200"
        onClick={() => setChange((prev) => !prev)}
      >
        Generate New Gif
      </button>
    </div>
  );
}
