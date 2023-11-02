export const CanchaSelectorSkeleton = () => {
  return (
    <div className='rounded-2xl min-h-[96px] md:min-h-[48px] h-full bg-white/60'></div>
  )
}

export const CanchasSkeleton = () => {
  return (
    <>
      <section className='flex flex-col h-full gap-2 p-4 overflow-x-hidden overflow-y-auto'>
        <div className='w-full h-20 rounded-2xl bg-gray-500/10'></div>
        <div className='w-full h-20 rounded-2xl bg-gray-500/10'></div>
        <div className='w-full h-20 rounded-2xl bg-gray-500/10'></div>
      </section>
      <section className='overflow-hidden rounded-[2rem] h-full flex-1 w-full bg-slate-300 min-h-[500px] bg-gray-500/10'></section>
    </>
  )
}
export const CanchaSkeleton = () => {
  return (
    <>
      <article className='flex items-center py-0 wrapper'>
        <div className='w-full flex flex-col gap-3 p-4 md:p-0 rounded-[2rem] md:rounded-none md:w-1/2 bg-base-green1 md:bg-transparent'>
          <div className='w-full h-32 rounded-lg bg-white/60'></div>
        </div>
      </article>
      <article className='wrapper'>
        <div className='rounded-[2rem] w-full bg-white/60 h-64'></div>
      </article>
    </>
  )
}
export const ReservationFormSkeleton = () => {
  return (
    <>
      <div className='grid w-full gap-8 md:grid-cols-2 md:flex-nowrap md:gap-20'>
        <div className='w-full'>
          <div className='h-4 rounded bg-white/60'></div>
          <div className='h-12 rounded bg-white/60'></div>
        </div>
        <div className='w-full'>
          <div className='h-4 rounded bg-white/60'></div>
          <div className='h-12 rounded-full bg-white/60'></div>
        </div>
      </div>
    </>
  )
}

export const RouteSkeleton = () => {
  return (
    <div className='w-full h-64 wrapper bg-white/60 rounded-3xl'>
      <p>Cargando contenido...</p>
    </div>
  )
}
