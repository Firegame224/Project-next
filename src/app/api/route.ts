import { NextResponse } from "next/server";

const dataSiswa = [
    {
        id : 1,
        nama : "Siam",
        kelas : "X-PPLG 2"
    },
    {
        id : 2,
        nama : "Siam",
        kelas : "X-PPLG 2"
    },
    {
        id : 3,
        nama : "Siam",
        kelas : "X-PPLG 2"
    },
    {
        id : 4,
        nama : "Siam",
        kelas : "X-PPLG 2"
    },
    {
        id : 5,
        nama : "Siam",
        kelas : "X-PPLG 2"
    },
    {
        id : 6,
        nama : "Siam",
        kelas : "X-PPLG 2"
    },
    {
        id : 7,
        nama : "Siam",
        kelas : "X-PPLG 2"
    },
    {
        id : 8,
        nama : "Siam",
        kelas : "X-PPLG 2"
    },

]

export default function GET(){
    return NextResponse.json(dataSiswa)
}