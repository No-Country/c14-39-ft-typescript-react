// Busines

export const BUSINESS = {
  name: 'Reserva tu campo',
  slogan: 'La forma más fácil de reservar canchas de fútbol.',
}

// ROUTES

export const ROUTES = {
  HOME: '/',
  LOGIN: '/ingresa',
  SIGN_UP: '/registro',

  BENEFITS: '/beneficios',
  US: '/nosotros',
  SPONSORS: '/patrocinadores',

  FIELDS: '/canchas',
  FIELDS_DETAIL: '/canchas/:cancha',
  CONFIRM: '/confirm',

  ADMIN: '/admin',
  ANY: '*',
}

// API related

export const API_URL = {
  BASE_URL: 'https://reservatucancha-5rse5st6p-reservatucancha.vercel.app/api/',
  COUNTRIES: 'countries/',
  SPORTCENTER: 'sportcenter/',
  SPORTCAMP: 'sportcamp/',
}

// Fallbacks

export const FALLBACKS = {
  SPORT_CENTER: 'https://images.pexels.com/photos/399187/pexels-photo-399187.jpeg?cs=srgb&fm=jpg&w=640&h=426',
  SPORT_CAMP: 'https://images.pexels.com/photos/1378425/pexels-photo-1378425.jpeg?cs=srgb&fm=jpg&w=640&h=360',
}

// styles

const basicInputStyle = 'w-full py-3 pr-9 pl-3 text-lg text-black bg-white border-2 appearance-none h-12pl-4 placeholder-base-blue1/60 border-base-blue1 focus:outline-none focus:ring-1 focus:ring-base-blue2 focus:border-base-blue2'

export const COMMON_TWSTYLES = {
  input: `${basicInputStyle} rounded-lg`,
  search: `${basicInputStyle} rounded-full`,
}
