import { cn } from "../../lib/utils";

interface GradientTextCardProps extends React.HTMLAttributes<HTMLDivElement> {

}

export default function GradientTextCard({ children, className, ...props }: GradientTextCardProps) {
    return (
        <div className={cn('bg-[image:var(--color-special)] bg-clip-text text-transparent', className)}
            {...props}>
            {children}
        </div>
    )
}