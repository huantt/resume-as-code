import {useState} from "react";

export function DownloadButton(props: { className?: string, downloadJson: () => void, downloadYAML: () => void, downloadPDF: () => void }) {
    const [downloadDropdown, setDownloadDropdown] = useState<boolean>()

    return <div onMouseLeave={() => setDownloadDropdown(false)}
                className={`inline relative ${props.className ? props.className : ''}`}>
        <button
            className="mr-3 bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded-lg bottom-0"
            onMouseEnter={() => setDownloadDropdown(true)}
        >
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                 stroke="currentColor" className="w-5 h-5 absolute">
                <path strokeLinecap="round" strokeLinejoin="round"
                      d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5M16.5 12L12 16.5m0 0L7.5 12m4.5 4.5V3"/>
            </svg>
            <span className={"ml-8"}>Download</span>
        </button>

        <div hidden={!downloadDropdown}
             className={"absolute border border-green-500 rounded-xl w-[150px] text-left bg-white p-3 shadow top-full"}>
            <div>
                <button
                    className="mr-3 w-[120px] bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded-lg"
                    onClick={() => props.downloadPDF()}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="w-5 h-5 absolute">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m0 12.75h7.5m-7.5 3H12M10.5 2.25H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z"/>
                    </svg>
                    <span className={"ml-3"}>PDF</span>
                </button>
            </div>

            <div>
                <button
                    className="mt-3 w-[120px] bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded-lg"
                    onClick={() => props.downloadJson()}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="w-5 h-5 absolute">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M14.25 9.75L16.5 12l-2.25 2.25m-4.5 0L7.5 12l2.25-2.25M6 20.25h12A2.25 2.25 0 0020.25 18V6A2.25 2.25 0 0018 3.75H6A2.25 2.25 0 003.75 6v12A2.25 2.25 0 006 20.25z"/>
                    </svg>

                    <span className={"ml-3"}>JSON</span>
                </button>
            </div>
            <div>
                <button
                    className="mt-3 w-[120px] bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded-lg"
                    onClick={() => props.downloadYAML()}
                >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="w-5 h-5 absolute">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"/>
                    </svg>

                    <span className={"ml-3"}>YAML</span>
                </button>
            </div>
        </div>
    </div>
}