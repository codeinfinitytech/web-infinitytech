import React from 'react'

const Last = () => {

    const FOOTS = [
        'Community Standards',
        'Privacy Policy',
        'Terms',
        'Cookie policy'
    ];

  return (
    <main className='padding-container max-container bg-white mb-0 text-[14px] w-full'>
        <div className="text-gray-400 p-6 gap-4 block md:flex justify-between ">
            <div className='flex gap-2'>
            <p className='hidden md:block'>&copy; 2024 INFINITY TECH SOLUTION.</p>
                { FOOTS.map((i) => (
                    <ul className='cursor-pointer hover:text-gray-300' key={i}>
                        <li className='whitespace-nowrap gap-10 flex flex-cols-2'>{i} |</li>
                    </ul>
                ))}
            </div>
            <p> All rights reserved.</p>
      </div>
    </main>
  )
}

export default Last