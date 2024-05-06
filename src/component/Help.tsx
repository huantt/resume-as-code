import CodeMirror from '@uiw/react-codemirror';
import {langs} from "@uiw/codemirror-extensions-langs";
import {
    Button,
    Dialog,
    DialogBody,
    DialogHeader,
    Tab,
    TabPanel,
    Tabs,
    TabsBody,
    TabsHeader
} from "@material-tailwind/react";
import {useState} from "react";

const YAML_STRUCTURE =
    `personal_info:
  avatar: string!
  first_name: string!
  last_name: string!
  nickname: string
  title: string!
  phone: string
  email: string
  website: string
  address: string
  gender: boolean

sections: 
  - heading: string!
    rows:
      - heading: string
        content_markdown: string
        divide: boolean
`

const MODEL_STRUCTURE =
    `export interface ResumeData {
    personal_info: PersonalInfo
    sections: TableSectionData[]
}

export interface PersonalInfo {
    avatar: string
    first_name: string
    last_name: string
    nickname?: string
    title: string
    gender?: string;
    phone?: string
    email?: string
    website?: string
    address?: string
}

export interface TableSectionData{
    heading: string
    rows: TableSectionRow[]
}

export interface TableSectionRow{
    heading?: string
    content_markdown: string
    content_html?: string,
    divide?: boolean
}`

export function Help() {
    const [open, setOpen] = useState<boolean>(false)
    const IS_FIRST_VIEW_STORAGE_KEY = "build-is-first-view"

    function isFirstView() {
        const firstView = window.localStorage.getItem(IS_FIRST_VIEW_STORAGE_KEY)
        return firstView == undefined || firstView == "true"
    }

    function setIsFirstView(value: boolean) {
        window.localStorage.setItem(IS_FIRST_VIEW_STORAGE_KEY, value.toString())
    }

    return <>
        <div className={"fixed bottom-2 right-2 shadow-md"}>
            <Button onClick={() => setOpen(true)}>
                Help
            </Button>
        </div>
        <Dialog open={open} handler={() => setOpen(false)}>
            <DialogHeader className={"pt-5"}>
                Help
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                     stroke="currentColor"
                     className="w-6 h-6 absolute top-1 right-1 cursor-pointer"
                     onClick={() => setOpen(false)}
                >
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12"/>
                </svg>
            </DialogHeader>
            <DialogBody divider className={"overflow-scroll"}>
                <Tabs value="yaml">
                    <TabsHeader>
                        <Tab key={"yaml"} value={"yaml"}>
                            {"YAML Structure"}
                        </Tab>
                        <Tab key={"json"} value={"json"}>
                            {"Model Structure"}
                        </Tab>
                    </TabsHeader>
                    <TabsBody>
                        <TabPanel key={"yaml"} value={"yaml"}>
                            <div>
                                <div className={""}>
                                    <CodeMirror minHeight={""}
                                                extensions={[langs.yaml()]}
                                                value={YAML_STRUCTURE}
                                                theme={"dark"}
                                                readOnly={false}
                                    />
                                </div>
                            </div>
                        </TabPanel>
                        <TabPanel key={"json"} value={"json"}>
                            <div className={"ml-3"}>
                                <div className={""}>
                                    <CodeMirror minHeight={""}
                                                extensions={[langs.typescript()]}
                                                value={MODEL_STRUCTURE}
                                                theme={"dark"}
                                                readOnly={false}
                                    />
                                </div>

                            </div>
                        </TabPanel>
                    </TabsBody>
                </Tabs>
            </DialogBody>
        </Dialog>
    </>
}