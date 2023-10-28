import React from 'react'
import { COMMON_TWSTYLES } from '../../data/consts'
import { UseFormRegisterReturn } from 'react-hook-form'

interface NameInputProps extends React.InputHTMLAttributes<HTMLInputElement> {register:  UseFormRegisterReturn, error?: string }

export const NameInput: React.FC<NameInputProps> = ({ register, ...props }) => {

  return (
    <div className='flex flex-col gap-1.5'>
      <label
            htmlFor='name'
            className='text-sm font-medium leading-tight text-base-blue1'>
            Nombre
          </label>
          <input
            {...props}
            {...register}
            type='text'
            name='name'
            id='name'
            className={COMMON_TWSTYLES.input}
            placeholder='Leonardo'
          />
          {props.error && <p className="text-red-500 text-xs italic">{props.error}</p>}
      </div>
  )
}
