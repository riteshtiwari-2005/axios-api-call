import React, { useState, useEffect } from 'react';
import Spinner from './Spinner';
import axios from 'axios';

export default function Tag() {
   const [randomNumber, setRandomNumber] = useState(null);

  const generateRandomNumber = () => {
    const number = Math.floor(Math.random() * 10) + 1; // 1 to 10
    setRandomNumber(number);
  };
  const [change, setChange] = useState(true);
  const [loading, setLoading] = useState(false);
  const [name,setname]=useState({
    name:""
  })
    const [image, setImage] = useState("https://media3.giphy.com/media/v1.Y2lkPThjZjgwZDI4aGQ0MTV6aHR2eXZ1ZjBwYXhmY3BnNTV4cXE2YWZ6NXpqcThiZ2wxdSZlcD12MV9naWZzX3JhbmRvbSZjdD1n/l2YWeSI2UTcmHjML6/giphy.gif");

const changlehandle2=(e)=>{

setname( prev=>({
...prev,
[e.target.name]:e.target.value
}))

console.log(name.name)


}
  useEffect(() => {

    async function fetchData() {
      setLoading(true);
      try {
        const url = `https://api.giphy.com/v1/gifs/search?api_key=TJ3gQbQRnRRnBeWOQ1I9Y0tbhmIzU0Gj&q=${name.name}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips

`;
        const {data} = await axios.get(url);
        const dataImage = data.data[randomNumber].images.original.url;
        console.log(data.data[0])
        setImage(dataImage);
      } catch (err) {
        console.error("Error fetching image", err);
      }
      setLoading(false);
    }
    fetchData();
  }, [change]);

  return (
    <div className="min-h-[500px] w-full lg:w-1/2 bg-gradient-to-b from-blue-300 to-blue-500 border border-black flex flex-col items-center justify-between p-6 rounded-xl shadow-xl transition-all duration-300">
      <h1 className="text-3xl font-bold text-white underline uppercase mb-4 text-center">Random {name.name}</h1>

      <div className="flex flex-col justify-center items-center min-h-[300px] w-full">
        {
          loading ? (
            <div className="flex justify-center items-center h-[300px] w-full">
              <Spinner />
            </div>
          ) : (
            <img
              src={image}
              alt="Random GIF"
              className="rounded-xl shadow-lg object-contain max-w-full h-[300px] transition-all duration-300"
            />
          )
        }
<input type="text" name="name" id="" onChange={changlehandle2} value={name.name} placeholder="Enter Meme" className='text-center  w-full max-w-xs py-3 bg-white/80 hover:bg-white text-blue-700 font-semibold rounded-lg mt-6 transition-all duration-200' />
      <button
        className="uppercase w-full max-w-xs py-3 bg-white/80 hover:bg-white text-blue-700 font-semibold rounded-lg mt-6 transition-all duration-200"
        onClick={() => {
          generateRandomNumber()
          setChange(prev => !prev);
        }}
      >
        Generate New Gif
      </button>
      </div>

    </div>
  );
}
