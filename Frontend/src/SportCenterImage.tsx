import { FALLBACKS } from './data/consts'

const SportCenterImage = ({ imageUrl }: { imageUrl: string }) => {
  const imgOnError = (e: React.SyntheticEvent<HTMLImageElement, Event>) => {
    e.currentTarget.src = FALLBACKS.SPORT_CENTER
  }

  return (
    <img
      src={imageUrl}
      onError={imgOnError}
      alt='Esta imagen'
      className='absolute inset-0 object-cover w-full h-full -z-20'
    />
  )
}

export default SportCenterImage
