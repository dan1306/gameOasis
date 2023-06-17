import { useEffect, useState } from "react"
import apiClinents from '../services/api-clients'
import { CanceledError } from "axios";


export interface Platform {
    id: number;
    name: string;
    slug: string,
}

export interface Game {
    id: number;
    name: string;
    background_image: string;
    parent_platforms: { platform: Platform }[];
    metacritic: number
}

interface FetchGameResponse {
    count: number;
    results: Game[]
}


export const userGames = () => {
    const [games, setGames] = useState<Game[]>([])
    const [err, setErr] = useState('')
    const [isLoading, setLoading] = useState(false)

    useEffect(() => {
        const controller = new AbortController()

        setLoading(true)
        apiClinents.get<FetchGameResponse>('/games', { signal: controller.signal })
            .then(res => {
                setGames(res.data.results)
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

    return { games, err, isLoading }
}
