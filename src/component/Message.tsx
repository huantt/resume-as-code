import React from "react";

export function Message({children, className}: { children: React.ReactNode, className?: string }) {
    return <div className={`w-full h-screen flex justify-center items-center ${className ? className : ''}`}>
        <div>{children}</div>
    </div>
}

export function MessageNotFound() {
    return <Message className={"text-2xl font-semibold text-gray-700"}>
        404 - Resume not found!
    </Message>
}