import { Button } from './Button'
import { Center } from '../types/types'
import { useState } from 'react'

export function CanchaData({ proveedor }: { proveedor: Center | undefined }) {
  const [moreInfo, setMoreInfo] = useState<boolean>(false)

  const provInfo = `${proveedor?.sc_info.sc_email}`
  const provInstalaciones = `${proveedor?.list_sport_camps.length} canchas | ${provInfo}`

  const showMoreInfo = () => setMoreInfo(true)

  const showLessInfo = () => setMoreInfo(false)

  return (
    <article className='flex items-center py-0 font-body wrapper'>
      <div className='w-full flex flex-col gap-3 p-4 md:p-0 rounded-[2rem] md:rounded-none md:w-1/2 bg-base-green1 md:bg-transparent'>
        <h1 className='text-2xl md:text-4xl font-display '>{proveedor?.sc_name}</h1>
        <p>
          <strong>Ubicación:</strong> {proveedor?.sc_info.sc_address}
        </p>
        {moreInfo ? (
          <>
            <p>
              <strong>Instalaciones:</strong> {provInstalaciones}
            </p>
            <p>{proveedor?.sc_description}</p>
            <div className='flex justify-center'>
              <Button
                label='Ver menos datos'
                onClick={showLessInfo}
              />
            </div>
          </>
        ) : null}
        {!moreInfo ? (
          <div className='flex justify-center'>
            <Button
              label='Ver más datos'
              onClick={showMoreInfo}
            />
          </div>
        ) : null}
      </div>
    </article>
  )
}
