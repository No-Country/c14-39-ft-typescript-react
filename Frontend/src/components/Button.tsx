type ButtonProps = {
  label?: string
  style?: 'secondary' | 'primary'
  type?: 'button' | 'submit'
  onClick?: () => void
  override?: string
}

export const Button = ({ label = 'Button', style, type = 'button', onClick, override }: ButtonProps) => {
  const buttonClass = style === 'secondary' ? 'bg-base-black text-base-green2' : 'bg-base-white text-base-black'

  return (
    <button
      onClick={onClick}
      type={type}
      className={`font-body text-xl px-4 py-1 rounded-full ${buttonClass} ${override}`}>
      {label}
    </button>
  )
}
