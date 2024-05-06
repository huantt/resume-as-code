import {ResumeRecord} from "@/model/data";
import {slugify} from "@/utils/slug";
import {Simulate} from "react-dom/test-utils";


const storageKey = "resumes"

export function getResumeData(params: { name?: string, id?: string }): ResumeRecord | undefined {
    let id = params.id
    if (!id) {
        if (!params.name) return undefined
        id = slugify(params.name as string)
    }
    const resumes = getResumesData();
    return resumes[id]
}

export function getResumesData(): { [key: string]: ResumeRecord } {
    const data = window.localStorage.getItem(storageKey);
    return data ? JSON.parse(data) : {}
}

export function saveResumeRecord(resume: ResumeRecord, identity: { name?: string, id?: string }) {
    if (!identity.name && !identity.id) {
        throw new Error("name must be not empty!")
    }
    const id = identity.id ? identity.id : slugify(identity.name as string)
    const resumes = getResumesData()
    resumes[id] = resume
    window.localStorage.setItem(storageKey, JSON.stringify(resumes))
}

export function removeResumeRecord(params: { name?: string, id?: string }) {
    let id = params.id
    if (!id) {
        if (!params.name) return undefined
        id = slugify(params.name as string)
    }
    const resumes = getResumesData()
    delete resumes[id]
    window.localStorage.setItem(storageKey, JSON.stringify(resumes))
}