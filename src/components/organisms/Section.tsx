type SectionProps = {
    id: string,
    children: React.ReactNode
}

export default ({id, children}: SectionProps): React.ReactNode => {
    return <div id={id}>{children}</div>
}