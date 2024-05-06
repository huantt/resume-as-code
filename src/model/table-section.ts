export interface TableSectionData {
    heading: string
    rows: TableSectionRow[]
}

export function isCompleteTableSectionRow(row: any | undefined): boolean {
    return row != undefined && row.content_markdown != undefined
}

export interface TableSectionRow {
    heading?: string
    content_markdown: string
    content_html?: string,
    divide?: boolean
}