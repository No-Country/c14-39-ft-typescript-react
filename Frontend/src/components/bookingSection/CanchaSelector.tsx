import { useSportCamp } from '../../data/useSportData'
import { Camp } from '../../types/types'

export function CanchaSelector({ canchaId, selected, onSelectCancha }: { canchaId: string; selected: Camp; onSelectCancha: (cancha: Camp) => void }) {
  const { sportCampInfo, isLoading, isError, errorMessage } = useSportCamp(canchaId)

  const selectedClass = selected?._id === sportCampInfo?._id ? 'bg-base-blue2 text-white' : 'bg-white'
  return (
    <>
      {isLoading && <p>Cargando...</p>}
      {isError && <p>{errorMessage}</p>}
      {sportCampInfo && (
        <div
          className={`grid grid-cols-[auto_1fr] gap-2 rounded-2xl min-h-[96px] md:min-h-[48px] h-full shadow-sh-sm cursor-pointer ${selectedClass}`}
          onClick={() => onSelectCancha(sportCampInfo)}>
          <img
            className='object-cover w-16 h-full md:w-12 rounded-bl-2xl rounded-tl-2xl'
            src={sportCampInfo?.sca_imgs[0]}
            alt={sportCampInfo?.camp_type_id.sca_type_name}
          />
          <div className='flex flex-col justify-center flex-1 py-2 pr-2'>
            <p className='text-lg font-bold leading-[1.11em]'>{sportCampInfo?.camp_type_id.sca_type_name}</p>
            <p className='text-sm font-normal tracking-[0.02em] leading-[18px]'>{sportCampInfo?.sca_capacity}</p>
          </div>
        </div>
      )}
    </>
  )
}
