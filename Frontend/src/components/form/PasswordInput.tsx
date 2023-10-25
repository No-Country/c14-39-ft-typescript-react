import React from 'react';
import { COMMON_TWSTYLES } from '../../data/consts'
import { UseFormRegisterReturn } from 'react-hook-form';

interface PasswordInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  register?: UseFormRegisterReturn, error?: string
}

export const PasswordInput: React.FC<PasswordInputProps> = ({register, ...props}) => {
  return (
    <div className='flex flex-col gap-1.5'>
      <label
        htmlFor='password'
        className='text-sm font-medium leading-tight text-base-blue1'>
        Contraseña
      </label>
      <input
        {...props}
        {...register}
        type='password'
        name='password'
        id='password'
        className={COMMON_TWSTYLES.input}
        placeholder=''
      />
      {props.error && <p className="text-red-500 text-xs italic">{props.error}</p>}
    </div>
  )
}
