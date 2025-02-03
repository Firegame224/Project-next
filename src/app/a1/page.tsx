import Link from "next/link";

export default function PageA1 () {
    return (
        <div>
            <h1>A1 Page</h1>
            <div className="text-sm text-red-500 flex gap-2 flex-col">
            <Link href="a1/a2">Go to A2</Link>
            <Link href="a1/a3">Go to A3</Link>
            <Link href="a1/a4">Go to A4</Link>
            <Link href="/About">Go to About</Link>
            </div>
        </div>
    );
}