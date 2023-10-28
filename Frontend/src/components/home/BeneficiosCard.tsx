type BeneficiosCardProps = {
  titulo: string
  contenido: string
  Icono: React.ForwardRefExoticComponent<
    Omit<React.SVGProps<SVGSVGElement>, 'ref'> & {
      title?: string | undefined
      titleId?: string | undefined
    } & React.RefAttributes<SVGSVGElement>
  >
}

export const BeneficiosCard = ({ titulo, contenido, Icono }: BeneficiosCardProps) => {
  return (
    <div className='grid grid-cols-[2rem_1fr] grid-rows-[auto] shadow-sh-sm rounded-2xl px-4 py-2 bg-white'>
      <Icono className='col-span-1 row-span-2 w-7 h-7 text-base-blue2' />
      <h3 className='col-start-2 row-span-1 text-2xl font-bold'>{titulo}</h3>
      <p className='col-start-2'>{contenido}</p>
    </div>
  )
}
