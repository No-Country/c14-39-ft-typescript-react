import { ComponentProps } from 'react'
import { CustomFlowbiteTheme, Progress } from 'flowbite-react'

export type Stepper = {
  overrideClasses?: ComponentProps<'div'>['className']
  paso: number
  total: number
  mensaje?: string
}

const customTheme: CustomFlowbiteTheme['progress'] = {
  base: 'w-full overflow-hidden rounded-full bg-white/40',
  label: 'text-black',
  bar: 'rounded-full font-medium leading-none text-base-blue1 space-x-2 px-2',
  color: {
    blue: 'bg-base-blue2',
    green: 'bg-base-green3',
    dark: 'bg-white',
  },
}

export function Stepper({ overrideClasses = '', paso, total, mensaje }: Stepper) {
  const progressVal = Math.round((paso / total) * 100)
  return (
    <header className={`w-full ${overrideClasses}`}>
      <Progress
        theme={customTheme}
        progress={progressVal}
        size='sm'
        color='green'
        labelText
        textLabel={`Paso ${paso} de ${total}: ${mensaje}`}
        textLabelPosition='outside'
      />
    </header>
  )
}
