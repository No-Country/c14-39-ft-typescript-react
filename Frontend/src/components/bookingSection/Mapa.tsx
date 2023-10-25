import { Map, Marker, Overlay } from 'pigeon-maps'
import { Anchor, Datum, ListSportCenter } from '../../types/types'
import { calculateAverageLatLng } from '../../utils/utils'
// import LocatorElement from './LocatorElement'

type TMapa = {
  cityInfo: Datum
  selectedSite: ListSportCenter | null
  setSelectedSite: React.Dispatch<React.SetStateAction<ListSportCenter | null>>
  handleClick: (proveedor: ListSportCenter) => void
  list_sport_centers: ListSportCenter[] | undefined
}

export function Mapa({ cityInfo, list_sport_centers, selectedSite, setSelectedSite, handleClick }: TMapa) {
  const locPoints = list_sport_centers?.map(sport_center => [sport_center.sc_info.sc_lat, sport_center.sc_info.sc_alt])
  const averageLatLng: Anchor = calculateAverageLatLng(locPoints as Anchor[])

  return (
    <Map
      defaultCenter={averageLatLng}
      defaultZoom={12}
      twoFingerDrag={true}
      metaWheelZoom={true}
      attribution={false}>
      {list_sport_centers?.map(proveedor => (
        <Marker
          key={`${cityInfo?.name}marker${proveedor._id}`}
          width={50}
          anchor={[proveedor.sc_info.sc_lat, proveedor.sc_info.sc_alt]}
          onClick={() => setSelectedSite(proveedor)}
        />
      ))}
      {selectedSite && (
        <Overlay
          key={`${cityInfo?.name}overlay${selectedSite._id}`}
          anchor={[selectedSite.sc_info.sc_lat, selectedSite.sc_info.sc_alt]}>
          {selectedSite.list_sport_camps.length !== 0 ? (
            <h3
              className='px-3 py-1 rounded-lg cursor-pointer bg-base-blue1 text-base-green2 shadow-sh-md animate-fade-in'
              onClick={() => handleClick(selectedSite as ListSportCenter)}>
              {selectedSite?.sc_name}
            </h3>
          ) : (
            <h3 className='px-3 py-1 bg-white rounded-lg shadow-sh-md animate-fade-in'>{selectedSite?.sc_name}</h3>
          )}
        </Overlay>
      )}
    </Map>
  )
}
