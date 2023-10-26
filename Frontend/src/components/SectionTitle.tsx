import { ChevronLeftIcon } from '@heroicons/react/24/outline'
import { useNavigate } from 'react-router-dom'

export function SectionTitle({ title }: { title: string | undefined }) {
  const navigate = useNavigate()
  const goBack = () => navigate(-1)
  return (
    <header className='flex gap-2 mb-4'>
      <button
        className='flex items-center justify-center flex-shrink-0 w-12 h-12 rounded-full outline outline-1 outline-white'
        onClick={() => goBack()}>
        <ChevronLeftIcon className='w-6 h-6' />
      </button>
      <h1 className='w-full text-2xl md:text-4xl font-display'>{title}</h1>
    </header>
  )
}
