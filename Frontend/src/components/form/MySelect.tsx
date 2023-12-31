import { COMMON_TWSTYLES } from '../../data/consts'
import { City } from '../../types/types'

type MySelectProps = {
  options: City[]
  value: City | null
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
  name: string
}

export function MySelect({ options, value, onChange, name }: MySelectProps) {
  return (
    <div className='relative w-full'>
      <select
        value={value?.id}
        onChange={event => onChange(event)}
        className={COMMON_TWSTYLES.input}
        name={name}
        required>
        <option value=''>Selecciona tu ciudad</option>
        {options.map(option => (
          <option
            key={option.id}
            value={option.id}
            className='w-full p-2'>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  )
}
