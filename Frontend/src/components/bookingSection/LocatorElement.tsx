const LocatorElement = ({ color = 'text-base-green1' }: { color?: string }) => {
  return (
    <svg
      width='44'
      height='69'
      viewBox='0 0 44 69'
      fill='none'
      className={color}
      xmlns='http://www.w3.org/2000/svg'>
      <path
        fill-rule='evenodd'
        clip-rule='evenodd'
        d='M21.9847 66.632C21.9847 66.632 42.9695 34.1651 42.9695 22.3653C42.9695 10.5657 33.5739 1 21.9847 1C10.3956 1 1 10.5657 1 22.3653C1 34.1651 21.9847 66.632 21.9847 66.632ZM29.2274 19.2995C29.2274 23.3719 25.9836 26.6732 21.9846 26.6732C17.9837 26.6732 14.7419 23.3719 14.7419 19.2995C14.7419 15.2273 17.9837 11.9261 21.9846 11.9261C25.9836 11.9261 29.2274 15.2273 29.2274 19.2995Z'
        fill='currentColor'
        stroke='white'
        stroke-width='2'
      />
    </svg>
  )
}

export default LocatorElement
