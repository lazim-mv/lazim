import Image from 'next/image'
import React from 'react'

const ClientComponent = () => {
  return (
    <>
      <section className='max-screen md:py-lg md:pt-sm flex flex-col items-center gap-8 overflow-x-hidden pt-0 sm:flex-row md:gap-16'>
        <div className='relative w-full sm:w-1/2'>
          <div className='h-full w-full overflow-hidden rounded-b-full'>
            <Image
              alt="Hero Image"
              loading="lazy"
              width={400}
              height={600}
              decoding="async"
              data-nimg={1}
              className="aspect-3/4 h-full w-full object-cover transition duration-300 hover:scale-[1.015]"
              style={{ color: "transparent" }}
              src="/aboutpage/me.jpg"
              
            />

          </div>
        </div>
        <div className='justify-center items-center md:flex hidden'>
          <h1 className="text-[3rem] text-center leading-none text-pretty md:text-6xl lg:w-3/4 lg:text-7xl">
            Turning ideas into
            &nbsp;
            <span className="text-highlight-primary">immersive digital visions</span>
            &nbsp;
            that inspire action &amp;
            drive real impact
          </h1>
        </div>
      </section>
    </>
  )
}

export default ClientComponent