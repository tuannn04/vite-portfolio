interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    lazy?: boolean
}

const Image: React.FC<ImageProps> = ({ lazy, src, ...rest }: ImageProps) => {
    const attribute = lazy ? 'data-src' : 'src';
    return <img {...{ [attribute]: src }} {...rest} />
}

export default Image;