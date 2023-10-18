import { CustomFlowbiteTheme, Datepicker } from 'flowbite-react'

export function Calendario({ minDate, maxDate, showDate }: { minDate: Date; maxDate: Date; showDate: (date: Date) => void }) {
  const customTheme: CustomFlowbiteTheme['datepicker'] = {
    popup: {
      root: {
        base: 'p-0',
      },
      view: {
        base: 'p-0',
      },
    },
    views: {
      days: {
        items: {
          item: {
            disabled: 'text-gray-200',
          },
        },
      },
    },
  }
  return (
    <Datepicker
      theme={customTheme}
      inline
      showTodayButton={false}
      showClearButton={false}
      onSelectedDateChanged={showDate}
      minDate={minDate}
      maxDate={maxDate}
    />
  )
}
