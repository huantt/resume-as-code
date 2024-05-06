import {ResumeRecord} from "@/model/data";
import {ResumeItem} from "@/component/resume/ResumeItem";
import {CreateItem} from "@/component/resume/CreateItem";


export function ResumeList(props: {data: ResumeRecord[]}){
    return <div className={"mt-3 grid md:grid-cols-3 sm:grid-cols-1 sm:p"}>
        {
            props.data?.map(resume => {
                return <ResumeItem className={"mr-3 mb-3 h-[30rem] overflow-hidden shadow-md"} data={resume}/>
            })
        }
        <CreateItem className={"mr-3 mb-3 h-[30rem] overflow-hidden shadow-md"}/>
    </div>
}