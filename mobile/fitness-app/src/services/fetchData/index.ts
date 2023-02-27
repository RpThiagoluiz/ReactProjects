import Axios, { AxiosInstance } from 'axios';
import { makeUseAxios } from 'axios-hooks';

const axiosTest: AxiosInstance = Axios.create();

axiosTest.interceptors.response.use(
  (response) => {
    console.log('response - TEST', response);
    return Promise.resolve(response);
  },
  (error) => {
    console.log('error', error);
    if (error.response.status === 401) {
      console.log('response - TEST(401)', error.response);
    }
    return Promise.reject(error);
  }
);

export const useAxios = makeUseAxios({
  axios: axiosTest,
});

// useEffect(() => {
//   let isMounted = true

//   const fetchaData = async () => {
//     try {
//       const { data } = await _fetchData()
//       if (!isMounted) return

//       setData(data.data)
//     } catch (err) {
//       if (isMounted) notification.error(listApiKeysNotifications.getDefaultError())
//     }
//   }

//   fetchaData()

//   return () => {
//     isMounted = false
//   }
// }, [_fetchApiKeys])
// import { useCallback, useEffect, useRef } from 'react'
// import useAxios, { type ResponseValues } from 'axios-hooks'

// import { auth } from '@mfe-backoffice-utils'
// import { Urls } from 'services/http'

// import { type AxiosRequestConfig, type AxiosError, type AxiosResponse } from 'axios'

// type SaveQuestionsSortData<T = any> = {
//   isCanceled: boolean
//   response: AxiosResponse<T>
//   isError: boolean
//   error?: AxiosError
// }

// export const useSaveQuestionsSort = <T = any>() => {
//   const isMountedRef = useRef(true)
//   const [saveQuestionsSortValues, saveQuestionsSort] = useAxios<T>(
//     {
//       url: Urls.FaqManageQuestionsSort,
//       method: 'POST',
//       headers: {
//         Authorization: `Bearer ${auth.getValue().sessionToken}`,
//       },
//     },
//     { manual: true },
//   )

//   const handleSaveQuestionsSort = useCallback(
//     async (config?: AxiosRequestConfig): Promise<SaveQuestionsSortData<T>> => {
//       try {
//         const response = (await saveQuestionsSort(config)) as AxiosResponse<T>

//         if (!isMountedRef.current) {
//           return { isCanceled: true, isError: false, response: response }
//         }

//         return { isCanceled: false, isError: false, response }
//       } catch (err) {
//         const error = err as AxiosError
//         if (!isMountedRef.current) {
//           return { isCanceled: true, isError: true, error, response: error.response }
//         }
//         return { isCanceled: false, isError: true, error, response: error.response }
//       }
//     },
//     [],
//   )

//   useEffect(() => {
//     isMountedRef.current = true
//     return () => {
//       isMountedRef.current = false
//     }
//   }, [])

//   return [saveQuestionsSortValues, handleSaveQuestionsSort] as [
//     ResponseValues<T>,
//     typeof handleSaveQuestionsSort,
//   ]
// }
