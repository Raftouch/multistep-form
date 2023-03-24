import { ReactNode } from "react";

interface FormWrapperProps {
    title: String,
    children: ReactNode
}

export function FormWrapper({title, children}: FormWrapperProps) {
    return (
        <>
            <h2 className="text-center mb-4">{title}</h2>
            <div className="grid justify-start gap-2 grid-cols-2">{children}</div>
        </>
    )
}