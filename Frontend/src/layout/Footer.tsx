const Footer = () => {
  return (
    <footer className='w-full h-72 px-36 py-14 bg-base-blue1 text-white font-body text-lg'>
      <section className='w-full max-w-6xl my-0 mx-auto justify-between flex gap-4'>
        <div className='w-1/5 flex-col justify-start items-start gap-4 flex'>
          <div className='w-80 h-16 pt-0.5 pb-10 justify-center items-center inline-flex'>
            <div className='text-base-green2 text-3xl font-normal font-display'>Reserva tu campo</div>
          </div>
          <p className='opacity-60'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sintelit officia consequat</p>
        </div>

        <div className=''>
          <div className=' text-2xl'>Heading</div>
          <div className=' opacity-60'>Link here</div>
          <div className=' opacity-60'>Link here</div>
          <div className=' opacity-60'>Link here</div>
          <div className=' opacity-60'>Link here</div>
        </div>

        <div className=''>
          <div className=' text-2xl'>Heading</div>
          <div className=' opacity-60'>Link here</div>
          <div className=' opacity-60'>Link here</div>
          <div className=' opacity-60'>Link here</div>
          <div className=' opacity-60'>Link here</div>
        </div>

        <div className=''>
          <div className=' text-2xl'>Heading</div>
          <div className=' opacity-60'>Link here</div>
          <div className=' opacity-60'>Link here</div>
          <div className=' opacity-60'>Link here</div>
          <div className=' opacity-60'>Link here</div>
        </div>

        <div className='flex-col justify-start items-start gap-3 flex'>
          <div className='text-2xl'>Siguenos en redes</div>
          <div className='gap-4 flex'>
            <div className='w-8 h-8 relative' />
            <div className='w-8 h-8 relative' />
            <div className='w-8 h-8 relative' />
          </div>
        </div>
      </section>
    </footer>
  )
}

export default Footer
