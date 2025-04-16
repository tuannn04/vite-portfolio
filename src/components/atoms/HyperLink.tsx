interface HyperLinkProps extends React.HTMLAttributes<HTMLAnchorElement> {
    href: string
}

const Image: React.FC<HyperLinkProps> = ({  children, ...props }: HyperLinkProps) => {
    return <a {...props} >{children}</a>
}

export default Image;