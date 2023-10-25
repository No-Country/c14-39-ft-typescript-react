import { UseFormRegisterReturn } from 'react-hook-form';
import { COMMON_TWSTYLES } from '../../data/consts'
import React from 'react';

interface EmailInputProps extends React.InputHTMLAttributes<HTMLInputElement> {register?: UseFormRegisterReturn, error?: string}

export const EmailInput: React.FC<EmailInputProps> = ({ register, ...props }) => {
  return (
    <div className='flex flex-col gap-1.5'>
      <label
        htmlFor='email'
        className='text-sm font-medium leading-tight text-base-blue1'>
        Email
      </label>
      <input
        {...props}
        {...register}
        type='email'
        name='email'
        id='email'
        className={COMMON_TWSTYLES.input}
        placeholder='leo@gmail.com'
      />
      {props.error && <p className="text-red-500 text-xs italic">{props.error}</p>}
    </div>
  )
}