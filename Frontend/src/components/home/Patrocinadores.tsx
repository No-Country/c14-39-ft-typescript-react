const Patrocinadores = () => {
  return (
    <section className='w-full py-12 bg-black'>
      <h2 className='pb-8 text-3xl md:text-4xl wrapper text-base-blue2 font-display'>Patrocinadores</h2>
      <div className='flex flex-wrap justify-center gap-3 md:flex-row wrapper'>
        <img
          className='w-full max-w-[140px]'
          src='./sponsor/sponsor1.svg'
        />
        <img
          className='w-full max-w-[140px]'
          src='./sponsor/sponsor2.svg'
        />
        <img
          className='w-full max-w-[140px]'
          src='./sponsor/sponsor3.svg'
        />
        <img
          className='w-full max-w-[140px]'
          src='./sponsor/sponsor4.svg'
        />
        <img
          className='w-full max-w-[140px]'
          src='./sponsor/sponsor5.svg'
        />
      </div>
    </section>
  )
}

export default Patrocinadores
