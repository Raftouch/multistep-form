import { ReactNode } from "react";

interface FormWrapperProps {
    title: string,
    children: ReactNode
}

export function FormWrapper({title, children}: FormWrapperProps) {
    return (
        <>
            <h2 className="text-center mb-4 uppercase font-bold">{title}</h2>
            <div className="grid grid-flow-row auto-rows-max md:auto-rows-min">{children}</div>
        </>
    )
}