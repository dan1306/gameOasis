import { CanceledError } from "axios"
import { useState, useEffect } from "react"
import apiClient from "../services/api-clients"

interface Genre {

    id: number;
    name: string;


}

interface FetchGenresResponse {
    count: number;
    results: Genre[]

}

const useGenres = () => {

    const [genres, setGenres] = useState<Genre[]>([])
    const [err, setErr] = useState('')
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        const controller = new AbortController()

        setLoading(true)
        apiClient.get<FetchGenresResponse>('/genres', { signal: controller.signal })
            .then(res => {
                setGenres(res.data.results)
                setLoading(false)
            }
            )
            .catch(err => {
                if (err instanceof CanceledError) return

                setErr(err.message)
                setLoading(false)
            })

        return () => controller.abort()
    }, [])

    return { genres, err, isLoading }

}

export default useGenres