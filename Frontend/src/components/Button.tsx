type ButtonProps = {
  label?: string
  style?: 'secondary' | 'primary'
  type?: 'button' | 'submit'
  onClick?: () => void
  override?: string
}

export const Button = ({ label = 'Button', style, type = 'button', onClick, override }: ButtonProps) => {
  const buttonClass = style === 'secondary' ? 'bg-black text-base-green2 outline-black' : 'bg-white text-black outline-white'

  return (
    <button
      onClick={onClick}
      type={type}
      className={`font-body text-xl px-4 py-1 rounded-full outline outline-offset-0 transition-all duration-300 ease-in-out hover:outline-offset-4 outline-1  ${buttonClass} ${override}`}>
      {label}
    </button>
  )
}
