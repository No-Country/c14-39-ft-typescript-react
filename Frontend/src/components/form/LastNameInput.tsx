import React from 'react'
import { UseFormRegisterReturn } from 'react-hook-form'
import { COMMON_TWSTYLES } from '../../data/consts'

interface LastNameInputProps extends React.InputHTMLAttributes<HTMLInputElement> {register: UseFormRegisterReturn, error?: string}

export const LastNameInput: React.FC<LastNameInputProps> = ({ register, ...props }) => {

  return (
    <div className='flex flex-col gap-1.5'>
      <label
        htmlFor='lastname'
        className='text-sm font-medium leading-tight text-base-blue1'>
        Apellido
      </label>
      <input
        {...props}
        {...register}
        type='text'
        name='lastname'
        id='lastname'
        className={COMMON_TWSTYLES.input}
        placeholder='Arias'
      />
      {props.error && <p className="text-red-500 text-xs italic">{props.error}</p>}
    </div>
  )
}
