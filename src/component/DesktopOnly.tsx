import {Dialog, DialogBody} from "@material-tailwind/react";
import {isMobile} from 'react-device-detect';
import {useEffect} from "react";

export function DesktopOnly() {
    useEffect(() => {
        console.log(window.history)
    }, []);
    return <Dialog open={isMobile} handler={() => {
    }}>
        <DialogBody className={"text-center"}>
            For the best experience, this feature only works on desktop.
            <div className={"mt-3"} onClick={() => window.history.back()}>
                Back
            </div>
        </DialogBody>
    </Dialog>
}