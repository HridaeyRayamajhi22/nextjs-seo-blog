import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import profileImg from "@/public/profile-image.png"

const Logo = () => {
  return (
    <div>
      <Link href="/" className='flex items-center text-dark '>
        <div className='w-16 rounded-full overflow-hidden border border-solid border-dark mr-5'>
            <Image src={profileImg} alt='Hridaey Raya' className='w-full h-auto rounded-full'/>
        </div>
        <span className='font-bold text-2xl'>Hridaey</span>
    </Link>
    </div>
  )
}

export default Logo
