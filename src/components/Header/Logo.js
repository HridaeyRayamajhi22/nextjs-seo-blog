import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import profileImg from "@/public/profile-image.png"

const Logo = () => {
  return (
    <div>
      <Link href="/" className='flex items-center text-dark'>
        {/* Image container */}
        <div className='relative w-12 sm:w-16 md:w-16 h-12 sm:h-16 md:h-16 rounded-full overflow-hidden border border-solid border-dark mr-3 sm:mr-5'>
          <Image 
            src={profileImg} 
            alt='Hridaey Raya' 
            fill 
            className='object-cover'
          />
        </div>

        {/* Text */}
        <span className='font-bold text-lg sm:text-2xl md:text-2xl'>Hridaey</span>
      </Link>
    </div>
  )
}

export default Logo;
