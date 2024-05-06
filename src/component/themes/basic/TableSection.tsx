import {isCompleteTableSectionRow, TableSectionData} from "@/model/table-section";
import {markdownToHtml} from "@/utils/markdown";
import {useEffect, useState} from "react";
import {Divider} from "@/component/Divider";

export function TableSection(props: { data: TableSectionData, className?: string | undefined }) {
    const [data, setData] = useState({} as TableSectionData)

    useEffect(() => {
        for (let i = 0; i < props.data.rows?.length; i++) {
            const row = props.data.rows[i]
            if (typeof row != "object") continue
            if (!isCompleteTableSectionRow(row)) continue
            if (row?.content_html) continue
            markdownToHtml(row.content_markdown).then(html => {
                props.data.rows[i].content_html = html
                setData(props.data)
            })
        }
    }, [props])

    return <div className={`py-3 ${props.className ? props.className : ''}`}>
        <div className={"text-xl font-semibold uppercase pb-2"}>{props.data.heading}</div>
        <Divider/>
        {
            data?.rows?.map((row, index) => {
                return isCompleteTableSectionRow(row) &&
                    <div id={index.toString()} className={`flex py-2 ${row.divide ? 'border-b border-gray' : ''}`}>
                        {row.heading && <div className={"w-1/4 text-left font-semibold"}>{row.heading}</div>}
                        <div className={`${row.heading ? 'w-3/4' : 'w-full'}`}
                             dangerouslySetInnerHTML={{__html: row.content_html as string}}></div>
                    </div>
            })
        }
    </div>
}