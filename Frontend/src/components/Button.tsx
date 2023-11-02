type ButtonProps = {
  label?: string
  style?: 'secondary' | 'primary'
  type?: 'button' | 'submit'
  onClick?: () => void
  override?: string
  icon?: React.ReactNode
  disabled?: boolean
}

export const Button = ({ label = 'Button', type = 'button', style, onClick, override, icon, disabled }: ButtonProps) => {
  const buttonClass = style === 'secondary' ? 'bg-black text-base-green2 outline-black' : 'bg-white text-black outline-white'

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      type={type}
      className={`text-center text-balance font-body text-xl px-4 py-1 rounded-full outline outline-offset-0 transition-all duration-300 ease-in-out hover:outline-offset-4 outline-1 flex gap-2 items-center justify-center ${buttonClass} ${override}`}>
      {label}
      {icon && icon}
    </button>
  )
}
