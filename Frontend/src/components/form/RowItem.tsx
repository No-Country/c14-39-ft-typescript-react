import { ClockIcon } from '@heroicons/react/24/outline'
import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { MapPinIcon } from '@heroicons/react/24/outline'
import { ListSportCenter } from '../../types/types'

export const RowItem = ({ proveedor, onClick }: { proveedor: ListSportCenter; onClick: () => void }) => {
  const cantCanchas = proveedor?.list_sport_camps?.length ?? 0
  const infoCanchas = proveedor?.sc_info.sc_email
  const proveedorInfo = `${cantCanchas} canchas | ${infoCanchas}`

  return (
    <button
      className='flex items-center gap-2 px-2 py-4 text-left bg-white rounded-2xl shadow-sh-sm disabled:opacity-40 disabled:grayscale'
      disabled={cantCanchas === 0}
      onClick={onClick}>
      <div className='flex items-start flex-1 min-w-0 gap-2'>
        <MapPinIcon className='w-6 text-base-blue2' />
        <div className='flex flex-col items-start justify-center flex-1 min-w-0 gap-1'>
          <p className='w-full text-xl font-bold leading-[1.11em]'>{proveedor.sc_name}</p>
          <p className='w-full text-sm font-normal  leading-[18px]'>{proveedorInfo}</p>
        </div>
      </div>
      <div className='flex items-center justify-end gap-2'>
        <p className='font-normal text-black/80 '>Ir</p>
        <ChevronRightIcon className='w-6 h-6' />
      </div>
    </button>
  )
}

export const RowTiempo = ({ title, onClick }: { title: string; onClick: () => void }) => {
  return (
    <div
      className='flex items-center gap-2 px-2 py-4 bg-white cursor-pointer rounded-2xl shadow-sh-sm'
      onClick={onClick}>
      <div className='flex items-start flex-1 min-w-0 gap-2'>
        <ClockIcon className='w-6 text-base-blue2' />
        <div className='flex flex-col items-start justify-center flex-1 min-w-0 gap-1'>
          <p className='w-full text-[22px] font-bold leading-[1.11em]'>{title}</p>
        </div>
      </div>
      <div className='flex items-center justify-end gap-2'>
        <p className='font-normal text-black/80 '>Reservar</p>
        <ChevronRightIcon className='w-6 h-6' />
      </div>
    </div>
  )
}
