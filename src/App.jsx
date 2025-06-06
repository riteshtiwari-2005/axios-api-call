import React from 'react'
import Random from './components/Random'
import Tag from './components/Tag'

export default function App() {

  return (
    <div className='w-full h-screen flex flex-col background relative overflow-x-hidden gap-3'>
      <h1 className='bg-white rounded-lg  w-11/12 text-center mt-[40px] px-10 py-2 text-3xl font-bold mx-auto'>Random Gif</h1>
      <div className='flex flex-col w-full items-center pt-[50px] pb-[100px] space-y-10 '>
        <Random/>
        <Tag/>
      </div>
    </div>
  )
}
