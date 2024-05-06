'use client'
import {useEffect, useState} from "react";
import {Resolution, usePDF} from "react-to-pdf";
import YAML from "yaml";
import sample from "@/sample/resume.json";
import {getResumeData, saveResumeRecord} from "@/utils/storage";
import {getTimestampAtNextSeconds} from "@/utils/time";
import {slugify} from "@/utils/slug";
import {ResumeData, ResumeRecord} from "@/model/data";
import CodeMirror from "@uiw/react-codemirror";
import {langs} from "@uiw/codemirror-extensions-langs";
import {ThemeBasic} from "@/component/themes/basic/ThemeBasic";
import {Help} from "@/component/Help";
import {AutoCloseAlert} from "@/component/Alert";
import {DesktopOnly} from "@/component/DesktopOnly";
import {useKey} from "@/utils/key";
import {Message} from "@/component/Message";
import {Spinner} from "@material-tailwind/react";
import {DownloadButton} from "@/component/download/DownloadButton";

export function Build(props: { id?: string }) {
    const [resumeData, setResumeData] = useState({})
    const [input, setInput] = useState("")
    const [name, setName] = useState<string>()
    const [alertInfoCloseAt, setAlertInfoCloseAt] = useState<number>(0)
    const [alertErrorCloseAt, setAlertErrorCloseAt] = useState<number>(0)
    const [errorMessage, setErrorMessage] = useState("")
    const [infoMessage, setInfoMessage] = useState("")
    const [loading, setLoading] = useState(true)
    const {toPDF, targetRef} = usePDF({filename: 'page.pdf', resolution: Resolution.NORMAL});
    useKey("ctrls", () => save())


    useEffect(() => {
        if (!props.id) {
            setInput(YAML.stringify(sample));
            setLoading(false)
            return;
        }

        const resumeRecord = getResumeData({id: props.id})
        if (!resumeRecord) {
            setInput(YAML.stringify(sample));
            setLoading(false)
            return;
        }

        setInput(YAML.stringify(resumeRecord.data))
        setName(resumeRecord.name)
        setLoading(false)
    }, [])

    useEffect(() => {
        if (input) {
            try {
                const data = JSON.parse(input)
                setResumeData(data)
                const yaml = YAML.stringify(data)
                setInput(yaml)
                alert("info", "Parsed JSON to YAML")
                return
            } catch (e) {

            }
            try {
                const data = YAML.parse(input, {prettyErrors: true})
                if (data) {
                    setResumeData(data);
                }
            } catch (err) {
                console.error("Error parsing YAML:", err)
            }
        }
    }, [input]);

    function alert(type: "info" | "err", message: string, closeInSeconds = 3) {
        switch (type) {
            case "info":
                setInfoMessage(message)
                setAlertInfoCloseAt(getTimestampAtNextSeconds(closeInSeconds))
                break
            case "err":
                setErrorMessage(message)
                setAlertErrorCloseAt(getTimestampAtNextSeconds(closeInSeconds))
                break
        }
    }

    function downloadJSON() {
        const jsonString = `data:text/json;chatset=utf-8,${encodeURIComponent(JSON.stringify(YAML.parse(input)))}`;
        const link = document.createElement("a");
        link.href = jsonString;
        link.download = `${slugify(name || 'resume')}.json`;
        link.click();
        link.remove()
    }

    function downloadYAML() {
        const jsonString = `data:text/yaml;chatset=utf-8,${encodeURIComponent(input)}`;
        const link = document.createElement("a");
        link.href = jsonString;
        link.download = `${slugify(name || 'resume')}.yaml`;
        link.click();
        link.remove()
    }

    function save() {
        if (!name) {
            return alert("err", "Name must be specified")
        }
        try {
            const id = slugify(name as string)
            const resume = {
                id: id,
                name: name,
                data: YAML.parse(input),
                updated_at: new Date()
            } as ResumeRecord
            saveResumeRecord(resume, {name: name, id: props.id})
            alert("info", `Saved resume "${name}"`)
        } catch (err) {
            alert("err", "Failed to save resume: " + err)
        }
    }

    return <div>
        {loading && <Message>
            <Spinner className="h-16 w-16 text-gray-900/50"/>
            Loading...
        </Message>}
        <div
            className={"flex justify-between text-right pt-4 pb-2 px-6 mt-10 border border-[#ddd] rounded-xl shadow-md"}>
            <div>
                <input type="text"
                       className={"text-gray-900 font-[500] border border-gray-300 px-3 py-1 rounded-lg text-lg"}
                       value={name} placeholder={"Enter resume name"}
                       onChange={(e) => {
                           setName(e.target.value)
                       }}
                />
            </div>
            <div className={"relative"}>
                <DownloadButton downloadYAML={downloadYAML} downloadJson={downloadJSON} downloadPDF={toPDF}/>
                <button
                    className={"text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:ring-green-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 focus:outline-none dark:focus:ring-green-800"}
                    onClick={() => {
                        save()
                    }}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="w-5 h-5 absolute">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M2.25 13.5h3.86a2.25 2.25 0 012.012 1.244l.256.512a2.25 2.25 0 002.013 1.244h3.218a2.25 2.25 0 002.013-1.244l.256-.512a2.25 2.25 0 012.013-1.244h3.859m-19.5.338V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18v-4.162c0-.224-.034-.447-.1-.661L19.24 5.338a2.25 2.25 0 00-2.15-1.588H6.911a2.25 2.25 0 00-2.15 1.588L2.35 13.177a2.25 2.25 0 00-.1.661z"/>
                    </svg>
                    <span className={"ml-8"}>Save</span>
                </button>
            </div>
        </div>

        <div className={"grid grid-cols-2 gap-3"}>
            <div className={"min-h-screen border-r border-black p-3"}>
                <CodeMirror minHeight={"100vh"}
                            extensions={[langs.yaml()]}
                            value={input}
                            onChange={(value, viewUpdate) => {
                                setInput(value)
                            }}
                />
            </div>
            <div id="cv" className={"w-full flex justify-center "}>
                <div className={"h-fit w-full"} ref={targetRef}>
                    <ThemeBasic className={"p-3"} data={resumeData as ResumeData}/>
                </div>
            </div>
        </div>
        <Help/>
        <AutoCloseAlert message={infoMessage} color={"green"} closeAt={alertInfoCloseAt}/>
        <AutoCloseAlert message={errorMessage} color={"red"} closeAt={alertErrorCloseAt}/>
        <DesktopOnly/>
    </div>
}