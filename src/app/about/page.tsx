import Footbar from '@/components/Footbar/Footer'
import Navbar from '@/components/Navbar/Navbar'
import React from 'react'

export default function page() {
  return (
      <section>
          <div>
              <Navbar/>
          </div>
          <div className='h-[100vh]'>
              hello
          </div>
          {/* <div>
              <Footbar/>
          </div> */}
</section>
  )
}
