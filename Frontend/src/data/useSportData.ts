import { useEffect, useState } from 'react'
import { Camp, Center, City, Datum, Main } from '../types/types'
import axios from 'axios'
import { API_URL } from './consts'

const fetcherInstance = axios.create({
  baseURL: API_URL.BASE_URL,
  timeout: 10000,
})

type useSportData = (query: string) => {
  sportData: Main | Datum
  isLoading: boolean
  isError: boolean
  errorMessage: string
}

export const useSportData = (query: string) => {
  const [sportData, setSportData] = useState<Main | Datum | null>()
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    setIsLoading(true)
    fetcherInstance
      .get(query)
      .then(response => {
        setSportData(response.data)
      })
      .catch(error => {
        setIsError(true)
        setErrorMessage(error.message)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [query])

  return { sportData, isLoading, isError, errorMessage }
}

export const useCities = () => {
  const [citiesData, setCitiesData] = useState<City[] | null>()
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    setIsLoading(true)
    fetcherInstance
      .get(API_URL.COUNTRIES)
      .then(response => {
        const data: City[] | undefined = response.data?.data?.map((item: Datum) => ({
          name: item.name,
          id: item._id,
        }))

        setCitiesData(data)
      })
      .catch(error => {
        setIsError(true)
        setErrorMessage(error.message)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [])

  // console.log(citiesData)

  return { citiesData, isLoading, isError, errorMessage }
}

export const useCity = (cityId: string) => {
  const reqURL = `${API_URL.COUNTRIES}${cityId}`

  const [cityInfo, setCityInfo] = useState<Datum | null>()
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    setIsLoading(true)
    fetcherInstance
      .get(reqURL)
      .then(response => {
        setCityInfo(response.data.data)
      })
      .catch(error => {
        setIsError(true)
        setErrorMessage(error.message)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [reqURL])

  // console.log(cityInfo)

  return { cityInfo, isLoading, isError, errorMessage }
}

export const useSportCenter = (sporCenterId: string) => {
  const reqURL = `${API_URL.SPORTCENTER}${sporCenterId}`

  const [sportCenterInfo, setSportCenterInfo] = useState<Center | null>()
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    setIsLoading(true)
    fetcherInstance
      .get(reqURL)
      .then(response => {
        setSportCenterInfo(response.data.data)
      })
      .catch(error => {
        setIsError(true)
        setErrorMessage(error.message)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [reqURL])

  // console.log(cityInfo)

  return { sportCenterInfo, isLoading, isError, errorMessage }
}

export const useSportCamp = (sporCampId: string) => {
  const reqURL = `${API_URL.SPORTCAMP}${sporCampId}`

  const [sportCampInfo, setSportCampInfo] = useState<Camp | null>()
  const [isLoading, setIsLoading] = useState(false)
  const [isError, setIsError] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    setIsLoading(true)
    fetcherInstance
      .get(reqURL)
      .then(response => {
        setSportCampInfo(response.data.data)
      })
      .catch(error => {
        setIsError(true)
        setErrorMessage(error.message)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }, [reqURL])

  console.log(sportCampInfo)

  return { sportCampInfo, isLoading, isError, errorMessage }
}
