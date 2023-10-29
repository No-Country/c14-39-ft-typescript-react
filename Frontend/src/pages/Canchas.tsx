import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { ListSportCenter } from '../types/types'

import { AppContext } from '../context/appcontext'

import { ROUTES } from '../data/consts'
import { useCity } from '../data/useSportData'

import { Stepper } from '../components/bookingSection/Stepper'
import { RowItem } from '../components/form/RowItem'
import { Mapa } from '../components/bookingSection/Mapa'

import { SectionTitle } from '../components/SectionTitle'

const Canchas = () => {
  const [selectedSite, setSelectedSite] = useState<ListSportCenter | null>(null)

  const { cityId } = useContext(AppContext)
  const { cityInfo, isLoading, isError, errorMessage } = useCity(cityId as string)

  const list_sport_centers = cityInfo?.list_sport_centers?.filter(center => center.sc_active) || []

  const navigate = useNavigate()

  const handleClick = (proveedor: ListSportCenter) => {
    setSelectedSite(proveedor)
    navigate(`${ROUTES.FIELDS}/${proveedor?._id}`)
  }

  return (
    <section className='wrapper animate-fade-in'>
      {isLoading && <p>Cargando...</p>}
      {isError && !isLoading && <p>{errorMessage}</p>}

      {!isLoading && !isError && cityInfo && (
        <>
          <SectionTitle title={cityInfo.name} />

          <article className='grid md:grid-cols-[40%_1fr]  gap-2 rounded-[2rem] backdrop-filter backdrop-blur-[20px] bg-white/60 mb-6'>
            <Stepper
              paso={2}
              total={3}
              mensaje='Escoge tu cancha favorita.'
              overrideClasses='md:col-span-2 px-4 pt-4'
            />

            <section className='flex flex-col h-full gap-2 p-4 overflow-x-hidden overflow-y-auto'>
              {list_sport_centers?.map(proveedor => (
                <RowItem
                  proveedor={proveedor}
                  key={proveedor._id}
                  onClick={() => handleClick(proveedor)}
                />
              ))}
            </section>

            <section className='overflow-hidden rounded-[2rem] relative h-full flex-1 w-full bg-slate-300 min-h-[500px]'>
              <Mapa
                cityInfo={cityInfo}
                list_sport_centers={list_sport_centers}
                selectedSite={selectedSite}
                setSelectedSite={setSelectedSite}
                handleClick={handleClick}
              />
            </section>
          </article>
        </>
      )}
    </section>
  )
}
export default Canchas
