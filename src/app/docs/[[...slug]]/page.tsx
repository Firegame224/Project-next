import React from "react";

type PageProps = { 
    // Next.js menyediakan tipe PageProps untuk menangani parameter dinamis
    params: {
        slug?: string[];
    };
}

export default async function DocumentView({ params }: PageProps) {
    // Tidak perlu menggunakan await, cukup akses langsung params.slug
    const slug = await (params).slug;
    console.log(slug);
    
    let title;
    if (slug?.length === 1) {
        title = `Features ${slug[0]}`;
    }
    if (slug?.length === 2) {
        title = `Features ${slug[0]} Concept ${slug[1]}`;
    }
    if (slug?.length === 3) {
        title = `Features ${slug[0]} Concept ${slug[1]} Example ${slug[2]}`;
    }

    return (
        <>
            <h1>Catch All segment</h1>
            <p>{title}</p>
            <h2>Footer</h2>
        </>
    );
}
