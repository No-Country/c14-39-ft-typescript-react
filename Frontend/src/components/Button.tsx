type ButtonProps = {
  label?: string
  style?: 'secondary' | 'primary'
  type?: 'button' | 'submit'
}

export const Button = ({ label = 'Button', style, type = 'button' }: ButtonProps) => {
  const buttonClass = style === 'secondary' ? 'bg-base-black text-base-green2' : 'bg-base-white text-base-black'

  return (
    <button
      type={type}
      className={`font-body text-xl px-4 py-1 rounded-full ${buttonClass}`}>
      {label}
    </button>
  )
}
