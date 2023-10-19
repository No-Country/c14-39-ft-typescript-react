import { Cancha } from '../../types/types'

export function CanchaSelector({ cancha, selected, onSelectCancha }: { cancha: Cancha; selected: Cancha; onSelectCancha: () => void }) {
  const selectedClass = selected?.nombre === cancha?.nombre ? 'bg-base-blue2 text-white' : 'bg-white'
  return (
    <div
      className={`grid grid-cols-[auto_1fr] gap-2 rounded-2xl min-h-14 h-full shadow-sh-sm cursor-pointer ${selectedClass}`}
      onClick={onSelectCancha}>
      <img
        className='object-cover w-12 h-full rounded-bl-2xl rounded-tl-2xl'
        src={cancha.imagen}
        alt={cancha.nombre}
      />
      <div className='flex flex-col justify-center flex-1 py-2 pr-2'>
        <p className='text-lg font-bold leading-[1.11em]'>{cancha.nombre}</p>
        <p className='text-sm font-normal tracking-[0.02em] leading-[18px]'>{cancha.superficie}</p>
      </div>
    </div>
  )
}
