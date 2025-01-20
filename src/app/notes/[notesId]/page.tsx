import { notFound } from "next/navigation";
import { Metadata } from "next";

type Props = {
    params : {notesId : string}
}
export const generateMetadata =  ({params}:Props

): Metadata => {
        return {
            title : `Notes ${params.notesId}`
        }
}
export default function Notes ({params}:{params :{notesId :string}}) {
    if (parseInt(params.notesId) > 100) {
        notFound();
    }
    return (
        <div>
            <ul>
                <li><h3>Notes 1 {params.notesId}</h3></li>
            </ul>
        </div>
    );
}