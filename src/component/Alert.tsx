import {Alert, Button} from "@material-tailwind/react";
import {useEffect, useState} from "react";

export function AutoCloseAlert(props: { message: string, color: "green" | "red", closeAt: number }) {
    const [showAlert, setShowAlert] = useState(false);

    useEffect(() => {
        setShowAlert(props.closeAt > 0)
    }, [props.closeAt]);

    useEffect(() => {
        if (showAlert) {
            const timeout = setTimeout(() => {
                setShowAlert(false);
                clearTimeout(timeout)
            }, props.closeAt - new Date().getTime());
        }
    }, [showAlert]);

    return (
        <Alert
            className={`fixed top-1 right-0 min-w-[25%] w-fit ${showAlert ? '' : 'hidden'}`}
            color={props.color}
            action={
                <Button
                    variant="text"
                    color="white"
                    size="sm"
                    className="!absolute top-3 right-3"
                    onClick={() => setShowAlert(false)}
                >
                    Close
                </Button>
            }
        >
            {props.message}
        </Alert>
    );
}