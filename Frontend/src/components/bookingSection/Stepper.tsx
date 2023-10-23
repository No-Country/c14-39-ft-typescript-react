import { ComponentProps } from 'react'
import { CustomFlowbiteTheme, Progress } from 'flowbite-react'

export type Stepper = {
  overrideClasses?: ComponentProps<'div'>['className']
  paso: number
  total: number
  mensaje: string
}

const customTheme: CustomFlowbiteTheme['progress'] = {
  color: {
    blue: 'bg-base-blue1',
  },
}

export function Stepper({ overrideClasses = '', paso, total, mensaje }: Stepper) {
  const progressVal = Math.round((paso / total) * 100)
  return (
    <header className={`w-full ${overrideClasses}`}>
      {/* <h2 className='w-full'>{`Paso ${paso} de ${total}: ${mensaje}`}</h2> */}
      <Progress
        theme={customTheme}
        progress={progressVal}
        size='lg'
        color='blue'
        textLabel={`Paso ${paso} de ${total}: ${mensaje}`}
        textLabelPosition='outside'
      />
    </header>
  )
}
