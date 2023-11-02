import { FALLBACKS } from "../../data/consts"
import { useSportCamp } from "../../data/useSportData"
import { Camp } from "../../types/types"
import { formatPrice } from "../../utils/utils"
import { CanchaSelectorSkeleton } from "./Skeletons"

export function CanchaSelector({
  canchaId,
  selected,
  onSelectCancha,
}: {
  canchaId: string
  selected: Camp
  onSelectCancha: (cancha: Camp) => void
}) {
  const { sportCampInfo, isLoading, isError, errorMessage } =
    useSportCamp(canchaId)

  const selectedClass =
    selected?._id === sportCampInfo?._id
      ? "bg-base-blue2 text-white"
      : "bg-white"

  const precio = sportCampInfo?.sca_price
    ? sportCampInfo?.sca_price
    : FALLBACKS.CAMP_PRICE
  const precioFormatted = formatPrice(precio, sportCampInfo?.sca_price_ISO)
  return (
    <>
      {isLoading && <CanchaSelectorSkeleton />}
      {isError && <p>{errorMessage}</p>}
      {sportCampInfo && (
        <div
          className={`grid grid-cols-[auto_1fr] gap-2 rounded-2xl min-h-[96px] md:min-h-[48px] h-full shadow-sh-sm cursor-pointer ${selectedClass}`}
          onClick={() => onSelectCancha(sportCampInfo)}>
          <img
            className='object-cover w-16 h-full md:w-12 rounded-bl-2xl rounded-tl-2xl'
            // src={sportCampInfo?.sca_imgs[0] ?? FALLBACKS.SPORT_CAMP}
            src={FALLBACKS.SPORT_CAMP}
            alt={sportCampInfo?.camp_type_id.sca_type_name}
          />
          <div className='flex flex-col justify-center flex-1 py-2 pr-2'>
            <p className='text-lg font-bold leading-[1.11em]'>
              {sportCampInfo?.camp_type_id.sca_type_name}
            </p>
            <p className='text-sm '>{precioFormatted}</p>
            <p className='text-xs tracking-[0.02em]  opacity-80'>
              {sportCampInfo?.camp_type_id.sca_type_description}
            </p>
          </div>
        </div>
      )}
    </>
  )
}
