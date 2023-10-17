import mockData from '../data/mockdata.json'

export const options = mockData.map(cancha => {
  const mappedOption: Option = {
    title: cancha?.nombre,
    id: Number(cancha?.id),
  }
  return mappedOption
})
