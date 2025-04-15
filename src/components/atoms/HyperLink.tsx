interface HyperLinkProps extends React.ImgHTMLAttributes<HTMLAnchorElement> {}

const Image: React.FC<HyperLinkProps> = ({  children, ...props }: HyperLinkProps) => {
    return <a {...props} >{children}</a>
}

export default Image;