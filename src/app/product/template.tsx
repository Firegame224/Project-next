"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)

{
  const UsePath = usePathname();
  const [search, setSearch] = useState("");
  console.log(UsePath);
  return (
    <div>
      <input type="text" value={search} placeholder="Search" onChange={e => setSearch(e.target.value)}/>
      <ul className="flex text-center items-center justify-center gap-10 p-3">
        <Link className={UsePath === "/product/Shoes" ? "underline" : ""} prefetch={false} scroll={false} href="/product/Shoes">Shoes</Link>
        <Link className={UsePath === "/product/Clothes" ? "underline" : ""} replace={true} href="/product/Clothes">Clothes</Link>
        <Link className={UsePath === "/product/Food" ? "underline" : ""} href="/product/Food">Food</Link>
        <Link className={UsePath === "/product/Acc" ? "underline" : ""} href="/product/Acc">Accecories</Link>
      </ul>
      {children}
    </div>
  );
}
