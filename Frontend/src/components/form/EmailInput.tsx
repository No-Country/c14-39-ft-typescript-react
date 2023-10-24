import { COMMON_TWSTYLES } from '../../data/consts'

export function EmailInput() {
  return (
    <div className='flex flex-col gap-1.5'>
      <label
        htmlFor='email'
        className='text-sm font-medium leading-tight text-base-blue1'>
        Email
      </label>
      <input
        type='email'
        name='email'
        id='email'
        className={COMMON_TWSTYLES.input}
        placeholder='leo@gmail.com'
      />
    </div>
  )
}
