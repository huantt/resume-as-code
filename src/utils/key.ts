import {useEffect, useRef} from "react";

export function useKey(key: string, cb: (event: KeyboardEvent) => void) {
    const callback = useRef(cb);

    useEffect(() => {
        callback.current = cb;
    });

    useEffect(() => {
        function handle(event: KeyboardEvent) {
            if (event.code === key) {
                callback.current(event);
            } else if (key === 'ctrls' && event.key === 's' && event.ctrlKey) {
                callback.current(event);
            }
        }

        document.addEventListener('keydown', handle);
        return () => document.removeEventListener("keydown", handle);
    }, [key]);
}
