import Cards from "@/app/components/Card/Page";
import Link from "next/link";

export default function SocialSlot () {
    return(
        <Cards>
            <div className="flex flex-col">
            <h2>Social Slot</h2>
                <Link href={"/dashboard/Facebook"}>Go to Facebook Page</Link>
            </div>
        </Cards>
    );
}