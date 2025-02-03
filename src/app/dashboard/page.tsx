'use client';

import { useEffect, useState } from "react";

function Hitung () {
    const [hitung , setHitung]= useState(0)

    useEffect (()=> {
        const Inter =  setTimeout (() => {
            setHitung((hit) => hit + 1)
        }, 1000)
        if (hitung === 10) {
            clearInterval(Inter)
        }
    } , [hitung])
    return (
        <div>
            {hitung}
        </div>
    )
}
export default function Dashboard () {
    return (
        <div>
            <Hitung />
            <h1>Dashboard </h1>
        </div>
    );
}