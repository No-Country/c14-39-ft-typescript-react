export const BUSINESS = {
  name: 'Reserva tu campo',
  slogan: 'La forma más fácil de reservar canchas de fútbol.',
}

export const ROUTES = {
  HOME: '/',
  LOGIN: '/ingresa',
  SIGN_UP: '/registro',

  FIELDS: '/canchas',
  FIELDS_DETAIL: '/canchas/:cancha',
  CONFIRM: '/canchas/:cancha/confirm',

  ADMIN: '/admin',
  ANY: '*',
}

const basicInputStyle = 'w-full py-3 pr-9 pl-3 text-lg text-black bg-white border-2 appearance-none h-12pl-4 placeholder-base-blue1/60 border-base-blue1 focus:outline-none focus:ring-1 focus:ring-base-blue2 focus:border-base-blue2'

export const COMMON_TWSTYLES = {
  input: `${basicInputStyle} rounded-lg`,
  search: `${basicInputStyle} rounded-full`,
}
