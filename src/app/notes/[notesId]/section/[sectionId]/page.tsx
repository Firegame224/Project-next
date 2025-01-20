import { Metadata } from "next";

export const generateMetadata = ({params}:
    {params: {notesId: string}
}): Metadata => {
        return {
            title : `Notes ${params.notesId}`
        }
}
export default function Section ({params}: {
    params: {notesId: string, sectionId: string}}) {

    return (
        <div>
            <ul>
                <li>Notes {params.notesId} Section {params.sectionId}</li>
            </ul>
        </div>
    );
}