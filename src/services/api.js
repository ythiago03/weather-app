const KEY = 'c1253d06c0cf4499a78215642231703'

export const fetchData = async (city) => {
    try {
        const url = `http://api.weatherapi.com/v1/current.json?key=${KEY}&q=${city}=no`
        const fetchResponses = await fetch(url)
        const data = await fetchResponses.json()

        return data
    } catch (error) {
        console.log(error);
    }
}

