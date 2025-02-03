import Cards from "@/app/components/Card/Page";
import Link from "next/link";

export default function Lopgin () {
    return (
        <Cards>
            <h2>Please Login First</h2>
            <Link href={"@/app/Login/page"}>Click this to login</Link>
        </Cards>
    );
}