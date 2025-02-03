import Cards from "@/app/components/Card/Page";
import Link from "next/link";

export default function Facebook () {
    return (
        <Cards>
            <div className="gap-2 flex flex-col">
            <h2>Facebook Page</h2>
            <Link href={"/dashboard"}>Go To DashBoard</Link>
            </div>
        </Cards>
    );
}