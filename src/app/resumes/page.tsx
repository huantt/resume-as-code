'use client'
import {useEffect, useState} from "react";
import {ResumeRecord} from "@/model/data";
import {getResumesData} from "@/utils/storage";
import {ResumeList} from "@/component/resume/ResumeList";
import {DesktopOnly} from "@/component/DesktopOnly";

export default function Home() {
    const [resumes, setResumes] = useState<ResumeRecord[]>([])

    useEffect(() => {
        const resumes = Object.values(getResumesData())
        setResumes(resumes)
    }, []);

    return (
        <div className={"container mx-auto mt-10 max-w-[1024px]"}>
            <div className={"text-xl font-semibold"}>My Resumes</div>
            <ResumeList data={resumes}/>
            <DesktopOnly/>
        </div>
    )
}
