"use client";

import { useRouter, useSearchParams } from "next/navigation";


export default function Accecories () {
    const router = useRouter();
    const SearchParams = useSearchParams();

    console.log(SearchParams.get("B"))
    return (
        <div>
            <h1>Accecories</h1>
            <button onClick={()=>router.push("/product")} className="p-4 border-4 border-gray-900 text-green-600 rounded">Kembali ke Produk</button>
        </div>
    )
}

//History utk kembali ke halaman Sebelumnya