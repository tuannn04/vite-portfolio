interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
    id: string
}

export default ({id, children, ...rest}: SectionProps): React.ReactNode => {
    return <div id={id} {...rest}>{children}</div>
}