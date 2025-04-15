import LogoBlack from "../../assets/logo-black.svg";
import LogoWhite from "../../assets/logo-white.svg";
import HyperLink from "../atoms/HyperLink";
import Image from "../atoms/Image";

type LogoProps = {
    isBlack: boolean,
    isFull: boolean
}

export default ({ isBlack, isFull }: LogoProps): React.ReactNode => {
    const heightClass = {
        full: "h-full",
        auto: "h-auto"
    }
    const heightKey = isFull ? 'full' : 'auto';
    return (
        <HyperLink className={`${heightClass[heightKey]} z-[100]`}>
            <Image src={isBlack ? LogoBlack : LogoWhite} className={`${heightClass[heightKey]} w-auto object-contain`} />
        </HyperLink>
    )
}