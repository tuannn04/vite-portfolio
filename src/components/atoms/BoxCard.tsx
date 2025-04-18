import { ReactNode } from "react";

interface BoxCardProps {
    children: ReactNode
}

export default function BoxCard({children}: BoxCardProps) {
    return (
        <div className="">
            {children}
        </div>
    )
}