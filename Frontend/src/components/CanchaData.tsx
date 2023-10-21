import { Button } from './Button'
import { Proveedor } from '../types/types'

export function CanchaData({ proveedor }: { proveedor: Proveedor | undefined }) {
  const provInstalaciones = `${proveedor?.canchas.length} canchas | ${proveedor?.instalaciones.join(', ')}`
  return (
    <article className='flex items-center py-0 font-body wrapper'>
      <div className='flex flex-col gap-3 p-4 md:p-0 rounded-[2rem] md:rounded-none md:w-1/2 bg-base-green1 md:bg-transparent'>
        <h1 className='text-3xl md:text-6xl font-display '>{proveedor?.nombre}</h1>
        <p>
          <strong>Ubicación:</strong> {proveedor?.ubicacion}
        </p>
        <p>
          <strong>Tamaño:</strong> {proveedor?.tamano} m<sup>2</sup>
        </p>
        <p>
          <strong>Instalaciones:</strong> {provInstalaciones}
        </p>
        <div className='flex justify-center'>
          <Button label='Ver más datos' />
        </div>
      </div>
    </article>
  )
}