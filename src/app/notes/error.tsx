'use client'

export default function Error ({error , reset}:{error: Error; reset : ()=> void}){
    return (
        <div>
            <h2 className="text-3xl font-bold">Terjadi Kesalahan</h2>
            <h2>{error.message}</h2>
            <button onClick={reset} >Try Again</button>
        </div>
    )
}