interface ImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
    lazy?: boolean
}

const Image: React.FC<ImageProps> = ({ lazy, src, ...rest }: ImageProps) => {
    console.log(rest);
    const attribute = lazy ? 'data-src' : 'src';
    return <img {...{ [attribute]: src }} {...rest} />
}

export default Image;