import Cards from "@/app/components/Card/Page";
import Link from "next/link";

export default function UsersSlot () {
    return(
        <Cards>
            <div className="flex flex-col gap-2">
            <h2>Users Slot</h2>
            <Link href={"/dashboard/Admin"}>Go To Admin</Link>
            </div>
        </Cards>
    );
}