import {PersonalInfo} from "@/model/personal-info";
import {TableSectionData} from "@/model/table-section";

export interface ResumeData {
    personal_info: PersonalInfo
    sections: TableSectionData[]
}

export interface ResumeRecord{
    id: string
    name: string
    data: ResumeData
    created_at: Date
    updated_at: Date
}