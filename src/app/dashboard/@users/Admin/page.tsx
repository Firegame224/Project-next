import Cards from "@/app/components/Card/Page";
import Link from "next/link";

export default function AtminPage () {
    return (
        <Cards>
            <div className="flex flex-col gap-2">
            <h2>Ini Milik Admin</h2>
            <Link href={"/dashboard"}>Go To DashBoard</Link>
            </div>
        </Cards>
    );
}