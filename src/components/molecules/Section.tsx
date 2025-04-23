import { cn } from "../../lib/utils"

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
    id: string
}

export default ({ children, id, className, ...rest }: SectionProps): React.ReactNode => {
    return <div id={id}
        className={cn('px-4 end-mobile:px-end-mobile-padding 2xl:px-40', className)}
        {...rest}>
        {children}
    </div>
}