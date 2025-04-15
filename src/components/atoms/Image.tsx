type ImageProps = {
    src: string,
    lazy?: boolean
}

export default ({src, lazy}: ImageProps): React.ReactNode => {
    const attribute = lazy ? 'data-src' : 'src';
    return (
        <img {...{[attribute]:src}}></img>
    )
}