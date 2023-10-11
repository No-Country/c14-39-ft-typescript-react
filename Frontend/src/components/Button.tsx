type ButtonProps = {
  label?: string
  style?: 'secondary' | 'primary'
}

export const Button = ({ label = 'Button', style }: ButtonProps) => {
  const buttonClass = style === 'secondary' ? 'bg-base-black text-base-green2' : 'bg-base-white text-base-black'

  return <button className={`font-body text-xl px-4 py-1 rounded-full ${buttonClass}`}>{label}</button>
}
