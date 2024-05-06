import {Button, Card, CardBody, CardHeader} from "@material-tailwind/react";
import Link from "next/link";
import {useState} from "react";
import {routers} from "@/routers";

export function CreateItem(props: { className?: string }) {
    const [hover, setHover] = useState<boolean>()

    return <Card
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        shadow={true}
        className={`relative items-end overflow-hidden text-center ${props.className ? props.className : ''}`}
    >
        <CardHeader
            className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('/images/create-cv.webp')] bg-cover bg-center">
            <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"/>
        </CardHeader>
        <div className={"absolute w-full h-full bg-gray-700 bg-opacity-20 cursor-pointer"} hidden={!hover}>
            <div className={"flex flex-col justify-end items-center h-full pb-[20px]"}>

            </div>
        </div>
        <CardBody
            className="relative py-5 px-6 md:px-12 flex items-center justify-center flex-col w-full h-full pt-[25%]">
            <Link href={routers.build}>
                <Button
                    className={"w-[80px] text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:ring-green-300"}>
                    Add
                </Button>
            </Link>
        </CardBody>


    </Card>
};