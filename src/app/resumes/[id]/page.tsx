'use client'
import {useEffect, useState} from "react";
import {getResumeData} from "@/utils/storage";
import {ResumeData} from "@/model/data";
import {Spinner} from "@material-tailwind/react";
import {ThemeBasic} from "@/component/themes/basic/ThemeBasic";
import {Message, MessageNotFound} from "@/component/Message";

export default function Page({params}: {
    params: { id: string },
}) {
    const [data, setData] = useState<ResumeData>()
    const [notFound, setNotfound] = useState(false)
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const cvData = getResumeData({id: params.id})
        setLoading(false)
        if (cvData == undefined) {
            setNotfound(true)
            return
        }
        setData(cvData.data)
    }, []);

    return <>
        <ThemeBasic data={data as ResumeData}/>
        {loading && <Message>
            <Spinner className="h-16 w-16 text-gray-900/50"/>
            Loading...
        </Message>}
        {notFound && <MessageNotFound/>}
    </>
}