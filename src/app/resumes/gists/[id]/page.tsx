'use client'
import {useEffect, useState} from "react";
import {ResumeData} from "@/model/data";
import {Spinner} from "@material-tailwind/react";
import {ThemeBasic} from "@/component/themes/basic/ThemeBasic";
import YAML from "yaml";
import {Message, MessageNotFound} from "@/component/Message";
import {DownloadButton} from "@/component/download/DownloadButton";
import {downloadJSON, downloadYAML} from "@/utils/download";
import {Resolution, usePDF} from "react-to-pdf";
import {DesktopOnly} from "@/component/DesktopOnly";

export default function Page({params}: { params: { id: string } }) {
    const [data, setData] = useState<ResumeData>()
    const [notFound, setNotfound] = useState(false)
    const [loading, setLoading] = useState(true)
    const {toPDF, targetRef} = usePDF({filename: 'page.pdf', resolution: Resolution.NORMAL});
    const [showDownload, setShowDownload] = useState(false)


    useEffect(() => {
        fetch(`https://api.github.com/gists/${params.id}`)
            .then((resp: Response) => resp.json())
            .then(jsonData => {
                const files = jsonData['files']
                return files?.[Object.keys(files)?.[0]]?.content
            }).then(yamlData => {
            if (!yamlData) setNotfound(true)
            else setData(YAML.parse(yamlData));
        }).then(() => {
            setLoading(false)
        })
    }, []);


    return <>
        <div className={"flex justify-center"}>
            <div onMouseEnter={() => setShowDownload(true)} onMouseLeave={() => setShowDownload(false)}
                 className={"w-fit relative"}>
                {
                    showDownload && <div className={"absolute top-2 right-0"}>
                        <DownloadButton
                            downloadJson={() => {
                                downloadJSON(data as ResumeData, params.id)
                            }} downloadYAML={() => {
                            downloadYAML(data as ResumeData)
                        }} downloadPDF={toPDF}
                        />
                    </div>
                }
                <div id={"cv"} ref={targetRef} className={"w-fit"}>
                    <ThemeBasic data={data as ResumeData}/>
                </div>
            </div>
        </div>
        {loading && <Message>
            <Spinner className="h-16 w-16 text-gray-900/50"/>
            Loading...
        </Message>}
        {notFound && <MessageNotFound/>}
        <DesktopOnly/>
    </>
}