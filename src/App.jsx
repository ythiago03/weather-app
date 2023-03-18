import React, { useState } from "react"
import {fetchData} from "./services/api.js"
import { initalData } from "./halpers/initialData.js";

import { Card } from "./components/Card"

export function App(){
    const [city, setCity] = useState('');
    const [data, setData] = useState(initalData);

    const handleSubmit = (event) => {
        event.preventDefault()

        fetchData(city).then(response => {
            setData(response)
        })
    }

    return(
        <div className="flex flex-col w-full h-screen items-center sm:justify-center p-4">

            <form onSubmit={handleSubmit} className="fixed bottom-0 w-full flex p-4 sm:relative justify-center">
                    <input
                        className="p-3 rounded-lg outline-none w-full flex-1 sm:max-w-[300px]" 
                        type="text" 
                        placeholder="Cidade"
                        value={city}
                        onChange={({ target: { value } }) => setCity(value)}
                    />
                    <button
                        className="bg-blue-600 p-3 rounded-lg ml-3 text-white font-bold"
                        type="submit"
                    >
                        Pesquisar
                    </button>
            </form>
            <Card data={data} />
        </div>
        )
}
//http://api.weatherapi.com/v1/current.json?key=c1253d06c0cf4499a78215642231703&q=Santa Luzia&aqi=no
