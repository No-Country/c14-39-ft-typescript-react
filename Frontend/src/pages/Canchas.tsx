import { RowItem } from '../components/form/RowItem'
import { Map, Marker, Overlay } from 'pigeon-maps'
import { options } from '../services/manageData'
import { calculateAverageLatLng } from '../utils/utils'
import { Anchor, Proveedor } from '../types/types'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ROUTES } from '../data/consts'
import { Stepper } from '../components/bookingSection/Stepper'

const Canchas = () => {
  const [selectedSite, setSelectedSite] = useState<Proveedor | null>(null)

  const locPoints = options.map(option => option.anchor)
  const averageLatLng: Anchor = calculateAverageLatLng(locPoints)

  const navigate = useNavigate()

  const handleClick = (proveedor: Proveedor) => {
    setSelectedSite(proveedor)
    navigate(`${ROUTES.FIELDS}/${proveedor?.id}`)
  }

  return (
    <section className='wrapper animate-fade-in'>
      <h1 className='w-full mb-4 text-2xl md:text-4xl font-display'>Bogotá, Colombia</h1>

      <div className='grid md:grid-cols-[40%_1fr]  gap-2 rounded-[2rem] backdrop-filter backdrop-blur-[20px] bg-white/60 mb-6'>
        <Stepper
          paso={2}
          total={3}
          mensaje='Escoge tu cancha favorita.'
          overrideClasses='md:col-span-2 px-4 pt-4'
        />

        <div className='flex flex-col h-full gap-2 p-4 overflow-x-hidden overflow-y-auto'>
          {options.map(proveedor => (
            <RowItem
              proveedor={proveedor}
              key={proveedor.id}
              onClick={() => handleClick(proveedor)}
            />
          ))}
        </div>

        <div className='overflow-hidden rounded-[2rem] relative h-full flex-1 w-full bg-slate-300 min-h-[500px]'>
          <Map
            defaultCenter={averageLatLng}
            defaultZoom={12}
            twoFingerDrag={true}
            metaWheelZoom={true}>
            {options.map(proveedor => (
              <Marker
                key={`marker${proveedor.id}`}
                width={50}
                anchor={proveedor.anchor}
                onClick={() => setSelectedSite(proveedor)}
              />
            ))}
            {selectedSite && (
              <Overlay
                key={`overlay${selectedSite.id}`}
                anchor={selectedSite.anchor}
                className='px-3 py-1 bg-white rounded-lg shadow-sh-md animate-fade-in'>
                <h3 onClick={() => handleClick(selectedSite)}>{selectedSite.nombre}</h3>
              </Overlay>
            )}
          </Map>
        </div>
      </div>
    </section>
  )
}

export default Canchas
