'use client'
import Cards from "@/app/components/Card/Page";
export function Randomteks (arr:string[]) {
    return arr[Math.floor(Math.random()*arr.length)]
}
export default function AnalysticDefault () {
    const Randomnya = Randomteks(["","Adalah 1","Adalah 2","Adalah 3","Adalah 4"]);
    return(
        <Cards>
            <h2 className="text-3xl font-bold">{Randomnya}</h2>
            <h2>Analystic Slot</h2> 
        </Cards>
    );
}