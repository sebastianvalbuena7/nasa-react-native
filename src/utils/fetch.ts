const API_KEY = '5XqhZ7s5dV9SOyZXcVJYhQY4P4j9TG7LAQdhUBRn'
const API_URL = 'https://api.nasa.gov/planetary/apod'

export default async (urlParams?: string) => {
    try {
        const response = await fetch(
            `${API_URL}?api_key=${API_KEY}${
                typeof urlParams !== 'undefined' && 
                urlParams?.length > 0 
                ? urlParams : ''}`
                )

        const data = response.json()

        return Promise.resolve(data)
    } catch (error) {
        return Promise.reject(error)
    }
}