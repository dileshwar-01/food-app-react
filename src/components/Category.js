import React from 'react'
import { categories } from '../data/data'
const Category = () => {
    console.log(categories)
  return (
    <div className='max-w-[1640px] mx-auto px-4 py-12'>
      <h1 className='text-orange-600 font-bold text-4xl text-center'>Top Rated Menu Categories</h1>
      {/* Categories */}
      <div className='grid grid-cols-2 md:grid-cols-4 gap-6 py-6'>
        {categories.map((items,index)=>(
            <div key={index} className=' bg-gray-100 rounded-lg p-4 justify-between items-center'>
                <h2 className='font-bold sm:text-xl'>{items.name}</h2>
                <img
                className='w-20'
                src={items.image} alt={items.name} />
            </div>
        ))}
      </div>
    </div>
  )
}

export default Category
