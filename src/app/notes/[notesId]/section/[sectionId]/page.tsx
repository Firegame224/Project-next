'use client'


function GetRandomItem (arr:string[]) {
    return arr[Math.floor(Math.random()*arr.length)]
}

const RandomItem = GetRandomItem(["","adadjad","Akusuka","diagasuka"])
console.log(RandomItem)
if (RandomItem == "") {
        throw new Error("Gagal Mendapatkan Item")
}
export default function Section ({params}: {
    params: {notesId: string, sectionId: string}}) {

    return (
        <div>
            <ul>
                <li>Notes {params.notesId} Section {params.sectionId}</li>
            </ul>
            <p>Dan yap + {RandomItem}</p>
            <h1>Dashboard</h1>
        </div>
    );
}