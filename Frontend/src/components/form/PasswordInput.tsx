import { COMMON_TWSTYLES } from '../../data/consts'

export function PasswordInput() {
  return (
    <div className='flex flex-col gap-1.5'>
      <label
        htmlFor='password'
        className='text-sm font-medium leading-tight text-base-blue1'>
        Contraseña
      </label>
      <input
        type='password'
        name='password'
        id='password'
        className={COMMON_TWSTYLES.input}
        placeholder=''
      />
    </div>
  )
}
