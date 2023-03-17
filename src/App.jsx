import React from "react"
import {fetchData} from "./services/api.js"
import { useState } from "react"

import { Card } from "./components/Card"

export function App(){

    const handleSubmit = (event) => {
        event.preventDefault()
        fetchData('Belo Horizonte').then(data => console.log(data))
    }

    return(
        <div className="flex flex-col w-full h-screen items-center justify-center">

            <form onSubmit={handleSubmit}>
                    <input
                        className="p-3 rounded-lg outline-none" 
                        type="text" 
                        placeholder="Cidade"/>
                    <button
                        className="bg-blue-600 p-3 rounded-lg ml-3 text-white font-bold"
                        type="submit"
                    >
                        Pesquisar
                    </button>
            </form>
            <Card />
        </div>
        )
}
//http://api.weatherapi.com/v1/current.json?key=c1253d06c0cf4499a78215642231703&q=Santa Luzia&aqi=no
