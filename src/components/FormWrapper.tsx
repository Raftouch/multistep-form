import { ReactNode } from "react";

interface FormWrapperProps {
    title: String,
    children: ReactNode
}

export function FormWrapper({title, children}: FormWrapperProps) {
    return (
        <>
            <h2>{title}</h2>
            <div>{children}</div>
        </>
    )
}