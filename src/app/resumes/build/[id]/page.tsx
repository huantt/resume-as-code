import {Build} from "@/component/build/Page";

export default function Page({params}: { params: { id: string } }) {
    return <Build id={params.id}/>
}