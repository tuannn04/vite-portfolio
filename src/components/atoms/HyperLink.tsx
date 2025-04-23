interface HyperLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
    href?: string
    target?: string
}

const HyperLink: React.FC<HyperLinkProps> = ({  children, ...props }: HyperLinkProps) => {
    return <a {...props} >{children}</a>
}

export default HyperLink;