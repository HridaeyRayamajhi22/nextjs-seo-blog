import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import profileImg from "@/public/profile-image.png"

const Logo = () => {
  return (
    <div>
      <Link href="/">
        <div>
            <Image src={profileImg} alt='Hridaey Raya' className='w-full h-auto rounded-full'/>
        </div>
        <span>Hridaey</span>
    </Link>
    </div>
  )
}

export default Logo
