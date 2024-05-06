import {ResumeData} from "@/model/data";
import {PersonalInformation} from "@/component/themes/basic/PersonalInformation";
import {TableSection} from "@/component/themes/basic/TableSection";

export function ThemeBasic(props: { data: ResumeData, className?: string | undefined }) {
    return props.data && <div className={`mx-auto max-w-[21cm] p-6 ${props.className || ''}`}>
        <PersonalInformation className={"mb-5"} data={props.data.personal_info}/>
        {
            props.data.sections?.map(sectionData => {
                return <TableSection data={sectionData}/>
            })
        }
    </div>
}
