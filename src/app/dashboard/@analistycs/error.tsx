/** @format */

'use client'

import Cards from "@/app/components/Card/Page";

export default function Error ({error , reset}:{error: Error; reset : ()=> void}){
    return (
        <Cards>
            <h2>{error.message}</h2>
            <button onClick={reset} className="bg-slate-800 hover:opacity-50">Try Again</button>
        </Cards>
    )
}