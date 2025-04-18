import LogoBlack from "../../assets/logo-black.svg";
import LogoWhite from "../../assets/logo-white.svg";
import HyperLink from "../atoms/HyperLink";
import Image from "../atoms/Image";

type LogoProps = {
    isFull: boolean
}

export default ({ isFull }: LogoProps): React.ReactNode => {
    const heightClass = {
        full: "h-full",
        auto: "h-auto"
    }
    const heightKey = isFull ? 'full' : 'auto';
    return (
        <HyperLink href="/" className={`${heightClass[heightKey]} z-[100]`}>
            <Image src={LogoBlack} className={`${heightClass[heightKey]} w-auto object-contain block dark:hidden`} />
            <Image src={LogoWhite} className={`${heightClass[heightKey]} w-auto object-contain hidden dark:block`} />
        </HyperLink>
    )
}