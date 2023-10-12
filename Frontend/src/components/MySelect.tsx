import { COMMON_TWSTYLES } from '../data/consts'

type MySelectProps = {
  options: Option[]
  value: Option | null
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void
}

export function MySelect({ options, value, onChange }: MySelectProps) {
  return (
    <div className='relative'>
      <select
        value={value?.id}
        onChange={event => onChange(event)}
        className={COMMON_TWSTYLES.input}
        required>
        <option value=''>Selecciona tu ciudad</option>
        {options.map(option => (
          <option
            key={option.id}
            value={option.id}
            className='p-2 text-base'>
            {option.title}
          </option>
        ))}
      </select>
    </div>
  )
}