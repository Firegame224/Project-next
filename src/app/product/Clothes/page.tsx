import { redirect } from "next/navigation"

export default function Clothes () {
    const IsAdmin = false
    if (!IsAdmin) {
        redirect("/product")
    }
    return (
        <div>
            <h1>Clothes</h1>
        </div>
    )
}