import { CustomFlowbiteTheme, Datepicker } from 'flowbite-react'

const customTheme: CustomFlowbiteTheme['datepicker'] = {
  popup: {
    root: {
      base: 'p-0',
      inner: 'inline-block rounded-lg bg-white p-4 shadow-lg',
    },
    header: {
      title: 'px-2 py-3 text-center font-semibold text-gray-900',
      selectors: {
        button: {
          base: 'text-sm rounded-lg text-gray-900 bg-white font-semibold py-2.5 px-5 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 view-switch',
        },
      },
    },
    view: {
      base: 'p-0',
    },
  },
  views: {
    days: {
      header: {
        title: 'dow h-6 text-center text-sm font-medium leading-6 text-gray-500',
      },
      items: {
        item: {
          base: 'block flex-1 cursor-pointer rounded-lg border-0 text-center text-sm font-semibold leading-9 text-gray-900 hover:bg-gray-100  ',
          disabled: 'text-gray-200',
        },
      },
    },
  },
}

type CalendarioProps = {
  minDate: Date
  maxDate: Date
  showDate: (date: Date) => void
}

export const Calendario = ({ minDate, maxDate, showDate }: CalendarioProps) => {
  return (
    <Datepicker
      theme={customTheme}
      inline
      showTodayButton={false}
      showClearButton={false}
      onSelectedDateChanged={showDate}
      minDate={minDate}
      maxDate={maxDate}
      defaultDate={minDate}
    />
  )
}
