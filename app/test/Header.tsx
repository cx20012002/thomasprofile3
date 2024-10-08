import React from 'react'
import Image from 'next/image'
export default function Header() {
  return (
    <div className='fixed top-0 w-full h-[100px] mix-blend-difference'>
      <div className='w-10 h-10 bg-green-300'/>
      <Image src="/logo-light-1.svg" alt="logo" width={95} height={41} />
    </div>
  )
}
