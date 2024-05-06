'use client'
import {Button, Card, CardBody, CardFooter, Typography} from "@material-tailwind/react";
import {TypeAnimation} from "react-type-animation";
import Link from "next/link";
import {routers} from "@/routers";

export default function Page() {
    return <>
        <div className={"flex justify-center items-center flex-col pt-10"}>
            <div className={"max-w-[80%] w-[1280px]"}>
                <div className={"text-center"}>
                    <div className={"text-5xl font-semibold"}>
                        <TypeAnimation sequence={[
                            "Resume as Code", 800,
                            "Write resumes as a Developer", 800,

                        ]}/>
                    </div>
                    <div className={"text-2xl  mt-4 text-gray-700"}>
                        Leverage the rich Markdown format
                    </div>
                </div>
                <div className={"mt-5 text-center"}>
                    <Link href={routers.build}>
                        <Button
                            className={"text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:ring-green-300"}>
                            <div className={" flex items-center justify-center"}>
                        <span>
                        Create Resume
                        </span>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5}
                                     stroke="currentColor" className="w-5 h-5 ml-2">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"/>
                                </svg>
                            </div>
                        </Button>
                    </Link>
                    <div className={"text-gray-700"}>No sign in required</div>
                </div>
                <div className={"mt-5 border border-gray-300 p-3 rounded-lg relative"}>
                    <Link href={routers.build}>
                        <img className={"max-w-full"} src={"/images/demo.png"} alt={"demo"}/>
                    </Link>
                </div>
                <div className={"mt-10 "}>
                    <div className={"text-2xl uppercase text-center mb-3 font-semibold "}>
                        Features
                    </div>
                    <div className={"grid grid-cols-2 gap-3"}>
                        <Card className="">
                            <CardBody>
                                <Typography variant="h5" color="blue-gray" className="mb-2">
                                    Write with Familiar Language by YAML
                                </Typography>
                                <Typography>
                                    Writing your resume in YAML, a human-readable data serialization format, ensures
                                    that
                                    your resume content is both structured and intuitive.
                                </Typography>
                            </CardBody>
                            <CardFooter className="pt-0">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5}
                                     stroke="currentColor" className="w-12 h-12">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M6.75 7.5l3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0021 18V6a2.25 2.25 0 00-2.25-2.25H5.25A2.25 2.25 0 003 6v12a2.25 2.25 0 002.25 2.25z"/>
                                </svg>
                            </CardFooter>
                        </Card>
                        <Card className="">
                            <CardBody>
                                <Typography variant="h5" color="blue-gray" className="mb-2">
                                    Powered by Markdown Format
                                </Typography>
                                <Typography>
                                    Create visually appealing and structured resumes using the simplicity and
                                    versatility of
                                    Markdown
                                </Typography>
                            </CardBody>
                            <CardFooter className="pt-0">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5}
                                     stroke="currentColor" className="2-12 h-12">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z"/>
                                </svg>


                            </CardFooter>
                        </Card>

                        <Card className="">
                            <CardBody>
                                <Typography variant="h5" color="blue-gray" className="mb-2">
                                    Manage Multiple Resumes
                                </Typography>
                                <Typography>
                                    Easily maintain multiple resumes for various job applications.
                                </Typography>
                            </CardBody>
                            <CardFooter className="pt-0">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5}
                                     stroke="currentColor" className="w-12 h-12">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M6 6.878V6a2.25 2.25 0 012.25-2.25h7.5A2.25 2.25 0 0118 6v.878m-12 0c.235-.083.487-.128.75-.128h10.5c.263 0 .515.045.75.128m-12 0A2.25 2.25 0 004.5 9v.878m13.5-3A2.25 2.25 0 0119.5 9v.878m0 0a2.246 2.246 0 00-.75-.128H5.25c-.263 0-.515.045-.75.128m15 0A2.25 2.25 0 0121 12v6a2.25 2.25 0 01-2.25 2.25H5.25A2.25 2.25 0 013 18v-6c0-.98.626-1.813 1.5-2.122"/>
                                </svg>

                            </CardFooter>
                        </Card>
                        <Card className="">
                            <CardBody>
                                <Typography variant="h5" color="blue-gray" className="mb-2">
                                    Easy Export and Sharing
                                </Typography>
                                <Typography>
                                    Seamlessly export your resume in different formats (e.g., PDF, JSON, YAML) and share
                                    it
                                    with
                                    potential employers or collaborators.
                                </Typography>
                            </CardBody>
                            <CardFooter className="pt-0">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                     strokeWidth={1.5}
                                     stroke="currentColor" className="w-12 h-12">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M9 13.5l3 3m0 0l3-3m-3 3v-6m1.06-4.19l-2.12-2.12a1.5 1.5 0 00-1.061-.44H4.5A2.25 2.25 0 002.25 6v12a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9a2.25 2.25 0 00-2.25-2.25h-5.379a1.5 1.5 0 01-1.06-.44z"/>
                                </svg>
                            </CardFooter>
                        </Card>
                    </div>
                </div>
            </div>
        </div>
    </>
}