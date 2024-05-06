import {ResumeRecord} from "@/model/data";
import moment from "moment";
import {
    Avatar,
    Button,
    Card,
    CardBody,
    CardHeader,
    Dialog,
    DialogBody,
    DialogFooter,
    DialogHeader,
    Typography
} from "@material-tailwind/react";
import {useState} from "react";
import Link from "next/link";
import {removeResumeRecord} from "@/utils/storage";
import {routers} from "@/routers";

export function ResumeItem(props: { data: ResumeRecord, className?: string }) {
    const [hover, setHover] = useState<boolean>()
    const [confirmDeletePopup, setConfirmDeletePopup] = useState(false)
    const [deleted, setDeleted] = useState<boolean>()

    return <>
        {
           !deleted && <Card
                onMouseEnter={() => setHover(true)}
                onMouseLeave={() => setHover(false)}
                shadow={true}
                className={`relative items-end overflow-hidden text-center ${props.className ? props.className : ''}`}
            >
                <CardHeader
                    className="absolute inset-0 m-0 h-full w-full rounded-none bg-[url('https://images.unsplash.com/photo-1552960562-daf630e9278b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80')] bg-cover bg-center">
                    <div className="absolute inset-0 h-full w-full bg-gradient-to-t from-black/80 via-black/50"/>
                </CardHeader>
                <CardBody className="relative py-5 px-6 md:px-12 flex items-center flex-col w-full pt-[25%]">
                    <Typography
                        variant="h2"
                        color="white"
                        className="mb-3 font-medium leading-[1.5]"
                    >
                        {props.data.name}
                    </Typography>
                    <Typography
                        color="white"
                        className="mb-3 font-semibold leading-[1.5]"
                    >
                        {props.data.data.personal_info.title}
                    </Typography>
                    <Typography className="mb-3 font-semibold text-gray-300">
                        Last updated: {(moment(props.data.updated_at).format('DD/MM/YYYY'))}
                    </Typography>
                    <Avatar
                        size="xl"
                        variant="circular"
                        alt="tania andrew"
                        className="border-2 border-white"
                        src={props.data.data.personal_info.avatar}
                    />
                </CardBody>
                <div className={"absolute w-full h-full bg-gray-700 bg-opacity-20 cursor-pointer"} hidden={!hover}>
                    <div className={"flex flex-col justify-end items-center h-full pb-[20px]"}>
                        <Link href={`${routers.build}/${props.data.id}`}>
                            <Button
                                className={"w-[80px] text-white bg-green-500 hover:bg-green-800 focus:ring-4 focus:ring-green-300"}>
                                Edit
                            </Button>
                        </Link>
                        <Button
                            className={"w-[80px] mt-3 text-white bg-red-500 hover:bg-red-800 focus:ring-4 focus:ring-red-300"}
                            onClick={() => {
                                setConfirmDeletePopup(true)
                            }}
                        >
                            Delete
                        </Button>
                    </div>
                </div>
                <Dialog open={confirmDeletePopup} handler={() => setConfirmDeletePopup(false)}>
                    <DialogHeader>Delete Resume</DialogHeader>
                    <DialogBody divider>
                        Are you sure you want to delete this item?
                    </DialogBody>
                    <DialogFooter>
                        <Button
                            variant="text"
                            color="red"
                            onClick={() => {
                            }}
                            className="mr-1"
                        >
                            <span>Cancel</span>
                        </Button>
                        <Button variant="gradient" color="red" onClick={() => {
                            setConfirmDeletePopup(false)
                            removeResumeRecord({id: props.data.id})
                            setDeleted(true)
                            //TODO: Use redux
                        }}>
                            <span>Confirm</span>
                        </Button>
                    </DialogFooter>
                </Dialog>
            </Card>
        }
    </>
}